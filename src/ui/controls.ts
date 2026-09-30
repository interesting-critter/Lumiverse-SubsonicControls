import type { PlaybackState } from "../types";

const PREVIOUS = `<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>`;
const PLAY = `<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>`;
const PAUSE = `<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>`;
const NEXT = `<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>`;
const SHUFFLE = `<svg viewBox="0 0 24 24"><path d="M17 3l4 4-4 4V8h-2.2l-2.3 2.9-1.3-1.6L14 6h3zM3 6h4.2l7.6 9.5H17v-3l4 4-4 4v-3h-3.3L5.9 7.8 4.5 9.2 3 7.8z"/></svg>`;

export interface ControlsUI { root: HTMLElement; update(state: PlaybackState | null, connected: boolean, enabled: boolean, title?: string): void; setError(message: string | null): void; destroy(): void; }
type PlayerCommand = { type: "play" | "pause" | "next" | "previous" | "shuffle" };
export function createControlsUI(send: (message: PlayerCommand) => void): ControlsUI {
  const root = document.createElement("div"); root.className = "spotify-section";
  const title = document.createElement("h3"); title.className = "spotify-section-title"; title.textContent = "Player Controls";
  const row = document.createElement("div"); row.className = "spotify-controls";
  const button = (icon: string, className = "") => { const element = document.createElement("button"); element.className = `spotify-ctrl-btn ${className}`; element.innerHTML = icon; return element; };
  const previous = button(PREVIOUS); const playPause = button(PLAY, "spotify-ctrl-btn-main"); const next = button(NEXT);
  // Transport failures were previously invisible: the backend reports them, but
  // the frontend only logged them, so a rejected command looked like a dead
  // button. Temporary until the underlying commands are confirmed working.
  const error = document.createElement("div");
  error.className = "spotify-search-error";
  error.style.cssText = "display:none;font-size:0.8em;color:#e74c3c;margin-top:6px;word-break:break-word";
  const setError = (message: string | null): void => {
    error.textContent = message || "";
    error.style.display = message ? "" : "none";
  };
  // Cleared on the next command rather than on the next state broadcast: the
  // backend polls every second, so clearing on a state update would make the
  // message disappear before it could be read.
  const dispatch = (message: PlayerCommand) => { setError(null); send(message); };
  previous.onclick = () => dispatch({ type: "previous" }); next.onclick = () => dispatch({ type: "next" });
  // Shuffle reorders the queue rather than toggling a mode: the API reports no
  // shuffle state, so the button has no active state to reflect.
  const shuffle = button(SHUFFLE);
  shuffle.title = "Shuffle the queued tracks";
  shuffle.onclick = () => dispatch({ type: "shuffle" });
  let isPlaying = false;
  playPause.onclick = () => dispatch({ type: isPlaying ? "pause" : "play" });
  row.append(previous, playPause, next, shuffle); root.append(title, row, error);
  return {
    root,
    update(state, connected, enabled, titleText = "Player Controls") {
      root.style.display = connected && enabled ? "" : "none";
      // Hidden controls cannot act on a message from a previous connection, so
      // drop it rather than let it reappear on reconnect.
      if (!connected || !enabled) setError(null);
      title.textContent = titleText;
      isPlaying = !!state?.isPlaying;
      playPause.innerHTML = isPlaying ? PAUSE : PLAY;
    },
    setError,
    destroy() { root.remove(); },
  };
}
