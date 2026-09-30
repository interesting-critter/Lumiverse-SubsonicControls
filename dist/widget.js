var Yt=`
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
  overflow: hidden;
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
  min-height: 0;
  flex: 1 1 auto;
  overflow: hidden;
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
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 40px, black calc(100% - 56px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 40px, black calc(100% - 56px), transparent 100%);
}

/* When the tab has no remote transport controls, don't keep the extra tail
   that was reserved for them. Its re-centered active line now uses the full
   read-only lyric viewport. */
.spotify-lyrics-section[data-transport="false"] .spotify-lyrics-has-content {
  padding-bottom: 36px;
  scroll-padding-bottom: 36px;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 40px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 40px, black calc(100% - 32px), transparent 100%);
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

`;function Gt(e){let n=document.createElement("section");n.className="spotify-settings-card";let o=document.createElement("header");o.className="spotify-settings-card-header";let t=document.createElement("h3");t.textContent="Subsonic Controls";let l=document.createElement("span");l.className="spotify-status",o.append(t,l);let p=document.createElement("div");p.className="spotify-settings-card-body";let d=(z,Z,g)=>{let w=document.createElement("label");w.className="spotify-settings-label";let O=document.createTextNode(z);w.append(O);let M=document.createElement("input");return M.className="spotify-input",M.type=Z,M.placeholder=g,w.append(M),p.append(w),M},f=d("Subsonic server URL","url","https://music.example.com (or …/rest)"),c=d("Subsonic username","text","Subsonic username"),m=d("Subsonic password","password","Subsonic password"),y=d("Playback position offset (ms)","number","1000");y.min="-10000",y.max="10000",y.step="100";let b=document.createElement("div");b.style.cssText="font-size:0.8em;opacity:0.65;margin-top:-6px",b.textContent="Adds time to the server's reported playback position for synchronized lyrics. Default: 1000 ms; use a negative value if lyrics run ahead.",p.append(b);let E=document.createElement("label");E.className="spotify-settings-label",E.append("Playback controls");let x=document.createElement("select");x.className="spotify-input";for(let[z,Z]of[["none","Now playing only"],["jukebox","Server-side Jukebox"],["feishin","Feishin Desktop Remote"]]){let g=document.createElement("option");g.value=z,g.textContent=Z,x.append(g)}E.append(x),p.append(E);let L=document.createElement("div");L.style.cssText="font-size:0.8em;opacity:0.65;margin-top:4px",L.textContent="Jukebox controls affect the server-side player.",p.append(L);let T=document.createElement("div");T.style.cssText="display:none;font-size:0.8em;color:#e74c3c;margin-top:4px",p.append(T);let k=document.createElement("div");k.style.display="none";let D=(z,Z,g)=>{let w=document.createElement("label");w.className="spotify-settings-label",w.append(z);let O=document.createElement("input");return O.className="spotify-input",O.type=Z,O.placeholder=g,w.append(O),k.append(w),O},v=D("Feishin Remote URL","url","http://192.168.1.20:4333"),B=D("Feishin username","text","Optional Remote username"),W=D("Feishin password","password","Optional Remote password"),ne=document.createElement("div");ne.style.cssText="font-size:0.8em;opacity:0.65;margin-top:4px",ne.textContent="Feishin Remote requires WebSocket transport; its HTTP server only serves the Remote page and credentials. Library search and lyrics still use the Subsonic server above.",k.append(ne),p.append(k);let re=document.createElement("div");re.className="spotify-settings-row";let V=document.createElement("button");V.className="spotify-btn spotify-btn-primary",re.append(V),p.append(re),n.append(o,p);let j=!1,K=!1,C=!1,N=!1,A=!1,U=[f,c,m,y,x,v,B,W];for(let z of U)z.addEventListener("input",()=>{C=!0});function R(z,Z,g=!1){l.replaceChildren();let w=document.createElement("span");w.className=`spotify-status-dot ${Z?"connected":"disconnected"}`;let O=document.createElement("span");if(O.textContent=z,g)O.style.color="#e74c3c";l.append(w,O)}function F(){let z=x.value==="feishin";k.style.display=z?"":"none",L.style.display=x.value==="jukebox"?"":"none",T.style.display=x.value==="jukebox"&&T.textContent?"":"none"}x.onchange=()=>{C=!0,F()};function G(z,Z,g,w,O,M,_,ie,ye,ce){if(j=z,N=w,A=ie,z||!K&&!C)f.value=Z,c.value=g,v.value=M,B.value=_,y.value=String(ye),x.value=O;if(T.textContent=ce||"",F(),K&&!z)return;for(let Oe of[f,c,m,x,v,B,W])Oe.disabled=z;if(z)K=!1,C=!1,m.value="",W.value="";m.placeholder=w?"Saved securely (re-enter to change)":"Subsonic password",W.placeholder=ie?"Saved securely (re-enter to change)":"Optional Remote password",V.textContent=z?"Disconnect":"Connect",V.className=z?"spotify-btn spotify-btn-danger":"spotify-btn spotify-btn-primary",V.disabled=!1,R(z?"Connected":"Not connected",z)}return V.onclick=()=>{if(j)return void e({type:"disconnect"});let z=x.value;if(!f.value.trim()||!c.value.trim()||!m.value&&!N||z==="feishin"&&!v.value.trim()){R("Enter the Subsonic server credentials and, when selected, a Feishin Remote URL.",!1,!0);return}K=!0,V.disabled=!0,V.textContent="Connecting…",e({type:"connect",serverUrl:f.value.trim(),username:c.value.trim(),password:m.value,remoteControl:z,feishinUrl:v.value.trim(),feishinUsername:B.value.trim(),feishinPassword:W.value,playbackPositionOffsetMs:Number(y.value)})},y.onchange=()=>{let z=Number(y.value);if(!Number.isFinite(z))return;if(y.value=String(Math.max(-1e4,Math.min(1e4,Math.round(z)))),j)e({type:"set_playback_position_offset",playbackPositionOffsetMs:Number(y.value)})},G(!1,"","",!1,"none","","",!1,1000,null),{root:n,update:G,setConnecting(){K=!0,V.disabled=!0,V.textContent="Connecting…"},setError(z){j=!1,K=!1,V.disabled=!1,V.textContent="Connect",V.className="spotify-btn spotify-btn-primary";for(let Z of[f,c,m,x,v,B,W])Z.disabled=!1;m.placeholder=N?"Saved securely (re-enter to change)":"Subsonic password",W.placeholder=A?"Saved securely (re-enter to change)":"Optional Remote password",R(z,!1,!0)},destroy(){n.remove()}}}function Ye(e,n){if(!e)return null;if(!n)return e;if(/^(data|blob):/i.test(e))return e;try{let o=new URL(e);return o.searchParams.set("track",n),o.toString()}catch{let o=e.includes("?")?"&":"?";return`${e}${o}track=${encodeURIComponent(n)}`}}function Ge(e){let n=document.createElement("div");n.className=`${e} spotify-crossfade-art`,n.style.display="none";let o=document.createElement("img"),t=document.createElement("img");o.className="spotify-crossfade-img",t.className="spotify-crossfade-img",o.alt="",t.alt="",o.loading="eager",t.loading="eager",o.decoding="async",t.decoding="async",o.style.visibility="hidden",t.style.visibility="hidden",o.style.opacity="1",t.style.opacity="0",n.appendChild(o),n.appendChild(t);let l=null,p=o,d=t,f=!1;function c(b){b.onload=null,b.onerror=null,b.removeAttribute("src"),b.style.visibility="hidden"}function m(){n.style.display="none",p.style.opacity="1",d.style.opacity="0"}function y(b){if(b===l)return;if(l=b,!b){c(p),c(d),f=!1,m();return}if(!f){if(n.style.display="",p.onload=()=>{f=!0,p.style.visibility="visible"},p.onerror=()=>{l=null,c(p),m()},p.src=b,p.complete&&p.naturalWidth>0)f=!0,p.style.visibility="visible";return}if(n.style.display="",d.onload=()=>{d.style.visibility="visible",d.style.opacity="1",p.style.opacity="0";let E=p;p=d,d=E},d.onerror=()=>{l=null,c(d),d.style.opacity="0"},d.src=b,d.complete&&d.naturalWidth>0){d.style.visibility="visible",d.style.opacity="1",p.style.opacity="0";let E=p;p=d,d=E}}return{el:n,setUrl:y,destroy(){n.remove()}}}function Xt(){let e=document.createElement("div");e.className="spotify-section";let n=document.createElement("h3");n.className="spotify-section-title",n.textContent="Now Playing";let o=document.createElement("div");o.className="spotify-now-playing";let t=Ge("spotify-album-art"),l=document.createElement("div");l.className="spotify-track-info";let p=document.createElement("div");p.className="spotify-track-name";let d=document.createElement("div");d.className="spotify-track-artist";let f=document.createElement("div");f.className="spotify-track-album";let c=document.createElement("div");c.className="spotify-track-device",l.append(p,d,f,c),o.append(t.el,l);let m=document.createElement("div");return m.className="spotify-empty",e.append(n,o,m),{root:e,update(y,b){if(!b){o.style.display="none",m.style.display="",m.textContent="Connect a music source to get started",t.setUrl(null);return}if(!y){o.style.display="none",m.style.display="",m.textContent="No active playback reported",t.setUrl(null);return}o.style.display="flex",m.style.display="none",p.textContent=y.trackName,d.textContent=y.artistName,f.textContent=y.albumName,c.textContent=y.source==="jukebox"?"Server Jukebox":y.source==="feishin"?"Feishin Desktop":y.deviceName?`Playing on ${y.deviceName}`:"Server now playing",t.setUrl(Ye(y.albumArtUrl,y.trackUri))},destroy(){t.destroy(),e.remove()}}}function Jt(e){let n=document.createElement("div");n.className="spotify-section";let o=document.createElement("h3");o.className="spotify-section-title",o.textContent="Player Controls";let t=document.createElement("div");t.className="spotify-controls";let l=(E,x="")=>{let L=document.createElement("button");return L.className=`spotify-ctrl-btn ${x}`,L.innerHTML=E,L},p=l('<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>'),d=l('<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',"spotify-ctrl-btn-main"),f=l('<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>'),c=document.createElement("div");c.className="spotify-search-error",c.style.cssText="display:none;font-size:0.8em;color:#e74c3c;margin-top:6px;word-break:break-word";let m=(E)=>{c.textContent=E||"",c.style.display=E?"":"none"},y=(E)=>{m(null),e(E)};p.onclick=()=>y({type:"previous"}),f.onclick=()=>y({type:"next"});let b=!1;return d.onclick=()=>y({type:b?"pause":"play"}),t.append(p,d,f),n.append(o,t,c),{root:n,update(E,x,L,T="Player Controls"){if(n.style.display=x&&L?"":"none",!x||!L)m(null);o.textContent=T,b=!!E?.isPlaying,d.innerHTML=b?'<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>':'<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'},setError:m,destroy(){n.remove()}}}function Kt(e){let n=document.createElement("div");n.className="spotify-section";let o=document.createElement("h3");o.className="spotify-section-title",o.textContent="Library Search";let t=document.createElement("input");t.className="spotify-search-input",t.placeholder="Search your server's music library…";let l=document.createElement("div");l.className="spotify-search-results",n.append(o,t,l);let p=null,d=!0;return t.oninput=()=>{if(p)clearTimeout(p);p=setTimeout(()=>{let c=t.value.trim();if(c.length>=2)e({type:"search",query:c});else l.innerHTML=""},350)},{root:n,setResults:(c)=>{if(l.innerHTML="",!c.length){let m=document.createElement("div");m.className="spotify-empty",m.textContent="No tracks found",l.appendChild(m);return}for(let m of c){let y=document.createElement("div");if(y.className="spotify-search-item",m.albumArtUrl){let L=document.createElement("img");L.className="spotify-search-item-art",L.src=m.albumArtUrl,L.alt=m.album,y.appendChild(L)}let b=document.createElement("div");b.className="spotify-search-item-info";let E=document.createElement("div");E.className="spotify-search-item-name",E.textContent=m.name;let x=document.createElement("div");if(x.className="spotify-search-item-artist",x.textContent=`${m.artist} — ${m.album}`,b.append(E,x),d){let L=document.createElement("div");L.className="spotify-search-item-actions";let T=document.createElement("button");T.className="spotify-search-item-btn",T.title="Play in server Jukebox",T.innerHTML='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',T.onclick=()=>e({type:"play",trackUri:m.uri});let k=document.createElement("button");k.className="spotify-search-item-btn",k.title="Add to server Jukebox queue",k.innerHTML='<svg viewBox="0 0 24 24"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg>',k.onclick=()=>e({type:"queue",trackUri:m.uri}),L.append(T,k),y.append(b,L)}else y.append(b);l.appendChild(y)}},setAvailable(c){if(n.style.display=c?"":"none",!c)l.innerHTML=""},setPlaybackAvailable(c){d=c,l.innerHTML=""},destroy(){if(p)clearTimeout(p);n.remove()}}}function Et(e){let n=null,o=null,t=null,l=0,p=!1,d=0;function f(x){let L=e.getBoundingClientRect(),T=x.getBoundingClientRect(),k=Math.max(0,e.scrollHeight-e.clientHeight);return Math.min(Math.max(e.scrollTop+(T.top+T.height/2)-(L.top+e.clientHeight/2),0),k)}function c(){if(n!==null)cancelAnimationFrame(n);n=null,o=null}function m(){c(),t=null,l=Date.now()}function y(){c(),t=null}function b(x){if(n=null,o===null||!o.isConnected||!e.isConnected){c();return}let L=Math.min(Math.max(x-d,0),100);d=x;let T=Math.max(0,e.scrollHeight-e.clientHeight),k=f(o),D=k-e.scrollTop;if(Math.abs(D)<0.5){t=k,e.scrollTop=k,c();return}let v=D*(1-Math.exp(-L/85)),B=1800*(L/1000),W=Math.abs(v)>B?Math.sign(v)*B:v,ne=Math.min(Math.max(e.scrollTop+W,0),T);t=ne,e.scrollTop=ne,n=requestAnimationFrame(b)}e.addEventListener("wheel",m,{passive:!0}),e.addEventListener("touchmove",m,{passive:!0}),e.addEventListener("pointerdown",m,{passive:!0});function E(){if(n!==null||o!==null)return;if(t!==null&&Math.abs(e.scrollTop-t)<=1)return;m()}return e.addEventListener("scroll",E,{passive:!0}),{center(x,L){if(p)return;if(!L?.force&&Date.now()-l<=2500)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){c(),t=f(x),e.scrollTop=t;return}if(o=x,n===null)d=performance.now(),n=requestAnimationFrame(b)},suspend(x){if(p===x)return!1;if(p=x,p)y();return!0},cancel:y,destroy(){y(),e.removeEventListener("wheel",m),e.removeEventListener("touchmove",m),e.removeEventListener("pointerdown",m),e.removeEventListener("scroll",E)}}}function vn(e){let n=/^(\d+):(\d{2})(?:\.(\d{1,3}))?$/.exec(e);if(!n)return null;let o=Number(n[1]),t=Number(n[2]),l=n[3]?Number(n[3].padEnd(3,"0")):0;if(!Number.isFinite(o)||!Number.isFinite(t)||t>59)return null;return o*60000+t*1000+l}function dt(e){if(!e)return[];let n=[];for(let t of e.split(/\r?\n/)){let l=[...t.matchAll(/\[([^\]]+)\]/g)].map((d)=>vn(d[1])).filter((d)=>d!==null);if(l.length===0)continue;let p=t.replace(/(?:\[[^\]]+\])+/g,"").trim();for(let d of l)n.push({timeMs:d,text:p})}let o=[];for(let t of n.sort((l,p)=>l.timeMs-p.timeMs)){let l=o[o.length-1];if(l?.timeMs===t.timeMs)l.text=[l.text,t.text].filter(Boolean).join(`
`);else o.push({...t})}return o}function kt(e){return e||"♪"}function Zt(e){return!e.includes(`
`)&&e.length>=36}function Lt(e){let n=[],o=null,t=-1;function l(){if(!o)return 0;if(!o.isPlaying)return o.progressMs;return Math.min(o.progressMs+Date.now()-o.updatedAt,o.durationMs||1/0)}function p(){if(n.length===0){let b=t!==-1;return t=-1,b}let c=l(),m=-1;for(let b=0;b<n.length;b++){if(n[b].timeMs>c)break;m=b}let y=m!==t;return t=m,y}function d(){let c=n.map((y,b)=>({...y,index:b,displayText:kt(y.text),hasText:Boolean(y.text)}));if(!e||c.length<=e)return c;if(t<0)return c.slice(0,e);let m=Math.max(0,Math.min(t-Math.floor(e/2),c.length-e));return c.slice(m,m+e)}function f(){return n.map((c,m)=>({...c,index:m,displayText:kt(c.text),hasText:Boolean(c.text)}))}return{clear(){n=[],o=null,t=-1},setLyrics(c){n=c,t=-1,p()},setPlayback(c){o=c},refreshActiveLineIndex:p,getActiveLineIndex(){return t},hasLyrics(){return n.length>0},getIndexedLines:f,getSnapshot(){return p(),{activeLineIndex:t,lines:d()}}}}var bn=180;function Qt(e,n,o,t){let l=["spotify-lyrics-line"];if(!o)l.push("spotify-lyrics-line-blank");if(e===n)l.push("spotify-lyrics-line-active");else if(e<n)l.push("spotify-lyrics-line-past");else l.push("spotify-lyrics-line-future");if(n>=0){let p=Math.abs(e-n);if(p>=1){let d=Math.min(p,4);if(l.push(`spotify-lyrics-line-tier-${d}`),t&&d>=2)l.push(`spotify-lyrics-line-blur-${d}`)}}return l.join(" ")}function en(){let e=document.createElement("div");e.className="spotify-section spotify-lyrics-section",e.dataset.transport="false";let n=document.createElement("h3");n.className="spotify-section-title",n.textContent="Lyrics";let o=document.createElement("div");o.className="spotify-lyrics-body",e.append(n,o);let t=null,l=[],p=Lt(),d=Et(o),f=null,c=-1,m=!0,y,b;function E(C){return C?.source==="feishin"||C?.source==="jukebox"}function x(){clearTimeout(b),b=void 0,o.classList.remove("spotify-lyrics-loading")}function L(){clearInterval(y),y=void 0}function T(){l.forEach((C)=>{let N=p.getIndexedLines()[C.index];C.el.className=Qt(C.index,c,N?.hasText??!1,m)})}function k(){if(m)e.style.removeProperty("--spotify-lyrics-enter-blur");else e.style.setProperty("--spotify-lyrics-enter-blur","0px")}function D(C,N=!1){c=C,T();let A=l.find((U)=>U.index===c);if(A)d.center(A.textEl,{force:N})}function v(C=!1){if(!l.length)return;if(p.refreshActiveLineIndex()||C)D(p.getActiveLineIndex(),C)}function B(){if(!y&&l.length)y=setInterval(v,200)}function W(){L(),d.cancel(),x(),o.innerHTML="",o.className="spotify-lyrics-body",t=null,l=[],p.clear(),f=null,c=-1,e.dataset.transport="false"}function ne(C,N){if(x(),!C)return;if(L(),d.cancel(),o.innerHTML="",o.className="spotify-lyrics-body spotify-lyrics-loading",t=N?.trackUri??t,l=[],p.setLyrics([]),N&&N.trackUri===t)f={trackUri:N.trackUri,progressMs:N.progressMs,durationMs:N.durationMs,isPlaying:N.isPlaying,updatedAt:Date.now()},p.setPlayback(f);else f=null,p.setPlayback(null);c=-1,b=setTimeout(()=>{if(!o.classList.contains("spotify-lyrics-loading"))return;let A=document.createElement("div");A.className="spotify-lyrics-status spotify-lyrics-status-loading",A.textContent="Loading lyrics...",o.appendChild(A)},bn)}function re(C){let N=dt(C);if(!N.length)return!1;x(),o.className="spotify-lyrics-body spotify-lyrics-has-content spotify-lyrics-synced",p.setLyrics(N);let A=p.getSnapshot();if(c=A.activeLineIndex,l=A.lines.map((U,R)=>{let F=document.createElement("div"),G=document.createElement("div");if(F.className=Qt(U.index,c,U.hasText,m),F.classList.add("spotify-lyrics-line-enter"),F.style.setProperty("--spotify-lyrics-enter-delay",`${Math.min(R*28,280)}ms`),G.className="spotify-lyrics-line-text",!U.hasText)G.classList.add("spotify-lyrics-line-symbol");if(Zt(U.text))G.classList.add("spotify-lyrics-line-text-long");return G.textContent=kt(U.text),F.appendChild(G),o.appendChild(F),{index:U.index,el:F,textEl:G}}),v(),f?.isPlaying)B();return!0}function V(C){x(),o.className="spotify-lyrics-body spotify-lyrics-has-content";let N=document.createElement("div");N.className="spotify-lyrics-text spotify-lyrics-text-enter",N.textContent=C,o.appendChild(N)}function j(C,N,A,U){if(L(),d.cancel(),x(),t=C,o.innerHTML="",l=[],c=-1,U)o.className="spotify-lyrics-body",o.textContent="♪ Instrumental";else if(!re(A||""))if(N)V(N);else o.className="spotify-lyrics-body",o.textContent="No lyrics available"}function K(C){let N=String(E(C)),A=e.dataset.transport!==N;if(e.dataset.transport=N,!C||C.trackUri!==t){f=null,p.setPlayback(null),L();return}if(f={trackUri:C.trackUri,progressMs:C.progressMs,durationMs:C.durationMs,isPlaying:C.isPlaying,updatedAt:Date.now()},p.setPlayback(f),v(),C.isPlaying)B();else L();if(A&&l.length)requestAnimationFrame(()=>v(!0))}return{root:e,update:j,updatePlayback:K,setLoading:ne,setAutoScrollSuspended(C){if(d.suspend(C)&&!C&&l.length)D(c,!0)},setBlurEnabled(C){if(m===C)return;m=C,k(),T()},clear:W,destroy(){L(),d.destroy(),x(),e.remove()}}}function Ct(e,n){let o=!1;function t(k){if(o===k)return;o=k,n.onInteractChange?.(k)}function l(k){if(n.stopPropagation)k.stopPropagation()}function p(){return Number.parseInt(e.value,10)}let d=(k)=>{l(k),t(!0)},f=(k)=>{l(k)},c=(k)=>{l(k),t(!1)},m=(k)=>{l(k),t(!0)},y=(k)=>{l(k)},b=(k)=>{l(k),t(!1)},E=(k)=>{l(k)},x=(k)=>{l(k),t(!0),n.onPreview?.(p())},L=(k)=>{l(k);let D=p();n.onPreview?.(D),n.onCommit(D),t(!1)},T=()=>{t(!1)};return e.addEventListener("pointerdown",d),e.addEventListener("pointermove",f),e.addEventListener("pointerup",c),e.addEventListener("touchstart",m,{passive:!0}),e.addEventListener("touchmove",y,{passive:!0}),e.addEventListener("touchend",b,{passive:!0}),e.addEventListener("click",E),e.addEventListener("input",x),e.addEventListener("change",L),e.addEventListener("blur",T),e.addEventListener("pointercancel",T),e.addEventListener("lostpointercapture",T),()=>{e.removeEventListener("pointerdown",d),e.removeEventListener("pointermove",f),e.removeEventListener("pointerup",c),e.removeEventListener("touchstart",m),e.removeEventListener("touchmove",y),e.removeEventListener("touchend",b),e.removeEventListener("click",E),e.removeEventListener("input",x),e.removeEventListener("change",L),e.removeEventListener("blur",T),e.removeEventListener("pointercancel",T),e.removeEventListener("lostpointercapture",T)}}function Mt(e,n){let o=!1,t=null,l=0;function p(v){if(o===v)return;o=v,n.onInteractChange?.(v)}function d(v){if(n.stopPropagation)v.stopPropagation()}function f(v){let B=n.getMaxValue();if(!Number.isFinite(B)||B<=0)return null;let W=e.getBoundingClientRect();if(W.width<=0)return null;let ne=Math.max(0,Math.min(1,(v-W.left)/W.width));return Math.round(ne*B)}function c(v){let B=f(v);if(B===null)return null;return l=B,n.onPreview(B),B}function m(v){if(t!==null&&e.hasPointerCapture(t))e.releasePointerCapture(t);if(t=null,v)n.onCommit(l);p(!1)}let y=(v)=>{if(d(v),v.button!==0)return;if(c(v.clientX)===null)return;t=v.pointerId,p(!0);try{e.setPointerCapture(v.pointerId)}catch{}},b=(v)=>{if(d(v),v.pointerId!==t)return;c(v.clientX)},E=(v)=>{if(d(v),v.pointerId!==t)return;c(v.clientX),m(!0)},x=(v)=>{if(d(v),v.pointerId!==t)return;m(!1)},L=(v)=>{d(v),v.preventDefault()},T=(v)=>{d(v)},k=(v)=>{d(v)},D=(v)=>{d(v)};return e.addEventListener("pointerdown",y),e.addEventListener("pointermove",b),e.addEventListener("pointerup",E),e.addEventListener("pointercancel",x),e.addEventListener("click",L),e.addEventListener("touchstart",T,{passive:!0}),e.addEventListener("touchmove",k,{passive:!0}),e.addEventListener("touchend",D,{passive:!0}),()=>{e.removeEventListener("pointerdown",y),e.removeEventListener("pointermove",b),e.removeEventListener("pointerup",E),e.removeEventListener("pointercancel",x),e.removeEventListener("click",L),e.removeEventListener("touchstart",T),e.removeEventListener("touchmove",k),e.removeEventListener("touchend",D)}}var xn='<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>',tn='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',wn='<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',En='<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>',kn='<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>',Ln='<svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>',Cn='<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>',Mn='<svg viewBox="0 0 24 24"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/></svg>',nn="♪";function ct(e){let n=Math.floor(e/1000),o=Math.floor(n/60),t=n%60;return`${o}:${t.toString().padStart(2,"0")}`}var on=280,Sn=336,fe=8;function Tt(e){return e==="modern"?Sn:on}function Pn(e){if(!e)return[];return e.split(/\r?\n/).map((n)=>n.trim()).filter(Boolean).slice(0,5)}function rn(e,n,o){let t=document.createElement("div");t.className="spotify-mini-player",t.dataset.style="default",t.style.setProperty("--spotify-mini-player-width",`${on}px`);let l=Ge("spotify-mini-art"),p=document.createElement("div");p.className="spotify-mini-info";let d=document.createElement("div");d.className="spotify-mini-track";let f=document.createElement("div");f.className="spotify-mini-artist";let c=document.createElement("div");c.className="spotify-mini-album",p.appendChild(d),p.appendChild(f),p.appendChild(c);let m=document.createElement("button");m.className="spotify-mini-header-btn",m.innerHTML=Ln,m.title="Open full player";let y=document.createElement("button");y.className="spotify-mini-header-btn",y.innerHTML=Cn,y.title="Collapse";let b=document.createElement("div");b.className="spotify-mini-header-btns",b.appendChild(m),b.appendChild(y);let E=document.createElement("div");E.className="spotify-mini-progress-row";let x=document.createElement("span");x.className="spotify-mini-time";let L=document.createElement("div");L.className="spotify-mini-progress-bar";let T=document.createElement("div");T.className="spotify-mini-progress-fill",L.appendChild(T);let k=document.createElement("span");k.className="spotify-mini-time",E.appendChild(x),E.appendChild(L),E.appendChild(k);let D=document.createElement("div");D.className="spotify-mini-controls";function v(r,h=""){let P=document.createElement("button");return P.className=`spotify-mini-btn ${h}`.trim(),P.innerHTML=r,P}let B=v(xn),W=v(tn,"spotify-mini-btn-main"),ne=v(En);D.appendChild(B),D.appendChild(W),D.appendChild(ne);let re=document.createElement("div");re.className="spotify-mini-volume-row";let V=document.createElement("span");V.className="spotify-mini-volume-icon",V.innerHTML=kn;let j=document.createElement("input");j.type="range",j.className="spotify-mini-volume-slider",j.min="0",j.max="100",j.value="50",re.appendChild(V),re.appendChild(j);let K=document.createElement("div");K.className="spotify-mini-device-row";let C=document.createElement("span");C.className="spotify-mini-device-icon",C.innerHTML=Mn;let N=document.createElement("span");N.className="spotify-mini-device-name";let A=document.createElement("button");A.className="spotify-mini-device-toggle",A.textContent="Switch",K.appendChild(C),K.appendChild(N),K.appendChild(A);let U=document.createElement("div");U.className="spotify-mini-device-list";let R=document.createElement("div");R.className="spotify-mini-empty",R.textContent="No active playback";let F=document.createElement("div");F.className="spotify-mini-header",F.appendChild(l.el),F.appendChild(p),F.appendChild(b),t.appendChild(F),t.appendChild(E);let G=document.createElement("div");G.className="spotify-mini-lyrics-section";let z=document.createElement("div");z.className="spotify-mini-lyrics-header",z.textContent="Lyrics";let Z=document.createElement("div");Z.className="spotify-mini-lyrics-body";let g=document.createElement("div");g.className="spotify-mini-lyrics-status";let w=Array.from({length:5},()=>{let r=document.createElement("div");return r.className="spotify-mini-lyric-line",Z.appendChild(r),r});Z.appendChild(g),G.appendChild(z),G.appendChild(Z),t.appendChild(G),t.appendChild(D),t.appendChild(re),t.appendChild(K),t.appendChild(U),t.appendChild(R);let O=!1,M=0,_=!1,ie=0,ye="default",ce=null,Oe=!1,pe=0,ze=0,ge=!1,ue=null,De=null,se=[],Ee=[],Ie=!1,I=!1,ae=-1,oe=!1,q=!1,le=!1,Me=null,Ue=null,J=null,Ce=!1,Se=!1;function be(r,h=!1){g.className=h?"spotify-mini-lyrics-status spotify-mini-lyrics-status-loading":"spotify-mini-lyrics-status",g.textContent=r,g.style.display="";for(let P of w)P.style.display="none",P.textContent="",P.className="spotify-mini-lyric-line"}function qe(){g.style.display="none";for(let r of w)r.style.display=""}function _e(){if(!q||oe)return;q=!1,Ze(!0)}function Fe(){if(le)return;let r=Me,h=Ue,P=J;if(Me=null,Ue=null,J=null,r)Xe(r.state,r.connected);if(h)me(h);if(P!==null)he(P);_e()}function Be(){if(!ge)return pe;return Math.min(pe+Math.max(0,Date.now()-ze),M||1/0)}function Je(){if(se.length===0)return[];let h=[];if(ae<0)for(let P=0;P<Math.min(5,se.length);P++){let X=se[P];h.push({text:X.text||nn,index:P})}else{let P=Math.max(0,Math.min(ae-2,se.length-5));for(let X=0;X<5&&P+X<se.length;X++){let ve=P+X,tt=se[ve];h.push({text:tt.text||nn,index:ve})}}while(h.length<5)h.push({text:" ",index:-1-h.length});return h}function Ke(){if(I){be("Loading lyrics...",!0);return}if(Ie){be("♪ Instrumental");return}if(se.length>0){qe();let r=Je();w.forEach((h,P)=>{let X=r[P]??{text:" ",index:-1-P},ve=ae<0?X.index:Math.abs(X.index-ae);if(h.className="spotify-mini-lyric-line",X.index===ae)h.classList.add("spotify-mini-lyric-line-active");else if(ve===1)h.classList.add("spotify-mini-lyric-line-near");else if(ve===2)h.classList.add("spotify-mini-lyric-line-mid");else h.classList.add("spotify-mini-lyric-line-far");h.textContent=X.text});return}if(Ee.length>0){qe(),w.forEach((r,h)=>{r.className="spotify-mini-lyric-line spotify-mini-lyric-line-plain",r.textContent=Ee[h]??" "});return}be("No lyrics available")}function Ze(r=!1){if(oe){q=!0;return}if(ye!=="modern"||se.length===0||!ce||ce.trackUri!==De){if(r&&ye==="modern")Ke();return}let h=Be(),P=-1;for(let X=0;X<se.length;X++){if(se[X].timeMs>h)break;P=X}if(r||P!==ae)ae=P,Ke()}function We(r=!1){let h=ye==="modern"&&Oe&&Boolean(ce);if(G.style.display=h?"":"none",!h)return;if(oe){q=!0;return}if(Ze(!0),r&&_)$e()}function Y(){if(le||!_||!ge||!M){ue=null;return}if(Ce){ue=requestAnimationFrame(Y);return}let r=Date.now()-ze,h=Math.min(pe+r,M),P=h/M*100;T.style.width=`${P}%`,x.textContent=ct(h),Ze(),ue=requestAnimationFrame(Y)}function Qe(){if(ue!==null)return;ue=requestAnimationFrame(Y)}function Ae(){if(ue!==null)cancelAnimationFrame(ue),ue=null}function Pe(){return ce?.source==="feishin"||ce?.source==="jukebox"}B.addEventListener("click",(r)=>{if(r.stopPropagation(),!Pe())return;e({type:"previous"})}),ne.addEventListener("click",(r)=>{if(r.stopPropagation(),!Pe())return;e({type:"next"})}),W.addEventListener("click",(r)=>{if(r.stopPropagation(),!Pe())return;e({type:O?"pause":"play"})}),m.addEventListener("click",(r)=>{r.stopPropagation(),Ve(),n()}),y.addEventListener("click",(r)=>{r.stopPropagation(),Ve()});let Re=Mt(L,{getMaxValue:()=>M,onInteractChange(r){Ce=r},onPreview(r){let h=M>0?r/M*100:0;T.style.width=`${h}%`,x.textContent=ct(r)},onCommit(r){if(ce)ce={...ce,progressMs:r};if(pe=r,ze=Date.now(),Ze(!0),e({type:"seek",positionMs:r}),_&&ge)Qe()}}),Q=new Set,nt=Ct(j,{onInteractChange(r){Se=r},onPreview(r){for(let h of Q)h(r)},onCommit(r){e({type:"set_volume",percent:r})}}),ke=!1,de=null;A.addEventListener("click",(r)=>{if(r.stopPropagation(),ke)U.style.display="none",ke=!1;else e({type:"get_devices"}),U.innerHTML='<div class="spotify-mini-device-loading">Loading devices…</div>',U.style.display="flex",ke=!0}),t.addEventListener("pointerdown",(r)=>r.stopPropagation());function ee(r){if(!t.contains(r.target))Ve()}function $e(){let{x:r,y:h,w:P,h:X}=o(),{innerWidth:ve,innerHeight:tt}=window,it=Tt(ye),xe=r+P/2-it/2;xe=Math.max(fe,Math.min(xe,ve-it-fe)),t.style.left=`${xe}px`,t.style.top="0px",t.style.visibility="hidden",t.style.transform="scale(1)",t.style.display="flex";let Le=t.offsetHeight;ie=Le,t.style.visibility="",t.style.transform="",t.style.display="";let He,rt=!1;if(h-Le-fe>=fe)He=h-Le-fe;else He=h+X+fe,rt=!0;He=Math.max(fe,Math.min(He,tt-Le-fe)),t.style.left=`${xe}px`,t.style.top=`${He}px`;let je=r+P/2-xe,vt=rt?-fe:Le+fe;t.style.transformOrigin=`${je}px ${vt}px`}function et(){if(!_||!ie)return;let{x:r,y:h,w:P,h:X}=o(),{innerWidth:ve,innerHeight:tt}=window,it=Tt(ye),xe=r+P/2-it/2;xe=Math.max(fe,Math.min(xe,ve-it-fe));let Le,He=!1;if(h-ie-fe>=fe)Le=h-ie-fe;else Le=h+X+fe,He=!0;Le=Math.max(fe,Math.min(Le,tt-ie-fe)),t.style.left=`${xe}px`,t.style.top=`${Le}px`;let rt=r+P/2-xe,je=He?-fe:ie+fe;t.style.transformOrigin=`${rt}px ${je}px`}function Ne(){if(!document.body.contains(t))document.body.appendChild(t);if($e(),t.classList.remove("open","closing"),t.offsetHeight,t.classList.add("open"),_=!0,ge)Qe();setTimeout(()=>document.addEventListener("click",ee),0)}function Ve(){if(!_)return;_=!1,document.removeEventListener("click",ee),Ae(),$e(),t.classList.remove("open"),t.classList.add("closing");let r=()=>{t.classList.remove("closing"),t.removeEventListener("transitionend",r)};t.addEventListener("transitionend",r),setTimeout(r,250)}function Xe(r,h){if(ce=r,Oe=h,le){Me={state:r,connected:h};return}if(!h||!r){Ce=!1,Se=!1,l.setUrl(null),F.style.display="none",E.style.display="none",G.style.display="none",D.style.display="none",re.style.display="none",K.style.display="none",U.style.display="none",ke=!1,R.style.display="",R.textContent=!h?"Connect to Subsonic in Settings":"No active playback",M=0,T.style.width="0%",x.textContent=ct(0),k.textContent=ct(0),Ae();return}F.style.display="",E.style.display="";let P=Pe();if(D.style.display=P?"flex":"none",D.hidden=!P,B.disabled=!P,W.disabled=!P,ne.disabled=!P,re.hidden=!0,re.style.display="none",R.style.display="none",r.deviceName)N.textContent=r.deviceName,K.style.display="",de=r.deviceId??null;else K.style.display="none";if(d.textContent=r.trackName,f.textContent=r.artistName,c.textContent=r.albumName,M=r.durationMs,l.setUrl(Ye(r.albumArtUrl,r.trackUri)),O=r.isPlaying,ge=r.isPlaying,W.innerHTML=O?wn:tn,!Ce){pe=r.progressMs,ze=Date.now();let X=r.durationMs>0?r.progressMs/r.durationMs*100:0;T.style.width=`${X}%`,x.textContent=ct(r.progressMs)}if(k.textContent=ct(r.durationMs),r.volume!==null&&!Se)j.value=String(r.volume);if(_&&O)Qe();else Ae();We()}function ot(r,h,P,X){De=r,se=dt(P),Ee=Pn(h),Ie=X,I=!1,ae=-1,We(!0)}function u(r){if(I=r,r)De=ce?.trackUri??null,se=[],Ee=[],Ie=!1,ae=-1;We(!0)}function H(r){if(ye=r,t.dataset.style=r,t.style.setProperty("--spotify-mini-player-width",`${Tt(r)}px`),We(!0),_)$e()}function me(r){if(le){Ue=r;return}if(U.innerHTML="",r.length===0){U.innerHTML='<div class="spotify-mini-device-loading">No devices found</div>';return}for(let h of r){let P=document.createElement("div");if(P.className=`spotify-mini-device-item${h.isActive?" active":""}`,P.innerHTML=`<span class="spotify-mini-device-item-name">${h.name}</span><span class="spotify-mini-device-item-type">${h.type}</span>`,!h.isActive)P.addEventListener("click",(X)=>{X.stopPropagation(),e({type:"transfer_playback",deviceId:h.id}),U.style.display="none",ke=!1});U.appendChild(P)}}function he(r){if(le){J=r;return}j.value=String(r)}return{root:t,update:Xe,updateLyrics:ot,setLyricsLoading:u,setLyricsUpdateSuspended(r){if(oe=r,!r)_e()},setUiSuspended(r){if(le=r,oe=r,r){Ae();return}if(Fe(),_&&ge)Qe()},setStyle:H,setDevices:me,setVolume:he,onVolumeChange(r){Q.add(r)},toggle(){if(_)Ve();else Ne()},hide:Ve,isOpen:()=>_,reposition:et,destroy(){Ve(),Ae(),Re(),nt(),Q.clear(),t.remove()}}}var Nn='<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>',sn='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',Tn='<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',zn='<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>',In='<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>',An='<svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>',Un='<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>',zt='<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',_n=4000;function St(e){let n=Math.floor(e/1000),o=Math.floor(n/60),t=n%60;return`${o}:${t.toString().padStart(2,"0")}`}function Rn(e){if(!e)return[];return e.split(/\r?\n/).map((n)=>n.trim()).filter(Boolean)}function pt(e){e.addEventListener("pointerdown",(n)=>n.stopPropagation()),e.addEventListener("pointermove",(n)=>n.stopPropagation()),e.addEventListener("pointerup",(n)=>n.stopPropagation()),e.addEventListener("touchstart",(n)=>n.stopPropagation(),{passive:!0}),e.addEventListener("touchmove",(n)=>n.stopPropagation(),{passive:!0}),e.addEventListener("touchend",(n)=>n.stopPropagation(),{passive:!0}),e.addEventListener("click",(n)=>n.stopPropagation())}function It(e){let n=document.createElement("div");n.className=`${e} spotify-modern-widget-marquee`,n.dataset.marqueePhase="idle";let o=document.createElement("div");o.className=`${e}-content spotify-modern-widget-marquee-content`,n.appendChild(o);let t=null;function l(){if(t)clearTimeout(t),t=null;n.dataset.marqueePhase="idle",o.classList.remove("spotify-modern-widget-marquee-animate")}function p(f){if(n.dataset.marqueePhase="scrolling",o.classList.remove("spotify-modern-widget-marquee-animate"),f)o.offsetWidth;o.classList.add("spotify-modern-widget-marquee-animate")}function d(f){if(t)clearTimeout(t),t=null;n.dataset.marqueePhase="rest",o.classList.remove("spotify-modern-widget-marquee-animate"),t=setTimeout(()=>{t=null,p(f)},_n)}return o.addEventListener("animationend",(f)=>{if(f.animationName!=="spotify-modern-marquee"||n.dataset.marqueePhase!=="scrolling")return;d(!0)}),{root:n,setText(f){o.textContent=f,n.setAttribute("aria-label",f)},refresh(f,c=!1){if(!f){n.dataset.overflow="false",l(),n.style.removeProperty("--spotify-modern-marquee-distance"),n.style.removeProperty("--spotify-modern-marquee-duration");return}let m=Math.ceil(o.scrollWidth-n.clientWidth);if(m<=6){n.dataset.overflow="false",l(),n.style.removeProperty("--spotify-modern-marquee-distance"),n.style.removeProperty("--spotify-modern-marquee-duration");return}n.dataset.overflow="true",n.style.setProperty("--spotify-modern-marquee-distance",`${m}px`),n.style.setProperty("--spotify-modern-marquee-duration",`${Math.max(8,Math.min(20,8+m/18))}s`);let y=t!==null,b=n.dataset.marqueePhase==="scrolling";if(c||!y&&!b)d(c)}}}function an(e,n,o){let t=document.createElement("div");t.className="spotify-modern-widget-player",t.dataset.expanded="false",t.dataset.transport="false";let l=document.createElement("div");l.className="spotify-modern-widget-compact";let p=Ge("spotify-modern-widget-compact-art"),d=document.createElement("div");d.className="spotify-modern-widget-compact-fallback",d.innerHTML=zt;let f=document.createElement("div");f.className="spotify-modern-widget-compact-overlay";let c=document.createElement("div");c.className="spotify-modern-widget-compact-status";let m=document.createElement("div");m.className="spotify-modern-widget-compact-progress",f.appendChild(c),l.appendChild(p.el),l.appendChild(d),l.appendChild(f),l.appendChild(m);let y=document.createElement("div");y.className="spotify-modern-widget-expanded";let b=document.createElement("div");b.className="spotify-modern-widget-header";let E=document.createElement("div");E.className="spotify-modern-widget-eyebrow",E.textContent="Now Playing";let x=document.createElement("div");x.className="spotify-modern-widget-header-buttons";let L=document.createElement("button");L.className="spotify-modern-widget-icon-btn",L.innerHTML=An,L.title="Open full player";let T=document.createElement("button");T.className="spotify-modern-widget-icon-btn",T.innerHTML=Un,T.title="Collapse",pt(L),pt(T),L.addEventListener("click",()=>n()),T.addEventListener("click",()=>o()),x.appendChild(L),x.appendChild(T),b.appendChild(E),b.appendChild(x);let k=document.createElement("div");k.className="spotify-modern-widget-hero";let D=Ge("spotify-modern-widget-art");D.el.title="Collapse";let v=document.createElement("div");v.className="spotify-modern-widget-art-fallback",v.innerHTML=zt,v.title="Collapse",pt(D.el),pt(v),D.el.addEventListener("click",()=>o()),v.addEventListener("click",()=>o());let B=document.createElement("div");B.className="spotify-modern-widget-meta";let W=It("spotify-modern-widget-track"),ne=It("spotify-modern-widget-artist"),re=It("spotify-modern-widget-album");B.appendChild(W.root),B.appendChild(ne.root),B.appendChild(re.root),k.appendChild(D.el),k.appendChild(v),k.appendChild(B);let V=document.createElement("div");V.className="spotify-modern-widget-progress-row";let j=document.createElement("span");j.className="spotify-modern-widget-time";let K=document.createElement("div");K.className="spotify-modern-widget-progress-bar";let C=document.createElement("div");C.className="spotify-modern-widget-progress-fill",K.appendChild(C);let N=document.createElement("span");N.className="spotify-modern-widget-time",V.appendChild(j),V.appendChild(K),V.appendChild(N);let A=document.createElement("div");A.className="spotify-modern-widget-lyrics";let U=document.createElement("div");U.className="spotify-modern-widget-section-label",U.textContent="Lyrics";let R=document.createElement("div");R.className="spotify-modern-widget-lyrics-body";let F=document.createElement("div");F.className="spotify-modern-widget-lyrics-track",R.appendChild(F),A.appendChild(U),A.appendChild(R);let G=document.createElement("div");G.className="spotify-modern-widget-controls";let z=document.createElement("button");z.className="spotify-modern-widget-btn",z.innerHTML=Nn;let Z=document.createElement("button");Z.className="spotify-modern-widget-btn spotify-modern-widget-btn-main",Z.innerHTML=sn;let g=document.createElement("button");g.className="spotify-modern-widget-btn",g.innerHTML=zn,G.appendChild(z),G.appendChild(Z),G.appendChild(g);let w=document.createElement("div");w.className="spotify-modern-widget-volume-row";let O=document.createElement("span");O.className="spotify-modern-widget-volume-icon",O.innerHTML=In;let M=document.createElement("input");M.type="range",M.min="0",M.max="100",M.value="50",M.className="spotify-modern-widget-volume-slider",w.appendChild(O),w.appendChild(M);let _=document.createElement("div");_.className="spotify-modern-widget-empty";let ie=document.createElement("div");ie.className="spotify-modern-widget-empty-icon",ie.innerHTML=zt;let ye=document.createElement("div");ye.className="spotify-modern-widget-empty-title",ye.textContent="No music playing.";let ce=document.createElement("div");ce.className="spotify-modern-widget-empty-subtitle",ce.textContent="Your speakers are enjoying a brief moment of mindfulness.",_.appendChild(ie),_.appendChild(ye),_.appendChild(ce),y.appendChild(b),y.appendChild(k),y.appendChild(V),y.appendChild(A),y.appendChild(G),y.appendChild(w),y.appendChild(_),t.appendChild(l),t.appendChild(y),[K,z,Z,g,M].forEach((u)=>pt(u)),pt(R);let Oe=!1,pe=null,ze=!1,ge=0,ue=0,De=0,se=!1,Ee=null,Ie=null,I=Lt(),ae=[],oe=!1,q=!1,le="",Me=[],Ue=Et(R),J="",Ce=null,Se=null,be=!1,qe=!1,_e=new ResizeObserver(()=>{Be(!1)});_e.observe(B),_e.observe(t);let Fe=new ResizeObserver(()=>{if(!ze)return;Pe(!0)});Fe.observe(R);function Be(u){requestAnimationFrame(()=>{W.refresh(ze,u),ne.refresh(ze,u),re.refresh(ze,u)})}function Je(u){if(Ce)clearTimeout(Ce);if(Se)clearTimeout(Se);Be(u),Ce=setTimeout(()=>Be(u),180),Se=setTimeout(()=>Be(u),460)}function Ke(u){p.setUrl(u),d.style.display=u?"none":"flex"}function Ze(u){D.setUrl(u),v.style.display=u?"none":"flex"}function We(){if(!se)return ue;return Math.min(ue+Math.max(0,Date.now()-De),ge||1/0)}function Y(u,H){m.style.setProperty("--spotify-modern-widget-compact-progress",`${Math.max(0,Math.min(100,u))}%`),m.style.opacity=H?"1":"0"}function Qe(){Ue.cancel(),F.innerHTML="",R.scrollTop=0,Me=[]}function Ae(){Qe(),Me=I.getIndexedLines().map((H,me)=>{let he=document.createElement("div");return he.className="spotify-modern-widget-lyric-line spotify-modern-widget-lyric-line-enter",he.style.setProperty("--spotify-modern-lyric-enter-delay",`${Math.min(me*22,110)}ms`),he.textContent=H.displayText,F.appendChild(he),he})}function Pe(u=!1){if(!I.hasLyrics())return;let H=I.getActiveLineIndex(),me=H>=0?Me[H]:Me[0];if(me)Ue.center(me,{force:u})}function Re(u=!0){let H=I.getActiveLineIndex();if(I.getIndexedLines().forEach((he,r)=>{let h=Me[r];if(!h)return;if(h.className="spotify-modern-widget-lyric-line",he.index===H)h.classList.add("active");else if(H>=0){let P=Math.abs(he.index-H);if(P===1)h.classList.add("near");else if(P===2)h.classList.add("mid");else h.classList.add("far")}else h.classList.add("far")}),!u)return;Pe()}function Q(){if(Qe(),!Oe||!pe){le="";let H=document.createElement("div");H.className="spotify-modern-widget-lyrics-status",H.textContent=Oe?"Start playback to see lyrics":"Connect Subsonic to see lyrics",F.appendChild(H);return}if(q){le="loading";let H=document.createElement("div");H.className="spotify-modern-widget-lyrics-status spotify-modern-widget-lyrics-status-loading",H.textContent="Loading lyrics...",F.appendChild(H);return}if(oe){le="instrumental";let H=document.createElement("div");H.className="spotify-modern-widget-lyrics-status",H.textContent="♪ Instrumental",F.appendChild(H);return}if(I.hasLyrics()&&pe.trackUri===Ie){le=I.getIndexedLines().map((me)=>`${me.index}:${me.text}`).join("|"),Ae(),Re(!1);return}if(ae.length>0){let H=ae.join("|"),me=H!==le;le=H,ae.forEach((he,r)=>{let h=document.createElement("div");if(h.className="spotify-modern-widget-lyric-line plain",me)h.classList.add("spotify-modern-widget-lyric-line-enter"),h.style.setProperty("--spotify-modern-lyric-enter-delay",`${Math.min(r*20,100)}ms`);h.textContent=he,F.appendChild(h)});return}le="empty";let u=document.createElement("div");u.className="spotify-modern-widget-lyrics-status",u.textContent="No lyrics available",F.appendChild(u)}function nt(u=!1){if(!pe||pe.trackUri!==Ie||!I.hasLyrics()){if(u)Q();return}if(I.setPlayback({trackUri:pe.trackUri,progressMs:We(),durationMs:ge,isPlaying:se,updatedAt:Date.now()}),u){Q();return}if(I.refreshActiveLineIndex())Re(!0)}function ke(){if(!pe||!Oe||!se||!ge){Ee=null;return}if(be){Ee=requestAnimationFrame(ke);return}let u=We(),H=ge>0?u/ge*100:0;C.style.width=`${H}%`,Y(H,!0),j.textContent=St(u),nt(),Ee=requestAnimationFrame(ke)}function de(){if(Ee!==null)return;Ee=requestAnimationFrame(ke)}function ee(){if(Ee!==null)cancelAnimationFrame(Ee),Ee=null}function $e(){return pe?.source==="feishin"||pe?.source==="jukebox"}z.addEventListener("click",()=>{if($e())e({type:"previous"})}),g.addEventListener("click",()=>{if($e())e({type:"next"})}),Z.addEventListener("click",()=>{if($e())e({type:pe?.isPlaying?"pause":"play"})});let et=Mt(K,{getMaxValue:()=>ge,onInteractChange(u){be=u},onPreview(u){let H=ge>0?u/ge*100:0;C.style.width=`${H}%`,Y(H,ge>0),j.textContent=St(u)},onCommit(u){if(pe)pe={...pe,progressMs:u};if(ue=u,De=Date.now(),nt(!0),e({type:"seek",positionMs:u}),se)de()},stopPropagation:!0}),Ne=Ct(M,{onInteractChange(u){qe=u},onCommit(u){e({type:"set_volume",percent:u})},stopPropagation:!0});function Ve(u,H){if(pe=u,Oe=H,t.dataset.empty=!u?"true":"false",!H||!u){be=!1,qe=!1,E.textContent=H?"Standby":"Connect Subsonic",c.textContent=H?"No playback":"Connect Subsonic",_.style.display="grid",k.style.display="none",V.style.display="none",A.style.display="none",G.style.display="none",w.style.display="none",Y(0,!1),Ke(null),Ze(null),I.setPlayback(null),J="",ee(),Q();return}E.textContent="Now Playing";let me=Ye(u.albumArtUrl,u.trackUri);Ke(me),Ze(me),c.textContent=u.isPlaying?"Playing":"Paused";let he=`${u.trackName}|${u.artistName}|${u.albumName}`,r=he!==J;J=he,W.setText(u.trackName),ne.setText(u.artistName),re.setText(u.albumName),k.style.display="grid",V.style.display="grid",A.style.display="grid",_.style.display="none",ge=u.durationMs,se=u.isPlaying;let h=$e(),P=t.dataset.transport!==String(h);if(t.dataset.transport=String(h),G.style.display=h?"flex":"none",G.hidden=!h,z.disabled=!h,Z.disabled=!h,g.disabled=!h,w.hidden=!0,w.style.display="none",I.setPlayback({trackUri:u.trackUri,progressMs:be?ue:u.progressMs,durationMs:u.durationMs,isPlaying:u.isPlaying,updatedAt:be?De:Date.now()}),Z.innerHTML=u.isPlaying?Tn:sn,!qe)M.value=String(u.volume??Number(M.value));if(!be){ue=u.progressMs,De=Date.now();let X=u.durationMs>0?u.progressMs/u.durationMs*100:0;C.style.width=`${X}%`,Y(X,u.durationMs>0),j.textContent=St(u.progressMs)}if(N.textContent=St(u.durationMs),I.hasLyrics()&&u.trackUri===Ie)if(Me.length===0)Q();else nt();else if(F.childElementCount===0)Q();if(P&&I.hasLyrics()&&u.trackUri===Ie)requestAnimationFrame(()=>requestAnimationFrame(()=>Re(!0)));if(Je(r),u.isPlaying)de();else ee()}function Xe(u,H,me,he){Ie=u;let r=dt(me);I.setLyrics(r),ae=Rn(H),oe=he,q=!1,nt(!0)}function ot(u){if(q=u,u)Ie=pe?.trackUri??null,I.clear(),ae=[],oe=!1;Q()}return{root:t,update:Ve,updateLyrics:Xe,setLyricsLoading:ot,setLyricsBlur(u){if(u)A.style.removeProperty("--spotify-lyrics-enter-blur");else A.style.setProperty("--spotify-lyrics-enter-blur","0px")},setAutoScrollSuspended(u){if(Ue.suspend(u)&&!u&&I.hasLyrics())Re(!0)},setCollapsedSize(u){t.style.setProperty("--spotify-modern-widget-collapsed-size",`${u}px`)},setExpanded(u){if(ze=u,t.dataset.expanded=String(u),Je(!0),u)requestAnimationFrame(()=>Pe(!0))},isExpanded(){return ze},destroy(){if(ee(),Ue.destroy(),et(),Ne(),Ce)clearTimeout(Ce);if(Se)clearTimeout(Se);_e.disconnect(),Fe.disconnect(),p.destroy(),D.destroy(),t.remove()}}}var At="right",Hn='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',On='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';function Dn(e){try{return new Date(e).toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return""}}function ln(e,n){let o=new Map,t=new Map,l=new Map,p=null,d=null,f=null,c=null,m=null,y=null,b=null,E=null,x=null,L=null;function T(g){return o.get(g)?.get(t.get(g)??0)??null}function k(g){return(o.get(g)?.size??0)>0}function D(g){let w=l.get(g);if(w)w.style.display=T(g)?"":"none"}function v(g){if(!k(g))return;let w=l.get(g);if(!w||!w.isConnected){let O=e.dom.findMessageElement(g);if(!O)return;let M=e.dom.inject(O,`<button type="button" class="spotify-song-badge" aria-label="Song that was playing" title="Song that was playing">${Hn}</button>`,"beforeend");M.classList.add("spotify-song-badge-wrap"),M.dataset.corner=At,M.addEventListener("click",(_)=>{_.stopPropagation(),_.preventDefault(),A(g,M)}),l.set(g,M),w=M}D(g)}function B(){for(let{messageId:g}of e.dom.listMessageElements())if(k(g))v(g)}function W(){if(d)return;d=document.createElement("div"),d.className="spotify-song-pop";let g=document.createElement("div");g.className="spotify-song-pop-header",g.textContent="Playing when generated";let w=document.createElement("div");w.className="spotify-song-pop-body",f=Ge("spotify-song-pop-art"),f.el.style.display="";let O=document.createElement("div");O.className="spotify-song-pop-info",c=document.createElement("div"),c.className="spotify-song-pop-track",m=document.createElement("div"),m.className="spotify-song-pop-artist",y=document.createElement("div"),y.className="spotify-song-pop-album",b=document.createElement("div"),b.className="spotify-song-pop-when",O.append(c,m,y,b),w.append(f.el,O);let M=document.createElement("div");M.className="spotify-song-pop-actions",E=document.createElement("button"),E.type="button",E.className="spotify-song-pop-btn spotify-song-pop-btn-primary",E.innerHTML=`${On}<span>Play</span>`,E.addEventListener("click",(_)=>{_.stopPropagation();let ie=x?T(x):null;if(ie?.trackUri)n({type:"play",trackUri:ie.trackUri});N()}),M.appendChild(E),d.append(g,w,M),d.addEventListener("click",(_)=>_.stopPropagation()),document.body.appendChild(d)}function ne(g){if(W(),!g){if(f?.setUrl(null),c)c.textContent="No track playing";if(m)m.textContent="";if(y)y.textContent="Nothing was playing when this version was written.";if(b)b.textContent="";if(E)E.style.display="none";return}if(f?.setUrl(Ye(g.albumArtUrl,g.trackUri)),c)c.textContent=g.trackName;if(m)m.textContent=g.artistName;if(y)y.textContent=g.albumName;if(b)b.textContent=Dn(g.capturedAt);if(E)E.style.display=""}function re(g){if(!d)return;let w=g.getBoundingClientRect(),O=d.offsetWidth||280,M=d.offsetHeight||200,_=8,ie=w.top-M-8,ye="bottom";if(ie<_)ie=w.bottom+8,ye="top";let ce=At==="right"?w.right-O:w.left;ce=Math.max(_,Math.min(ce,window.innerWidth-O-_)),ie=Math.max(_,Math.min(ie,window.innerHeight-M-_)),d.style.left=`${ce}px`,d.style.top=`${ie}px`,d.style.transformOrigin=`${ye} ${At}`}function V(g){let w=g.target;if(!(w instanceof Node))return;if(d?.contains(w)||L?.contains(w))return;N()}function j(){N()}function K(g){if(g.key==="Escape")N()}function C(g,w){ne(T(g)),x=g,L=w,d.classList.add("open"),re(w),setTimeout(()=>{document.addEventListener("click",V,!0),window.addEventListener("scroll",j,!0),window.addEventListener("resize",j,!0),document.addEventListener("keydown",K,!0)},0)}function N(){if(!d||!x)return;d.classList.remove("open"),x=null,L=null,document.removeEventListener("click",V,!0),window.removeEventListener("scroll",j,!0),window.removeEventListener("resize",j,!0),document.removeEventListener("keydown",K,!0)}function A(g,w){if(x===g)N();else{if(x)N();C(g,w)}}function U(g,w){if(g!==p)z();p=g;let O=new Set(w.map((M)=>M.messageId));for(let M of[...o.keys()])if(!O.has(M))G(M);for(let M of w){let _=new Map;for(let[ie,ye]of Object.entries(M.bySwipe))_.set(Number(ie),ye);o.set(M.messageId,_),t.set(M.messageId,M.activeSwipe),v(M.messageId)}B()}function R(g,w,O,M){if(p&&g!==p)return;p=g;let _=o.get(w)??new Map;if(_.set(O,M),o.set(w,_),t.set(w,O),v(w),x===w)ne(T(w))}function F(g,w){if(t.set(g,w),D(g),x===g){let O=T(g);if(O)ne(O);else N()}}function G(g){if(x===g)N();o.delete(g),t.delete(g);let w=l.get(g);if(w){try{e.dom.uninject(w)}catch{}l.delete(g)}}function z(){N();for(let g of l.values())try{e.dom.uninject(g)}catch{}l.clear(),o.clear(),t.clear(),p=null}function Z(){z(),f?.destroy(),d?.remove(),d=null}return{setChatSongs:U,setMessageSong:R,decorate:v,decorateMounted:B,setActiveSwipe:F,removeMessage:G,reset:z,destroy:Z}}var qn={width:320,height:196},Fn={width:348,height:520};var dn={width:300,height:420};function cn({desktopPopout:e,hasPlayback:n,viewportHeight:o,viewportWidth:t}){let l=n?Fn:qn;if(e)return{...l};if(!n)return{width:Math.max(280,Math.min(l.width,t-24)),height:l.height};return{width:Math.max(dn.width,Math.min(l.width,t-24)),height:Math.max(dn.height,Math.min(l.height,o-24))}}var pn='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',mt=12,mn="subsonic-controls-widget-prefs";function un(e){let n=[],o="__TAURI_INTERNALS__"in window&&new URLSearchParams(window.location.search).has("desktopWidgetExtension");n.push(e.dom.addStyle(Yt));let t=(i)=>e.sendToBackend(i),l=null,p=0,d=null,f=new Map,c=48,m=new Map;function y(i){if(/^(data|blob):/i.test(i))return Promise.resolve(i);return new Promise((a)=>{let s=crypto.randomUUID(),S=setTimeout(()=>{m.delete(s),a(null)},15000);m.set(s,{resolve:a,timer:S}),e.sendToBackend({type:"__cors_proxy_request",requestId:s,url:i,options:{method:"GET",mediaType:"image"}})})}function b(i,a){let s=m.get(i);if(!s)return;m.delete(i),clearTimeout(s.timer);let S=a?.headers?.["content-type"]||a?.headers?.["Content-Type"]||"image/jpeg";s.resolve(a?.status&&a.status>=200&&a.status<300&&a.encoding==="base64"&&a.body?`data:${S};base64,${a.body}`:null)}function E(){if(d)clearTimeout(d);d=null}function x(){E(),p+=1,t({type:"album_colors",colors:null})}function L(i,a){f.delete(i),f.set(i,a);while(f.size>c){let s=f.keys().next().value;if(!s)break;f.delete(s)}}function T(i=1800){E(),d=setTimeout(()=>{d=null,x()},i)}function k(i){return new Promise((a)=>{let s=new Image;s.onload=()=>{try{let S=document.createElement("canvas"),te=32;S.width=32,S.height=32;let we=S.getContext("2d");if(!we)return a(null);we.drawImage(s,0,0,32,32);let Te=we.getImageData(0,0,32,32).data,bt=0,at=0,_t=0.5,Rt=-1,Ht=0,Ot=0,Dt=0,xt=0;for(let ut=0;ut<Te.length;ut+=4){let Wt=Te[ut],$t=Te[ut+1],Vt=Te[ut+2];Ht+=Wt,Ot+=$t,Dt+=Vt,xt+=1;let ft=Wt/255,lt=$t/255,yt=Vt/255,st=Math.max(ft,lt,yt),gt=Math.min(ft,lt,yt),Pt=(st+gt)/2,wt=0,Nt=0;if(st!==gt){let ht=st-gt;if(Nt=Pt>0.5?ht/(2-st-gt):ht/(st+gt),st===ft)wt=((lt-yt)/ht+(lt<yt?6:0))/6;else if(st===lt)wt=((yt-ft)/ht+2)/6;else wt=((ft-lt)/ht+4)/6}let jt=Nt*(1-Math.abs(Pt-0.5)*1.6);if(jt>Rt)Rt=jt,bt=wt,at=Nt,_t=Pt}let qt=Math.round(Ht/xt),Ft=Math.round(Ot/xt),Bt=Math.round(Dt/xt),hn=0.299*qt+0.587*Ft+0.114*Bt;a({dominant:{r:qt,g:Ft,b:Bt},dominantHsl:{h:Math.round(bt*360),s:Math.round(at*100),l:Math.round(_t*100)},isLight:hn>152})}catch{a(null)}},s.onerror=()=>a(null),y(i).then((S)=>{if(S)s.src=S;else a(null)})})}let D="none",v=Gt(t);e.ui.mount("settings_extensions").appendChild(v.root),n.push(()=>v.destroy());let W=e.ui.registerDrawerTab({id:"subsonic",title:"Subsonic Controls",shortName:"Subsonic",description:"Browse a Subsonic-compatible music server and control its optional Jukebox.",keywords:["subsonic","opensubsonic","music","jukebox","lyrics"],headerTitle:"Subsonic",iconSvg:pn});n.push(()=>W.destroy()),W.root.classList.add("spotify-tab-root");let ne=document.createElement("div");ne.className="spotify-panel",W.root.appendChild(ne);function re(){let i=W.root.getBoundingClientRect().top,a=W.root.parentElement?.getBoundingClientRect().bottom??window.innerHeight,s=window.visualViewport?.height??window.innerHeight,S=Math.min(a,s);W.root.style.setProperty("--spotify-tab-height",`${Math.max(240,S-i-2)}px`)}re();let V=new ResizeObserver(re);V.observe(W.root),window.addEventListener("resize",re),n.push(()=>{V.disconnect(),window.removeEventListener("resize",re)});let j=Xt(),K=new Set(["play","pause","next","previous","queue"]),C=Jt(t),N=Kt(t),A=en();ne.append(j.root,C.root,N.root,A.root),n.push(()=>j.destroy(),()=>C.destroy(),()=>N.destroy(),()=>A.destroy());let U=!1,R=null,F=null,G=!1,z="",Z="",g=!1,w="",O="",M=!1,_=1000,ie=null,ye={small:36,medium:48,large:64},ce={small:112,medium:128,large:144},Oe=24,pe=256,ze=96,ge=256;function ue(i){return i==="modern"?ce:ye}function De(i){return i==="modern"?{min:ze,max:ge}:{min:Oe,max:pe}}function se(i,a){let{min:s,max:S}=De(a);return Math.max(s,Math.min(i,S))}function Ee(i){return i==="small"||i==="medium"||i==="large"||i==="custom"}function Ie(i,a){let s=ue(a);if(i===s.small)return"small";if(i===s.large)return"large";return i===s.medium?"medium":"custom"}let I=48,ae="circle",oe="medium",q="default",le=!0,Me,Ue=null;try{let i=JSON.parse(localStorage.getItem(mn)||"null");if(i?.miniPlayerStyle==="modern")q="modern";if(i?.lyricsBlur===!1)le=!1;if(typeof i?.size==="number")I=se(i.size,q);if(i?.shape==="squircle")ae="squircle";if(oe=Ee(i?.sizeMode)?i.sizeMode:Ie(I,q),oe!=="custom")I=ue(q)[oe];if(typeof i?.x==="number"&&typeof i.y==="number")Me={x:i.x,y:i.y};if(i)Ue={size:I,shape:ae,sizeMode:oe,miniPlayerStyle:q,lyricsBlur:le,...Me}}catch{}let J,Ce=null,Se=!1;function be(){let i=J.getPosition(),a={size:I,shape:ae,sizeMode:oe,miniPlayerStyle:q,lyricsBlur:le,x:i.x,y:i.y};Se=!0,localStorage.setItem(mn,JSON.stringify(a)),t({type:"set_widget_preferences",preferences:a})}let qe=null,_e=null,Fe=null;function Be(){let{min:i,max:a}=De(q);if(qe)qe.textContent=q==="modern"?"Collapsed Modern Player Size (px)":"Custom Widget Size (px)";if(_e)_e.textContent=q==="modern"?`Controls the compact size of the modern player before it expands (${i}–${a}px).`:`Controls the floating widget size (${i}–${a}px).`;if(Fe)Fe.min=String(i),Fe.max=String(a),Fe.placeholder=q==="modern"?"e.g. 128":"e.g. 56",Fe.value=oe==="custom"?String(I):""}let Je=v.root.querySelector(".spotify-settings-card-body");if(Je){let i=document.createElement("div");i.style.cssText="height:1px;background:var(--lumiverse-border);margin:4px 0";let a=document.createElement("label");a.className="spotify-settings-label",qe=document.createElement("span"),_e=document.createElement("div"),_e.style.cssText="font-size:0.8em;opacity:0.6;margin-top:2px";let s=document.createElement("div");s.className="spotify-settings-row";let S=document.createElement("input");S.className="spotify-input",S.type="number",S.step="1",S.style.width="80px",Fe=S;let te=document.createElement("button");te.type="button",te.className="spotify-btn spotify-btn-primary",te.textContent="Apply",te.style.cssText="font-size:0.85em;padding:4px 12px";let we=()=>{let Te=S.valueAsNumber;if(!Number.isFinite(Te))return;oe="custom",r(se(Math.round(Te),q))};te.addEventListener("click",we),S.addEventListener("keydown",(Te)=>{if(Te.key!=="Enter")return;Te.preventDefault(),we()}),s.append(S,te),a.append(qe,s,_e),Je.append(i,a)}Be();let Ke=null;function Ze(){if(Ke)Ke.checked=le}function We(){A.setBlurEnabled(le),de.setLyricsBlur(le),Ze()}if(Je){let i=document.createElement("div");i.style.cssText="height:1px;background:var(--lumiverse-border);margin:4px 0";let a=document.createElement("label");a.className="spotify-settings-check";let s=document.createElement("input");s.type="checkbox",s.checked=le,Ke=s;let S=document.createElement("span");S.textContent="Lyrics blur",a.append(s,S);let te=document.createElement("div");te.style.cssText="font-size:0.8em;opacity:0.65;margin-top:4px",te.textContent="Depth-blurs receding lyric lines and fades new lines in through a blur. Turn off for crisp text.";let we=document.createElement("div");we.append(a,te),s.addEventListener("change",()=>{le=s.checked,We(),be()}),Je.append(i,we)}let Y=document.createElement("div");Y.className="spotify-float-widget";function Qe(){Y.classList.remove("spotify-float-widget-mounted"),requestAnimationFrame(()=>requestAnimationFrame(()=>Y.classList.add("spotify-float-widget-mounted")))}let Ae=document.createElement("div");Ae.className="spotify-float-widget-legacy";let Pe=document.createElement("div");Pe.className="spotify-float-widget-icon",Pe.innerHTML=pn;let Re=Ge("spotify-float-widget-art");Re.el.style.display="none",Ae.append(Pe,Re.el),Y.appendChild(Ae);let Q=!1,nt=420,ke=null,de=an(t,()=>W.activate(),()=>ot(!1));Y.appendChild(de.root);let ee=rn(t,()=>W.activate(),()=>{let i=J.root.getBoundingClientRect();return{x:i.left,y:i.top,w:i.width,h:i.height}});ee.setStyle("default");function $e(){return cn({desktopPopout:o,hasPlayback:Boolean(R),viewportHeight:window.innerHeight,viewportWidth:window.innerWidth})}function et(i=Q){if(q==="modern")return i?$e():{width:I,height:I};return{width:I,height:I}}function Ne(i=et()){let a=J.getPosition(),s=Math.max(mt,window.innerWidth-i.width-mt),S=Math.max(mt,window.innerHeight-i.height-mt),te=Math.max(mt,Math.min(a.x,s)),we=Math.max(mt,Math.min(a.y,S));if(te!==a.x||we!==a.y)J.moveTo(te,we)}function Ve(i,a=!1){if(ke)clearTimeout(ke);let s=()=>{ke=null,J.setSize(i.width,i.height)};if(a)ke=setTimeout(s,nt);else s()}function Xe({delaySizeRequest:i=!1}={}){let a=et(),s=q==="modern"&&Q?"pan-y":"none";if(J.root.style.touchAction=s,J.root.style.transition="width 420ms cubic-bezier(0.22, 1, 0.36, 1), height 420ms cubic-bezier(0.22, 1, 0.36, 1)",Y.style.transition="width 420ms cubic-bezier(0.22, 1, 0.36, 1), height 420ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 420ms cubic-bezier(0.22, 1, 0.36, 1)",Y.style.touchAction=s,de.setCollapsedSize(I),q==="modern")Y.classList.add("spotify-float-widget-modern-mode"),Ae.style.display="none",de.root.style.display="block",J.root.style.width=`${a.width}px`,J.root.style.height=`${a.height}px`,Y.style.width=`${a.width}px`,Y.style.height=`${a.height}px`,Y.style.borderRadius=Q?"30px":`${Math.max(18,Math.round(I*0.28))}px`,Ve(a,i);else{Y.classList.remove("spotify-float-widget-modern-mode"),Ae.style.display="flex",de.root.style.display="none";let S=ae==="circle"?"50%":"22%";J.root.style.width=`${I}px`,J.root.style.height=`${I}px`,Y.style.width=`${I}px`,Y.style.height=`${I}px`,Y.style.borderRadius=S;let te=Math.round(I*0.5),we=Pe.querySelector("svg");if(we)we.style.width=`${te}px`,we.style.height=`${te}px`;Ve(a)}}function ot(i){let a=Q;Q=i&&q==="modern",ee.hide(),Ne(et(Q)),de.setExpanded(Q),Xe({delaySizeRequest:a&&!Q}),requestAnimationFrame(()=>Ne(et()))}function u(){if(J.root.style.display=U?"":"none",!U)ee.hide(),Q=!1,de.setExpanded(!1);ee.update(R,U),de.update(R,U),H(R)}function H(i){let a=Ye(i?.albumArtUrl??null,i?.trackUri);Pe.style.display=a?"none":"flex",Re.el.style.display=a?"":"none",Re.setUrl(a)}function me(i=Me){if(J=e.ui.createFloatWidget({width:I,height:I,tooltip:"Subsonic",chromeless:!0}),J.root.appendChild(Y),Qe(),J.onDragEnd((a)=>{Ce=a,Ne(),be()}),Xe(),u(),i)J.moveTo(i.x,i.y)}function he(){r(I)}function r(i){ee.hide(),Q=!1,de.setExpanded(!1);let a=J.getPosition();Ce=a,J.destroy(),I=se(i,q),Be(),me(a),Ne(),be()}function h(i){let a=i.miniPlayerStyle==="modern"?"modern":"default",s=Ee(i.sizeMode)?i.sizeMode:Ie(i.size,a);q=a,le=i.lyricsBlur!==!1,ae=i.shape==="squircle"?"squircle":"circle",oe=s,I=s==="custom"?se(i.size,a):ue(a)[s],ee.setStyle(a),ee.hide(),Q=!1,de.setExpanded(!1);let S=typeof i.x==="number"&&typeof i.y==="number"?{x:i.x,y:i.y}:J.getPosition();Ce=S,J.destroy(),Be(),me(S),Ne(),We()}let P=0;async function X(i,a){let s=[{key:"small",label:"Small",active:oe==="small"},{key:"medium",label:"Medium",active:oe==="medium"},{key:"large",label:"Large",active:oe==="large"},{key:"custom",label:"Custom…",active:oe==="custom"}];if(q!=="modern")s.push({key:"shape-divider",label:"",type:"divider"},{key:"circle",label:"Circle",active:ae==="circle"},{key:"squircle",label:"Squircle",active:ae==="squircle"});s.push({key:"style-divider",label:"",type:"divider"},{key:"mini-default",label:"Default Mini Player",active:q==="default"},{key:"mini-modern",label:"Modern Lyrics Mini Player",active:q==="modern"}),P+=1,ee.setUiSuspended(!0),de.setAutoScrollSuspended(!0),A.setAutoScrollSuspended(!0);let S;try{({selectedKey:S}=await e.ui.showContextMenu({position:{x:i,y:a},items:s}))}finally{if(P=Math.max(0,P-1),P===0)ee.setUiSuspended(!1),de.setAutoScrollSuspended(!1),A.setAutoScrollSuspended(!1)}if(!S)return;if(S==="small"||S==="medium"||S==="large")oe=S,r(ue(q)[S]);else if(S==="custom")e.events.emit("open-settings",{view:"extensions"});else if(S==="circle"||S==="squircle")ae=S,be(),Xe();else if(S==="mini-default"||S==="mini-modern"){if(q=S==="mini-modern"?"modern":"default",I=oe==="custom"?se(I,q):ue(q)[oe],ee.setStyle(q),q!=="modern")Q=!1,de.setExpanded(!1);ee.hide(),be(),Be(),Xe(),Ne()}}let ve=!1,tt={x:0,y:0},it=5;Y.addEventListener("pointerdown",(i)=>{if(ve=!1,tt={x:i.clientX,y:i.clientY},!ee.isOpen())return;let a=null,s=()=>{if(ve&&a===null)a=requestAnimationFrame(()=>{ee.reposition(),a=null})},S=()=>{if(document.removeEventListener("pointermove",s),a!==null)cancelAnimationFrame(a)};document.addEventListener("pointermove",s),document.addEventListener("pointerup",S,{once:!0})}),Y.addEventListener("pointermove",(i)=>{if(ve)return;let a=Math.abs(i.clientX-tt.x),s=Math.abs(i.clientY-tt.y);if(a>it||s>it)ve=!0}),Y.addEventListener("pointerup",()=>{requestAnimationFrame(()=>Ne())}),Y.addEventListener("click",(i)=>{if(ve){i.stopPropagation(),ve=!1;return}if(i.stopPropagation(),q==="modern"){if(!Q)ot(!0);return}ee.toggle()}),Y.addEventListener("contextmenu",(i)=>{i.preventDefault(),i.stopPropagation(),X(i.clientX,i.clientY)});let xe=null,Le=!1,He={x:0,y:0};Y.addEventListener("touchstart",(i)=>{Le=!1;let a=i.touches[0];He={x:a.clientX,y:a.clientY},xe=setTimeout(()=>{Le=!0,navigator.vibrate?.(50),X(a.clientX,a.clientY)},500)}),Y.addEventListener("touchmove",(i)=>{if(!xe)return;let a=i.touches[0];if(Math.abs(a.clientX-He.x)>10||Math.abs(a.clientY-He.y)>10)clearTimeout(xe),xe=null}),Y.addEventListener("touchend",(i)=>{if(xe)clearTimeout(xe),xe=null;if(Le){Le=!1;return}if(q==="modern"&&Q){ve=!1;return}if(!ve){if(i.cancelable)i.preventDefault();if(q==="modern"){if(!Q)ot(!0)}else ee.toggle()}ve=!1}),me(),Ne(),We();let rt=()=>{if(q==="modern"&&Q){Xe(),requestAnimationFrame(()=>Ne(et()));return}Ne()};window.addEventListener("resize",rt),n.push(()=>window.removeEventListener("resize",rt)),n.push(()=>{if(ke)clearTimeout(ke);Ce=J.getPosition(),be(),Re.destroy(),ee.destroy(),de.destroy(),J.destroy()});let je=ln(e,t);n.push(()=>je.destroy());let vt=(i)=>{if(i)t({type:"get_chat_songs",chatId:i})};vt(e.getActiveChat().chatId),n.push(e.events.on("CHAT_SWITCHED",(i)=>{je.reset(),vt(i.chatId||null)})),n.push(e.events.on("CHARACTER_MESSAGE_RENDERED",(i)=>{let a=i.messageId;if(a)je.decorate(a)})),n.push(e.events.on("MESSAGE_SWIPED",(i)=>{let a=i.message;if(a?.id)je.setActiveSwipe(a.id,a.swipe_id||0)})),n.push(e.events.on("MESSAGE_DELETED",(i)=>{let a=i.messageId;if(a)je.removeMessage(a)}));let yn=e.onBackendMessage((i)=>{let a=i;if(a.type==="__cors_proxy_response"&&a.requestId){b(a.requestId,a.error?void 0:a.result);return}let s=i;switch(s.type){case"config":if(z&&z!==s.serverUrl)f.clear();D=s.remoteControl,U=s.connected,G=s.remoteControl==="jukebox",z=s.serverUrl,Z=s.username,g=s.hasPassword,w=s.feishinUrl,O=s.feishinUsername,M=s.hasFeishinPassword,_=s.playbackPositionOffsetMs,ie=s.jukeboxUnavailableReason,v.update(s.connected,s.serverUrl,s.username,s.hasPassword,s.remoteControl,s.feishinUrl,s.feishinUsername,s.hasFeishinPassword,s.playbackPositionOffsetMs,s.jukeboxUnavailableReason),N.setAvailable(!0),N.setPlaybackAvailable(s.remoteControl==="jukebox"),C.update(R,U,s.remoteControl!=="none",s.remoteControl==="feishin"?"Feishin Controls":"Jukebox Controls"),u();break;case"widget_preferences":if(s.preferences&&!Se)h(s.preferences);else if(!s.preferences&&!Se&&Ue)t({type:"set_widget_preferences",preferences:Ue});else if(!s.preferences&&!Se)be();break;case"state":if(U=s.connected,R=s.playbackState,j.update(R,U),C.update(R,U,D!=="none",D==="feishin"?"Feishin Controls":"Jukebox Controls"),A.updatePlayback(R),R?.trackUri&&R.trackUri!==F)F=R.trackUri,A.setLoading(!0,R),ee.setLyricsLoading(!0),de.setLyricsLoading(!0),t({type:"get_lyrics"});else if(!R)F=null,A.clear(),ee.updateLyrics(null,null,null,!1),de.updateLyrics(null,null,null,!1);u();let S=Ye(R?.albumArtUrl??null,R?.trackUri),te=R?.albumArtKey||S;if(S!==l)if(l=S,S){E();let Te=te&&s.albumPalette?.artworkKey===te?s.albumPalette.colors:f.get(te||"");if(te&&Te)L(te,Te),t({type:"album_colors",colors:Te,artworkKey:te});else{let bt=++p;k(S).then((at)=>{if(bt!==p||S!==l)return;if(at){if(te)L(te,at);t({type:"album_colors",colors:at,artworkKey:te})}else if(!U)x()})}}else if(U)T();else x();break;case"connected":U=!0,u(),t({type:"get_config"}),t({type:"get_state"});break;case"disconnected":U=!1,R=null,F=null,G=!1,N.setAvailable(!0),N.setPlaybackAvailable(D==="jukebox"),l=null,f.clear(),x(),j.update(null,!1),C.update(null,!1,!1),A.clear(),ee.updateLyrics(null,null,null,!1),de.updateLyrics(null,null,null,!1),u();break;case"search_results":N.setResults(s.results);break;case"chat_songs":je.setChatSongs(s.chatId,s.entries);break;case"message_song":je.setMessageSong(s.chatId,s.messageId,s.swipeId,s.snapshot);break;case"lyrics":if(!F||s.trackUri===F)A.update(s.trackUri,s.plainLyrics,s.syncedLyrics,s.instrumental),A.updatePlayback(R),ee.updateLyrics(s.trackUri,s.plainLyrics,s.syncedLyrics,s.instrumental),de.updateLyrics(s.trackUri,s.plainLyrics,s.syncedLyrics,s.instrumental);break;case"error":if(s.operation==="connect"||s.authenticationFailure)v.setError(s.message);C.setError(K.has(s.operation||"")?s.message:null),console.warn("[Subsonic Controls]",s.message);break}});n.push(yn);let Ut=(i)=>{if(i.detail?.extensionId!==e.manifest.identifier)return;t({type:"get_config"}),t({type:"get_state"})};window.addEventListener("spindle:desktop-widget-returned",Ut),n.push(()=>window.removeEventListener("spindle:desktop-widget-returned",Ut)),e.permissions.getGranted().then((i)=>{let a=["cors_proxy","ui_panels","app_manipulation","generation","chat_mutation"].filter((s)=>!i.includes(s));if(a.length)e.permissions.request(a,{reason:"Subsonic Controls needs CORS access for your server, a panel and album-art theme support, plus Generation and Chat Mutation to remember the song playing for each assistant reply."})});let gn=e.events.on("SPINDLE_PERMISSION_CHANGED",(i)=>{let a=i;if(a.extensionId!==e.manifest.identifier||a.permission!=="cors_proxy")return;if(a.granted){t({type:"get_config"}),t({type:"get_state"});return}U=!1,R=null,F=null,G=!1,l=null,f.clear(),x(),v.update(!1,"","",!1,"none","","",!1,_,null),j.update(null,!1),C.update(null,!1,!1),A.clear(),u()});return n.push(gn),n.push(()=>{E(),p+=1;for(let[i,a]of m)clearTimeout(a.timer),a.resolve(null),m.delete(i)}),t({type:"get_config"}),t({type:"get_state"}),t({type:"get_widget_preferences"}),()=>{for(let i of n)i()}}function Bn(e,n={}){let o={...n},t={componentId:`desktop-widget-detached-${crypto.randomUUID()}`,element:e instanceof HTMLElement?e:document.createElement("div"),update(l){o={...o,...l}},destroy(){},getValue(){if("checked"in o)return o.checked;return o.value},focus(){},blur(){}};return new Proxy(t,{get(l,p,d){if(p==="then")return;if(Reflect.has(l,p))return Reflect.get(l,p,d);return()=>{return}}})}function fn(e){let n=new Set,o=!1,t=()=>{let f=document.createElement("div");return n.add(f),f},l=(f)=>f instanceof Element&&[...n].some((c)=>c===f||c.contains(f)),p=new Proxy(e.components,{get(f,c,m){let y=Reflect.get(f,c,m);if(typeof y!=="function"||!String(c).startsWith("mount"))return y;return(b,E)=>{if(!o||l(b))return Bn(b,E);return Reflect.apply(y,f,[b,E])}}}),d=new Proxy(e.ui,{get(f,c,m){if(c==="mount")return()=>t();if(c==="createFloatWidget"){let y=Reflect.get(f,c,m);return(...b)=>(o=!0,Reflect.apply(y,f,b))}if(c==="registerDrawerTab")return(y)=>({root:t(),tabId:y.id||"desktop-widget-detached",setTitle(){},setShortName(){},setBadge(){},activate(){},destroy(){},onActivate(){return()=>{}}});return Reflect.get(f,c,m)}});return new Proxy(e,{get(f,c,m){if(c==="components")return p;if(c==="ui")return d;return Reflect.get(f,c,m)}})}function Ni(e,n){return un(fn(e))}export{Ni as setupWidget};
