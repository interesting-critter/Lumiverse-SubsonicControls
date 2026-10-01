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
  // A plain section, not a <details>. The collapsible version fought the
  // lyrics for panel height and left a dead band under the list; this takes a
  // guaranteed 200px minimum and grows into whatever space is left over.
  const root = document.createElement("div"); root.className = "spotify-section spotify-playlists-section";
  const header = document.createElement("div"); header.className = "spotify-playlists-header";
  const title = document.createElement("h3"); title.className = "spotify-section-title"; title.textContent = "Playlists";
  const count = document.createElement("span"); count.className = "spotify-playlists-count";
  header.append(title, count);
  const inner = document.createElement("div"); inner.className = "spotify-playlists-body";
  const input = document.createElement("input");
  input.className = "spotify-search-input";
  input.placeholder = "Filter playlists…";
  const list = document.createElement("div"); list.className = "spotify-search-results";
  inner.append(input, list);
  root.append(header, inner);

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

  const renderCount = () => {
    const total = playlists.length;
    count.textContent = total ? String(total) : "";
    // A permanently visible 200px section would be dead space on a server with
    // no playlists, so hide it entirely in that case.
    root.style.display = total ? "" : "none";
  };

  return {
    root,
    setPlaylists(next) { playlists = next; renderCount(); render(); },
    setPlaybackAvailable(available) { playbackAvailable = available; render(); },
    destroy() { root.remove(); },
  };
}