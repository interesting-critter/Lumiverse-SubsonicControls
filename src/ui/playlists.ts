import type { PlaylistSummary } from "../types";

const PLAY = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;

export interface PlaylistsUI {
  root: HTMLElement;
  setPlaylists(playlists: PlaylistSummary[]): void;
  setPlaybackAvailable(available: boolean): void;
  destroy(): void;
}

/**
 * Saved playlists, filtered by name in the browser.
 *
 * The Subsonic API has no playlist search endpoint, so the whole list is loaded
 * once and `matches()` narrows it locally as the user types.
 */
export function createPlaylistsUI(send: (message: unknown) => void): PlaylistsUI {
  // Collapsed by default. Every section is flex-shrink: 0 while the lyrics are
  // the only flex:1 child, so an expanded playlist list takes its full natural
  // height and starves the lyrics viewport down to almost nothing.
  const root = document.createElement("details"); root.className = "spotify-section spotify-collapsible";
  const summary = document.createElement("summary"); summary.className = "spotify-section-title spotify-collapsible-summary";
  const title = document.createElement("span"); title.textContent = "Playlists";
  const count = document.createElement("span"); count.className = "spotify-collapsible-count";
  summary.append(title, count);
  const inner = document.createElement("div"); inner.className = "spotify-collapsible-body";
  const input = document.createElement("input");
  input.className = "spotify-search-input";
  input.placeholder = "Filter playlists…";
  const list = document.createElement("div"); list.className = "spotify-search-results";
  inner.append(input, list);
  root.append(summary, inner);

  let playlists: PlaylistSummary[] = [];
  let playbackAvailable = true;

  const matches = (playlist: PlaylistSummary, query: string): boolean =>
    !query
    || playlist.name.toLowerCase().includes(query)
    || playlist.owner.toLowerCase().includes(query);

  const render = () => {
    list.innerHTML = "";
    const query = input.value.trim().toLowerCase();
    const visible = playlists.filter((playlist) => matches(playlist, query));
    if (!visible.length) {
      const empty = document.createElement("div");
      empty.className = "spotify-empty";
      // Distinguish "no playlists exist" from "nothing matched the filter",
      // otherwise an over-specific filter looks like a broken server.
      empty.textContent = playlists.length ? "No playlists match" : "No playlists on this server";
      list.appendChild(empty);
      return;
    }
    for (const playlist of visible) {
      const item = document.createElement("div"); item.className = "spotify-search-item";
      if (playlist.albumArtUrl) {
        const image = document.createElement("img");
        image.className = "spotify-search-item-art";
        image.src = playlist.albumArtUrl;
        image.alt = playlist.name;
        item.appendChild(image);
      }
      const info = document.createElement("div"); info.className = "spotify-search-item-info";
      const name = document.createElement("div"); name.className = "spotify-search-item-name"; name.textContent = playlist.name;
      const count = Number.isFinite(playlist.songCount) ? playlist.songCount : 0;
      const detail = document.createElement("div"); detail.className = "spotify-search-item-artist";
      detail.textContent = `${count} ${count === 1 ? "track" : "tracks"}`;
      info.append(name, detail);
      if (playbackAvailable) {
        const actions = document.createElement("div"); actions.className = "spotify-search-item-actions";
        const play = document.createElement("button");
        play.className = "spotify-search-item-btn";
        play.title = "Play this playlist in the server Jukebox";
        play.innerHTML = PLAY;
        play.onclick = () => send({ type: "play_playlist", playlistId: playlist.id });
        actions.appendChild(play);
        item.append(info, actions);
      } else item.appendChild(info);
      list.appendChild(item);
    }
  };

  input.oninput = render;

  // The playlist count belongs in the summary, so the collapsed state still
  // tells the user whether there is anything to open.
  const renderCount = () => {
    const total = playlists.length;
    count.textContent = total ? String(total) : "";
    // Hide the whole section when the server has no playlists, rather than
    // offering an empty disclosure.
    root.style.display = total ? "" : "none";
  };

  return {
    root,
    setPlaylists(next) { playlists = next; renderCount(); render(); },
    setPlaybackAvailable(available) { playbackAvailable = available; render(); },
    destroy() { root.remove(); },
  };
}