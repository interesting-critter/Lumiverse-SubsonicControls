var Gt=`
@property --spotify-modern-marquee-left-fade {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}

@property --spotify-modern-marquee-right-fade {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}

.spotify-tab-root {
  display: flex;
  width: 100%;
  height: var(--spotify-tab-height, 100%);
  max-height: var(--spotify-tab-height, 100%);
  min-height: 0;
  overflow: hidden;
  overscroll-behavior: none;
}

.spotify-panel {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px 12px 0;
  flex: 1 1 auto;
  min-height: 0;
  box-sizing: border-box;
  /* Safety net: if the sections together genuinely exceed the tab height, let
     the panel scroll instead of clipping the last child out of reach. The
     lyrics keep their own scroller, so this only engages on short panels. */
  overflow-y: auto;
  overscroll-behavior: contain;
  font-family: system-ui, -apple-system, sans-serif;
  color: var(--lumiverse-text);
}

.spotify-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-shrink: 0;
}

.spotify-section-title {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--lumiverse-text-muted);
  margin: 0;
}

/* Collapsible section (Playlists). Unlike every other .spotify-section this one
   must be allowed to shrink and must be capped: an expanded list sized itself
   by content, grew past the bottom of the panel, and overflow:hidden on
   .spotify-panel then clipped it so the list appeared to open upward over the
   lyrics. Capping the section keeps the scroll inside .spotify-collapsible-body. */
.spotify-collapsible {
  /* Sized by its own content and never squeezed: the panel scrolls when the
     sections exceed the tab height, so this section does not need to give up
     space to protect the lyrics. */
  flex-shrink: 0;
}

.spotify-collapsible > summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  user-select: none;
}

.spotify-collapsible > summary::-webkit-details-marker {
  display: none;
}

.spotify-collapsible > summary::before {
  content: "";
  width: 0;
  height: 0;
  border-left: 4px solid currentColor;
  border-top: 3.5px solid transparent;
  border-bottom: 3.5px solid transparent;
  transition: transform 0.15s ease;
  transform-origin: 30% 50%;
}

.spotify-collapsible[open] > summary::before {
  transform: rotate(90deg);
}

.spotify-collapsible-count {
  font-size: 10px;
  color: var(--lumiverse-text-muted);
  background: var(--lumiverse-fill-subtle, rgba(255, 255, 255, 0.08));
  border-radius: 8px;
  padding: 1px 6px;
}

.spotify-collapsible-body {
  display: flex;
  flex-direction: column;
  /* Take the space the capped section gives us and no more, so the filter input
     stays pinned and only the list scrolls. */
  flex: 1 1 auto;
  min-height: 0;
  gap: 8px;
  /* A share of the viewport rather than a fixed height: the drawer tab is far
     shorter than the window, so an unbounded list grew tall enough to dominate
     the panel. */
  max-height: min(34vh, 240px);
  overflow-y: auto;
}

.spotify-collapsible-body .spotify-search-results {
  /* The body already scrolls; a nested scroller would trap wheel events. */
  max-height: none;
  overflow-y: visible;
}

/* Settings card (matches SimTracker pattern) */
.spotify-settings-card {
  width: 100%;
  border: 1px solid var(--lumiverse-border);
  border-radius: calc(var(--lumiverse-radius) + 2px);
  background: linear-gradient(180deg, var(--lumiverse-fill) 0%, var(--lumiverse-fill-subtle) 100%);
  color: var(--lumiverse-text);
  overflow: hidden;
}

.spotify-settings-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--lumiverse-border);
}

.spotify-settings-card-header h3 {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
}

.spotify-settings-card-body {
  padding: 12px;
  display: grid;
  gap: 10px;
}

.spotify-settings-label {
  font-size: 11px;
  color: var(--lumiverse-text-muted);
  display: grid;
  gap: 5px;
}

.spotify-settings-row {
  display: flex;
  gap: 8px;
  align-items: center;
}

.spotify-input {
  width: 100%;
  padding: 6px 8px;
  background: var(--lumiverse-fill-subtle);
  border: 1px solid var(--lumiverse-border);
  border-radius: 8px;
  color: var(--lumiverse-text);
  font-size: 12px;
  outline: none;
  box-sizing: border-box;
  transition: border-color var(--lumiverse-transition-fast);
}

.spotify-input:focus {
  border-color: var(--lumiverse-border-hover);
}

.spotify-btn {
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid var(--lumiverse-border);
  background: var(--lumiverse-fill-subtle);
  color: var(--lumiverse-text);
  font-size: 12px;
  cursor: pointer;
  transition: all var(--lumiverse-transition-fast);
  white-space: nowrap;
}

.spotify-btn:hover {
  background: var(--lumiverse-fill);
  border-color: var(--lumiverse-border-hover);
}

.spotify-btn-primary {
  background: #1db954;
  border-color: #1db954;
  color: #fff;
}

.spotify-btn-primary:hover {
  background: #1ed760;
  border-color: #1ed760;
}

.spotify-btn-danger {
  border-color: #e74c3c;
  color: #e74c3c;
}

.spotify-btn-danger:hover {
  background: rgba(231, 76, 60, 0.1);
}

.spotify-settings-check {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: var(--lumiverse-text-muted);
  cursor: pointer;
}

.spotify-settings-check input[type="checkbox"] {
  width: 14px;
  height: 14px;
  margin: 0;
  accent-color: #1db954;
  cursor: pointer;
}

.spotify-status {
  font-size: 11px;
  color: var(--lumiverse-text-dim);
}

.spotify-status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 6px;
  vertical-align: middle;
}

.spotify-status-dot.connected {
  background: #1db954;
}

.spotify-status-dot.disconnected {
  background: #e74c3c;
}

/* Now Playing */
.spotify-now-playing {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 10px;
  background: var(--lumiverse-fill-subtle);
  border-radius: var(--lumiverse-radius);
  border: 1px solid var(--lumiverse-border);
}

.spotify-album-art {
  width: 56px;
  height: 56px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
  background: var(--lumiverse-fill);
}

.spotify-track-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.spotify-track-name {
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-track-artist {
  font-size: 12px;
  color: var(--lumiverse-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-track-album {
  font-size: 11px;
  color: var(--lumiverse-text-dim);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-track-device {
  font-size: 10px;
  color: var(--lumiverse-text-dim);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: 0.7;
}

/* Progress bar */
.spotify-progress-container {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  color: var(--lumiverse-text-dim);
}

.spotify-progress-bar {
  flex: 1;
  height: 4px;
  background: var(--lumiverse-fill);
  border-radius: 2px;
  cursor: pointer;
  padding: 8px 0;
  background-clip: content-box;
  position: relative;
}

.spotify-progress-fill {
  position: absolute;
  top: 8px;
  left: 0;
  height: 4px;
  background: #1db954;
  border-radius: 2px;
  pointer-events: none;
}

/* Controls */
.spotify-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.spotify-ctrl-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--lumiverse-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--lumiverse-transition-fast);
  padding: 0;
}

.spotify-ctrl-btn:hover {
  background: var(--lumiverse-fill-subtle);
}

.spotify-ctrl-btn.active {
  color: #1db954;
}

.spotify-ctrl-btn-main {
  width: 56px;
  height: 56px;
  background: #1db954;
  color: #fff;
}

.spotify-ctrl-btn-main:hover {
  background: #1ed760;
}

.spotify-ctrl-btn svg {
  width: 22px;
  height: 22px;
  fill: currentColor;
}

.spotify-ctrl-btn-main svg {
  width: 26px;
  height: 26px;
}

/* Volume */
.spotify-volume-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 4px;
}

.spotify-volume-slider {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 4px;
  border-radius: 2px;
  background: var(--lumiverse-fill-subtle);
  border: none;
  outline: none;
}

.spotify-volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--lumiverse-primary);
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.spotify-volume-slider::-moz-range-track {
  height: 4px;
  border-radius: 2px;
  background: var(--lumiverse-fill-subtle);
  border: none;
}

.spotify-volume-slider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--lumiverse-primary);
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

/* Search */
.spotify-search-input {
  width: 100%;
  padding: 8px 12px;
  background: var(--lumiverse-fill);
  border: 1px solid var(--lumiverse-border);
  border-radius: var(--lumiverse-radius);
  color: var(--lumiverse-text);
  font-size: 13px;
  outline: none;
  box-sizing: border-box;
}

.spotify-search-input:focus {
  border-color: var(--lumiverse-border-hover);
}

.spotify-search-results {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: 300px;
  overflow-y: auto;
}

.spotify-search-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  border-radius: var(--lumiverse-radius);
  cursor: default;
  transition: background var(--lumiverse-transition-fast);
}

.spotify-search-item:hover {
  background: var(--lumiverse-fill-subtle);
}

.spotify-search-item-art {
  width: 36px;
  height: 36px;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
  background: var(--lumiverse-fill);
}

.spotify-search-item-info {
  flex: 1;
  min-width: 0;
}

.spotify-search-item-name {
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-search-item-artist {
  font-size: 11px;
  color: var(--lumiverse-text-muted);
}

.spotify-search-item-actions {
  display: flex;
  gap: 4px;
  flex-shrink: 0;
}

.spotify-search-item-btn {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--lumiverse-text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.spotify-search-item-btn:hover {
  background: var(--lumiverse-fill);
  color: var(--lumiverse-text);
}

.spotify-search-item-btn svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

/* Float widget */
.spotify-float-widget {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  background: var(--lumiverse-fill-subtle);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: box-shadow var(--lumiverse-transition-fast), opacity 320ms cubic-bezier(0.22, 1, 0.36, 1);
  touch-action: none;
}

.spotify-float-widget.spotify-float-widget-mounted {
  opacity: 1;
}

.spotify-float-widget:hover {
  box-shadow: 0 0 0 2px #1db954;
}

.spotify-float-widget-modern-mode {
  background: transparent;
  box-shadow: none;
}

.spotify-float-widget-modern-mode:hover {
  box-shadow: none;
}

.spotify-float-widget-legacy {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spotify-float-widget-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spotify-float-widget-icon svg {
  width: 24px;
  height: 24px;
  fill: var(--lumiverse-text-muted);
}

.spotify-float-widget-art {
  width: 100%;
  height: 100%;
}

/* Modern expanding widget player */
.spotify-modern-widget-player {
  --spotify-modern-widget-collapsed-size: 48px;
  --spotify-modern-widget-empty-expanded-width: 300px;
  --spotify-modern-widget-empty-expanded-height: 196px;
  --spotify-modern-lyrics-body-min-height: 132px;
  --spotify-modern-lyrics-body-max-height: 176px;
  --spotify-modern-expanded-surface: var(--lcs-glass-bg, var(--lumiverse-bg-elevated));
  --spotify-modern-expanded-surface-alt: var(--lcs-glass-bg-hover, var(--lumiverse-bg));
  --spotify-modern-widget-motion-duration: 420ms;
  --spotify-modern-widget-motion-ease: cubic-bezier(0.22, 1, 0.36, 1);
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: inherit;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.022) 0%, rgba(255, 255, 255, 0.008) 42%, rgba(255, 255, 255, 0.014) 100%),
    linear-gradient(180deg, var(--spotify-modern-expanded-surface) 0%, var(--spotify-modern-expanded-surface-alt) 100%);
  border: 1px solid var(--lcs-glass-border, var(--lumiverse-border));
  box-shadow:
    0 14px 34px var(--lumiverse-fill-heavy),
    var(--lumiverse-highlight-inset),
    inset 0 -1px 0 var(--lcs-glass-border, var(--lumiverse-border));
  -webkit-backdrop-filter: none;
  backdrop-filter: none;
  color: #fff;
  transition:
    width var(--spotify-modern-widget-motion-duration) var(--spotify-modern-widget-motion-ease),
    height var(--spotify-modern-widget-motion-duration) var(--spotify-modern-widget-motion-ease),
    border-radius var(--spotify-modern-widget-motion-duration) var(--spotify-modern-widget-motion-ease),
    box-shadow var(--spotify-modern-widget-motion-duration) var(--spotify-modern-widget-motion-ease),
    border-color 320ms ease,
    background 320ms ease;
}

[data-glass] .spotify-modern-widget-player {
  -webkit-backdrop-filter: blur(var(--lcs-glass-blur, 8px));
  backdrop-filter: blur(var(--lcs-glass-blur, 8px));
  will-change: backdrop-filter;
}

.spotify-modern-widget-player[data-expanded="false"] {
  width: var(--spotify-modern-widget-collapsed-size);
  height: var(--spotify-modern-widget-collapsed-size);
}

.spotify-modern-widget-player[data-expanded="true"] {
  min-height: 420px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.024) 0%, rgba(255, 255, 255, 0.01) 100%),
    linear-gradient(180deg, var(--spotify-modern-expanded-surface) 0%, var(--spotify-modern-expanded-surface-alt) 100%);
  border-color: var(--lcs-glass-border, var(--lumiverse-border));
  box-shadow: var(--lumiverse-shadow-xl);
}

.spotify-modern-widget-player[data-expanded="true"][data-empty="true"] {
  min-height: var(--spotify-modern-widget-empty-expanded-height);
}

.spotify-modern-widget-compact,
.spotify-modern-widget-expanded {
  position: absolute;
  inset: 0;
  clip-path: inset(0 0 0 0);
  transition:
    opacity 260ms cubic-bezier(0.22, 1, 0.36, 1),
    clip-path var(--spotify-modern-widget-motion-duration) var(--spotify-modern-widget-motion-ease);
}

.spotify-modern-widget-player[data-expanded="false"] .spotify-modern-widget-expanded,
.spotify-modern-widget-player[data-expanded="true"] .spotify-modern-widget-compact {
  opacity: 0;
  pointer-events: none;
  clip-path: inset(0 calc(100% - var(--spotify-modern-widget-collapsed-size)) calc(100% - var(--spotify-modern-widget-collapsed-size)) 0);
}

.spotify-modern-widget-player[data-expanded="true"] .spotify-modern-widget-expanded,
.spotify-modern-widget-player[data-expanded="false"] .spotify-modern-widget-compact {
  opacity: 1;
  clip-path: inset(0 0 0 0);
}

.spotify-modern-widget-compact {
  inset: 0 auto auto 0;
  width: var(--spotify-modern-widget-collapsed-size);
  height: var(--spotify-modern-widget-collapsed-size);
  border-radius: inherit;
  overflow: hidden;
  padding: 6px;
  box-sizing: border-box;
}

.spotify-modern-widget-compact-art {
  width: 100%;
  height: 100%;
  border-radius: max(14px, calc(var(--spotify-modern-widget-collapsed-size) * 0.24));
  overflow: hidden;
}

.spotify-modern-widget-compact-fallback {
  position: absolute;
  inset: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: max(14px, calc(var(--spotify-modern-widget-collapsed-size) * 0.24));
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%);
}

.spotify-modern-widget-compact-fallback svg {
  width: 46%;
  height: 46%;
  fill: rgba(255, 255, 255, 0.78);
}

.spotify-modern-widget-compact-overlay {
  position: absolute;
  inset: 12px 12px 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
  pointer-events: none;
}

.spotify-modern-widget-compact-status {
  display: none;
}

.spotify-modern-widget-compact-progress {
  --spotify-modern-widget-compact-progress: 0%;
  position: absolute;
  inset: 4px;
  z-index: 2;
  border-radius: max(16px, calc(var(--spotify-modern-widget-collapsed-size) * 0.26));
  padding: 2px;
  pointer-events: none;
  background:
    conic-gradient(
      from -90deg,
      rgba(255, 255, 255, 0.88) 0 var(--spotify-modern-widget-compact-progress),
      rgba(255, 255, 255, 0.16) var(--spotify-modern-widget-compact-progress) 100%
    );
  box-shadow: 0 0 18px rgba(255, 255, 255, 0.08);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  transition: opacity 180ms ease, background 180ms ease;
}

.spotify-modern-widget-expanded {
  display: grid;
  grid-template-rows: auto auto auto 1fr auto auto auto;
  gap: 10px;
  padding: 14px 14px 12px;
  box-sizing: border-box;
  min-height: 100%;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.014) 0%, rgba(255, 255, 255, 0.005) 100%),
    linear-gradient(180deg, var(--spotify-modern-expanded-surface) 0%, var(--spotify-modern-expanded-surface-alt) 100%);
}

.spotify-modern-widget-player[data-empty="true"] .spotify-modern-widget-expanded {
  grid-template-rows: auto 1fr;
  gap: 12px;
}

/* Read-only now-playing mode has no transport row. Reclaim its 58px button
   height plus the adjacent grid gap for the lyrics viewport. */
.spotify-modern-widget-player[data-empty="false"][data-transport="false"] {
  --spotify-modern-lyrics-body-min-height: 200px;
  --spotify-modern-lyrics-body-max-height: 244px;
}

.spotify-modern-widget-player[data-empty="false"][data-transport="false"] .spotify-modern-widget-expanded {
  grid-template-rows: auto auto auto minmax(0, 1fr);
}

.spotify-modern-widget-header,
.spotify-modern-widget-meta,
.spotify-modern-widget-progress-row,
.spotify-modern-widget-lyrics,
.spotify-modern-widget-controls,
.spotify-modern-widget-volume-row,
.spotify-modern-widget-empty {
  transition: opacity 240ms cubic-bezier(0.22, 1, 0.36, 1);
}

.spotify-modern-widget-player[data-expanded="false"] .spotify-modern-widget-header,
.spotify-modern-widget-player[data-expanded="false"] .spotify-modern-widget-meta,
.spotify-modern-widget-player[data-expanded="false"] .spotify-modern-widget-progress-row,
.spotify-modern-widget-player[data-expanded="false"] .spotify-modern-widget-lyrics,
.spotify-modern-widget-player[data-expanded="false"] .spotify-modern-widget-controls,
.spotify-modern-widget-player[data-expanded="false"] .spotify-modern-widget-volume-row,
.spotify-modern-widget-player[data-expanded="false"] .spotify-modern-widget-empty {
  opacity: 0;
}

.spotify-modern-widget-player[data-expanded="true"] .spotify-modern-widget-header,
.spotify-modern-widget-player[data-expanded="true"] .spotify-modern-widget-meta,
.spotify-modern-widget-player[data-expanded="true"] .spotify-modern-widget-progress-row,
.spotify-modern-widget-player[data-expanded="true"] .spotify-modern-widget-lyrics,
.spotify-modern-widget-player[data-expanded="true"] .spotify-modern-widget-controls,
.spotify-modern-widget-player[data-expanded="true"] .spotify-modern-widget-volume-row,
.spotify-modern-widget-player[data-expanded="true"] .spotify-modern-widget-empty {
  opacity: 1;
}

.spotify-modern-widget-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.spotify-modern-widget-eyebrow,
.spotify-modern-widget-section-label {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.48);
}

.spotify-modern-widget-header-buttons {
  display: flex;
  gap: 6px;
}

.spotify-modern-widget-icon-btn {
  width: 30px;
  height: 30px;
  border-radius: 999px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.78);
  cursor: pointer;
}

.spotify-modern-widget-icon-btn:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}

.spotify-modern-widget-icon-btn svg,
.spotify-modern-widget-btn svg,
.spotify-modern-widget-volume-icon svg {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

.spotify-modern-widget-hero {
  display: grid;
  grid-template-columns: 108px 1fr;
  gap: 14px;
  align-items: center;
}

.spotify-modern-widget-art,
.spotify-modern-widget-art-fallback {
  width: 108px;
  height: 108px;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  transition: border-radius 420ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 420ms cubic-bezier(0.22, 1, 0.36, 1), opacity 260ms ease;
}

.spotify-modern-widget-art {
  box-shadow: 0 16px 30px rgba(0, 0, 0, 0.28);
}

.spotify-modern-widget-art-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.04) 100%);
}

.spotify-modern-widget-art-fallback svg {
  width: 40%;
  height: 40%;
  fill: rgba(255, 255, 255, 0.82);
}

.spotify-modern-widget-meta {
  min-width: 0;
  display: grid;
  gap: 5px;
}

.spotify-modern-widget-marquee {
  --spotify-modern-marquee-left-fade: 0px;
  --spotify-modern-marquee-right-fade: 0px;
  position: relative;
  min-width: 0;
  overflow: hidden;
  -webkit-mask-image: none;
  mask-image: none;
  transition:
    --spotify-modern-marquee-left-fade 220ms cubic-bezier(0.22, 1, 0.36, 1),
    --spotify-modern-marquee-right-fade 220ms cubic-bezier(0.22, 1, 0.36, 1);
}

.spotify-modern-widget-marquee[data-overflow="true"] {
  --spotify-modern-marquee-right-fade: 18px;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0,
    black var(--spotify-modern-marquee-left-fade),
    black calc(100% - var(--spotify-modern-marquee-right-fade)),
    transparent 100%
  );
  mask-image: linear-gradient(
    90deg,
    transparent 0,
    black var(--spotify-modern-marquee-left-fade),
    black calc(100% - var(--spotify-modern-marquee-right-fade)),
    transparent 100%
  );
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}

.spotify-modern-widget-marquee[data-overflow="true"][data-marquee-phase="scrolling"] {
  --spotify-modern-marquee-left-fade: 18px;
}

.spotify-modern-widget-marquee-content {
  width: max-content;
  min-width: 100%;
  white-space: nowrap;
  will-change: transform;
}

.spotify-modern-widget-marquee-animate {
  animation: spotify-modern-marquee var(--spotify-modern-marquee-duration, 10s) ease-in-out 2 alternate;
}

.spotify-modern-widget-track {
  font-size: 20px;
  line-height: 1.12;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.spotify-modern-widget-artist {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.74);
}

.spotify-modern-widget-album {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.48);
}

.spotify-modern-widget-progress-row {
  display: grid;
  grid-template-columns: 34px 1fr 34px;
  gap: 8px;
  align-items: center;
}

.spotify-modern-widget-time {
  font-size: 10px;
  text-align: center;
  color: rgba(255, 255, 255, 0.56);
}

.spotify-modern-widget-progress-bar {
  position: relative;
  height: 6px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.14);
  cursor: pointer;
}

.spotify-modern-widget-progress-fill {
  position: absolute;
  inset: 0 auto 0 0;
  width: 0;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #f7f8fb 0%, #c7cfdd 100%);
}

.spotify-modern-widget-lyrics {
  display: grid;
  gap: 8px;
  min-height: 0;
  padding: 14px 14px 12px;
  border-radius: 22px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.032) 0%, rgba(255, 255, 255, 0.012) 100%),
    var(--spotify-modern-expanded-surface);
  border: 1px solid var(--lcs-glass-border, var(--lumiverse-border));
  overflow: hidden;
}

.spotify-modern-widget-lyrics-body {
  min-height: var(--spotify-modern-lyrics-body-min-height);
  max-height: var(--spotify-modern-lyrics-body-max-height);
  display: block;
  gap: 4px;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  box-sizing: border-box;
  padding-top: 16px;
  padding-bottom: 16px;
  scroll-padding-top: 36%;
  scroll-padding-bottom: 24px;
  overscroll-behavior: contain;
  touch-action: pan-y;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--lumiverse-fill-strong) transparent;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 18px, black calc(100% - 18px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 18px, black calc(100% - 18px), transparent 100%);
}

.spotify-modern-widget-lyrics-track {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 4px;
  padding: 0 0 2px;
}

.spotify-modern-widget-lyrics-status {
  text-align: center;
  font-size: 13px;
  line-height: 1.45;
  color: rgba(255, 255, 255, 0.58);
}

.spotify-modern-widget-lyrics-status-loading {
  animation: spotify-lyrics-loading-pulse 1.15s ease-in-out infinite;
}

.spotify-modern-widget-lyric-line {
  /* Reserve room before wrapping for the active line's 1.035 scale. */
  width: calc(96% - 12px);
  min-width: 0;
  margin-inline: auto;
  text-align: center;
  font-size: 16px;
  line-height: 1.24;
  font-weight: 600;
  letter-spacing: -0.018em;
  color: rgba(255, 255, 255, 0.22);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  text-wrap: pretty;
  transition: color 220ms ease, transform 220ms ease, text-shadow 220ms ease;
}

.spotify-modern-widget-lyric-line-enter {
  animation: spotify-lyrics-line-in 360ms cubic-bezier(0.18, 0.9, 0.22, 1) both;
  animation-delay: var(--spotify-modern-lyric-enter-delay, 0ms);
}

.spotify-modern-widget-lyric-line.active {
  color: #fff;
  transform: scale(1.035);
  text-shadow: 0 0 16px rgba(255, 255, 255, 0.12);
}

.spotify-modern-widget-lyric-line.near {
  color: rgba(255, 255, 255, 0.64);
}

.spotify-modern-widget-lyric-line.mid {
  color: rgba(255, 255, 255, 0.38);
}

.spotify-modern-widget-lyric-line.far,
.spotify-modern-widget-lyric-line.plain {
  color: rgba(255, 255, 255, 0.24);
}

.spotify-modern-widget-lyric-line.plain {
  color: rgba(255, 255, 255, 0.52);
}

.spotify-modern-widget-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: auto;
}

.spotify-modern-widget-btn {
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.92);
  cursor: pointer;
}

.spotify-modern-widget-btn:hover {
  background: rgba(255, 255, 255, 0.14);
}

.spotify-modern-widget-btn-main {
  width: 58px;
  height: 58px;
  background: linear-gradient(180deg, #fbfcff 0%, #d8deea 100%);
  color: #11131a;
}

.spotify-modern-widget-btn-main:hover {
  background: linear-gradient(180deg, #fff 0%, #e7ebf3 100%);
}

.spotify-modern-widget-btn-main svg {
  width: 22px;
  height: 22px;
}

.spotify-modern-widget-volume-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 6px 2px;
  margin-top: -2px;
}

.spotify-modern-widget-volume-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.58);
}

.spotify-modern-widget-volume-slider {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  outline: none;
  border: none;
}

.spotify-modern-widget-volume-slider::-webkit-slider-runnable-track {
  height: 4px;
  border-radius: 999px;
  background: transparent;
}

.spotify-modern-widget-volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  margin-top: -5px;
  border-radius: 50%;
  background: #f4f6fa;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.spotify-modern-widget-volume-slider::-moz-range-track {
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  border: none;
}

.spotify-modern-widget-volume-slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #f4f6fa;
  border: none;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.spotify-modern-widget-empty {
  display: none;
  align-content: center;
  justify-items: center;
  gap: 10px;
  min-height: 0;
  text-align: center;
  padding: 10px 12px 16px;
}

.spotify-modern-widget-empty-icon {
  width: 62px;
  height: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%),
    rgba(255, 255, 255, 0.02);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 12px 24px rgba(0, 0, 0, 0.18);
}

.spotify-modern-widget-empty-icon svg {
  width: 28px;
  height: 28px;
  fill: rgba(255, 255, 255, 0.84);
}

.spotify-modern-widget-empty-title {
  font-size: 24px;
  line-height: 1.06;
  font-weight: 700;
  letter-spacing: -0.035em;
  color: #fff;
}

.spotify-modern-widget-empty-subtitle {
  max-width: 26ch;
  font-size: 12px;
  line-height: 1.45;
  letter-spacing: -0.01em;
  color: rgba(255, 255, 255, 0.58);
}

@keyframes spotify-modern-marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-1 * var(--spotify-modern-marquee-distance, 0px)));
  }
}

/* Empty state */
.spotify-empty {
  text-align: center;
  padding: 16px;
  color: var(--lumiverse-text-dim);
  font-size: 13px;
}

/* Crossfade album art */
.spotify-crossfade-art {
  position: relative;
  overflow: hidden;
}

.spotify-crossfade-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
}

/* Mini player popup */
.spotify-mini-player {
  position: fixed;
  z-index: 9990;
  width: var(--spotify-mini-player-width, 280px);
  background: var(--lumiverse-bg);
  border: 1px solid var(--lumiverse-border);
  border-radius: 12px;
  box-shadow: var(--lumiverse-shadow-xl);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: system-ui, -apple-system, sans-serif;
  color: var(--lumiverse-text);
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
              opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.spotify-mini-player[data-style="modern"] {
  gap: 12px;
  padding: 14px;
  border-radius: 24px;
  border-color: rgba(255, 255, 255, 0.08);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.06) 100%),
    linear-gradient(180deg, rgba(18, 18, 20, 0.96) 0%, rgba(10, 10, 12, 0.98) 100%);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(26px) saturate(1.15);
}

.spotify-mini-player.open {
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
}

.spotify-mini-player.closing {
  display: flex;
  transform: scale(0);
  opacity: 0;
  pointer-events: none;
}

.spotify-mini-header {
  display: flex;
  gap: 10px;
  align-items: center;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-header {
  align-items: stretch;
  gap: 14px;
}

.spotify-mini-art {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  object-fit: cover;
  flex-shrink: 0;
  background: var(--lumiverse-fill);
}

.spotify-mini-player[data-style="modern"] .spotify-mini-art {
  width: 94px;
  height: 94px;
  border-radius: 22px;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.28);
}

.spotify-mini-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-info {
  justify-content: center;
  gap: 4px;
}

.spotify-mini-track {
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-track {
  font-size: 18px;
  line-height: 1.15;
  letter-spacing: -0.02em;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.spotify-mini-artist {
  font-size: 11px;
  color: var(--lumiverse-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-artist {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.72);
}

.spotify-mini-album {
  display: none;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.48);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-album {
  display: block;
}

.spotify-mini-header-btns {
  display: flex;
  gap: 2px;
  flex-shrink: 0;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-header-btns {
  align-self: flex-start;
  gap: 6px;
}

.spotify-mini-header-btn {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  border: none;
  background: transparent;
  color: var(--lumiverse-text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.15s ease;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-header-btn {
  width: 30px;
  height: 30px;
  border-radius: 999px;
  color: rgba(255, 255, 255, 0.72);
  background: rgba(255, 255, 255, 0.08);
}

.spotify-mini-header-btn:hover {
  background: var(--lumiverse-fill-subtle);
  color: var(--lumiverse-text);
}

.spotify-mini-player[data-style="modern"] .spotify-mini-header-btn:hover {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}

.spotify-mini-header-btn svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.spotify-mini-progress-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-progress-row {
  gap: 8px;
}

.spotify-mini-time {
  font-size: 10px;
  color: var(--lumiverse-text-dim);
  min-width: 28px;
  text-align: center;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-time {
  min-width: 32px;
  color: rgba(255, 255, 255, 0.56);
}

.spotify-mini-progress-bar {
  flex: 1;
  height: 4px;
  background: var(--lumiverse-fill);
  border-radius: 2px;
  cursor: pointer;
  padding: 6px 0;
  background-clip: content-box;
  position: relative;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-progress-bar {
  height: 6px;
  padding: 7px 0;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 999px;
}

.spotify-mini-progress-fill {
  position: absolute;
  top: 6px;
  left: 0;
  height: 4px;
  background: #1db954;
  border-radius: 2px;
  pointer-events: none;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-progress-fill {
  top: 7px;
  height: 6px;
  border-radius: 999px;
  background: linear-gradient(90deg, #f6f7fb 0%, #c7ccd8 100%);
}

.spotify-mini-lyrics-section {
  display: none;
  flex-direction: column;
  gap: 8px;
  padding: 14px 14px 12px;
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.04) 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.spotify-mini-lyrics-header {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.46);
}

.spotify-mini-lyrics-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
  height: 132px;
  min-height: 132px;
  justify-content: center;
  overflow: hidden;
}

.spotify-mini-lyrics-status {
  font-size: 13px;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.58);
  text-align: center;
}

.spotify-mini-lyrics-status-loading {
  animation: spotify-lyrics-loading-pulse 1.15s ease-in-out infinite;
}

.spotify-mini-lyric-line {
  font-size: 16px;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: -0.018em;
  text-align: center;
  color: rgba(255, 255, 255, 0.22);
  transition: color 220ms ease, transform 220ms ease, opacity 220ms ease;
  white-space: pre-wrap;
  text-wrap: pretty;
}

.spotify-mini-lyric-line-active {
  color: #fff;
  transform: scale(1.035);
  text-shadow: 0 0 16px rgba(255, 255, 255, 0.12);
}

.spotify-mini-lyric-line-near {
  color: rgba(255, 255, 255, 0.62);
}

.spotify-mini-lyric-line-mid {
  color: rgba(255, 255, 255, 0.38);
}

.spotify-mini-lyric-line-far,
.spotify-mini-lyric-line-plain {
  color: rgba(255, 255, 255, 0.24);
}

.spotify-mini-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-controls {
  gap: 12px;
}

.spotify-mini-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--lumiverse-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.15s ease;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-btn {
  width: 42px;
  height: 42px;
  color: rgba(255, 255, 255, 0.92);
  background: rgba(255, 255, 255, 0.08);
}

.spotify-mini-btn:hover {
  background: var(--lumiverse-fill-subtle);
}

.spotify-mini-player[data-style="modern"] .spotify-mini-btn:hover {
  background: rgba(255, 255, 255, 0.14);
}

.spotify-mini-btn svg {
  width: 22px;
  height: 22px;
  fill: currentColor;
}

.spotify-mini-btn-main {
  width: 56px;
  height: 56px;
  background: #1db954;
  color: #fff;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-btn-main {
  width: 58px;
  height: 58px;
  background: linear-gradient(180deg, #f5f7fb 0%, #d6dce8 100%);
  color: #111318;
}

.spotify-mini-btn-main:hover {
  background: #1ed760;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-btn-main:hover {
  background: linear-gradient(180deg, #ffffff 0%, #e4e9f2 100%);
}

.spotify-mini-btn-main svg {
  width: 26px;
  height: 26px;
}

.spotify-mini-volume-row {
  display: flex;
  align-items: center;
  gap: 6px;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-volume-row {
  padding: 0 4px;
}

/* Neither Jukebox nor Feishin supports mini-player volume control. */
.spotify-mini-volume-row,
.spotify-modern-widget-volume-row {
  display: none !important;
}

.spotify-mini-volume-icon {
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  color: var(--lumiverse-text-muted);
}

.spotify-mini-player[data-style="modern"] .spotify-mini-volume-icon {
  color: rgba(255, 255, 255, 0.56);
}

.spotify-mini-volume-icon svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.spotify-mini-volume-slider {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 4px;
  border-radius: 2px;
  background: var(--lumiverse-fill-subtle);
  border: none;
  outline: none;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-volume-slider {
  background: rgba(255, 255, 255, 0.12);
}

.spotify-mini-volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--lumiverse-primary);
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.spotify-mini-volume-slider::-moz-range-track {
  height: 4px;
  border-radius: 2px;
  background: var(--lumiverse-fill-subtle);
  border: none;
}

.spotify-mini-volume-slider::-moz-range-thumb {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--lumiverse-primary);
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.spotify-mini-empty {
  text-align: center;
  padding: 12px 8px;
  color: var(--lumiverse-text-dim);
  font-size: 12px;
}

/* Mini player device row */
.spotify-mini-device-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-top: 2px;
  border-top: 1px solid var(--lumiverse-border);
  padding: 6px 0 0;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-device-row {
  padding-top: 4px;
  border-top-color: rgba(255, 255, 255, 0.08);
}

.spotify-mini-device-icon {
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  color: var(--lumiverse-text-dim);
  flex-shrink: 0;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-device-icon {
  color: rgba(255, 255, 255, 0.48);
}

.spotify-mini-device-icon svg {
  width: 14px;
  height: 14px;
  fill: currentColor;
}

.spotify-mini-device-name {
  flex: 1;
  font-size: 11px;
  color: var(--lumiverse-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-device-name {
  color: rgba(255, 255, 255, 0.62);
}

.spotify-mini-device-toggle {
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid var(--lumiverse-border);
  background: transparent;
  color: var(--lumiverse-text-muted);
  font-size: 10px;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.15s ease;
}

.spotify-mini-player[data-style="modern"] .spotify-mini-device-toggle {
  border-color: rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.76);
}

.spotify-mini-device-toggle:hover {
  background: var(--lumiverse-fill-subtle);
  color: var(--lumiverse-text);
}

.spotify-mini-player[data-style="modern"] .spotify-mini-device-toggle:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}

.spotify-mini-device-list {
  display: none;
  flex-direction: column;
  gap: 2px;
  padding: 4px 0 0;
}

.spotify-mini-device-loading {
  font-size: 11px;
  color: var(--lumiverse-text-dim);
  text-align: center;
  padding: 6px;
}

.spotify-mini-device-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 5px 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.1s ease;
  font-size: 11px;
}

.spotify-mini-device-item:hover {
  background: var(--lumiverse-fill-subtle);
}

.spotify-mini-device-item.active {
  color: #1db954;
  cursor: default;
}

.spotify-mini-device-item-name {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-mini-device-item-type {
  color: var(--lumiverse-text-dim);
  font-size: 10px;
  text-transform: capitalize;
  flex-shrink: 0;
}

/* Lyrics */
.spotify-lyrics-section {
  /* Absorbs leftover height when there is any, but is free to shrink to its
     floor: .spotify-panel now scrolls, so there is no need to hold this rigid
     and squeeze the sections below it. */
  min-height: 96px;
  flex: 1 1 auto;
  overflow: hidden;
  /* Lets the rules below react to how tall the lyric viewport actually is,
     rather than assuming a fixed size. */
  container-type: size;
  container-name: spotify-lyrics;
}

.spotify-lyrics-body {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 48px;
  overflow: hidden;
}

.spotify-lyrics-has-content {
  min-height: 0;
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: var(--lumiverse-fill-strong) transparent;
  position: relative;
  padding-top: 28px;
  padding-bottom: 112px;
  padding-inline: 6px;
  scroll-padding-top: 34%;
  scroll-padding-bottom: 112px;
  box-sizing: border-box;
  /* The fade stops are capped as a share of the viewport as well as in pixels.
     A fixed 40px/56px pair is invisible on a tall panel but covers most of a
     90px one, which is what made the lyrics read as a black panel. */
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black min(40px, 22%), black min(calc(100% - 56px), 78%), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black min(40px, 22%), black min(calc(100% - 56px), 78%), transparent 100%);
}

/* When the tab has no remote transport controls, don't keep the extra tail
   that was reserved for them. Its re-centered active line now uses the full
   read-only lyric viewport. */
.spotify-lyrics-section[data-transport="false"] .spotify-lyrics-has-content {
  padding-bottom: 36px;
  scroll-padding-bottom: 36px;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black min(40px, 22%), black min(calc(100% - 32px), 84%), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black min(40px, 22%), black min(calc(100% - 32px), 84%), transparent 100%);
}

/* Short viewport: the reserved tail exists only to give the auto-scroller room
   to park the active line at its midpoint. When there is no room, drop it and
   stop fading, so the lyrics stay readable instead of fading into black. */
@container spotify-lyrics (max-height: 260px) {
  .spotify-lyrics-has-content {
    padding-bottom: 12px;
    scroll-padding-bottom: 12px;
    -webkit-mask-image: none;
    mask-image: none;
  }
  .spotify-lyrics-section[data-transport="false"] .spotify-lyrics-has-content {
    padding-bottom: 8px;
    scroll-padding-bottom: 8px;
  }
}

.spotify-lyrics-status {
  padding: 12px 0;
  text-align: center;
  font-size: 12px;
  color: var(--lumiverse-text-dim);
  font-style: italic;
}

.spotify-lyrics-status-loading {
  letter-spacing: 0.02em;
  animation: spotify-lyrics-loading-pulse 1.15s ease-in-out infinite;
}

.spotify-lyrics-text {
  white-space: pre-wrap;
  font-size: 16px;
  line-height: 1.65;
  color: var(--lumiverse-text-muted);
  text-align: center;
  text-wrap: pretty;
  padding: 8px 12px 24px;
}

.spotify-lyrics-synced {
  gap: 2px;
}

/* Apple Music-esque lyric motion. Focus always moves forward: the leaving line
   contracts on a short, prompt ease-out while the arriving line springs up
   behind it, so a sung line never lingers at full size beside its successor.
   Only compositor-friendly properties move: opacity and transform animate,
   while the depth blur is a static per-tier value that never re-rasterizes
   mid-transition. */
.spotify-lyrics-line {
  --spotify-lyrics-line-opacity: 1;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 6px 8px;
  color: var(--lumiverse-text-dim);
  text-align: center;
  opacity: var(--spotify-lyrics-line-opacity);
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  transition:
    opacity 320ms cubic-bezier(0.25, 0.7, 0.5, 1),
    background 220ms cubic-bezier(0.22, 1, 0.36, 1);
}

.spotify-lyrics-line-text {
  display: block;
  font-size: 17px;
  font-weight: 600;
  line-height: 1.35;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: normal;
  text-wrap: pretty;
  letter-spacing: -0.015em;
  transform: translateY(0) scale(0.955);
  transform-origin: center center;
  transition: transform 320ms cubic-bezier(0.25, 0.7, 0.5, 1);
}

.spotify-lyrics-line-text-long {
  max-width: calc(100% - 32px);
  margin-inline: auto;
}

.spotify-lyrics-line-enter {
  animation: spotify-lyrics-line-in 420ms cubic-bezier(0.18, 0.9, 0.22, 1) both;
  animation-delay: var(--spotify-lyrics-enter-delay, 0ms);
}

.spotify-lyrics-line:hover {
  background: var(--lumiverse-fill-subtle);
}

.spotify-lyrics-line-active {
  --spotify-lyrics-line-opacity: 1;
  color: var(--lumiverse-text);
  opacity: 1;
  transition:
    opacity 520ms cubic-bezier(0.25, 0.7, 0.5, 1),
    background 220ms cubic-bezier(0.22, 1, 0.36, 1);
}

/* Only the arriving scale springs. Nothing that transforms carries a filter or
   a paint-invalidating property, so the compositor never has to re-rasterize a
   blurred layer mid-scale. */
.spotify-lyrics-line-active .spotify-lyrics-line-text {
  transform: translateY(0) scale(1.17);
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.14);
  transition: transform 520ms cubic-bezier(0.34, 1.5, 0.5, 1);
}

.spotify-lyrics-line-tier-1 {
  --spotify-lyrics-line-opacity: 0.78;
  color: var(--lumiverse-text-muted);
}

.spotify-lyrics-line-tier-2 {
  --spotify-lyrics-line-opacity: 0.56;
  color: var(--lumiverse-text-muted);
}

.spotify-lyrics-line-tier-3 {
  --spotify-lyrics-line-opacity: 0.38;
}

.spotify-lyrics-line-tier-4 {
  --spotify-lyrics-line-opacity: 0.24;
}

.spotify-lyrics-line-past {
  --spotify-lyrics-line-opacity: 0.3;
}

.spotify-lyrics-line-future {
  --spotify-lyrics-line-opacity: 0.42;
}

.spotify-lyrics-line-past.spotify-lyrics-line-tier-1,
.spotify-lyrics-line-future.spotify-lyrics-line-tier-1 {
  --spotify-lyrics-line-opacity: 0.78;
}

.spotify-lyrics-line-past.spotify-lyrics-line-tier-2,
.spotify-lyrics-line-future.spotify-lyrics-line-tier-2 {
  --spotify-lyrics-line-opacity: 0.56;
}

.spotify-lyrics-line-past.spotify-lyrics-line-tier-3,
.spotify-lyrics-line-future.spotify-lyrics-line-tier-3 {
  --spotify-lyrics-line-opacity: 0.38;
}

.spotify-lyrics-line-past.spotify-lyrics-line-tier-4,
.spotify-lyrics-line-future.spotify-lyrics-line-tier-4 {
  --spotify-lyrics-line-opacity: 0.24;
}

/* Depth blur is static and sits only on receding lines, never on the active or
   adjacent line. A blur that animates, or that shares an element with a
   transform, forces the compositor to re-rasterize that layer every frame and
   leaves the text visibly soft mid-scale. These classes are emitted only while
   the Lyrics blur setting is on, so a disabled blur leaves the text unfiltered
   instead of carrying a no-op blur(0). */
.spotify-lyrics-line-blur-2 .spotify-lyrics-line-text {
  filter: blur(0.8px);
}

.spotify-lyrics-line-blur-3 .spotify-lyrics-line-text {
  filter: blur(1.5px);
}

.spotify-lyrics-line-blur-4 .spotify-lyrics-line-text {
  filter: blur(2.2px);
}

.spotify-lyrics-line-blank {
  min-height: 22px;
  --spotify-lyrics-line-opacity: 0.18;
}

.spotify-lyrics-line-blank .spotify-lyrics-line-text {
  font-size: 15px;
  letter-spacing: 0.08em;
}

.spotify-lyrics-line-symbol {
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  min-height: 1em;
}

.spotify-lyrics-text-enter {
  animation: spotify-lyrics-text-in 340ms cubic-bezier(0.18, 0.9, 0.22, 1) both;
}

@keyframes spotify-lyrics-loading-pulse {
  0%,
  100% {
    opacity: 0.38;
  }

  50% {
    opacity: 0.8;
  }
}

/* The blur-in radius is a variable so the Lyrics blur setting can zero it
   without a second copy of the motion. A custom property inside @keyframes is
   substituted when the animation starts, which is the only moment that
   matters here: the element is created, and the setting read, before it is
   inserted. */
@keyframes spotify-lyrics-line-in {
  from {
    opacity: 0;
    transform: translateY(16px);
    filter: blur(var(--spotify-lyrics-enter-blur, 8px));
  }

  to {
    opacity: var(--spotify-lyrics-line-opacity);
    transform: translateY(0);
    filter: blur(0);
  }
}

@keyframes spotify-lyrics-text-in {
  from {
    opacity: 0;
    transform: translateY(10px);
    filter: blur(var(--spotify-lyrics-enter-blur, 6px));
  }

  to {
    opacity: 1;
    transform: none;
    filter: blur(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .spotify-lyrics-line,
  .spotify-lyrics-line .spotify-lyrics-line-text,
  .spotify-lyrics-text,
  .spotify-lyrics-status-loading {
    animation: none !important;
    transition: none;
  }
}

/* ─── Per-message "song that was playing" badge ─────────────────────────── */

.spotify-song-badge-wrap {
  position: absolute;
  bottom: 8px;
  z-index: 4;
  line-height: 0;
}

.spotify-song-badge-wrap[data-corner="right"] {
  right: 8px;
}

.spotify-song-badge-wrap[data-corner="left"] {
  left: 8px;
}

.spotify-song-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: 1px solid var(--lumiverse-border);
  border-radius: 50%;
  background: var(--lumiverse-fill-subtle, rgba(127, 127, 127, 0.12));
  color: var(--lumiverse-text-dim);
  cursor: pointer;
  opacity: 0.55;
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  transition: opacity 160ms ease, color 160ms ease, border-color 160ms ease,
              transform 160ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.spotify-song-badge:hover,
.spotify-song-badge:focus-visible {
  opacity: 1;
  color: #1db954;
  border-color: #1db954;
  transform: scale(1.08);
  outline: none;
}

.spotify-song-badge svg {
  width: 14px;
  height: 14px;
}

/* ─── Song popover (sleek view, lazy-rendered on click) ─────────────────── */

.spotify-song-pop {
  position: fixed;
  z-index: 9991;
  width: 280px;
  max-width: calc(100vw - 16px);
  box-sizing: border-box;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--lumiverse-bg);
  border: 1px solid var(--lumiverse-border);
  border-radius: 14px;
  box-shadow: var(--lumiverse-shadow-xl);
  -webkit-backdrop-filter: blur(20px) saturate(1.1);
  backdrop-filter: blur(20px) saturate(1.1);
  color: var(--lumiverse-text);
  font-family: system-ui, -apple-system, sans-serif;
  transform: scale(0.85);
  opacity: 0;
  pointer-events: none;
  transition: transform 180ms cubic-bezier(0.34, 1.56, 0.64, 1),
              opacity 140ms ease;
}

.spotify-song-pop.open {
  transform: scale(1);
  opacity: 1;
  pointer-events: auto;
}

.spotify-song-pop-header {
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--lumiverse-text-dim);
  display: flex;
  align-items: center;
  gap: 6px;
}

.spotify-song-pop-header::before {
  content: "♪";
  color: #1db954;
  font-size: 12px;
}

.spotify-song-pop-body {
  display: flex;
  gap: 12px;
  align-items: center;
}

.spotify-song-pop-art {
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--lumiverse-fill);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.28);
}

.spotify-song-pop-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.spotify-song-pop-track {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.spotify-song-pop-artist {
  font-size: 12px;
  color: var(--lumiverse-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-song-pop-album {
  font-size: 11px;
  color: var(--lumiverse-text-dim);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.spotify-song-pop-when {
  margin-top: 2px;
  font-size: 10.5px;
  color: var(--lumiverse-text-dim);
}

.spotify-song-pop-actions {
  display: flex;
  gap: 6px;
}

.spotify-song-pop-btn {
  flex: 1 1 0;
  min-width: 0;
  box-sizing: border-box;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 0 8px;
  border: 1px solid var(--lumiverse-border);
  border-radius: 9px;
  background: var(--lumiverse-fill-subtle, rgba(127, 127, 127, 0.1));
  color: var(--lumiverse-text);
  font-size: 12px;
  font-weight: 600;
  font-family: inherit;
  line-height: 1;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  transition: background 140ms ease, border-color 140ms ease, transform 120ms ease;
}

.spotify-song-pop-btn svg {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.spotify-song-pop-btn:hover {
  border-color: var(--lumiverse-border-hover, var(--lumiverse-border));
  transform: translateY(-1px);
}

.spotify-song-pop-btn:active {
  transform: translateY(0);
}

.spotify-song-pop-btn-primary {
  background: #1db954;
  border-color: #1db954;
  color: #fff;
}

.spotify-song-pop-btn-primary:hover {
  background: #1ed760;
  border-color: #1ed760;
}

@media (prefers-reduced-motion: reduce) {
  .spotify-song-badge,
  .spotify-song-pop,
  .spotify-song-pop-btn {
    transition: none;
  }
}

`;function Xt(e){let n=document.createElement("section");n.className="spotify-settings-card";let o=document.createElement("header");o.className="spotify-settings-card-header";let t=document.createElement("h3");t.textContent="Subsonic Controls";let s=document.createElement("span");s.className="spotify-status",o.append(t,s);let p=document.createElement("div");p.className="spotify-settings-card-body";let d=(I,Q,h)=>{let k=document.createElement("label");k.className="spotify-settings-label";let O=document.createTextNode(I);k.append(O);let S=document.createElement("input");return S.className="spotify-input",S.type=Q,S.placeholder=h,k.append(S),p.append(k),S},f=d("Subsonic server URL","url","https://music.example.com (or …/rest)"),c=d("Subsonic username","text","Subsonic username"),m=d("Subsonic password","password","Subsonic password"),y=d("Playback position offset (ms)","number","1000");y.min="-10000",y.max="10000",y.step="100";let x=document.createElement("div");x.style.cssText="font-size:0.8em;opacity:0.65;margin-top:-6px",x.textContent="Adds time to the server's reported playback position for synchronized lyrics. Default: 1000 ms; use a negative value if lyrics run ahead.",p.append(x);let C=document.createElement("label");C.className="spotify-settings-label",C.append("Playback controls");let g=document.createElement("select");g.className="spotify-input";for(let[I,Q]of[["none","Now playing only"],["jukebox","Server-side Jukebox"],["feishin","Feishin Desktop Remote"]]){let h=document.createElement("option");h.value=I,h.textContent=Q,g.append(h)}C.append(g),p.append(C);let L=document.createElement("div");L.style.cssText="font-size:0.8em;opacity:0.65;margin-top:4px",L.textContent="Jukebox controls affect the server-side player.",p.append(L);let w=document.createElement("div");w.style.cssText="display:none;font-size:0.8em;color:#e74c3c;margin-top:4px",p.append(w);let E=document.createElement("div");E.style.display="none";let U=(I,Q,h)=>{let k=document.createElement("label");k.className="spotify-settings-label",k.append(I);let O=document.createElement("input");return O.className="spotify-input",O.type=Q,O.placeholder=h,k.append(O),E.append(k),O},v=U("Feishin Remote URL","url","http://192.168.1.20:4333"),F=U("Feishin username","text","Optional Remote username"),D=U("Feishin password","password","Optional Remote password"),j=document.createElement("div");j.style.cssText="font-size:0.8em;opacity:0.65;margin-top:4px",j.textContent="Feishin Remote requires WebSocket transport; its HTTP server only serves the Remote page and credentials. Library search and lyrics still use the Subsonic server above.",E.append(j),p.append(E);let Z=document.createElement("div");Z.className="spotify-settings-row";let G=document.createElement("button");G.className="spotify-btn spotify-btn-primary",Z.append(G),p.append(Z),n.append(o,p);let X=!1,te=!1,M=!1,N=!1,B=!1,H=[f,c,m,y,g,v,F,D];for(let I of H)I.addEventListener("input",()=>{M=!0});function W(I,Q,h=!1){s.replaceChildren();let k=document.createElement("span");k.className=`spotify-status-dot ${Q?"connected":"disconnected"}`;let O=document.createElement("span");if(O.textContent=I,h)O.style.color="#e74c3c";s.append(k,O)}function z(){let I=g.value==="feishin";E.style.display=I?"":"none",L.style.display=g.value==="jukebox"?"":"none",w.style.display=g.value==="jukebox"&&w.textContent?"":"none"}g.onchange=()=>{M=!0,z()};function V(I,Q,h,k,O,S,R,ne,ye,le){if(X=I,N=k,B=ne,I||!te&&!M)f.value=Q,c.value=h,v.value=S,F.value=R,y.value=String(ye),g.value=O;if(w.textContent=le||"",z(),te&&!I)return;for(let qe of[f,c,m,g,v,F,D])qe.disabled=I;if(I)te=!1,M=!1,m.value="",D.value="";m.placeholder=k?"Saved securely (re-enter to change)":"Subsonic password",D.placeholder=ne?"Saved securely (re-enter to change)":"Optional Remote password",G.textContent=I?"Disconnect":"Connect",G.className=I?"spotify-btn spotify-btn-danger":"spotify-btn spotify-btn-primary",G.disabled=!1,W(I?"Connected":"Not connected",I)}return G.onclick=()=>{if(X)return void e({type:"disconnect"});let I=g.value;if(!f.value.trim()||!c.value.trim()||!m.value&&!N||I==="feishin"&&!v.value.trim()){W("Enter the Subsonic server credentials and, when selected, a Feishin Remote URL.",!1,!0);return}te=!0,G.disabled=!0,G.textContent="Connecting…",e({type:"connect",serverUrl:f.value.trim(),username:c.value.trim(),password:m.value,remoteControl:I,feishinUrl:v.value.trim(),feishinUsername:F.value.trim(),feishinPassword:D.value,playbackPositionOffsetMs:Number(y.value)})},y.onchange=()=>{let I=Number(y.value);if(!Number.isFinite(I))return;if(y.value=String(Math.max(-1e4,Math.min(1e4,Math.round(I)))),X)e({type:"set_playback_position_offset",playbackPositionOffsetMs:Number(y.value)})},V(!1,"","",!1,"none","","",!1,1000,null),{root:n,update:V,setConnecting(){te=!0,G.disabled=!0,G.textContent="Connecting…"},setError(I){X=!1,te=!1,G.disabled=!1,G.textContent="Connect",G.className="spotify-btn spotify-btn-primary";for(let Q of[f,c,m,g,v,F,D])Q.disabled=!1;m.placeholder=N?"Saved securely (re-enter to change)":"Subsonic password",D.placeholder=B?"Saved securely (re-enter to change)":"Optional Remote password",W(I,!1,!0)},destroy(){n.remove()}}}function je(e,n){if(!e)return null;if(!n)return e;if(/^(data|blob):/i.test(e))return e;try{let o=new URL(e);return o.searchParams.set("track",n),o.toString()}catch{let o=e.includes("?")?"&":"?";return`${e}${o}track=${encodeURIComponent(n)}`}}function Ye(e){let n=document.createElement("div");n.className=`${e} spotify-crossfade-art`,n.style.display="none";let o=document.createElement("img"),t=document.createElement("img");o.className="spotify-crossfade-img",t.className="spotify-crossfade-img",o.alt="",t.alt="",o.loading="eager",t.loading="eager",o.decoding="async",t.decoding="async",o.style.visibility="hidden",t.style.visibility="hidden",o.style.opacity="1",t.style.opacity="0",n.appendChild(o),n.appendChild(t);let s=null,p=o,d=t,f=!1;function c(x){x.onload=null,x.onerror=null,x.removeAttribute("src"),x.style.visibility="hidden"}function m(){n.style.display="none",p.style.opacity="1",d.style.opacity="0"}function y(x){if(x===s)return;if(s=x,!x){c(p),c(d),f=!1,m();return}if(!f){if(n.style.display="",p.onload=()=>{f=!0,p.style.visibility="visible"},p.onerror=()=>{s=null,c(p),m()},p.src=x,p.complete&&p.naturalWidth>0)f=!0,p.style.visibility="visible";return}if(n.style.display="",d.onload=()=>{d.style.visibility="visible",d.style.opacity="1",p.style.opacity="0";let C=p;p=d,d=C},d.onerror=()=>{s=null,c(d),d.style.opacity="0"},d.src=x,d.complete&&d.naturalWidth>0){d.style.visibility="visible",d.style.opacity="1",p.style.opacity="0";let C=p;p=d,d=C}}return{el:n,setUrl:y,destroy(){n.remove()}}}function Jt(){let e=document.createElement("div");e.className="spotify-section";let n=document.createElement("h3");n.className="spotify-section-title",n.textContent="Now Playing";let o=document.createElement("div");o.className="spotify-now-playing";let t=Ye("spotify-album-art"),s=document.createElement("div");s.className="spotify-track-info";let p=document.createElement("div");p.className="spotify-track-name";let d=document.createElement("div");d.className="spotify-track-artist";let f=document.createElement("div");f.className="spotify-track-album";let c=document.createElement("div");c.className="spotify-track-device",s.append(p,d,f,c),o.append(t.el,s);let m=document.createElement("div");return m.className="spotify-empty",e.append(n,o,m),{root:e,update(y,x){if(!x){o.style.display="none",m.style.display="",m.textContent="Connect a music source to get started",t.setUrl(null);return}if(!y){o.style.display="none",m.style.display="",m.textContent="No active playback reported",t.setUrl(null);return}o.style.display="flex",m.style.display="none",p.textContent=y.trackName,d.textContent=y.artistName,f.textContent=y.albumName,c.textContent=y.source==="jukebox"?"Server Jukebox":y.source==="feishin"?"Feishin Desktop":y.deviceName?`Playing on ${y.deviceName}`:"Server now playing",t.setUrl(je(y.albumArtUrl,y.trackUri))},destroy(){t.destroy(),e.remove()}}}function Kt(e){let n=document.createElement("div");n.className="spotify-section";let o=document.createElement("h3");o.className="spotify-section-title",o.textContent="Player Controls";let t=document.createElement("div");t.className="spotify-controls";let s=(g,L="")=>{let w=document.createElement("button");return w.className=`spotify-ctrl-btn ${L}`,w.innerHTML=g,w},p=s('<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>'),d=s('<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',"spotify-ctrl-btn-main"),f=s('<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>'),c=document.createElement("div");c.className="spotify-search-error",c.style.cssText="display:none;font-size:0.8em;color:#e74c3c;margin-top:6px;word-break:break-word";let m=(g)=>{c.textContent=g||"",c.style.display=g?"":"none"},y=(g)=>{m(null),e(g)};p.onclick=()=>y({type:"previous"}),f.onclick=()=>y({type:"next"});let x=s('<svg viewBox="0 0 24 24"><path d="M17 3l4 4-4 4V8h-2.2l-2.3 2.9-1.3-1.6L14 6h3zM3 6h4.2l7.6 9.5H17v-3l4 4-4 4v-3h-3.3L5.9 7.8 4.5 9.2 3 7.8z"/></svg>');x.title="Shuffle the queued tracks",x.onclick=()=>y({type:"shuffle"});let C=!1;return d.onclick=()=>y({type:C?"pause":"play"}),t.append(p,d,f,x),n.append(o,t,c),{root:n,update(g,L,w,E="Player Controls"){if(n.style.display=L&&w?"":"none",!L||!w)m(null);o.textContent=E,C=!!g?.isPlaying,d.innerHTML=C?'<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>':'<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'},setError:m,destroy(){n.remove()}}}function Zt(e){let n=document.createElement("div");n.className="spotify-section";let o=document.createElement("h3");o.className="spotify-section-title",o.textContent="Library Search";let t=document.createElement("input");t.className="spotify-search-input",t.placeholder="Search your server's music library…";let s=document.createElement("div");s.className="spotify-search-results",n.append(o,t,s);let p=null,d=!0;return t.oninput=()=>{if(p)clearTimeout(p);p=setTimeout(()=>{let c=t.value.trim();if(c.length>=2)e({type:"search",query:c});else s.innerHTML=""},350)},{root:n,setResults:(c)=>{if(s.innerHTML="",!c.length){let m=document.createElement("div");m.className="spotify-empty",m.textContent="No tracks found",s.appendChild(m);return}for(let m of c){let y=document.createElement("div");if(y.className="spotify-search-item",m.albumArtUrl){let L=document.createElement("img");L.className="spotify-search-item-art",L.src=m.albumArtUrl,L.alt=m.album,y.appendChild(L)}let x=document.createElement("div");x.className="spotify-search-item-info";let C=document.createElement("div");C.className="spotify-search-item-name",C.textContent=m.name;let g=document.createElement("div");if(g.className="spotify-search-item-artist",g.textContent=`${m.artist} — ${m.album}`,x.append(C,g),d){let L=document.createElement("div");L.className="spotify-search-item-actions";let w=document.createElement("button");w.className="spotify-search-item-btn",w.title="Play in server Jukebox",w.innerHTML='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',w.onclick=()=>e({type:"play",trackUri:m.uri});let E=document.createElement("button");E.className="spotify-search-item-btn",E.title="Add to server Jukebox queue",E.innerHTML='<svg viewBox="0 0 24 24"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg>',E.onclick=()=>e({type:"queue",trackUri:m.uri}),L.append(w,E),y.append(x,L)}else y.append(x);s.appendChild(y)}},setAvailable(c){if(n.style.display=c?"":"none",!c)s.innerHTML=""},setPlaybackAvailable(c){d=c,s.innerHTML=""},destroy(){if(p)clearTimeout(p);n.remove()}}}function Qt(e){let n=document.createElement("details");n.className="spotify-section spotify-collapsible";let o=document.createElement("summary");o.className="spotify-section-title spotify-collapsible-summary";let t=document.createElement("span");t.textContent="Playlists";let s=document.createElement("span");s.className="spotify-collapsible-count",o.append(t,s);let p=document.createElement("div");p.className="spotify-collapsible-body";let d=document.createElement("input");d.className="spotify-search-input",d.placeholder="Filter playlists…";let f=document.createElement("div");f.className="spotify-search-results",p.append(d,f),n.append(o,p);let c=[],m=!0,y=(g,L)=>!L||g.name.toLowerCase().includes(L)||g.owner.toLowerCase().includes(L),x=()=>{f.innerHTML="";let g=d.value.trim().toLowerCase(),L=c.filter((w)=>y(w,g));if(!L.length){let w=document.createElement("div");w.className="spotify-empty",w.textContent=c.length?"No playlists match":"No playlists on this server",f.appendChild(w);return}for(let w of L){let E=document.createElement("div");if(E.className="spotify-search-item",w.albumArtUrl){let j=document.createElement("img");j.className="spotify-search-item-art",j.src=w.albumArtUrl,j.alt=w.name,E.appendChild(j)}let U=document.createElement("div");U.className="spotify-search-item-info";let v=document.createElement("div");v.className="spotify-search-item-name",v.textContent=w.name;let F=Number.isFinite(w.songCount)?w.songCount:0,D=document.createElement("div");if(D.className="spotify-search-item-artist",D.textContent=`${F} ${F===1?"track":"tracks"}`,U.append(v,D),m){let j=document.createElement("div");j.className="spotify-search-item-actions";let Z=document.createElement("button");Z.className="spotify-search-item-btn",Z.title="Play this playlist in the server Jukebox",Z.innerHTML='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',Z.onclick=()=>e({type:"play_playlist",playlistId:w.id}),j.appendChild(Z),E.append(U,j)}else E.appendChild(U);f.appendChild(E)}};d.oninput=x;let C=()=>{let g=c.length;s.textContent=g?String(g):"",n.style.display=g?"":"none"};return{root:n,setPlaylists(g){c=g,C(),x()},setPlaybackAvailable(g){m=g,x()},destroy(){n.remove()}}}function Et(e){let n=null,o=null,t=null,s=0,p=!1,d=0;function f(g){let L=e.getBoundingClientRect(),w=g.getBoundingClientRect(),E=Math.max(0,e.scrollHeight-e.clientHeight);return Math.min(Math.max(e.scrollTop+(w.top+w.height/2)-(L.top+e.clientHeight/2),0),E)}function c(){if(n!==null)cancelAnimationFrame(n);n=null,o=null}function m(){c(),t=null,s=Date.now()}function y(){c(),t=null}function x(g){if(n=null,o===null||!o.isConnected||!e.isConnected){c();return}let L=Math.min(Math.max(g-d,0),100);d=g;let w=Math.max(0,e.scrollHeight-e.clientHeight),E=f(o),U=E-e.scrollTop;if(Math.abs(U)<0.5){t=E,e.scrollTop=E,c();return}let v=U*(1-Math.exp(-L/85)),F=1800*(L/1000),D=Math.abs(v)>F?Math.sign(v)*F:v,j=Math.min(Math.max(e.scrollTop+D,0),w);t=j,e.scrollTop=j,n=requestAnimationFrame(x)}e.addEventListener("wheel",m,{passive:!0}),e.addEventListener("touchmove",m,{passive:!0}),e.addEventListener("pointerdown",m,{passive:!0});function C(){if(n!==null||o!==null)return;if(t!==null&&Math.abs(e.scrollTop-t)<=1)return;m()}return e.addEventListener("scroll",C,{passive:!0}),{center(g,L){if(p)return;if(!L?.force&&Date.now()-s<=2500)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){c(),t=f(g),e.scrollTop=t;return}if(o=g,n===null)d=performance.now(),n=requestAnimationFrame(x)},suspend(g){if(p===g)return!1;if(p=g,p)y();return!0},cancel:y,destroy(){y(),e.removeEventListener("wheel",m),e.removeEventListener("touchmove",m),e.removeEventListener("pointerdown",m),e.removeEventListener("scroll",C)}}}function xn(e){let n=/^(\d+):(\d{2})(?:\.(\d{1,3}))?$/.exec(e);if(!n)return null;let o=Number(n[1]),t=Number(n[2]),s=n[3]?Number(n[3].padEnd(3,"0")):0;if(!Number.isFinite(o)||!Number.isFinite(t)||t>59)return null;return o*60000+t*1000+s}function dt(e){if(!e)return[];let n=[];for(let t of e.split(/\r?\n/)){let s=[...t.matchAll(/\[([^\]]+)\]/g)].map((d)=>xn(d[1])).filter((d)=>d!==null);if(s.length===0)continue;let p=t.replace(/(?:\[[^\]]+\])+/g,"").trim();for(let d of s)n.push({timeMs:d,text:p})}let o=[];for(let t of n.sort((s,p)=>s.timeMs-p.timeMs)){let s=o[o.length-1];if(s?.timeMs===t.timeMs)s.text=[s.text,t.text].filter(Boolean).join(`
`);else o.push({...t})}return o}function kt(e){return e||"♪"}function en(e){return!e.includes(`
`)&&e.length>=36}function Lt(e){let n=[],o=null,t=-1;function s(){if(!o)return 0;if(!o.isPlaying)return o.progressMs;return Math.min(o.progressMs+Date.now()-o.updatedAt,o.durationMs||1/0)}function p(){if(n.length===0){let x=t!==-1;return t=-1,x}let c=s(),m=-1;for(let x=0;x<n.length;x++){if(n[x].timeMs>c)break;m=x}let y=m!==t;return t=m,y}function d(){let c=n.map((y,x)=>({...y,index:x,displayText:kt(y.text),hasText:Boolean(y.text)}));if(!e||c.length<=e)return c;if(t<0)return c.slice(0,e);let m=Math.max(0,Math.min(t-Math.floor(e/2),c.length-e));return c.slice(m,m+e)}function f(){return n.map((c,m)=>({...c,index:m,displayText:kt(c.text),hasText:Boolean(c.text)}))}return{clear(){n=[],o=null,t=-1},setLyrics(c){n=c,t=-1,p()},setPlayback(c){o=c},refreshActiveLineIndex:p,getActiveLineIndex(){return t},hasLyrics(){return n.length>0},getIndexedLines:f,getSnapshot(){return p(),{activeLineIndex:t,lines:d()}}}}var wn=180;function tn(e,n,o,t){let s=["spotify-lyrics-line"];if(!o)s.push("spotify-lyrics-line-blank");if(e===n)s.push("spotify-lyrics-line-active");else if(e<n)s.push("spotify-lyrics-line-past");else s.push("spotify-lyrics-line-future");if(n>=0){let p=Math.abs(e-n);if(p>=1){let d=Math.min(p,4);if(s.push(`spotify-lyrics-line-tier-${d}`),t&&d>=2)s.push(`spotify-lyrics-line-blur-${d}`)}}return s.join(" ")}function nn(){let e=document.createElement("div");e.className="spotify-section spotify-lyrics-section",e.dataset.transport="false";let n=document.createElement("h3");n.className="spotify-section-title",n.textContent="Lyrics";let o=document.createElement("div");o.className="spotify-lyrics-body",e.append(n,o);let t=null,s=[],p=Lt(),d=Et(o),f=null,c=-1,m=!0,y,x;function C(M){return M?.source==="feishin"||M?.source==="jukebox"}function g(){clearTimeout(x),x=void 0,o.classList.remove("spotify-lyrics-loading")}function L(){clearInterval(y),y=void 0}function w(){s.forEach((M)=>{let N=p.getIndexedLines()[M.index];M.el.className=tn(M.index,c,N?.hasText??!1,m)})}function E(){if(m)e.style.removeProperty("--spotify-lyrics-enter-blur");else e.style.setProperty("--spotify-lyrics-enter-blur","0px")}function U(M,N=!1){c=M,w();let B=s.find((H)=>H.index===c);if(B)d.center(B.textEl,{force:N})}function v(M=!1){if(!s.length)return;if(p.refreshActiveLineIndex()||M)U(p.getActiveLineIndex(),M)}function F(){if(!y&&s.length)y=setInterval(v,200)}function D(){L(),d.cancel(),g(),o.innerHTML="",o.className="spotify-lyrics-body",t=null,s=[],p.clear(),f=null,c=-1,e.dataset.transport="false"}function j(M,N){if(g(),!M)return;if(L(),d.cancel(),o.innerHTML="",o.className="spotify-lyrics-body spotify-lyrics-loading",t=N?.trackUri??t,s=[],p.setLyrics([]),N&&N.trackUri===t)f={trackUri:N.trackUri,progressMs:N.progressMs,durationMs:N.durationMs,isPlaying:N.isPlaying,updatedAt:Date.now()},p.setPlayback(f);else f=null,p.setPlayback(null);c=-1,x=setTimeout(()=>{if(!o.classList.contains("spotify-lyrics-loading"))return;let B=document.createElement("div");B.className="spotify-lyrics-status spotify-lyrics-status-loading",B.textContent="Loading lyrics...",o.appendChild(B)},wn)}function Z(M){let N=dt(M);if(!N.length)return!1;g(),o.className="spotify-lyrics-body spotify-lyrics-has-content spotify-lyrics-synced",p.setLyrics(N);let B=p.getSnapshot();if(c=B.activeLineIndex,s=B.lines.map((H,W)=>{let z=document.createElement("div"),V=document.createElement("div");if(z.className=tn(H.index,c,H.hasText,m),z.classList.add("spotify-lyrics-line-enter"),z.style.setProperty("--spotify-lyrics-enter-delay",`${Math.min(W*28,280)}ms`),V.className="spotify-lyrics-line-text",!H.hasText)V.classList.add("spotify-lyrics-line-symbol");if(en(H.text))V.classList.add("spotify-lyrics-line-text-long");return V.textContent=kt(H.text),z.appendChild(V),o.appendChild(z),{index:H.index,el:z,textEl:V}}),v(),f?.isPlaying)F();return!0}function G(M){g(),o.className="spotify-lyrics-body spotify-lyrics-has-content";let N=document.createElement("div");N.className="spotify-lyrics-text spotify-lyrics-text-enter",N.textContent=M,o.appendChild(N)}function X(M,N,B,H){if(L(),d.cancel(),g(),t=M,o.innerHTML="",s=[],c=-1,H)o.className="spotify-lyrics-body",o.textContent="♪ Instrumental";else if(!Z(B||""))if(N)G(N);else o.className="spotify-lyrics-body",o.textContent="No lyrics available"}function te(M){let N=String(C(M)),B=e.dataset.transport!==N;if(e.dataset.transport=N,!M||M.trackUri!==t){f=null,p.setPlayback(null),L();return}if(f={trackUri:M.trackUri,progressMs:M.progressMs,durationMs:M.durationMs,isPlaying:M.isPlaying,updatedAt:Date.now()},p.setPlayback(f),v(),M.isPlaying)F();else L();if(B&&s.length)requestAnimationFrame(()=>v(!0))}return{root:e,update:X,updatePlayback:te,setLoading:j,setAutoScrollSuspended(M){if(d.suspend(M)&&!M&&s.length)U(c,!0)},setBlurEnabled(M){if(m===M)return;m=M,E(),w()},clear:D,destroy(){L(),d.destroy(),g(),e.remove()}}}function Ct(e,n){let o=!1;function t(E){if(o===E)return;o=E,n.onInteractChange?.(E)}function s(E){if(n.stopPropagation)E.stopPropagation()}function p(){return Number.parseInt(e.value,10)}let d=(E)=>{s(E),t(!0)},f=(E)=>{s(E)},c=(E)=>{s(E),t(!1)},m=(E)=>{s(E),t(!0)},y=(E)=>{s(E)},x=(E)=>{s(E),t(!1)},C=(E)=>{s(E)},g=(E)=>{s(E),t(!0),n.onPreview?.(p())},L=(E)=>{s(E);let U=p();n.onPreview?.(U),n.onCommit(U),t(!1)},w=()=>{t(!1)};return e.addEventListener("pointerdown",d),e.addEventListener("pointermove",f),e.addEventListener("pointerup",c),e.addEventListener("touchstart",m,{passive:!0}),e.addEventListener("touchmove",y,{passive:!0}),e.addEventListener("touchend",x,{passive:!0}),e.addEventListener("click",C),e.addEventListener("input",g),e.addEventListener("change",L),e.addEventListener("blur",w),e.addEventListener("pointercancel",w),e.addEventListener("lostpointercapture",w),()=>{e.removeEventListener("pointerdown",d),e.removeEventListener("pointermove",f),e.removeEventListener("pointerup",c),e.removeEventListener("touchstart",m),e.removeEventListener("touchmove",y),e.removeEventListener("touchend",x),e.removeEventListener("click",C),e.removeEventListener("input",g),e.removeEventListener("change",L),e.removeEventListener("blur",w),e.removeEventListener("pointercancel",w),e.removeEventListener("lostpointercapture",w)}}function Mt(e,n){let o=!1,t=null,s=0;function p(v){if(o===v)return;o=v,n.onInteractChange?.(v)}function d(v){if(n.stopPropagation)v.stopPropagation()}function f(v){let F=n.getMaxValue();if(!Number.isFinite(F)||F<=0)return null;let D=e.getBoundingClientRect();if(D.width<=0)return null;let j=Math.max(0,Math.min(1,(v-D.left)/D.width));return Math.round(j*F)}function c(v){let F=f(v);if(F===null)return null;return s=F,n.onPreview(F),F}function m(v){if(t!==null&&e.hasPointerCapture(t))e.releasePointerCapture(t);if(t=null,v)n.onCommit(s);p(!1)}let y=(v)=>{if(d(v),v.button!==0)return;if(c(v.clientX)===null)return;t=v.pointerId,p(!0);try{e.setPointerCapture(v.pointerId)}catch{}},x=(v)=>{if(d(v),v.pointerId!==t)return;c(v.clientX)},C=(v)=>{if(d(v),v.pointerId!==t)return;c(v.clientX),m(!0)},g=(v)=>{if(d(v),v.pointerId!==t)return;m(!1)},L=(v)=>{d(v),v.preventDefault()},w=(v)=>{d(v)},E=(v)=>{d(v)},U=(v)=>{d(v)};return e.addEventListener("pointerdown",y),e.addEventListener("pointermove",x),e.addEventListener("pointerup",C),e.addEventListener("pointercancel",g),e.addEventListener("click",L),e.addEventListener("touchstart",w,{passive:!0}),e.addEventListener("touchmove",E,{passive:!0}),e.addEventListener("touchend",U,{passive:!0}),()=>{e.removeEventListener("pointerdown",y),e.removeEventListener("pointermove",x),e.removeEventListener("pointerup",C),e.removeEventListener("pointercancel",g),e.removeEventListener("click",L),e.removeEventListener("touchstart",w),e.removeEventListener("touchmove",E),e.removeEventListener("touchend",U)}}var En='<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>',on='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',kn='<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',Ln='<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>',Cn='<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>',Mn='<svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>',Sn='<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>',Pn='<svg viewBox="0 0 24 24"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/></svg>',rn="♪";function ct(e){let n=Math.floor(e/1000),o=Math.floor(n/60),t=n%60;return`${o}:${t.toString().padStart(2,"0")}`}var sn=280,Nn=336,fe=8;function Tt(e){return e==="modern"?Nn:sn}function Tn(e){if(!e)return[];return e.split(/\r?\n/).map((n)=>n.trim()).filter(Boolean).slice(0,5)}function an(e,n,o){let t=document.createElement("div");t.className="spotify-mini-player",t.dataset.style="default",t.style.setProperty("--spotify-mini-player-width",`${sn}px`);let s=Ye("spotify-mini-art"),p=document.createElement("div");p.className="spotify-mini-info";let d=document.createElement("div");d.className="spotify-mini-track";let f=document.createElement("div");f.className="spotify-mini-artist";let c=document.createElement("div");c.className="spotify-mini-album",p.appendChild(d),p.appendChild(f),p.appendChild(c);let m=document.createElement("button");m.className="spotify-mini-header-btn",m.innerHTML=Mn,m.title="Open full player";let y=document.createElement("button");y.className="spotify-mini-header-btn",y.innerHTML=Sn,y.title="Collapse";let x=document.createElement("div");x.className="spotify-mini-header-btns",x.appendChild(m),x.appendChild(y);let C=document.createElement("div");C.className="spotify-mini-progress-row";let g=document.createElement("span");g.className="spotify-mini-time";let L=document.createElement("div");L.className="spotify-mini-progress-bar";let w=document.createElement("div");w.className="spotify-mini-progress-fill",L.appendChild(w);let E=document.createElement("span");E.className="spotify-mini-time",C.appendChild(g),C.appendChild(L),C.appendChild(E);let U=document.createElement("div");U.className="spotify-mini-controls";function v(r,b=""){let T=document.createElement("button");return T.className=`spotify-mini-btn ${b}`.trim(),T.innerHTML=r,T}let F=v(En),D=v(on,"spotify-mini-btn-main"),j=v(Ln);U.appendChild(F),U.appendChild(D),U.appendChild(j);let Z=document.createElement("div");Z.className="spotify-mini-volume-row";let G=document.createElement("span");G.className="spotify-mini-volume-icon",G.innerHTML=Cn;let X=document.createElement("input");X.type="range",X.className="spotify-mini-volume-slider",X.min="0",X.max="100",X.value="50",Z.appendChild(G),Z.appendChild(X);let te=document.createElement("div");te.className="spotify-mini-device-row";let M=document.createElement("span");M.className="spotify-mini-device-icon",M.innerHTML=Pn;let N=document.createElement("span");N.className="spotify-mini-device-name";let B=document.createElement("button");B.className="spotify-mini-device-toggle",B.textContent="Switch",te.appendChild(M),te.appendChild(N),te.appendChild(B);let H=document.createElement("div");H.className="spotify-mini-device-list";let W=document.createElement("div");W.className="spotify-mini-empty",W.textContent="No active playback";let z=document.createElement("div");z.className="spotify-mini-header",z.appendChild(s.el),z.appendChild(p),z.appendChild(x),t.appendChild(z),t.appendChild(C);let V=document.createElement("div");V.className="spotify-mini-lyrics-section";let I=document.createElement("div");I.className="spotify-mini-lyrics-header",I.textContent="Lyrics";let Q=document.createElement("div");Q.className="spotify-mini-lyrics-body";let h=document.createElement("div");h.className="spotify-mini-lyrics-status";let k=Array.from({length:5},()=>{let r=document.createElement("div");return r.className="spotify-mini-lyric-line",Q.appendChild(r),r});Q.appendChild(h),V.appendChild(I),V.appendChild(Q),t.appendChild(V),t.appendChild(U),t.appendChild(Z),t.appendChild(te),t.appendChild(H),t.appendChild(W);let O=!1,S=0,R=!1,ne=0,ye="default",le=null,qe=!1,de=0,ze=0,ge=!1,Ee=null,Me=null,pe=[],he=[],Ie=!1,re=!1,q=-1,xe=!1,se=!1,_=!1,me=null,Re=null,Fe=null,J=!1,Se=!1;function Le(r,b=!1){h.className=b?"spotify-mini-lyrics-status spotify-mini-lyrics-status-loading":"spotify-mini-lyrics-status",h.textContent=r,h.style.display="";for(let T of k)T.style.display="none",T.textContent="",T.className="spotify-mini-lyric-line"}function Pe(){h.style.display="none";for(let r of k)r.style.display=""}function Be(){if(!se||xe)return;se=!1,We(!0)}function Ge(){if(_)return;let r=me,b=Re,T=Fe;if(me=null,Re=null,Fe=null,r)ot(r.state,r.connected);if(b)ue(b);if(T!==null)ce(T);Be()}function Ae(){if(!ge)return de;return Math.min(de+Math.max(0,Date.now()-ze),S||1/0)}function Je(){if(pe.length===0)return[];let b=[];if(q<0)for(let T=0;T<Math.min(5,pe.length);T++){let Y=pe[T];b.push({text:Y.text||rn,index:T})}else{let T=Math.max(0,Math.min(q-2,pe.length-5));for(let Y=0;Y<5&&T+Y<pe.length;Y++){let De=T+Y,Ce=pe[De];b.push({text:Ce.text||rn,index:De})}}while(b.length<5)b.push({text:" ",index:-1-b.length});return b}function Xe(){if(re){Le("Loading lyrics...",!0);return}if(Ie){Le("♪ Instrumental");return}if(pe.length>0){Pe();let r=Je();k.forEach((b,T)=>{let Y=r[T]??{text:" ",index:-1-T},De=q<0?Y.index:Math.abs(Y.index-q);if(b.className="spotify-mini-lyric-line",Y.index===q)b.classList.add("spotify-mini-lyric-line-active");else if(De===1)b.classList.add("spotify-mini-lyric-line-near");else if(De===2)b.classList.add("spotify-mini-lyric-line-mid");else b.classList.add("spotify-mini-lyric-line-far");b.textContent=Y.text});return}if(he.length>0){Pe(),k.forEach((r,b)=>{r.className="spotify-mini-lyric-line spotify-mini-lyric-line-plain",r.textContent=he[b]??" "});return}Le("No lyrics available")}function We(r=!1){if(xe){se=!0;return}if(ye!=="modern"||pe.length===0||!le||le.trackUri!==Me){if(r&&ye==="modern")Xe();return}let b=Ae(),T=-1;for(let Y=0;Y<pe.length;Y++){if(pe[Y].timeMs>b)break;T=Y}if(r||T!==q)q=T,Xe()}function Ke(r=!1){let b=ye==="modern"&&qe&&Boolean(le);if(V.style.display=b?"":"none",!b)return;if(xe){se=!0;return}if(We(!0),r&&R)ee()}function He(){if(_||!R||!ge||!S){Ee=null;return}if(J){Ee=requestAnimationFrame(He);return}let r=Date.now()-ze,b=Math.min(de+r,S),T=b/S*100;w.style.width=`${T}%`,g.textContent=ct(b),We(),Ee=requestAnimationFrame(He)}function K(){if(Ee!==null)return;Ee=requestAnimationFrame(He)}function Ze(){if(Ee!==null)cancelAnimationFrame(Ee),Ee=null}function Ne(){return le?.source==="feishin"||le?.source==="jukebox"}F.addEventListener("click",(r)=>{if(r.stopPropagation(),!Ne())return;e({type:"previous"})}),j.addEventListener("click",(r)=>{if(r.stopPropagation(),!Ne())return;e({type:"next"})}),D.addEventListener("click",(r)=>{if(r.stopPropagation(),!Ne())return;e({type:O?"pause":"play"})}),m.addEventListener("click",(r)=>{r.stopPropagation(),ve(),n()}),y.addEventListener("click",(r)=>{r.stopPropagation(),ve()});let Oe=Mt(L,{getMaxValue:()=>S,onInteractChange(r){J=r},onPreview(r){let b=S>0?r/S*100:0;w.style.width=`${b}%`,g.textContent=ct(r)},onCommit(r){if(le)le={...le,progressMs:r};if(de=r,ze=Date.now(),We(!0),e({type:"seek",positionMs:r}),R&&ge)K()}}),ke=new Set,ae=Ct(X,{onInteractChange(r){Se=r},onPreview(r){for(let b of ke)b(r)},onCommit(r){e({type:"set_volume",percent:r})}}),$e=!1,Ve=null;B.addEventListener("click",(r)=>{if(r.stopPropagation(),$e)H.style.display="none",$e=!1;else e({type:"get_devices"}),H.innerHTML='<div class="spotify-mini-device-loading">Loading devices…</div>',H.style.display="flex",$e=!0}),t.addEventListener("pointerdown",(r)=>r.stopPropagation());function oe(r){if(!t.contains(r.target))ve()}function ee(){let{x:r,y:b,w:T,h:Y}=o(),{innerWidth:De,innerHeight:Ce}=window,tt=Tt(ye),Ue=r+T/2-tt/2;Ue=Math.max(fe,Math.min(Ue,De-tt-fe)),t.style.left=`${Ue}px`,t.style.top="0px",t.style.visibility="hidden",t.style.transform="scale(1)",t.style.display="flex";let be=t.offsetHeight;ne=be,t.style.visibility="",t.style.transform="",t.style.display="";let _e,it=!1;if(b-be-fe>=fe)_e=b-be-fe;else _e=b+Y+fe,it=!0;_e=Math.max(fe,Math.min(_e,Ce-be-fe)),t.style.left=`${Ue}px`,t.style.top=`${_e}px`;let st=r+T/2-Ue,nt=it?-fe:be+fe;t.style.transformOrigin=`${st}px ${nt}px`}function ut(){if(!R||!ne)return;let{x:r,y:b,w:T,h:Y}=o(),{innerWidth:De,innerHeight:Ce}=window,tt=Tt(ye),Ue=r+T/2-tt/2;Ue=Math.max(fe,Math.min(Ue,De-tt-fe));let be,_e=!1;if(b-ne-fe>=fe)be=b-ne-fe;else be=b+Y+fe,_e=!0;be=Math.max(fe,Math.min(be,Ce-ne-fe)),t.style.left=`${Ue}px`,t.style.top=`${be}px`;let it=r+T/2-Ue,st=_e?-fe:ne+fe;t.style.transformOrigin=`${it}px ${st}px`}function Qe(){if(!document.body.contains(t))document.body.appendChild(t);if(ee(),t.classList.remove("open","closing"),t.offsetHeight,t.classList.add("open"),R=!0,ge)K();setTimeout(()=>document.addEventListener("click",oe),0)}function ve(){if(!R)return;R=!1,document.removeEventListener("click",oe),Ze(),ee(),t.classList.remove("open"),t.classList.add("closing");let r=()=>{t.classList.remove("closing"),t.removeEventListener("transitionend",r)};t.addEventListener("transitionend",r),setTimeout(r,250)}function ot(r,b){if(le=r,qe=b,_){me={state:r,connected:b};return}if(!b||!r){J=!1,Se=!1,s.setUrl(null),z.style.display="none",C.style.display="none",V.style.display="none",U.style.display="none",Z.style.display="none",te.style.display="none",H.style.display="none",$e=!1,W.style.display="",W.textContent=!b?"Connect to Subsonic in Settings":"No active playback",S=0,w.style.width="0%",g.textContent=ct(0),E.textContent=ct(0),Ze();return}z.style.display="",C.style.display="";let T=Ne();if(U.style.display=T?"flex":"none",U.hidden=!T,F.disabled=!T,D.disabled=!T,j.disabled=!T,Z.hidden=!0,Z.style.display="none",W.style.display="none",r.deviceName)N.textContent=r.deviceName,te.style.display="",Ve=r.deviceId??null;else te.style.display="none";if(d.textContent=r.trackName,f.textContent=r.artistName,c.textContent=r.albumName,S=r.durationMs,s.setUrl(je(r.albumArtUrl,r.trackUri)),O=r.isPlaying,ge=r.isPlaying,D.innerHTML=O?kn:on,!J){de=r.progressMs,ze=Date.now();let Y=r.durationMs>0?r.progressMs/r.durationMs*100:0;w.style.width=`${Y}%`,g.textContent=ct(r.progressMs)}if(E.textContent=ct(r.durationMs),r.volume!==null&&!Se)X.value=String(r.volume);if(R&&O)K();else Ze();Ke()}function et(r,b,T,Y){Me=r,pe=dt(T),he=Tn(b),Ie=Y,re=!1,q=-1,Ke(!0)}function u(r){if(re=r,r)Me=le?.trackUri??null,pe=[],he=[],Ie=!1,q=-1;Ke(!0)}function A(r){if(ye=r,t.dataset.style=r,t.style.setProperty("--spotify-mini-player-width",`${Tt(r)}px`),Ke(!0),R)ee()}function ue(r){if(_){Re=r;return}if(H.innerHTML="",r.length===0){H.innerHTML='<div class="spotify-mini-device-loading">No devices found</div>';return}for(let b of r){let T=document.createElement("div");if(T.className=`spotify-mini-device-item${b.isActive?" active":""}`,T.innerHTML=`<span class="spotify-mini-device-item-name">${b.name}</span><span class="spotify-mini-device-item-type">${b.type}</span>`,!b.isActive)T.addEventListener("click",(Y)=>{Y.stopPropagation(),e({type:"transfer_playback",deviceId:b.id}),H.style.display="none",$e=!1});H.appendChild(T)}}function ce(r){if(_){Fe=r;return}X.value=String(r)}return{root:t,update:ot,updateLyrics:et,setLyricsLoading:u,setLyricsUpdateSuspended(r){if(xe=r,!r)Be()},setUiSuspended(r){if(_=r,xe=r,r){Ze();return}if(Ge(),R&&ge)K()},setStyle:A,setDevices:ue,setVolume:ce,onVolumeChange(r){ke.add(r)},toggle(){if(R)ve();else Qe()},hide:ve,isOpen:()=>R,reposition:ut,destroy(){ve(),Ze(),Oe(),ae(),ke.clear(),t.remove()}}}var zn='<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>',ln='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',In='<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',An='<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>',Un='<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>',_n='<svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>',Rn='<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>',zt='<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',Hn=4000;function St(e){let n=Math.floor(e/1000),o=Math.floor(n/60),t=n%60;return`${o}:${t.toString().padStart(2,"0")}`}function On(e){if(!e)return[];return e.split(/\r?\n/).map((n)=>n.trim()).filter(Boolean)}function pt(e){e.addEventListener("pointerdown",(n)=>n.stopPropagation()),e.addEventListener("pointermove",(n)=>n.stopPropagation()),e.addEventListener("pointerup",(n)=>n.stopPropagation()),e.addEventListener("touchstart",(n)=>n.stopPropagation(),{passive:!0}),e.addEventListener("touchmove",(n)=>n.stopPropagation(),{passive:!0}),e.addEventListener("touchend",(n)=>n.stopPropagation(),{passive:!0}),e.addEventListener("click",(n)=>n.stopPropagation())}function It(e){let n=document.createElement("div");n.className=`${e} spotify-modern-widget-marquee`,n.dataset.marqueePhase="idle";let o=document.createElement("div");o.className=`${e}-content spotify-modern-widget-marquee-content`,n.appendChild(o);let t=null;function s(){if(t)clearTimeout(t),t=null;n.dataset.marqueePhase="idle",o.classList.remove("spotify-modern-widget-marquee-animate")}function p(f){if(n.dataset.marqueePhase="scrolling",o.classList.remove("spotify-modern-widget-marquee-animate"),f)o.offsetWidth;o.classList.add("spotify-modern-widget-marquee-animate")}function d(f){if(t)clearTimeout(t),t=null;n.dataset.marqueePhase="rest",o.classList.remove("spotify-modern-widget-marquee-animate"),t=setTimeout(()=>{t=null,p(f)},Hn)}return o.addEventListener("animationend",(f)=>{if(f.animationName!=="spotify-modern-marquee"||n.dataset.marqueePhase!=="scrolling")return;d(!0)}),{root:n,setText(f){o.textContent=f,n.setAttribute("aria-label",f)},refresh(f,c=!1){if(!f){n.dataset.overflow="false",s(),n.style.removeProperty("--spotify-modern-marquee-distance"),n.style.removeProperty("--spotify-modern-marquee-duration");return}let m=Math.ceil(o.scrollWidth-n.clientWidth);if(m<=6){n.dataset.overflow="false",s(),n.style.removeProperty("--spotify-modern-marquee-distance"),n.style.removeProperty("--spotify-modern-marquee-duration");return}n.dataset.overflow="true",n.style.setProperty("--spotify-modern-marquee-distance",`${m}px`),n.style.setProperty("--spotify-modern-marquee-duration",`${Math.max(8,Math.min(20,8+m/18))}s`);let y=t!==null,x=n.dataset.marqueePhase==="scrolling";if(c||!y&&!x)d(c)}}}function dn(e,n,o){let t=document.createElement("div");t.className="spotify-modern-widget-player",t.dataset.expanded="false",t.dataset.transport="false";let s=document.createElement("div");s.className="spotify-modern-widget-compact";let p=Ye("spotify-modern-widget-compact-art"),d=document.createElement("div");d.className="spotify-modern-widget-compact-fallback",d.innerHTML=zt;let f=document.createElement("div");f.className="spotify-modern-widget-compact-overlay";let c=document.createElement("div");c.className="spotify-modern-widget-compact-status";let m=document.createElement("div");m.className="spotify-modern-widget-compact-progress",f.appendChild(c),s.appendChild(p.el),s.appendChild(d),s.appendChild(f),s.appendChild(m);let y=document.createElement("div");y.className="spotify-modern-widget-expanded";let x=document.createElement("div");x.className="spotify-modern-widget-header";let C=document.createElement("div");C.className="spotify-modern-widget-eyebrow",C.textContent="Now Playing";let g=document.createElement("div");g.className="spotify-modern-widget-header-buttons";let L=document.createElement("button");L.className="spotify-modern-widget-icon-btn",L.innerHTML=_n,L.title="Open full player";let w=document.createElement("button");w.className="spotify-modern-widget-icon-btn",w.innerHTML=Rn,w.title="Collapse",pt(L),pt(w),L.addEventListener("click",()=>n()),w.addEventListener("click",()=>o()),g.appendChild(L),g.appendChild(w),x.appendChild(C),x.appendChild(g);let E=document.createElement("div");E.className="spotify-modern-widget-hero";let U=Ye("spotify-modern-widget-art");U.el.title="Collapse";let v=document.createElement("div");v.className="spotify-modern-widget-art-fallback",v.innerHTML=zt,v.title="Collapse",pt(U.el),pt(v),U.el.addEventListener("click",()=>o()),v.addEventListener("click",()=>o());let F=document.createElement("div");F.className="spotify-modern-widget-meta";let D=It("spotify-modern-widget-track"),j=It("spotify-modern-widget-artist"),Z=It("spotify-modern-widget-album");F.appendChild(D.root),F.appendChild(j.root),F.appendChild(Z.root),E.appendChild(U.el),E.appendChild(v),E.appendChild(F);let G=document.createElement("div");G.className="spotify-modern-widget-progress-row";let X=document.createElement("span");X.className="spotify-modern-widget-time";let te=document.createElement("div");te.className="spotify-modern-widget-progress-bar";let M=document.createElement("div");M.className="spotify-modern-widget-progress-fill",te.appendChild(M);let N=document.createElement("span");N.className="spotify-modern-widget-time",G.appendChild(X),G.appendChild(te),G.appendChild(N);let B=document.createElement("div");B.className="spotify-modern-widget-lyrics";let H=document.createElement("div");H.className="spotify-modern-widget-section-label",H.textContent="Lyrics";let W=document.createElement("div");W.className="spotify-modern-widget-lyrics-body";let z=document.createElement("div");z.className="spotify-modern-widget-lyrics-track",W.appendChild(z),B.appendChild(H),B.appendChild(W);let V=document.createElement("div");V.className="spotify-modern-widget-controls";let I=document.createElement("button");I.className="spotify-modern-widget-btn",I.innerHTML=zn;let Q=document.createElement("button");Q.className="spotify-modern-widget-btn spotify-modern-widget-btn-main",Q.innerHTML=ln;let h=document.createElement("button");h.className="spotify-modern-widget-btn",h.innerHTML=An,V.appendChild(I),V.appendChild(Q),V.appendChild(h);let k=document.createElement("div");k.className="spotify-modern-widget-volume-row";let O=document.createElement("span");O.className="spotify-modern-widget-volume-icon",O.innerHTML=Un;let S=document.createElement("input");S.type="range",S.min="0",S.max="100",S.value="50",S.className="spotify-modern-widget-volume-slider",k.appendChild(O),k.appendChild(S);let R=document.createElement("div");R.className="spotify-modern-widget-empty";let ne=document.createElement("div");ne.className="spotify-modern-widget-empty-icon",ne.innerHTML=zt;let ye=document.createElement("div");ye.className="spotify-modern-widget-empty-title",ye.textContent="No music playing.";let le=document.createElement("div");le.className="spotify-modern-widget-empty-subtitle",le.textContent="Your speakers are enjoying a brief moment of mindfulness.",R.appendChild(ne),R.appendChild(ye),R.appendChild(le),y.appendChild(x),y.appendChild(E),y.appendChild(G),y.appendChild(B),y.appendChild(V),y.appendChild(k),y.appendChild(R),t.appendChild(s),t.appendChild(y),[te,I,Q,h,S].forEach((u)=>pt(u)),pt(W);let qe=!1,de=null,ze=!1,ge=0,Ee=0,Me=0,pe=!1,he=null,Ie=null,re=Lt(),q=[],xe=!1,se=!1,_="",me=[],Re=Et(W),Fe="",J=null,Se=null,Le=!1,Pe=!1,Be=new ResizeObserver(()=>{Ae(!1)});Be.observe(F),Be.observe(t);let Ge=new ResizeObserver(()=>{if(!ze)return;Ne(!0)});Ge.observe(W);function Ae(u){requestAnimationFrame(()=>{D.refresh(ze,u),j.refresh(ze,u),Z.refresh(ze,u)})}function Je(u){if(J)clearTimeout(J);if(Se)clearTimeout(Se);Ae(u),J=setTimeout(()=>Ae(u),180),Se=setTimeout(()=>Ae(u),460)}function Xe(u){p.setUrl(u),d.style.display=u?"none":"flex"}function We(u){U.setUrl(u),v.style.display=u?"none":"flex"}function Ke(){if(!pe)return Ee;return Math.min(Ee+Math.max(0,Date.now()-Me),ge||1/0)}function He(u,A){m.style.setProperty("--spotify-modern-widget-compact-progress",`${Math.max(0,Math.min(100,u))}%`),m.style.opacity=A?"1":"0"}function K(){Re.cancel(),z.innerHTML="",W.scrollTop=0,me=[]}function Ze(){K(),me=re.getIndexedLines().map((A,ue)=>{let ce=document.createElement("div");return ce.className="spotify-modern-widget-lyric-line spotify-modern-widget-lyric-line-enter",ce.style.setProperty("--spotify-modern-lyric-enter-delay",`${Math.min(ue*22,110)}ms`),ce.textContent=A.displayText,z.appendChild(ce),ce})}function Ne(u=!1){if(!re.hasLyrics())return;let A=re.getActiveLineIndex(),ue=A>=0?me[A]:me[0];if(ue)Re.center(ue,{force:u})}function Oe(u=!0){let A=re.getActiveLineIndex();if(re.getIndexedLines().forEach((ce,r)=>{let b=me[r];if(!b)return;if(b.className="spotify-modern-widget-lyric-line",ce.index===A)b.classList.add("active");else if(A>=0){let T=Math.abs(ce.index-A);if(T===1)b.classList.add("near");else if(T===2)b.classList.add("mid");else b.classList.add("far")}else b.classList.add("far")}),!u)return;Ne()}function ke(){if(K(),!qe||!de){_="";let A=document.createElement("div");A.className="spotify-modern-widget-lyrics-status",A.textContent=qe?"Start playback to see lyrics":"Connect Subsonic to see lyrics",z.appendChild(A);return}if(se){_="loading";let A=document.createElement("div");A.className="spotify-modern-widget-lyrics-status spotify-modern-widget-lyrics-status-loading",A.textContent="Loading lyrics...",z.appendChild(A);return}if(xe){_="instrumental";let A=document.createElement("div");A.className="spotify-modern-widget-lyrics-status",A.textContent="♪ Instrumental",z.appendChild(A);return}if(re.hasLyrics()&&de.trackUri===Ie){_=re.getIndexedLines().map((ue)=>`${ue.index}:${ue.text}`).join("|"),Ze(),Oe(!1);return}if(q.length>0){let A=q.join("|"),ue=A!==_;_=A,q.forEach((ce,r)=>{let b=document.createElement("div");if(b.className="spotify-modern-widget-lyric-line plain",ue)b.classList.add("spotify-modern-widget-lyric-line-enter"),b.style.setProperty("--spotify-modern-lyric-enter-delay",`${Math.min(r*20,100)}ms`);b.textContent=ce,z.appendChild(b)});return}_="empty";let u=document.createElement("div");u.className="spotify-modern-widget-lyrics-status",u.textContent="No lyrics available",z.appendChild(u)}function ae(u=!1){if(!de||de.trackUri!==Ie||!re.hasLyrics()){if(u)ke();return}if(re.setPlayback({trackUri:de.trackUri,progressMs:Ke(),durationMs:ge,isPlaying:pe,updatedAt:Date.now()}),u){ke();return}if(re.refreshActiveLineIndex())Oe(!0)}function $e(){if(!de||!qe||!pe||!ge){he=null;return}if(Le){he=requestAnimationFrame($e);return}let u=Ke(),A=ge>0?u/ge*100:0;M.style.width=`${A}%`,He(A,!0),X.textContent=St(u),ae(),he=requestAnimationFrame($e)}function Ve(){if(he!==null)return;he=requestAnimationFrame($e)}function oe(){if(he!==null)cancelAnimationFrame(he),he=null}function ee(){return de?.source==="feishin"||de?.source==="jukebox"}I.addEventListener("click",()=>{if(ee())e({type:"previous"})}),h.addEventListener("click",()=>{if(ee())e({type:"next"})}),Q.addEventListener("click",()=>{if(ee())e({type:de?.isPlaying?"pause":"play"})});let ut=Mt(te,{getMaxValue:()=>ge,onInteractChange(u){Le=u},onPreview(u){let A=ge>0?u/ge*100:0;M.style.width=`${A}%`,He(A,ge>0),X.textContent=St(u)},onCommit(u){if(de)de={...de,progressMs:u};if(Ee=u,Me=Date.now(),ae(!0),e({type:"seek",positionMs:u}),pe)Ve()},stopPropagation:!0}),Qe=Ct(S,{onInteractChange(u){Pe=u},onCommit(u){e({type:"set_volume",percent:u})},stopPropagation:!0});function ve(u,A){if(de=u,qe=A,t.dataset.empty=!u?"true":"false",!A||!u){Le=!1,Pe=!1,C.textContent=A?"Standby":"Connect Subsonic",c.textContent=A?"No playback":"Connect Subsonic",R.style.display="grid",E.style.display="none",G.style.display="none",B.style.display="none",V.style.display="none",k.style.display="none",He(0,!1),Xe(null),We(null),re.setPlayback(null),Fe="",oe(),ke();return}C.textContent="Now Playing";let ue=je(u.albumArtUrl,u.trackUri);Xe(ue),We(ue),c.textContent=u.isPlaying?"Playing":"Paused";let ce=`${u.trackName}|${u.artistName}|${u.albumName}`,r=ce!==Fe;Fe=ce,D.setText(u.trackName),j.setText(u.artistName),Z.setText(u.albumName),E.style.display="grid",G.style.display="grid",B.style.display="grid",R.style.display="none",ge=u.durationMs,pe=u.isPlaying;let b=ee(),T=t.dataset.transport!==String(b);if(t.dataset.transport=String(b),V.style.display=b?"flex":"none",V.hidden=!b,I.disabled=!b,Q.disabled=!b,h.disabled=!b,k.hidden=!0,k.style.display="none",re.setPlayback({trackUri:u.trackUri,progressMs:Le?Ee:u.progressMs,durationMs:u.durationMs,isPlaying:u.isPlaying,updatedAt:Le?Me:Date.now()}),Q.innerHTML=u.isPlaying?In:ln,!Pe)S.value=String(u.volume??Number(S.value));if(!Le){Ee=u.progressMs,Me=Date.now();let Y=u.durationMs>0?u.progressMs/u.durationMs*100:0;M.style.width=`${Y}%`,He(Y,u.durationMs>0),X.textContent=St(u.progressMs)}if(N.textContent=St(u.durationMs),re.hasLyrics()&&u.trackUri===Ie)if(me.length===0)ke();else ae();else if(z.childElementCount===0)ke();if(T&&re.hasLyrics()&&u.trackUri===Ie)requestAnimationFrame(()=>requestAnimationFrame(()=>Oe(!0)));if(Je(r),u.isPlaying)Ve();else oe()}function ot(u,A,ue,ce){Ie=u;let r=dt(ue);re.setLyrics(r),q=On(A),xe=ce,se=!1,ae(!0)}function et(u){if(se=u,u)Ie=de?.trackUri??null,re.clear(),q=[],xe=!1;ke()}return{root:t,update:ve,updateLyrics:ot,setLyricsLoading:et,setLyricsBlur(u){if(u)B.style.removeProperty("--spotify-lyrics-enter-blur");else B.style.setProperty("--spotify-lyrics-enter-blur","0px")},setAutoScrollSuspended(u){if(Re.suspend(u)&&!u&&re.hasLyrics())Oe(!0)},setCollapsedSize(u){t.style.setProperty("--spotify-modern-widget-collapsed-size",`${u}px`)},setExpanded(u){if(ze=u,t.dataset.expanded=String(u),Je(!0),u)requestAnimationFrame(()=>Ne(!0))},isExpanded(){return ze},destroy(){if(oe(),Re.destroy(),ut(),Qe(),J)clearTimeout(J);if(Se)clearTimeout(Se);Be.disconnect(),Ge.disconnect(),p.destroy(),U.destroy(),t.remove()}}}var At="right",Dn='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',qn='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';function Fn(e){try{return new Date(e).toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return""}}function cn(e,n){let o=new Map,t=new Map,s=new Map,p=null,d=null,f=null,c=null,m=null,y=null,x=null,C=null,g=null,L=null;function w(h){return o.get(h)?.get(t.get(h)??0)??null}function E(h){return(o.get(h)?.size??0)>0}function U(h){let k=s.get(h);if(k)k.style.display=w(h)?"":"none"}function v(h){if(!E(h))return;let k=s.get(h);if(!k||!k.isConnected){let O=e.dom.findMessageElement(h);if(!O)return;let S=e.dom.inject(O,`<button type="button" class="spotify-song-badge" aria-label="Song that was playing" title="Song that was playing">${Dn}</button>`,"beforeend");S.classList.add("spotify-song-badge-wrap"),S.dataset.corner=At,S.addEventListener("click",(R)=>{R.stopPropagation(),R.preventDefault(),B(h,S)}),s.set(h,S),k=S}U(h)}function F(){for(let{messageId:h}of e.dom.listMessageElements())if(E(h))v(h)}function D(){if(d)return;d=document.createElement("div"),d.className="spotify-song-pop";let h=document.createElement("div");h.className="spotify-song-pop-header",h.textContent="Playing when generated";let k=document.createElement("div");k.className="spotify-song-pop-body",f=Ye("spotify-song-pop-art"),f.el.style.display="";let O=document.createElement("div");O.className="spotify-song-pop-info",c=document.createElement("div"),c.className="spotify-song-pop-track",m=document.createElement("div"),m.className="spotify-song-pop-artist",y=document.createElement("div"),y.className="spotify-song-pop-album",x=document.createElement("div"),x.className="spotify-song-pop-when",O.append(c,m,y,x),k.append(f.el,O);let S=document.createElement("div");S.className="spotify-song-pop-actions",C=document.createElement("button"),C.type="button",C.className="spotify-song-pop-btn spotify-song-pop-btn-primary",C.innerHTML=`${qn}<span>Play</span>`,C.addEventListener("click",(R)=>{R.stopPropagation();let ne=g?w(g):null;if(ne?.trackUri)n({type:"play",trackUri:ne.trackUri});N()}),S.appendChild(C),d.append(h,k,S),d.addEventListener("click",(R)=>R.stopPropagation()),document.body.appendChild(d)}function j(h){if(D(),!h){if(f?.setUrl(null),c)c.textContent="No track playing";if(m)m.textContent="";if(y)y.textContent="Nothing was playing when this version was written.";if(x)x.textContent="";if(C)C.style.display="none";return}if(f?.setUrl(je(h.albumArtUrl,h.trackUri)),c)c.textContent=h.trackName;if(m)m.textContent=h.artistName;if(y)y.textContent=h.albumName;if(x)x.textContent=Fn(h.capturedAt);if(C)C.style.display=""}function Z(h){if(!d)return;let k=h.getBoundingClientRect(),O=d.offsetWidth||280,S=d.offsetHeight||200,R=8,ne=k.top-S-8,ye="bottom";if(ne<R)ne=k.bottom+8,ye="top";let le=At==="right"?k.right-O:k.left;le=Math.max(R,Math.min(le,window.innerWidth-O-R)),ne=Math.max(R,Math.min(ne,window.innerHeight-S-R)),d.style.left=`${le}px`,d.style.top=`${ne}px`,d.style.transformOrigin=`${ye} ${At}`}function G(h){let k=h.target;if(!(k instanceof Node))return;if(d?.contains(k)||L?.contains(k))return;N()}function X(){N()}function te(h){if(h.key==="Escape")N()}function M(h,k){j(w(h)),g=h,L=k,d.classList.add("open"),Z(k),setTimeout(()=>{document.addEventListener("click",G,!0),window.addEventListener("scroll",X,!0),window.addEventListener("resize",X,!0),document.addEventListener("keydown",te,!0)},0)}function N(){if(!d||!g)return;d.classList.remove("open"),g=null,L=null,document.removeEventListener("click",G,!0),window.removeEventListener("scroll",X,!0),window.removeEventListener("resize",X,!0),document.removeEventListener("keydown",te,!0)}function B(h,k){if(g===h)N();else{if(g)N();M(h,k)}}function H(h,k){if(h!==p)I();p=h;let O=new Set(k.map((S)=>S.messageId));for(let S of[...o.keys()])if(!O.has(S))V(S);for(let S of k){let R=new Map;for(let[ne,ye]of Object.entries(S.bySwipe))R.set(Number(ne),ye);o.set(S.messageId,R),t.set(S.messageId,S.activeSwipe),v(S.messageId)}F()}function W(h,k,O,S){if(p&&h!==p)return;p=h;let R=o.get(k)??new Map;if(R.set(O,S),o.set(k,R),t.set(k,O),v(k),g===k)j(w(k))}function z(h,k){if(t.set(h,k),U(h),g===h){let O=w(h);if(O)j(O);else N()}}function V(h){if(g===h)N();o.delete(h),t.delete(h);let k=s.get(h);if(k){try{e.dom.uninject(k)}catch{}s.delete(h)}}function I(){N();for(let h of s.values())try{e.dom.uninject(h)}catch{}s.clear(),o.clear(),t.clear(),p=null}function Q(){I(),f?.destroy(),d?.remove(),d=null}return{setChatSongs:H,setMessageSong:W,decorate:v,decorateMounted:F,setActiveSwipe:z,removeMessage:V,reset:I,destroy:Q}}var Bn={width:320,height:196},Wn={width:348,height:520};var pn={width:300,height:420};function mn({desktopPopout:e,hasPlayback:n,viewportHeight:o,viewportWidth:t}){let s=n?Wn:Bn;if(e)return{...s};if(!n)return{width:Math.max(280,Math.min(s.width,t-24)),height:s.height};return{width:Math.max(pn.width,Math.min(s.width,t-24)),height:Math.max(pn.height,Math.min(s.height,o-24))}}var un='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',mt=12,fn="subsonic-controls-widget-prefs";function yn(e){let n=[],o="__TAURI_INTERNALS__"in window&&new URLSearchParams(window.location.search).has("desktopWidgetExtension");n.push(e.dom.addStyle(Gt));let t=(i)=>e.sendToBackend(i),s=null,p=0,d=null,f=new Map,c=48,m=new Map;function y(i){if(/^(data|blob):/i.test(i))return Promise.resolve(i);return new Promise((l)=>{let a=crypto.randomUUID(),P=setTimeout(()=>{m.delete(a),l(null)},15000);m.set(a,{resolve:l,timer:P}),e.sendToBackend({type:"__cors_proxy_request",requestId:a,url:i,options:{method:"GET",mediaType:"image"}})})}function x(i,l){let a=m.get(i);if(!a)return;m.delete(i),clearTimeout(a.timer);let P=l?.headers?.["content-type"]||l?.headers?.["Content-Type"]||"image/jpeg";a.resolve(l?.status&&l.status>=200&&l.status<300&&l.encoding==="base64"&&l.body?`data:${P};base64,${l.body}`:null)}function C(){if(d)clearTimeout(d);d=null}function g(){C(),p+=1,t({type:"album_colors",colors:null})}function L(i,l){f.delete(i),f.set(i,l);while(f.size>c){let a=f.keys().next().value;if(!a)break;f.delete(a)}}function w(i=1800){C(),d=setTimeout(()=>{d=null,g()},i)}function E(i){return new Promise((l)=>{let a=new Image;a.onload=()=>{try{let P=document.createElement("canvas"),ie=32;P.width=32,P.height=32;let we=P.getContext("2d");if(!we)return l(null);we.drawImage(a,0,0,32,32);let Te=we.getImageData(0,0,32,32).data,bt=0,at=0,Rt=0.5,Ht=-1,Ot=0,Dt=0,qt=0,xt=0;for(let ft=0;ft<Te.length;ft+=4){let $t=Te[ft],Vt=Te[ft+1],jt=Te[ft+2];Ot+=$t,Dt+=Vt,qt+=jt,xt+=1;let yt=$t/255,lt=Vt/255,gt=jt/255,rt=Math.max(yt,lt,gt),ht=Math.min(yt,lt,gt),Pt=(rt+ht)/2,wt=0,Nt=0;if(rt!==ht){let vt=rt-ht;if(Nt=Pt>0.5?vt/(2-rt-ht):vt/(rt+ht),rt===yt)wt=((lt-gt)/vt+(lt<gt?6:0))/6;else if(rt===lt)wt=((gt-yt)/vt+2)/6;else wt=((yt-lt)/vt+4)/6}let Yt=Nt*(1-Math.abs(Pt-0.5)*1.6);if(Yt>Ht)Ht=Yt,bt=wt,at=Nt,Rt=Pt}let Ft=Math.round(Ot/xt),Bt=Math.round(Dt/xt),Wt=Math.round(qt/xt),bn=0.299*Ft+0.587*Bt+0.114*Wt;l({dominant:{r:Ft,g:Bt,b:Wt},dominantHsl:{h:Math.round(bt*360),s:Math.round(at*100),l:Math.round(Rt*100)},isLight:bn>152})}catch{l(null)}},a.onerror=()=>l(null),y(i).then((P)=>{if(P)a.src=P;else l(null)})})}let U="none",v=Xt(t);e.ui.mount("settings_extensions").appendChild(v.root),n.push(()=>v.destroy());let D=e.ui.registerDrawerTab({id:"subsonic",title:"Subsonic Controls",shortName:"Subsonic",description:"Browse a Subsonic-compatible music server and control its optional Jukebox.",keywords:["subsonic","opensubsonic","music","jukebox","lyrics"],headerTitle:"Subsonic",iconSvg:un});n.push(()=>D.destroy()),D.root.classList.add("spotify-tab-root");let j=document.createElement("div");j.className="spotify-panel",D.root.appendChild(j);function Z(){let i=D.root.getBoundingClientRect().top,l=D.root.parentElement?.getBoundingClientRect().bottom??window.innerHeight,a=window.visualViewport?.height??window.innerHeight,P=Math.min(l,a);D.root.style.setProperty("--spotify-tab-height",`${Math.max(240,P-i-2)}px`)}Z();let G=new ResizeObserver(Z);G.observe(D.root),window.addEventListener("resize",Z),n.push(()=>{G.disconnect(),window.removeEventListener("resize",Z)});let X=Jt(),te=new Set(["play","pause","next","previous","shuffle","queue"]),M=Kt(t),N=Zt(t),B=Qt(t),H=nn();j.append(X.root,M.root,N.root,H.root,B.root),n.push(()=>X.destroy(),()=>M.destroy(),()=>N.destroy(),()=>B.destroy(),()=>H.destroy());let W=!1,z=null,V=null,I=!1,Q="",h="",k=!1,O="",S="",R=!1,ne=1000,ye=null,le={small:36,medium:48,large:64},qe={small:112,medium:128,large:144},de=24,ze=256,ge=96,Ee=256;function Me(i){return i==="modern"?qe:le}function pe(i){return i==="modern"?{min:ge,max:Ee}:{min:de,max:ze}}function he(i,l){let{min:a,max:P}=pe(l);return Math.max(a,Math.min(i,P))}function Ie(i){return i==="small"||i==="medium"||i==="large"||i==="custom"}function re(i,l){let a=Me(l);if(i===a.small)return"small";if(i===a.large)return"large";return i===a.medium?"medium":"custom"}let q=48,xe="circle",se="medium",_="default",me=!0,Re,Fe=null;try{let i=JSON.parse(localStorage.getItem(fn)||"null");if(i?.miniPlayerStyle==="modern")_="modern";if(i?.lyricsBlur===!1)me=!1;if(typeof i?.size==="number")q=he(i.size,_);if(i?.shape==="squircle")xe="squircle";if(se=Ie(i?.sizeMode)?i.sizeMode:re(q,_),se!=="custom")q=Me(_)[se];if(typeof i?.x==="number"&&typeof i.y==="number")Re={x:i.x,y:i.y};if(i)Fe={size:q,shape:xe,sizeMode:se,miniPlayerStyle:_,lyricsBlur:me,...Re}}catch{}let J,Se=null,Le=!1;function Pe(){let i=J.getPosition(),l={size:q,shape:xe,sizeMode:se,miniPlayerStyle:_,lyricsBlur:me,x:i.x,y:i.y};Le=!0,localStorage.setItem(fn,JSON.stringify(l)),t({type:"set_widget_preferences",preferences:l})}let Be=null,Ge=null,Ae=null;function Je(){let{min:i,max:l}=pe(_);if(Be)Be.textContent=_==="modern"?"Collapsed Modern Player Size (px)":"Custom Widget Size (px)";if(Ge)Ge.textContent=_==="modern"?`Controls the compact size of the modern player before it expands (${i}–${l}px).`:`Controls the floating widget size (${i}–${l}px).`;if(Ae)Ae.min=String(i),Ae.max=String(l),Ae.placeholder=_==="modern"?"e.g. 128":"e.g. 56",Ae.value=se==="custom"?String(q):""}let Xe=v.root.querySelector(".spotify-settings-card-body");if(Xe){let i=document.createElement("div");i.style.cssText="height:1px;background:var(--lumiverse-border);margin:4px 0";let l=document.createElement("label");l.className="spotify-settings-label",Be=document.createElement("span"),Ge=document.createElement("div"),Ge.style.cssText="font-size:0.8em;opacity:0.6;margin-top:2px";let a=document.createElement("div");a.className="spotify-settings-row";let P=document.createElement("input");P.className="spotify-input",P.type="number",P.step="1",P.style.width="80px",Ae=P;let ie=document.createElement("button");ie.type="button",ie.className="spotify-btn spotify-btn-primary",ie.textContent="Apply",ie.style.cssText="font-size:0.85em;padding:4px 12px";let we=()=>{let Te=P.valueAsNumber;if(!Number.isFinite(Te))return;se="custom",b(he(Math.round(Te),_))};ie.addEventListener("click",we),P.addEventListener("keydown",(Te)=>{if(Te.key!=="Enter")return;Te.preventDefault(),we()}),a.append(P,ie),l.append(Be,a,Ge),Xe.append(i,l)}Je();let We=null;function Ke(){if(We)We.checked=me}function He(){H.setBlurEnabled(me),oe.setLyricsBlur(me),Ke()}if(Xe){let i=document.createElement("div");i.style.cssText="height:1px;background:var(--lumiverse-border);margin:4px 0";let l=document.createElement("label");l.className="spotify-settings-check";let a=document.createElement("input");a.type="checkbox",a.checked=me,We=a;let P=document.createElement("span");P.textContent="Lyrics blur",l.append(a,P);let ie=document.createElement("div");ie.style.cssText="font-size:0.8em;opacity:0.65;margin-top:4px",ie.textContent="Depth-blurs receding lyric lines and fades new lines in through a blur. Turn off for crisp text.";let we=document.createElement("div");we.append(l,ie),a.addEventListener("change",()=>{me=a.checked,He(),Pe()}),Xe.append(i,we)}let K=document.createElement("div");K.className="spotify-float-widget";function Ze(){K.classList.remove("spotify-float-widget-mounted"),requestAnimationFrame(()=>requestAnimationFrame(()=>K.classList.add("spotify-float-widget-mounted")))}let Ne=document.createElement("div");Ne.className="spotify-float-widget-legacy";let Oe=document.createElement("div");Oe.className="spotify-float-widget-icon",Oe.innerHTML=un;let ke=Ye("spotify-float-widget-art");ke.el.style.display="none",Ne.append(Oe,ke.el),K.appendChild(Ne);let ae=!1,$e=420,Ve=null,oe=dn(t,()=>D.activate(),()=>u(!1));K.appendChild(oe.root);let ee=an(t,()=>D.activate(),()=>{let i=J.root.getBoundingClientRect();return{x:i.left,y:i.top,w:i.width,h:i.height}});ee.setStyle("default");function ut(){return mn({desktopPopout:o,hasPlayback:Boolean(z),viewportHeight:window.innerHeight,viewportWidth:window.innerWidth})}function Qe(i=ae){if(_==="modern")return i?ut():{width:q,height:q};return{width:q,height:q}}function ve(i=Qe()){let l=J.getPosition(),a=Math.max(mt,window.innerWidth-i.width-mt),P=Math.max(mt,window.innerHeight-i.height-mt),ie=Math.max(mt,Math.min(l.x,a)),we=Math.max(mt,Math.min(l.y,P));if(ie!==l.x||we!==l.y)J.moveTo(ie,we)}function ot(i,l=!1){if(Ve)clearTimeout(Ve);let a=()=>{Ve=null,J.setSize(i.width,i.height)};if(l)Ve=setTimeout(a,$e);else a()}function et({delaySizeRequest:i=!1}={}){let l=Qe(),a=_==="modern"&&ae?"pan-y":"none";if(J.root.style.touchAction=a,J.root.style.transition="width 420ms cubic-bezier(0.22, 1, 0.36, 1), height 420ms cubic-bezier(0.22, 1, 0.36, 1)",K.style.transition="width 420ms cubic-bezier(0.22, 1, 0.36, 1), height 420ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 420ms cubic-bezier(0.22, 1, 0.36, 1)",K.style.touchAction=a,oe.setCollapsedSize(q),_==="modern")K.classList.add("spotify-float-widget-modern-mode"),Ne.style.display="none",oe.root.style.display="block",J.root.style.width=`${l.width}px`,J.root.style.height=`${l.height}px`,K.style.width=`${l.width}px`,K.style.height=`${l.height}px`,K.style.borderRadius=ae?"30px":`${Math.max(18,Math.round(q*0.28))}px`,ot(l,i);else{K.classList.remove("spotify-float-widget-modern-mode"),Ne.style.display="flex",oe.root.style.display="none";let P=xe==="circle"?"50%":"22%";J.root.style.width=`${q}px`,J.root.style.height=`${q}px`,K.style.width=`${q}px`,K.style.height=`${q}px`,K.style.borderRadius=P;let ie=Math.round(q*0.5),we=Oe.querySelector("svg");if(we)we.style.width=`${ie}px`,we.style.height=`${ie}px`;ot(l)}}function u(i){let l=ae;ae=i&&_==="modern",ee.hide(),ve(Qe(ae)),oe.setExpanded(ae),et({delaySizeRequest:l&&!ae}),requestAnimationFrame(()=>ve(Qe()))}function A(){if(J.root.style.display=W?"":"none",!W)ee.hide(),ae=!1,oe.setExpanded(!1);ee.update(z,W),oe.update(z,W),ue(z)}function ue(i){let l=je(i?.albumArtUrl??null,i?.trackUri);Oe.style.display=l?"none":"flex",ke.el.style.display=l?"":"none",ke.setUrl(l)}function ce(i=Re){if(J=e.ui.createFloatWidget({width:q,height:q,tooltip:"Subsonic",chromeless:!0}),J.root.appendChild(K),Ze(),J.onDragEnd((l)=>{Se=l,ve(),Pe()}),et(),A(),i)J.moveTo(i.x,i.y)}function r(){b(q)}function b(i){ee.hide(),ae=!1,oe.setExpanded(!1);let l=J.getPosition();Se=l,J.destroy(),q=he(i,_),Je(),ce(l),ve(),Pe()}function T(i){let l=i.miniPlayerStyle==="modern"?"modern":"default",a=Ie(i.sizeMode)?i.sizeMode:re(i.size,l);_=l,me=i.lyricsBlur!==!1,xe=i.shape==="squircle"?"squircle":"circle",se=a,q=a==="custom"?he(i.size,l):Me(l)[a],ee.setStyle(l),ee.hide(),ae=!1,oe.setExpanded(!1);let P=typeof i.x==="number"&&typeof i.y==="number"?{x:i.x,y:i.y}:J.getPosition();Se=P,J.destroy(),Je(),ce(P),ve(),He()}let Y=0;async function De(i,l){let a=[{key:"small",label:"Small",active:se==="small"},{key:"medium",label:"Medium",active:se==="medium"},{key:"large",label:"Large",active:se==="large"},{key:"custom",label:"Custom…",active:se==="custom"}];if(_!=="modern")a.push({key:"shape-divider",label:"",type:"divider"},{key:"circle",label:"Circle",active:xe==="circle"},{key:"squircle",label:"Squircle",active:xe==="squircle"});a.push({key:"style-divider",label:"",type:"divider"},{key:"mini-default",label:"Default Mini Player",active:_==="default"},{key:"mini-modern",label:"Modern Lyrics Mini Player",active:_==="modern"}),Y+=1,ee.setUiSuspended(!0),oe.setAutoScrollSuspended(!0),H.setAutoScrollSuspended(!0);let P;try{({selectedKey:P}=await e.ui.showContextMenu({position:{x:i,y:l},items:a}))}finally{if(Y=Math.max(0,Y-1),Y===0)ee.setUiSuspended(!1),oe.setAutoScrollSuspended(!1),H.setAutoScrollSuspended(!1)}if(!P)return;if(P==="small"||P==="medium"||P==="large")se=P,b(Me(_)[P]);else if(P==="custom")e.events.emit("open-settings",{view:"extensions"});else if(P==="circle"||P==="squircle")xe=P,Pe(),et();else if(P==="mini-default"||P==="mini-modern"){if(_=P==="mini-modern"?"modern":"default",q=se==="custom"?he(q,_):Me(_)[se],ee.setStyle(_),_!=="modern")ae=!1,oe.setExpanded(!1);ee.hide(),Pe(),Je(),et(),ve()}}let Ce=!1,tt={x:0,y:0},Ue=5;K.addEventListener("pointerdown",(i)=>{if(Ce=!1,tt={x:i.clientX,y:i.clientY},!ee.isOpen())return;let l=null,a=()=>{if(Ce&&l===null)l=requestAnimationFrame(()=>{ee.reposition(),l=null})},P=()=>{if(document.removeEventListener("pointermove",a),l!==null)cancelAnimationFrame(l)};document.addEventListener("pointermove",a),document.addEventListener("pointerup",P,{once:!0})}),K.addEventListener("pointermove",(i)=>{if(Ce)return;let l=Math.abs(i.clientX-tt.x),a=Math.abs(i.clientY-tt.y);if(l>Ue||a>Ue)Ce=!0}),K.addEventListener("pointerup",()=>{requestAnimationFrame(()=>ve())}),K.addEventListener("click",(i)=>{if(Ce){i.stopPropagation(),Ce=!1;return}if(i.stopPropagation(),_==="modern"){if(!ae)u(!0);return}ee.toggle()}),K.addEventListener("contextmenu",(i)=>{i.preventDefault(),i.stopPropagation(),De(i.clientX,i.clientY)});let be=null,_e=!1,it={x:0,y:0};K.addEventListener("touchstart",(i)=>{_e=!1;let l=i.touches[0];it={x:l.clientX,y:l.clientY},be=setTimeout(()=>{_e=!0,navigator.vibrate?.(50),De(l.clientX,l.clientY)},500)}),K.addEventListener("touchmove",(i)=>{if(!be)return;let l=i.touches[0];if(Math.abs(l.clientX-it.x)>10||Math.abs(l.clientY-it.y)>10)clearTimeout(be),be=null}),K.addEventListener("touchend",(i)=>{if(be)clearTimeout(be),be=null;if(_e){_e=!1;return}if(_==="modern"&&ae){Ce=!1;return}if(!Ce){if(i.cancelable)i.preventDefault();if(_==="modern"){if(!ae)u(!0)}else ee.toggle()}Ce=!1}),ce(),ve(),He();let st=()=>{if(_==="modern"&&ae){et(),requestAnimationFrame(()=>ve(Qe()));return}ve()};window.addEventListener("resize",st),n.push(()=>window.removeEventListener("resize",st)),n.push(()=>{if(Ve)clearTimeout(Ve);Se=J.getPosition(),Pe(),ke.destroy(),ee.destroy(),oe.destroy(),J.destroy()});let nt=cn(e,t);n.push(()=>nt.destroy());let Ut=(i)=>{if(i)t({type:"get_chat_songs",chatId:i})};Ut(e.getActiveChat().chatId),n.push(e.events.on("CHAT_SWITCHED",(i)=>{nt.reset(),Ut(i.chatId||null)})),n.push(e.events.on("CHARACTER_MESSAGE_RENDERED",(i)=>{let l=i.messageId;if(l)nt.decorate(l)})),n.push(e.events.on("MESSAGE_SWIPED",(i)=>{let l=i.message;if(l?.id)nt.setActiveSwipe(l.id,l.swipe_id||0)})),n.push(e.events.on("MESSAGE_DELETED",(i)=>{let l=i.messageId;if(l)nt.removeMessage(l)}));let hn=e.onBackendMessage((i)=>{let l=i;if(l.type==="__cors_proxy_response"&&l.requestId){x(l.requestId,l.error?void 0:l.result);return}let a=i;switch(a.type){case"config":if(Q&&Q!==a.serverUrl)f.clear();U=a.remoteControl,W=a.connected,I=a.remoteControl==="jukebox",Q=a.serverUrl,h=a.username,k=a.hasPassword,O=a.feishinUrl,S=a.feishinUsername,R=a.hasFeishinPassword,ne=a.playbackPositionOffsetMs,ye=a.jukeboxUnavailableReason,v.update(a.connected,a.serverUrl,a.username,a.hasPassword,a.remoteControl,a.feishinUrl,a.feishinUsername,a.hasFeishinPassword,a.playbackPositionOffsetMs,a.jukeboxUnavailableReason),N.setAvailable(!0),N.setPlaybackAvailable(a.remoteControl==="jukebox"),B.setPlaybackAvailable(a.remoteControl==="jukebox"),t({type:"get_playlists"}),M.update(z,W,a.remoteControl!=="none",a.remoteControl==="feishin"?"Feishin Controls":"Jukebox Controls"),A();break;case"widget_preferences":if(a.preferences&&!Le)T(a.preferences);else if(!a.preferences&&!Le&&Fe)t({type:"set_widget_preferences",preferences:Fe});else if(!a.preferences&&!Le)Pe();break;case"state":if(W=a.connected,z=a.playbackState,X.update(z,W),M.update(z,W,U!=="none",U==="feishin"?"Feishin Controls":"Jukebox Controls"),H.updatePlayback(z),z?.trackUri&&z.trackUri!==V)V=z.trackUri,H.setLoading(!0,z),ee.setLyricsLoading(!0),oe.setLyricsLoading(!0),t({type:"get_lyrics"});else if(!z)V=null,H.clear(),ee.updateLyrics(null,null,null,!1),oe.updateLyrics(null,null,null,!1);A();let P=je(z?.albumArtUrl??null,z?.trackUri),ie=z?.albumArtKey||P;if(P!==s)if(s=P,P){C();let Te=ie&&a.albumPalette?.artworkKey===ie?a.albumPalette.colors:f.get(ie||"");if(ie&&Te)L(ie,Te),t({type:"album_colors",colors:Te,artworkKey:ie});else{let bt=++p;E(P).then((at)=>{if(bt!==p||P!==s)return;if(at){if(ie)L(ie,at);t({type:"album_colors",colors:at,artworkKey:ie})}else if(!W)g()})}}else if(W)w();else g();break;case"connected":W=!0,A(),t({type:"get_config"}),t({type:"get_state"});break;case"disconnected":W=!1,z=null,V=null,I=!1,N.setAvailable(!0),N.setPlaybackAvailable(U==="jukebox"),B.setPlaybackAvailable(U==="jukebox"),s=null,f.clear(),g(),X.update(null,!1),M.update(null,!1,!1),H.clear(),ee.updateLyrics(null,null,null,!1),oe.updateLyrics(null,null,null,!1),A();break;case"search_results":N.setResults(a.results);break;case"playlists":B.setPlaylists(a.playlists);break;case"chat_songs":nt.setChatSongs(a.chatId,a.entries);break;case"message_song":nt.setMessageSong(a.chatId,a.messageId,a.swipeId,a.snapshot);break;case"lyrics":if(!V||a.trackUri===V)H.update(a.trackUri,a.plainLyrics,a.syncedLyrics,a.instrumental),H.updatePlayback(z),ee.updateLyrics(a.trackUri,a.plainLyrics,a.syncedLyrics,a.instrumental),oe.updateLyrics(a.trackUri,a.plainLyrics,a.syncedLyrics,a.instrumental);break;case"error":if(a.operation==="connect"||a.authenticationFailure)v.setError(a.message);M.setError(te.has(a.operation||"")?a.message:null),console.warn("[Subsonic Controls]",a.message);break}});n.push(hn);let _t=(i)=>{if(i.detail?.extensionId!==e.manifest.identifier)return;t({type:"get_config"}),t({type:"get_state"})};window.addEventListener("spindle:desktop-widget-returned",_t),n.push(()=>window.removeEventListener("spindle:desktop-widget-returned",_t)),e.permissions.getGranted().then((i)=>{let l=["cors_proxy","ui_panels","app_manipulation","generation","chat_mutation"].filter((a)=>!i.includes(a));if(l.length)e.permissions.request(l,{reason:"Subsonic Controls needs CORS access for your server, a panel and album-art theme support, plus Generation and Chat Mutation to remember the song playing for each assistant reply."})});let vn=e.events.on("SPINDLE_PERMISSION_CHANGED",(i)=>{let l=i;if(l.extensionId!==e.manifest.identifier||l.permission!=="cors_proxy")return;if(l.granted){t({type:"get_config"}),t({type:"get_state"});return}W=!1,z=null,V=null,I=!1,s=null,f.clear(),g(),v.update(!1,"","",!1,"none","","",!1,ne,null),X.update(null,!1),M.update(null,!1,!1),H.clear(),A()});return n.push(vn),n.push(()=>{C(),p+=1;for(let[i,l]of m)clearTimeout(l.timer),l.resolve(null),m.delete(i)}),t({type:"get_config"}),t({type:"get_state"}),t({type:"get_widget_preferences"}),()=>{for(let i of n)i()}}function $n(e,n={}){let o={...n},t={componentId:`desktop-widget-detached-${crypto.randomUUID()}`,element:e instanceof HTMLElement?e:document.createElement("div"),update(s){o={...o,...s}},destroy(){},getValue(){if("checked"in o)return o.checked;return o.value},focus(){},blur(){}};return new Proxy(t,{get(s,p,d){if(p==="then")return;if(Reflect.has(s,p))return Reflect.get(s,p,d);return()=>{return}}})}function gn(e){let n=new Set,o=!1,t=()=>{let f=document.createElement("div");return n.add(f),f},s=(f)=>f instanceof Element&&[...n].some((c)=>c===f||c.contains(f)),p=new Proxy(e.components,{get(f,c,m){let y=Reflect.get(f,c,m);if(typeof y!=="function"||!String(c).startsWith("mount"))return y;return(x,C)=>{if(!o||s(x))return $n(x,C);return Reflect.apply(y,f,[x,C])}}}),d=new Proxy(e.ui,{get(f,c,m){if(c==="mount")return()=>t();if(c==="createFloatWidget"){let y=Reflect.get(f,c,m);return(...x)=>(o=!0,Reflect.apply(y,f,x))}if(c==="registerDrawerTab")return(y)=>({root:t(),tabId:y.id||"desktop-widget-detached",setTitle(){},setShortName(){},setBadge(){},activate(){},destroy(){},onActivate(){return()=>{}}});return Reflect.get(f,c,m)}});return new Proxy(e,{get(f,c,m){if(c==="components")return p;if(c==="ui")return d;return Reflect.get(f,c,m)}})}function Ai(e,n){return yn(gn(e))}export{Ai as setupWidget};
