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

`;function Xt(e){let n=document.createElement("section");n.className="spotify-settings-card";let o=document.createElement("header");o.className="spotify-settings-card-header";let t=document.createElement("h3");t.textContent="Subsonic Controls";let s=document.createElement("span");s.className="spotify-status",o.append(t,s);let m=document.createElement("div");m.className="spotify-settings-card-body";let c=(A,K,h)=>{let w=document.createElement("label");w.className="spotify-settings-label";let O=document.createTextNode(A);w.append(O);let S=document.createElement("input");return S.className="spotify-input",S.type=K,S.placeholder=h,w.append(S),m.append(w),S},y=c("Subsonic server URL","url","https://music.example.com (or …/rest)"),d=c("Subsonic username","text","Subsonic username"),p=c("Subsonic password","password","Subsonic password"),u=c("Playback position offset (ms)","number","1000");u.min="-10000",u.max="10000",u.step="100";let g=document.createElement("div");g.style.cssText="font-size:0.8em;opacity:0.65;margin-top:-6px",g.textContent="Adds time to the server's reported playback position for synchronized lyrics. Default: 1000 ms; use a negative value if lyrics run ahead.",m.append(g);let k=document.createElement("label");k.className="spotify-settings-label",k.append("Playback controls");let v=document.createElement("select");v.className="spotify-input";for(let[A,K]of[["none","Now playing only"],["jukebox","Server-side Jukebox"],["feishin","Feishin Desktop Remote"]]){let h=document.createElement("option");h.value=A,h.textContent=K,v.append(h)}k.append(v),m.append(k);let L=document.createElement("div");L.style.cssText="font-size:0.8em;opacity:0.65;margin-top:4px",L.textContent="Jukebox controls affect the server-side player.",m.append(L);let C=document.createElement("div");C.style.cssText="display:none;font-size:0.8em;color:#e74c3c;margin-top:4px",m.append(C);let E=document.createElement("div");E.style.display="none";let I=(A,K,h)=>{let w=document.createElement("label");w.className="spotify-settings-label",w.append(A);let O=document.createElement("input");return O.className="spotify-input",O.type=K,O.placeholder=h,w.append(O),E.append(w),O},b=I("Feishin Remote URL","url","http://192.168.1.20:4333"),B=I("Feishin username","text","Optional Remote username"),W=I("Feishin password","password","Optional Remote password"),ne=document.createElement("div");ne.style.cssText="font-size:0.8em;opacity:0.65;margin-top:4px",ne.textContent="Feishin Remote requires WebSocket transport; its HTTP server only serves the Remote page and credentials. Library search and lyrics still use the Subsonic server above.",E.append(ne),m.append(E);let oe=document.createElement("div");oe.className="spotify-settings-row";let Y=document.createElement("button");Y.className="spotify-btn spotify-btn-primary",oe.append(Y),m.append(oe),n.append(o,m);let G=!1,Q=!1,M=!1,N=!1,q=!1,H=[y,d,p,u,v,b,B,W];for(let A of H)A.addEventListener("input",()=>{M=!0});function F(A,K,h=!1){s.replaceChildren();let w=document.createElement("span");w.className=`spotify-status-dot ${K?"connected":"disconnected"}`;let O=document.createElement("span");if(O.textContent=A,h)O.style.color="#e74c3c";s.append(w,O)}function z(){let A=v.value==="feishin";E.style.display=A?"":"none",L.style.display=v.value==="jukebox"?"":"none",C.style.display=v.value==="jukebox"&&C.textContent?"":"none"}v.onchange=()=>{M=!0,z()};function V(A,K,h,w,O,S,R,ee,ye,le){if(G=A,N=w,q=ee,A||!Q&&!M)y.value=K,d.value=h,b.value=S,B.value=R,u.value=String(ye),v.value=O;if(C.textContent=le||"",z(),Q&&!A)return;for(let qe of[y,d,p,v,b,B,W])qe.disabled=A;if(A)Q=!1,M=!1,p.value="",W.value="";p.placeholder=w?"Saved securely (re-enter to change)":"Subsonic password",W.placeholder=ee?"Saved securely (re-enter to change)":"Optional Remote password",Y.textContent=A?"Disconnect":"Connect",Y.className=A?"spotify-btn spotify-btn-danger":"spotify-btn spotify-btn-primary",Y.disabled=!1,F(A?"Connected":"Not connected",A)}return Y.onclick=()=>{if(G)return void e({type:"disconnect"});let A=v.value;if(!y.value.trim()||!d.value.trim()||!p.value&&!N||A==="feishin"&&!b.value.trim()){F("Enter the Subsonic server credentials and, when selected, a Feishin Remote URL.",!1,!0);return}Q=!0,Y.disabled=!0,Y.textContent="Connecting…",e({type:"connect",serverUrl:y.value.trim(),username:d.value.trim(),password:p.value,remoteControl:A,feishinUrl:b.value.trim(),feishinUsername:B.value.trim(),feishinPassword:W.value,playbackPositionOffsetMs:Number(u.value)})},u.onchange=()=>{let A=Number(u.value);if(!Number.isFinite(A))return;if(u.value=String(Math.max(-1e4,Math.min(1e4,Math.round(A)))),G)e({type:"set_playback_position_offset",playbackPositionOffsetMs:Number(u.value)})},V(!1,"","",!1,"none","","",!1,1000,null),{root:n,update:V,setConnecting(){Q=!0,Y.disabled=!0,Y.textContent="Connecting…"},setError(A){G=!1,Q=!1,Y.disabled=!1,Y.textContent="Connect",Y.className="spotify-btn spotify-btn-primary";for(let K of[y,d,p,v,b,B,W])K.disabled=!1;p.placeholder=N?"Saved securely (re-enter to change)":"Subsonic password",W.placeholder=q?"Saved securely (re-enter to change)":"Optional Remote password",F(A,!1,!0)},destroy(){n.remove()}}}function je(e,n){if(!e)return null;if(!n)return e;if(/^(data|blob):/i.test(e))return e;try{let o=new URL(e);return o.searchParams.set("track",n),o.toString()}catch{let o=e.includes("?")?"&":"?";return`${e}${o}track=${encodeURIComponent(n)}`}}function Ye(e){let n=document.createElement("div");n.className=`${e} spotify-crossfade-art`,n.style.display="none";let o=document.createElement("img"),t=document.createElement("img");o.className="spotify-crossfade-img",t.className="spotify-crossfade-img",o.alt="",t.alt="",o.loading="eager",t.loading="eager",o.decoding="async",t.decoding="async",o.style.visibility="hidden",t.style.visibility="hidden",o.style.opacity="1",t.style.opacity="0",n.appendChild(o),n.appendChild(t);let s=null,m=o,c=t,y=!1;function d(g){g.onload=null,g.onerror=null,g.removeAttribute("src"),g.style.visibility="hidden"}function p(){n.style.display="none",m.style.opacity="1",c.style.opacity="0"}function u(g){if(g===s)return;if(s=g,!g){d(m),d(c),y=!1,p();return}if(!y){if(n.style.display="",m.onload=()=>{y=!0,m.style.visibility="visible"},m.onerror=()=>{s=null,d(m),p()},m.src=g,m.complete&&m.naturalWidth>0)y=!0,m.style.visibility="visible";return}if(n.style.display="",c.onload=()=>{c.style.visibility="visible",c.style.opacity="1",m.style.opacity="0";let k=m;m=c,c=k},c.onerror=()=>{s=null,d(c),c.style.opacity="0"},c.src=g,c.complete&&c.naturalWidth>0){c.style.visibility="visible",c.style.opacity="1",m.style.opacity="0";let k=m;m=c,c=k}}return{el:n,setUrl:u,destroy(){n.remove()}}}function Jt(){let e=document.createElement("div");e.className="spotify-section";let n=document.createElement("h3");n.className="spotify-section-title",n.textContent="Now Playing";let o=document.createElement("div");o.className="spotify-now-playing";let t=Ye("spotify-album-art"),s=document.createElement("div");s.className="spotify-track-info";let m=document.createElement("div");m.className="spotify-track-name";let c=document.createElement("div");c.className="spotify-track-artist";let y=document.createElement("div");y.className="spotify-track-album";let d=document.createElement("div");d.className="spotify-track-device",s.append(m,c,y,d),o.append(t.el,s);let p=document.createElement("div");return p.className="spotify-empty",e.append(n,o,p),{root:e,update(u,g){if(!g){o.style.display="none",p.style.display="",p.textContent="Connect a music source to get started",t.setUrl(null);return}if(!u){o.style.display="none",p.style.display="",p.textContent="No active playback reported",t.setUrl(null);return}o.style.display="flex",p.style.display="none",m.textContent=u.trackName,c.textContent=u.artistName,y.textContent=u.albumName,d.textContent=u.source==="jukebox"?"Server Jukebox":u.source==="feishin"?"Feishin Desktop":u.deviceName?`Playing on ${u.deviceName}`:"Server now playing",t.setUrl(je(u.albumArtUrl,u.trackUri))},destroy(){t.destroy(),e.remove()}}}function Kt(e){let n=document.createElement("div");n.className="spotify-section";let o=document.createElement("h3");o.className="spotify-section-title",o.textContent="Player Controls";let t=document.createElement("div");t.className="spotify-controls";let s=(v,L="")=>{let C=document.createElement("button");return C.className=`spotify-ctrl-btn ${L}`,C.innerHTML=v,C},m=s('<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>'),c=s('<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',"spotify-ctrl-btn-main"),y=s('<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>'),d=document.createElement("div");d.className="spotify-search-error",d.style.cssText="display:none;font-size:0.8em;color:#e74c3c;margin-top:6px;word-break:break-word";let p=(v)=>{d.textContent=v||"",d.style.display=v?"":"none"},u=(v)=>{p(null),e(v)};m.onclick=()=>u({type:"previous"}),y.onclick=()=>u({type:"next"});let g=s('<svg viewBox="0 0 24 24"><path d="M17 3l4 4-4 4V8h-2.2l-2.3 2.9-1.3-1.6L14 6h3zM3 6h4.2l7.6 9.5H17v-3l4 4-4 4v-3h-3.3L5.9 7.8 4.5 9.2 3 7.8z"/></svg>');g.title="Shuffle the queued tracks",g.onclick=()=>u({type:"shuffle"});let k=!1;return c.onclick=()=>u({type:k?"pause":"play"}),t.append(m,c,y,g),n.append(o,t,d),{root:n,update(v,L,C,E="Player Controls"){if(n.style.display=L&&C?"":"none",!L||!C)p(null);o.textContent=E,k=!!v?.isPlaying,c.innerHTML=k?'<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>':'<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>'},setError:p,destroy(){n.remove()}}}function Zt(e){let n=document.createElement("div");n.className="spotify-section";let o=document.createElement("h3");o.className="spotify-section-title",o.textContent="Library Search";let t=document.createElement("input");t.className="spotify-search-input",t.placeholder="Search your server's music library…";let s=document.createElement("div");s.className="spotify-search-results",n.append(o,t,s);let m=null,c=!0;return t.oninput=()=>{if(m)clearTimeout(m);m=setTimeout(()=>{let d=t.value.trim();if(d.length>=2)e({type:"search",query:d});else s.innerHTML=""},350)},{root:n,setResults:(d)=>{if(s.innerHTML="",!d.length){let p=document.createElement("div");p.className="spotify-empty",p.textContent="No tracks found",s.appendChild(p);return}for(let p of d){let u=document.createElement("div");if(u.className="spotify-search-item",p.albumArtUrl){let L=document.createElement("img");L.className="spotify-search-item-art",L.src=p.albumArtUrl,L.alt=p.album,u.appendChild(L)}let g=document.createElement("div");g.className="spotify-search-item-info";let k=document.createElement("div");k.className="spotify-search-item-name",k.textContent=p.name;let v=document.createElement("div");if(v.className="spotify-search-item-artist",v.textContent=`${p.artist} — ${p.album}`,g.append(k,v),c){let L=document.createElement("div");L.className="spotify-search-item-actions";let C=document.createElement("button");C.className="spotify-search-item-btn",C.title="Play in server Jukebox",C.innerHTML='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',C.onclick=()=>e({type:"play",trackUri:p.uri});let E=document.createElement("button");E.className="spotify-search-item-btn",E.title="Add to server Jukebox queue",E.innerHTML='<svg viewBox="0 0 24 24"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg>',E.onclick=()=>e({type:"queue",trackUri:p.uri}),L.append(C,E),u.append(g,L)}else u.append(g);s.appendChild(u)}},setAvailable(d){if(n.style.display=d?"":"none",!d)s.innerHTML=""},setPlaybackAvailable(d){c=d,s.innerHTML=""},destroy(){if(m)clearTimeout(m);n.remove()}}}function Qt(e){let n=document.createElement("div");n.className="spotify-section";let o=document.createElement("h3");o.className="spotify-section-title",o.textContent="Playlists";let t=document.createElement("input");t.className="spotify-search-input",t.placeholder="Filter playlists…";let s=document.createElement("div");s.className="spotify-search-results",n.append(o,t,s);let m=[],c=!0,y=(p,u)=>!u||p.name.toLowerCase().includes(u)||p.owner.toLowerCase().includes(u),d=()=>{s.innerHTML="";let p=t.value.trim().toLowerCase(),u=m.filter((g)=>y(g,p));if(!u.length){let g=document.createElement("div");g.className="spotify-empty",g.textContent=m.length?"No playlists match":"No playlists on this server",s.appendChild(g);return}for(let g of u){let k=document.createElement("div");if(k.className="spotify-search-item",g.albumArtUrl){let I=document.createElement("img");I.className="spotify-search-item-art",I.src=g.albumArtUrl,I.alt=g.name,k.appendChild(I)}let v=document.createElement("div");v.className="spotify-search-item-info";let L=document.createElement("div");L.className="spotify-search-item-name",L.textContent=g.name;let C=Number.isFinite(g.songCount)?g.songCount:0,E=document.createElement("div");if(E.className="spotify-search-item-artist",E.textContent=`${C} ${C===1?"track":"tracks"}`,v.append(L,E),c){let I=document.createElement("div");I.className="spotify-search-item-actions";let b=document.createElement("button");b.className="spotify-search-item-btn",b.title="Play this playlist in the server Jukebox",b.innerHTML='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',b.onclick=()=>e({type:"play_playlist",playlistId:g.id}),I.appendChild(b),k.append(v,I)}else k.appendChild(v);s.appendChild(k)}};return t.oninput=d,{root:n,setPlaylists(p){m=p,d()},setPlaybackAvailable(p){c=p,d()},destroy(){n.remove()}}}function Et(e){let n=null,o=null,t=null,s=0,m=!1,c=0;function y(v){let L=e.getBoundingClientRect(),C=v.getBoundingClientRect(),E=Math.max(0,e.scrollHeight-e.clientHeight);return Math.min(Math.max(e.scrollTop+(C.top+C.height/2)-(L.top+e.clientHeight/2),0),E)}function d(){if(n!==null)cancelAnimationFrame(n);n=null,o=null}function p(){d(),t=null,s=Date.now()}function u(){d(),t=null}function g(v){if(n=null,o===null||!o.isConnected||!e.isConnected){d();return}let L=Math.min(Math.max(v-c,0),100);c=v;let C=Math.max(0,e.scrollHeight-e.clientHeight),E=y(o),I=E-e.scrollTop;if(Math.abs(I)<0.5){t=E,e.scrollTop=E,d();return}let b=I*(1-Math.exp(-L/85)),B=1800*(L/1000),W=Math.abs(b)>B?Math.sign(b)*B:b,ne=Math.min(Math.max(e.scrollTop+W,0),C);t=ne,e.scrollTop=ne,n=requestAnimationFrame(g)}e.addEventListener("wheel",p,{passive:!0}),e.addEventListener("touchmove",p,{passive:!0}),e.addEventListener("pointerdown",p,{passive:!0});function k(){if(n!==null||o!==null)return;if(t!==null&&Math.abs(e.scrollTop-t)<=1)return;p()}return e.addEventListener("scroll",k,{passive:!0}),{center(v,L){if(m)return;if(!L?.force&&Date.now()-s<=2500)return;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){d(),t=y(v),e.scrollTop=t;return}if(o=v,n===null)c=performance.now(),n=requestAnimationFrame(g)},suspend(v){if(m===v)return!1;if(m=v,m)u();return!0},cancel:u,destroy(){u(),e.removeEventListener("wheel",p),e.removeEventListener("touchmove",p),e.removeEventListener("pointerdown",p),e.removeEventListener("scroll",k)}}}function xn(e){let n=/^(\d+):(\d{2})(?:\.(\d{1,3}))?$/.exec(e);if(!n)return null;let o=Number(n[1]),t=Number(n[2]),s=n[3]?Number(n[3].padEnd(3,"0")):0;if(!Number.isFinite(o)||!Number.isFinite(t)||t>59)return null;return o*60000+t*1000+s}function dt(e){if(!e)return[];let n=[];for(let t of e.split(/\r?\n/)){let s=[...t.matchAll(/\[([^\]]+)\]/g)].map((c)=>xn(c[1])).filter((c)=>c!==null);if(s.length===0)continue;let m=t.replace(/(?:\[[^\]]+\])+/g,"").trim();for(let c of s)n.push({timeMs:c,text:m})}let o=[];for(let t of n.sort((s,m)=>s.timeMs-m.timeMs)){let s=o[o.length-1];if(s?.timeMs===t.timeMs)s.text=[s.text,t.text].filter(Boolean).join(`
`);else o.push({...t})}return o}function kt(e){return e||"♪"}function en(e){return!e.includes(`
`)&&e.length>=36}function Lt(e){let n=[],o=null,t=-1;function s(){if(!o)return 0;if(!o.isPlaying)return o.progressMs;return Math.min(o.progressMs+Date.now()-o.updatedAt,o.durationMs||1/0)}function m(){if(n.length===0){let g=t!==-1;return t=-1,g}let d=s(),p=-1;for(let g=0;g<n.length;g++){if(n[g].timeMs>d)break;p=g}let u=p!==t;return t=p,u}function c(){let d=n.map((u,g)=>({...u,index:g,displayText:kt(u.text),hasText:Boolean(u.text)}));if(!e||d.length<=e)return d;if(t<0)return d.slice(0,e);let p=Math.max(0,Math.min(t-Math.floor(e/2),d.length-e));return d.slice(p,p+e)}function y(){return n.map((d,p)=>({...d,index:p,displayText:kt(d.text),hasText:Boolean(d.text)}))}return{clear(){n=[],o=null,t=-1},setLyrics(d){n=d,t=-1,m()},setPlayback(d){o=d},refreshActiveLineIndex:m,getActiveLineIndex(){return t},hasLyrics(){return n.length>0},getIndexedLines:y,getSnapshot(){return m(),{activeLineIndex:t,lines:c()}}}}var wn=180;function tn(e,n,o,t){let s=["spotify-lyrics-line"];if(!o)s.push("spotify-lyrics-line-blank");if(e===n)s.push("spotify-lyrics-line-active");else if(e<n)s.push("spotify-lyrics-line-past");else s.push("spotify-lyrics-line-future");if(n>=0){let m=Math.abs(e-n);if(m>=1){let c=Math.min(m,4);if(s.push(`spotify-lyrics-line-tier-${c}`),t&&c>=2)s.push(`spotify-lyrics-line-blur-${c}`)}}return s.join(" ")}function nn(){let e=document.createElement("div");e.className="spotify-section spotify-lyrics-section",e.dataset.transport="false";let n=document.createElement("h3");n.className="spotify-section-title",n.textContent="Lyrics";let o=document.createElement("div");o.className="spotify-lyrics-body",e.append(n,o);let t=null,s=[],m=Lt(),c=Et(o),y=null,d=-1,p=!0,u,g;function k(M){return M?.source==="feishin"||M?.source==="jukebox"}function v(){clearTimeout(g),g=void 0,o.classList.remove("spotify-lyrics-loading")}function L(){clearInterval(u),u=void 0}function C(){s.forEach((M)=>{let N=m.getIndexedLines()[M.index];M.el.className=tn(M.index,d,N?.hasText??!1,p)})}function E(){if(p)e.style.removeProperty("--spotify-lyrics-enter-blur");else e.style.setProperty("--spotify-lyrics-enter-blur","0px")}function I(M,N=!1){d=M,C();let q=s.find((H)=>H.index===d);if(q)c.center(q.textEl,{force:N})}function b(M=!1){if(!s.length)return;if(m.refreshActiveLineIndex()||M)I(m.getActiveLineIndex(),M)}function B(){if(!u&&s.length)u=setInterval(b,200)}function W(){L(),c.cancel(),v(),o.innerHTML="",o.className="spotify-lyrics-body",t=null,s=[],m.clear(),y=null,d=-1,e.dataset.transport="false"}function ne(M,N){if(v(),!M)return;if(L(),c.cancel(),o.innerHTML="",o.className="spotify-lyrics-body spotify-lyrics-loading",t=N?.trackUri??t,s=[],m.setLyrics([]),N&&N.trackUri===t)y={trackUri:N.trackUri,progressMs:N.progressMs,durationMs:N.durationMs,isPlaying:N.isPlaying,updatedAt:Date.now()},m.setPlayback(y);else y=null,m.setPlayback(null);d=-1,g=setTimeout(()=>{if(!o.classList.contains("spotify-lyrics-loading"))return;let q=document.createElement("div");q.className="spotify-lyrics-status spotify-lyrics-status-loading",q.textContent="Loading lyrics...",o.appendChild(q)},wn)}function oe(M){let N=dt(M);if(!N.length)return!1;v(),o.className="spotify-lyrics-body spotify-lyrics-has-content spotify-lyrics-synced",m.setLyrics(N);let q=m.getSnapshot();if(d=q.activeLineIndex,s=q.lines.map((H,F)=>{let z=document.createElement("div"),V=document.createElement("div");if(z.className=tn(H.index,d,H.hasText,p),z.classList.add("spotify-lyrics-line-enter"),z.style.setProperty("--spotify-lyrics-enter-delay",`${Math.min(F*28,280)}ms`),V.className="spotify-lyrics-line-text",!H.hasText)V.classList.add("spotify-lyrics-line-symbol");if(en(H.text))V.classList.add("spotify-lyrics-line-text-long");return V.textContent=kt(H.text),z.appendChild(V),o.appendChild(z),{index:H.index,el:z,textEl:V}}),b(),y?.isPlaying)B();return!0}function Y(M){v(),o.className="spotify-lyrics-body spotify-lyrics-has-content";let N=document.createElement("div");N.className="spotify-lyrics-text spotify-lyrics-text-enter",N.textContent=M,o.appendChild(N)}function G(M,N,q,H){if(L(),c.cancel(),v(),t=M,o.innerHTML="",s=[],d=-1,H)o.className="spotify-lyrics-body",o.textContent="♪ Instrumental";else if(!oe(q||""))if(N)Y(N);else o.className="spotify-lyrics-body",o.textContent="No lyrics available"}function Q(M){let N=String(k(M)),q=e.dataset.transport!==N;if(e.dataset.transport=N,!M||M.trackUri!==t){y=null,m.setPlayback(null),L();return}if(y={trackUri:M.trackUri,progressMs:M.progressMs,durationMs:M.durationMs,isPlaying:M.isPlaying,updatedAt:Date.now()},m.setPlayback(y),b(),M.isPlaying)B();else L();if(q&&s.length)requestAnimationFrame(()=>b(!0))}return{root:e,update:G,updatePlayback:Q,setLoading:ne,setAutoScrollSuspended(M){if(c.suspend(M)&&!M&&s.length)I(d,!0)},setBlurEnabled(M){if(p===M)return;p=M,E(),C()},clear:W,destroy(){L(),c.destroy(),v(),e.remove()}}}function Ct(e,n){let o=!1;function t(E){if(o===E)return;o=E,n.onInteractChange?.(E)}function s(E){if(n.stopPropagation)E.stopPropagation()}function m(){return Number.parseInt(e.value,10)}let c=(E)=>{s(E),t(!0)},y=(E)=>{s(E)},d=(E)=>{s(E),t(!1)},p=(E)=>{s(E),t(!0)},u=(E)=>{s(E)},g=(E)=>{s(E),t(!1)},k=(E)=>{s(E)},v=(E)=>{s(E),t(!0),n.onPreview?.(m())},L=(E)=>{s(E);let I=m();n.onPreview?.(I),n.onCommit(I),t(!1)},C=()=>{t(!1)};return e.addEventListener("pointerdown",c),e.addEventListener("pointermove",y),e.addEventListener("pointerup",d),e.addEventListener("touchstart",p,{passive:!0}),e.addEventListener("touchmove",u,{passive:!0}),e.addEventListener("touchend",g,{passive:!0}),e.addEventListener("click",k),e.addEventListener("input",v),e.addEventListener("change",L),e.addEventListener("blur",C),e.addEventListener("pointercancel",C),e.addEventListener("lostpointercapture",C),()=>{e.removeEventListener("pointerdown",c),e.removeEventListener("pointermove",y),e.removeEventListener("pointerup",d),e.removeEventListener("touchstart",p),e.removeEventListener("touchmove",u),e.removeEventListener("touchend",g),e.removeEventListener("click",k),e.removeEventListener("input",v),e.removeEventListener("change",L),e.removeEventListener("blur",C),e.removeEventListener("pointercancel",C),e.removeEventListener("lostpointercapture",C)}}function Mt(e,n){let o=!1,t=null,s=0;function m(b){if(o===b)return;o=b,n.onInteractChange?.(b)}function c(b){if(n.stopPropagation)b.stopPropagation()}function y(b){let B=n.getMaxValue();if(!Number.isFinite(B)||B<=0)return null;let W=e.getBoundingClientRect();if(W.width<=0)return null;let ne=Math.max(0,Math.min(1,(b-W.left)/W.width));return Math.round(ne*B)}function d(b){let B=y(b);if(B===null)return null;return s=B,n.onPreview(B),B}function p(b){if(t!==null&&e.hasPointerCapture(t))e.releasePointerCapture(t);if(t=null,b)n.onCommit(s);m(!1)}let u=(b)=>{if(c(b),b.button!==0)return;if(d(b.clientX)===null)return;t=b.pointerId,m(!0);try{e.setPointerCapture(b.pointerId)}catch{}},g=(b)=>{if(c(b),b.pointerId!==t)return;d(b.clientX)},k=(b)=>{if(c(b),b.pointerId!==t)return;d(b.clientX),p(!0)},v=(b)=>{if(c(b),b.pointerId!==t)return;p(!1)},L=(b)=>{c(b),b.preventDefault()},C=(b)=>{c(b)},E=(b)=>{c(b)},I=(b)=>{c(b)};return e.addEventListener("pointerdown",u),e.addEventListener("pointermove",g),e.addEventListener("pointerup",k),e.addEventListener("pointercancel",v),e.addEventListener("click",L),e.addEventListener("touchstart",C,{passive:!0}),e.addEventListener("touchmove",E,{passive:!0}),e.addEventListener("touchend",I,{passive:!0}),()=>{e.removeEventListener("pointerdown",u),e.removeEventListener("pointermove",g),e.removeEventListener("pointerup",k),e.removeEventListener("pointercancel",v),e.removeEventListener("click",L),e.removeEventListener("touchstart",C),e.removeEventListener("touchmove",E),e.removeEventListener("touchend",I)}}var En='<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>',on='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',kn='<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',Ln='<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>',Cn='<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>',Mn='<svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>',Sn='<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>',Pn='<svg viewBox="0 0 24 24"><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"/></svg>',rn="♪";function ct(e){let n=Math.floor(e/1000),o=Math.floor(n/60),t=n%60;return`${o}:${t.toString().padStart(2,"0")}`}var sn=280,Nn=336,fe=8;function Tt(e){return e==="modern"?Nn:sn}function Tn(e){if(!e)return[];return e.split(/\r?\n/).map((n)=>n.trim()).filter(Boolean).slice(0,5)}function an(e,n,o){let t=document.createElement("div");t.className="spotify-mini-player",t.dataset.style="default",t.style.setProperty("--spotify-mini-player-width",`${sn}px`);let s=Ye("spotify-mini-art"),m=document.createElement("div");m.className="spotify-mini-info";let c=document.createElement("div");c.className="spotify-mini-track";let y=document.createElement("div");y.className="spotify-mini-artist";let d=document.createElement("div");d.className="spotify-mini-album",m.appendChild(c),m.appendChild(y),m.appendChild(d);let p=document.createElement("button");p.className="spotify-mini-header-btn",p.innerHTML=Mn,p.title="Open full player";let u=document.createElement("button");u.className="spotify-mini-header-btn",u.innerHTML=Sn,u.title="Collapse";let g=document.createElement("div");g.className="spotify-mini-header-btns",g.appendChild(p),g.appendChild(u);let k=document.createElement("div");k.className="spotify-mini-progress-row";let v=document.createElement("span");v.className="spotify-mini-time";let L=document.createElement("div");L.className="spotify-mini-progress-bar";let C=document.createElement("div");C.className="spotify-mini-progress-fill",L.appendChild(C);let E=document.createElement("span");E.className="spotify-mini-time",k.appendChild(v),k.appendChild(L),k.appendChild(E);let I=document.createElement("div");I.className="spotify-mini-controls";function b(r,x=""){let T=document.createElement("button");return T.className=`spotify-mini-btn ${x}`.trim(),T.innerHTML=r,T}let B=b(En),W=b(on,"spotify-mini-btn-main"),ne=b(Ln);I.appendChild(B),I.appendChild(W),I.appendChild(ne);let oe=document.createElement("div");oe.className="spotify-mini-volume-row";let Y=document.createElement("span");Y.className="spotify-mini-volume-icon",Y.innerHTML=Cn;let G=document.createElement("input");G.type="range",G.className="spotify-mini-volume-slider",G.min="0",G.max="100",G.value="50",oe.appendChild(Y),oe.appendChild(G);let Q=document.createElement("div");Q.className="spotify-mini-device-row";let M=document.createElement("span");M.className="spotify-mini-device-icon",M.innerHTML=Pn;let N=document.createElement("span");N.className="spotify-mini-device-name";let q=document.createElement("button");q.className="spotify-mini-device-toggle",q.textContent="Switch",Q.appendChild(M),Q.appendChild(N),Q.appendChild(q);let H=document.createElement("div");H.className="spotify-mini-device-list";let F=document.createElement("div");F.className="spotify-mini-empty",F.textContent="No active playback";let z=document.createElement("div");z.className="spotify-mini-header",z.appendChild(s.el),z.appendChild(m),z.appendChild(g),t.appendChild(z),t.appendChild(k);let V=document.createElement("div");V.className="spotify-mini-lyrics-section";let A=document.createElement("div");A.className="spotify-mini-lyrics-header",A.textContent="Lyrics";let K=document.createElement("div");K.className="spotify-mini-lyrics-body";let h=document.createElement("div");h.className="spotify-mini-lyrics-status";let w=Array.from({length:5},()=>{let r=document.createElement("div");return r.className="spotify-mini-lyric-line",K.appendChild(r),r});K.appendChild(h),V.appendChild(A),V.appendChild(K),t.appendChild(V),t.appendChild(I),t.appendChild(oe),t.appendChild(Q),t.appendChild(H),t.appendChild(F);let O=!1,S=0,R=!1,ee=0,ye="default",le=null,qe=!1,de=0,ze=0,ge=!1,Ee=null,Me=null,pe=[],he=[],Ie=!1,re=!1,D=-1,xe=!1,se=!1,_=!1,me=null,Re=null,Fe=null,X=!1,Se=!1;function Le(r,x=!1){h.className=x?"spotify-mini-lyrics-status spotify-mini-lyrics-status-loading":"spotify-mini-lyrics-status",h.textContent=r,h.style.display="";for(let T of w)T.style.display="none",T.textContent="",T.className="spotify-mini-lyric-line"}function Pe(){h.style.display="none";for(let r of w)r.style.display=""}function Be(){if(!se||xe)return;se=!1,We(!0)}function Ge(){if(_)return;let r=me,x=Re,T=Fe;if(me=null,Re=null,Fe=null,r)ot(r.state,r.connected);if(x)ue(x);if(T!==null)ce(T);Be()}function Ae(){if(!ge)return de;return Math.min(de+Math.max(0,Date.now()-ze),S||1/0)}function Je(){if(pe.length===0)return[];let x=[];if(D<0)for(let T=0;T<Math.min(5,pe.length);T++){let j=pe[T];x.push({text:j.text||rn,index:T})}else{let T=Math.max(0,Math.min(D-2,pe.length-5));for(let j=0;j<5&&T+j<pe.length;j++){let De=T+j,Ce=pe[De];x.push({text:Ce.text||rn,index:De})}}while(x.length<5)x.push({text:" ",index:-1-x.length});return x}function Xe(){if(re){Le("Loading lyrics...",!0);return}if(Ie){Le("♪ Instrumental");return}if(pe.length>0){Pe();let r=Je();w.forEach((x,T)=>{let j=r[T]??{text:" ",index:-1-T},De=D<0?j.index:Math.abs(j.index-D);if(x.className="spotify-mini-lyric-line",j.index===D)x.classList.add("spotify-mini-lyric-line-active");else if(De===1)x.classList.add("spotify-mini-lyric-line-near");else if(De===2)x.classList.add("spotify-mini-lyric-line-mid");else x.classList.add("spotify-mini-lyric-line-far");x.textContent=j.text});return}if(he.length>0){Pe(),w.forEach((r,x)=>{r.className="spotify-mini-lyric-line spotify-mini-lyric-line-plain",r.textContent=he[x]??" "});return}Le("No lyrics available")}function We(r=!1){if(xe){se=!0;return}if(ye!=="modern"||pe.length===0||!le||le.trackUri!==Me){if(r&&ye==="modern")Xe();return}let x=Ae(),T=-1;for(let j=0;j<pe.length;j++){if(pe[j].timeMs>x)break;T=j}if(r||T!==D)D=T,Xe()}function Ke(r=!1){let x=ye==="modern"&&qe&&Boolean(le);if(V.style.display=x?"":"none",!x)return;if(xe){se=!0;return}if(We(!0),r&&R)Z()}function He(){if(_||!R||!ge||!S){Ee=null;return}if(X){Ee=requestAnimationFrame(He);return}let r=Date.now()-ze,x=Math.min(de+r,S),T=x/S*100;C.style.width=`${T}%`,v.textContent=ct(x),We(),Ee=requestAnimationFrame(He)}function J(){if(Ee!==null)return;Ee=requestAnimationFrame(He)}function Ze(){if(Ee!==null)cancelAnimationFrame(Ee),Ee=null}function Ne(){return le?.source==="feishin"||le?.source==="jukebox"}B.addEventListener("click",(r)=>{if(r.stopPropagation(),!Ne())return;e({type:"previous"})}),ne.addEventListener("click",(r)=>{if(r.stopPropagation(),!Ne())return;e({type:"next"})}),W.addEventListener("click",(r)=>{if(r.stopPropagation(),!Ne())return;e({type:O?"pause":"play"})}),p.addEventListener("click",(r)=>{r.stopPropagation(),ve(),n()}),u.addEventListener("click",(r)=>{r.stopPropagation(),ve()});let Oe=Mt(L,{getMaxValue:()=>S,onInteractChange(r){X=r},onPreview(r){let x=S>0?r/S*100:0;C.style.width=`${x}%`,v.textContent=ct(r)},onCommit(r){if(le)le={...le,progressMs:r};if(de=r,ze=Date.now(),We(!0),e({type:"seek",positionMs:r}),R&&ge)J()}}),ke=new Set,ae=Ct(G,{onInteractChange(r){Se=r},onPreview(r){for(let x of ke)x(r)},onCommit(r){e({type:"set_volume",percent:r})}}),$e=!1,Ve=null;q.addEventListener("click",(r)=>{if(r.stopPropagation(),$e)H.style.display="none",$e=!1;else e({type:"get_devices"}),H.innerHTML='<div class="spotify-mini-device-loading">Loading devices…</div>',H.style.display="flex",$e=!0}),t.addEventListener("pointerdown",(r)=>r.stopPropagation());function ie(r){if(!t.contains(r.target))ve()}function Z(){let{x:r,y:x,w:T,h:j}=o(),{innerWidth:De,innerHeight:Ce}=window,tt=Tt(ye),Ue=r+T/2-tt/2;Ue=Math.max(fe,Math.min(Ue,De-tt-fe)),t.style.left=`${Ue}px`,t.style.top="0px",t.style.visibility="hidden",t.style.transform="scale(1)",t.style.display="flex";let be=t.offsetHeight;ee=be,t.style.visibility="",t.style.transform="",t.style.display="";let _e,it=!1;if(x-be-fe>=fe)_e=x-be-fe;else _e=x+j+fe,it=!0;_e=Math.max(fe,Math.min(_e,Ce-be-fe)),t.style.left=`${Ue}px`,t.style.top=`${_e}px`;let st=r+T/2-Ue,nt=it?-fe:be+fe;t.style.transformOrigin=`${st}px ${nt}px`}function ut(){if(!R||!ee)return;let{x:r,y:x,w:T,h:j}=o(),{innerWidth:De,innerHeight:Ce}=window,tt=Tt(ye),Ue=r+T/2-tt/2;Ue=Math.max(fe,Math.min(Ue,De-tt-fe));let be,_e=!1;if(x-ee-fe>=fe)be=x-ee-fe;else be=x+j+fe,_e=!0;be=Math.max(fe,Math.min(be,Ce-ee-fe)),t.style.left=`${Ue}px`,t.style.top=`${be}px`;let it=r+T/2-Ue,st=_e?-fe:ee+fe;t.style.transformOrigin=`${it}px ${st}px`}function Qe(){if(!document.body.contains(t))document.body.appendChild(t);if(Z(),t.classList.remove("open","closing"),t.offsetHeight,t.classList.add("open"),R=!0,ge)J();setTimeout(()=>document.addEventListener("click",ie),0)}function ve(){if(!R)return;R=!1,document.removeEventListener("click",ie),Ze(),Z(),t.classList.remove("open"),t.classList.add("closing");let r=()=>{t.classList.remove("closing"),t.removeEventListener("transitionend",r)};t.addEventListener("transitionend",r),setTimeout(r,250)}function ot(r,x){if(le=r,qe=x,_){me={state:r,connected:x};return}if(!x||!r){X=!1,Se=!1,s.setUrl(null),z.style.display="none",k.style.display="none",V.style.display="none",I.style.display="none",oe.style.display="none",Q.style.display="none",H.style.display="none",$e=!1,F.style.display="",F.textContent=!x?"Connect to Subsonic in Settings":"No active playback",S=0,C.style.width="0%",v.textContent=ct(0),E.textContent=ct(0),Ze();return}z.style.display="",k.style.display="";let T=Ne();if(I.style.display=T?"flex":"none",I.hidden=!T,B.disabled=!T,W.disabled=!T,ne.disabled=!T,oe.hidden=!0,oe.style.display="none",F.style.display="none",r.deviceName)N.textContent=r.deviceName,Q.style.display="",Ve=r.deviceId??null;else Q.style.display="none";if(c.textContent=r.trackName,y.textContent=r.artistName,d.textContent=r.albumName,S=r.durationMs,s.setUrl(je(r.albumArtUrl,r.trackUri)),O=r.isPlaying,ge=r.isPlaying,W.innerHTML=O?kn:on,!X){de=r.progressMs,ze=Date.now();let j=r.durationMs>0?r.progressMs/r.durationMs*100:0;C.style.width=`${j}%`,v.textContent=ct(r.progressMs)}if(E.textContent=ct(r.durationMs),r.volume!==null&&!Se)G.value=String(r.volume);if(R&&O)J();else Ze();Ke()}function et(r,x,T,j){Me=r,pe=dt(T),he=Tn(x),Ie=j,re=!1,D=-1,Ke(!0)}function f(r){if(re=r,r)Me=le?.trackUri??null,pe=[],he=[],Ie=!1,D=-1;Ke(!0)}function U(r){if(ye=r,t.dataset.style=r,t.style.setProperty("--spotify-mini-player-width",`${Tt(r)}px`),Ke(!0),R)Z()}function ue(r){if(_){Re=r;return}if(H.innerHTML="",r.length===0){H.innerHTML='<div class="spotify-mini-device-loading">No devices found</div>';return}for(let x of r){let T=document.createElement("div");if(T.className=`spotify-mini-device-item${x.isActive?" active":""}`,T.innerHTML=`<span class="spotify-mini-device-item-name">${x.name}</span><span class="spotify-mini-device-item-type">${x.type}</span>`,!x.isActive)T.addEventListener("click",(j)=>{j.stopPropagation(),e({type:"transfer_playback",deviceId:x.id}),H.style.display="none",$e=!1});H.appendChild(T)}}function ce(r){if(_){Fe=r;return}G.value=String(r)}return{root:t,update:ot,updateLyrics:et,setLyricsLoading:f,setLyricsUpdateSuspended(r){if(xe=r,!r)Be()},setUiSuspended(r){if(_=r,xe=r,r){Ze();return}if(Ge(),R&&ge)J()},setStyle:U,setDevices:ue,setVolume:ce,onVolumeChange(r){ke.add(r)},toggle(){if(R)ve();else Qe()},hide:ve,isOpen:()=>R,reposition:ut,destroy(){ve(),Ze(),Oe(),ae(),ke.clear(),t.remove()}}}var zn='<svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>',ln='<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>',In='<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>',An='<svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>',Un='<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>',_n='<svg viewBox="0 0 24 24"><path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>',Rn='<svg viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/></svg>',zt='<svg viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',Hn=4000;function St(e){let n=Math.floor(e/1000),o=Math.floor(n/60),t=n%60;return`${o}:${t.toString().padStart(2,"0")}`}function On(e){if(!e)return[];return e.split(/\r?\n/).map((n)=>n.trim()).filter(Boolean)}function pt(e){e.addEventListener("pointerdown",(n)=>n.stopPropagation()),e.addEventListener("pointermove",(n)=>n.stopPropagation()),e.addEventListener("pointerup",(n)=>n.stopPropagation()),e.addEventListener("touchstart",(n)=>n.stopPropagation(),{passive:!0}),e.addEventListener("touchmove",(n)=>n.stopPropagation(),{passive:!0}),e.addEventListener("touchend",(n)=>n.stopPropagation(),{passive:!0}),e.addEventListener("click",(n)=>n.stopPropagation())}function It(e){let n=document.createElement("div");n.className=`${e} spotify-modern-widget-marquee`,n.dataset.marqueePhase="idle";let o=document.createElement("div");o.className=`${e}-content spotify-modern-widget-marquee-content`,n.appendChild(o);let t=null;function s(){if(t)clearTimeout(t),t=null;n.dataset.marqueePhase="idle",o.classList.remove("spotify-modern-widget-marquee-animate")}function m(y){if(n.dataset.marqueePhase="scrolling",o.classList.remove("spotify-modern-widget-marquee-animate"),y)o.offsetWidth;o.classList.add("spotify-modern-widget-marquee-animate")}function c(y){if(t)clearTimeout(t),t=null;n.dataset.marqueePhase="rest",o.classList.remove("spotify-modern-widget-marquee-animate"),t=setTimeout(()=>{t=null,m(y)},Hn)}return o.addEventListener("animationend",(y)=>{if(y.animationName!=="spotify-modern-marquee"||n.dataset.marqueePhase!=="scrolling")return;c(!0)}),{root:n,setText(y){o.textContent=y,n.setAttribute("aria-label",y)},refresh(y,d=!1){if(!y){n.dataset.overflow="false",s(),n.style.removeProperty("--spotify-modern-marquee-distance"),n.style.removeProperty("--spotify-modern-marquee-duration");return}let p=Math.ceil(o.scrollWidth-n.clientWidth);if(p<=6){n.dataset.overflow="false",s(),n.style.removeProperty("--spotify-modern-marquee-distance"),n.style.removeProperty("--spotify-modern-marquee-duration");return}n.dataset.overflow="true",n.style.setProperty("--spotify-modern-marquee-distance",`${p}px`),n.style.setProperty("--spotify-modern-marquee-duration",`${Math.max(8,Math.min(20,8+p/18))}s`);let u=t!==null,g=n.dataset.marqueePhase==="scrolling";if(d||!u&&!g)c(d)}}}function dn(e,n,o){let t=document.createElement("div");t.className="spotify-modern-widget-player",t.dataset.expanded="false",t.dataset.transport="false";let s=document.createElement("div");s.className="spotify-modern-widget-compact";let m=Ye("spotify-modern-widget-compact-art"),c=document.createElement("div");c.className="spotify-modern-widget-compact-fallback",c.innerHTML=zt;let y=document.createElement("div");y.className="spotify-modern-widget-compact-overlay";let d=document.createElement("div");d.className="spotify-modern-widget-compact-status";let p=document.createElement("div");p.className="spotify-modern-widget-compact-progress",y.appendChild(d),s.appendChild(m.el),s.appendChild(c),s.appendChild(y),s.appendChild(p);let u=document.createElement("div");u.className="spotify-modern-widget-expanded";let g=document.createElement("div");g.className="spotify-modern-widget-header";let k=document.createElement("div");k.className="spotify-modern-widget-eyebrow",k.textContent="Now Playing";let v=document.createElement("div");v.className="spotify-modern-widget-header-buttons";let L=document.createElement("button");L.className="spotify-modern-widget-icon-btn",L.innerHTML=_n,L.title="Open full player";let C=document.createElement("button");C.className="spotify-modern-widget-icon-btn",C.innerHTML=Rn,C.title="Collapse",pt(L),pt(C),L.addEventListener("click",()=>n()),C.addEventListener("click",()=>o()),v.appendChild(L),v.appendChild(C),g.appendChild(k),g.appendChild(v);let E=document.createElement("div");E.className="spotify-modern-widget-hero";let I=Ye("spotify-modern-widget-art");I.el.title="Collapse";let b=document.createElement("div");b.className="spotify-modern-widget-art-fallback",b.innerHTML=zt,b.title="Collapse",pt(I.el),pt(b),I.el.addEventListener("click",()=>o()),b.addEventListener("click",()=>o());let B=document.createElement("div");B.className="spotify-modern-widget-meta";let W=It("spotify-modern-widget-track"),ne=It("spotify-modern-widget-artist"),oe=It("spotify-modern-widget-album");B.appendChild(W.root),B.appendChild(ne.root),B.appendChild(oe.root),E.appendChild(I.el),E.appendChild(b),E.appendChild(B);let Y=document.createElement("div");Y.className="spotify-modern-widget-progress-row";let G=document.createElement("span");G.className="spotify-modern-widget-time";let Q=document.createElement("div");Q.className="spotify-modern-widget-progress-bar";let M=document.createElement("div");M.className="spotify-modern-widget-progress-fill",Q.appendChild(M);let N=document.createElement("span");N.className="spotify-modern-widget-time",Y.appendChild(G),Y.appendChild(Q),Y.appendChild(N);let q=document.createElement("div");q.className="spotify-modern-widget-lyrics";let H=document.createElement("div");H.className="spotify-modern-widget-section-label",H.textContent="Lyrics";let F=document.createElement("div");F.className="spotify-modern-widget-lyrics-body";let z=document.createElement("div");z.className="spotify-modern-widget-lyrics-track",F.appendChild(z),q.appendChild(H),q.appendChild(F);let V=document.createElement("div");V.className="spotify-modern-widget-controls";let A=document.createElement("button");A.className="spotify-modern-widget-btn",A.innerHTML=zn;let K=document.createElement("button");K.className="spotify-modern-widget-btn spotify-modern-widget-btn-main",K.innerHTML=ln;let h=document.createElement("button");h.className="spotify-modern-widget-btn",h.innerHTML=An,V.appendChild(A),V.appendChild(K),V.appendChild(h);let w=document.createElement("div");w.className="spotify-modern-widget-volume-row";let O=document.createElement("span");O.className="spotify-modern-widget-volume-icon",O.innerHTML=Un;let S=document.createElement("input");S.type="range",S.min="0",S.max="100",S.value="50",S.className="spotify-modern-widget-volume-slider",w.appendChild(O),w.appendChild(S);let R=document.createElement("div");R.className="spotify-modern-widget-empty";let ee=document.createElement("div");ee.className="spotify-modern-widget-empty-icon",ee.innerHTML=zt;let ye=document.createElement("div");ye.className="spotify-modern-widget-empty-title",ye.textContent="No music playing.";let le=document.createElement("div");le.className="spotify-modern-widget-empty-subtitle",le.textContent="Your speakers are enjoying a brief moment of mindfulness.",R.appendChild(ee),R.appendChild(ye),R.appendChild(le),u.appendChild(g),u.appendChild(E),u.appendChild(Y),u.appendChild(q),u.appendChild(V),u.appendChild(w),u.appendChild(R),t.appendChild(s),t.appendChild(u),[Q,A,K,h,S].forEach((f)=>pt(f)),pt(F);let qe=!1,de=null,ze=!1,ge=0,Ee=0,Me=0,pe=!1,he=null,Ie=null,re=Lt(),D=[],xe=!1,se=!1,_="",me=[],Re=Et(F),Fe="",X=null,Se=null,Le=!1,Pe=!1,Be=new ResizeObserver(()=>{Ae(!1)});Be.observe(B),Be.observe(t);let Ge=new ResizeObserver(()=>{if(!ze)return;Ne(!0)});Ge.observe(F);function Ae(f){requestAnimationFrame(()=>{W.refresh(ze,f),ne.refresh(ze,f),oe.refresh(ze,f)})}function Je(f){if(X)clearTimeout(X);if(Se)clearTimeout(Se);Ae(f),X=setTimeout(()=>Ae(f),180),Se=setTimeout(()=>Ae(f),460)}function Xe(f){m.setUrl(f),c.style.display=f?"none":"flex"}function We(f){I.setUrl(f),b.style.display=f?"none":"flex"}function Ke(){if(!pe)return Ee;return Math.min(Ee+Math.max(0,Date.now()-Me),ge||1/0)}function He(f,U){p.style.setProperty("--spotify-modern-widget-compact-progress",`${Math.max(0,Math.min(100,f))}%`),p.style.opacity=U?"1":"0"}function J(){Re.cancel(),z.innerHTML="",F.scrollTop=0,me=[]}function Ze(){J(),me=re.getIndexedLines().map((U,ue)=>{let ce=document.createElement("div");return ce.className="spotify-modern-widget-lyric-line spotify-modern-widget-lyric-line-enter",ce.style.setProperty("--spotify-modern-lyric-enter-delay",`${Math.min(ue*22,110)}ms`),ce.textContent=U.displayText,z.appendChild(ce),ce})}function Ne(f=!1){if(!re.hasLyrics())return;let U=re.getActiveLineIndex(),ue=U>=0?me[U]:me[0];if(ue)Re.center(ue,{force:f})}function Oe(f=!0){let U=re.getActiveLineIndex();if(re.getIndexedLines().forEach((ce,r)=>{let x=me[r];if(!x)return;if(x.className="spotify-modern-widget-lyric-line",ce.index===U)x.classList.add("active");else if(U>=0){let T=Math.abs(ce.index-U);if(T===1)x.classList.add("near");else if(T===2)x.classList.add("mid");else x.classList.add("far")}else x.classList.add("far")}),!f)return;Ne()}function ke(){if(J(),!qe||!de){_="";let U=document.createElement("div");U.className="spotify-modern-widget-lyrics-status",U.textContent=qe?"Start playback to see lyrics":"Connect Subsonic to see lyrics",z.appendChild(U);return}if(se){_="loading";let U=document.createElement("div");U.className="spotify-modern-widget-lyrics-status spotify-modern-widget-lyrics-status-loading",U.textContent="Loading lyrics...",z.appendChild(U);return}if(xe){_="instrumental";let U=document.createElement("div");U.className="spotify-modern-widget-lyrics-status",U.textContent="♪ Instrumental",z.appendChild(U);return}if(re.hasLyrics()&&de.trackUri===Ie){_=re.getIndexedLines().map((ue)=>`${ue.index}:${ue.text}`).join("|"),Ze(),Oe(!1);return}if(D.length>0){let U=D.join("|"),ue=U!==_;_=U,D.forEach((ce,r)=>{let x=document.createElement("div");if(x.className="spotify-modern-widget-lyric-line plain",ue)x.classList.add("spotify-modern-widget-lyric-line-enter"),x.style.setProperty("--spotify-modern-lyric-enter-delay",`${Math.min(r*20,100)}ms`);x.textContent=ce,z.appendChild(x)});return}_="empty";let f=document.createElement("div");f.className="spotify-modern-widget-lyrics-status",f.textContent="No lyrics available",z.appendChild(f)}function ae(f=!1){if(!de||de.trackUri!==Ie||!re.hasLyrics()){if(f)ke();return}if(re.setPlayback({trackUri:de.trackUri,progressMs:Ke(),durationMs:ge,isPlaying:pe,updatedAt:Date.now()}),f){ke();return}if(re.refreshActiveLineIndex())Oe(!0)}function $e(){if(!de||!qe||!pe||!ge){he=null;return}if(Le){he=requestAnimationFrame($e);return}let f=Ke(),U=ge>0?f/ge*100:0;M.style.width=`${U}%`,He(U,!0),G.textContent=St(f),ae(),he=requestAnimationFrame($e)}function Ve(){if(he!==null)return;he=requestAnimationFrame($e)}function ie(){if(he!==null)cancelAnimationFrame(he),he=null}function Z(){return de?.source==="feishin"||de?.source==="jukebox"}A.addEventListener("click",()=>{if(Z())e({type:"previous"})}),h.addEventListener("click",()=>{if(Z())e({type:"next"})}),K.addEventListener("click",()=>{if(Z())e({type:de?.isPlaying?"pause":"play"})});let ut=Mt(Q,{getMaxValue:()=>ge,onInteractChange(f){Le=f},onPreview(f){let U=ge>0?f/ge*100:0;M.style.width=`${U}%`,He(U,ge>0),G.textContent=St(f)},onCommit(f){if(de)de={...de,progressMs:f};if(Ee=f,Me=Date.now(),ae(!0),e({type:"seek",positionMs:f}),pe)Ve()},stopPropagation:!0}),Qe=Ct(S,{onInteractChange(f){Pe=f},onCommit(f){e({type:"set_volume",percent:f})},stopPropagation:!0});function ve(f,U){if(de=f,qe=U,t.dataset.empty=!f?"true":"false",!U||!f){Le=!1,Pe=!1,k.textContent=U?"Standby":"Connect Subsonic",d.textContent=U?"No playback":"Connect Subsonic",R.style.display="grid",E.style.display="none",Y.style.display="none",q.style.display="none",V.style.display="none",w.style.display="none",He(0,!1),Xe(null),We(null),re.setPlayback(null),Fe="",ie(),ke();return}k.textContent="Now Playing";let ue=je(f.albumArtUrl,f.trackUri);Xe(ue),We(ue),d.textContent=f.isPlaying?"Playing":"Paused";let ce=`${f.trackName}|${f.artistName}|${f.albumName}`,r=ce!==Fe;Fe=ce,W.setText(f.trackName),ne.setText(f.artistName),oe.setText(f.albumName),E.style.display="grid",Y.style.display="grid",q.style.display="grid",R.style.display="none",ge=f.durationMs,pe=f.isPlaying;let x=Z(),T=t.dataset.transport!==String(x);if(t.dataset.transport=String(x),V.style.display=x?"flex":"none",V.hidden=!x,A.disabled=!x,K.disabled=!x,h.disabled=!x,w.hidden=!0,w.style.display="none",re.setPlayback({trackUri:f.trackUri,progressMs:Le?Ee:f.progressMs,durationMs:f.durationMs,isPlaying:f.isPlaying,updatedAt:Le?Me:Date.now()}),K.innerHTML=f.isPlaying?In:ln,!Pe)S.value=String(f.volume??Number(S.value));if(!Le){Ee=f.progressMs,Me=Date.now();let j=f.durationMs>0?f.progressMs/f.durationMs*100:0;M.style.width=`${j}%`,He(j,f.durationMs>0),G.textContent=St(f.progressMs)}if(N.textContent=St(f.durationMs),re.hasLyrics()&&f.trackUri===Ie)if(me.length===0)ke();else ae();else if(z.childElementCount===0)ke();if(T&&re.hasLyrics()&&f.trackUri===Ie)requestAnimationFrame(()=>requestAnimationFrame(()=>Oe(!0)));if(Je(r),f.isPlaying)Ve();else ie()}function ot(f,U,ue,ce){Ie=f;let r=dt(ue);re.setLyrics(r),D=On(U),xe=ce,se=!1,ae(!0)}function et(f){if(se=f,f)Ie=de?.trackUri??null,re.clear(),D=[],xe=!1;ke()}return{root:t,update:ve,updateLyrics:ot,setLyricsLoading:et,setLyricsBlur(f){if(f)q.style.removeProperty("--spotify-lyrics-enter-blur");else q.style.setProperty("--spotify-lyrics-enter-blur","0px")},setAutoScrollSuspended(f){if(Re.suspend(f)&&!f&&re.hasLyrics())Oe(!0)},setCollapsedSize(f){t.style.setProperty("--spotify-modern-widget-collapsed-size",`${f}px`)},setExpanded(f){if(ze=f,t.dataset.expanded=String(f),Je(!0),f)requestAnimationFrame(()=>Ne(!0))},isExpanded(){return ze},destroy(){if(ie(),Re.destroy(),ut(),Qe(),X)clearTimeout(X);if(Se)clearTimeout(Se);Be.disconnect(),Ge.disconnect(),m.destroy(),I.destroy(),t.remove()}}}var At="right",Dn='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',qn='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';function Fn(e){try{return new Date(e).toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return""}}function cn(e,n){let o=new Map,t=new Map,s=new Map,m=null,c=null,y=null,d=null,p=null,u=null,g=null,k=null,v=null,L=null;function C(h){return o.get(h)?.get(t.get(h)??0)??null}function E(h){return(o.get(h)?.size??0)>0}function I(h){let w=s.get(h);if(w)w.style.display=C(h)?"":"none"}function b(h){if(!E(h))return;let w=s.get(h);if(!w||!w.isConnected){let O=e.dom.findMessageElement(h);if(!O)return;let S=e.dom.inject(O,`<button type="button" class="spotify-song-badge" aria-label="Song that was playing" title="Song that was playing">${Dn}</button>`,"beforeend");S.classList.add("spotify-song-badge-wrap"),S.dataset.corner=At,S.addEventListener("click",(R)=>{R.stopPropagation(),R.preventDefault(),q(h,S)}),s.set(h,S),w=S}I(h)}function B(){for(let{messageId:h}of e.dom.listMessageElements())if(E(h))b(h)}function W(){if(c)return;c=document.createElement("div"),c.className="spotify-song-pop";let h=document.createElement("div");h.className="spotify-song-pop-header",h.textContent="Playing when generated";let w=document.createElement("div");w.className="spotify-song-pop-body",y=Ye("spotify-song-pop-art"),y.el.style.display="";let O=document.createElement("div");O.className="spotify-song-pop-info",d=document.createElement("div"),d.className="spotify-song-pop-track",p=document.createElement("div"),p.className="spotify-song-pop-artist",u=document.createElement("div"),u.className="spotify-song-pop-album",g=document.createElement("div"),g.className="spotify-song-pop-when",O.append(d,p,u,g),w.append(y.el,O);let S=document.createElement("div");S.className="spotify-song-pop-actions",k=document.createElement("button"),k.type="button",k.className="spotify-song-pop-btn spotify-song-pop-btn-primary",k.innerHTML=`${qn}<span>Play</span>`,k.addEventListener("click",(R)=>{R.stopPropagation();let ee=v?C(v):null;if(ee?.trackUri)n({type:"play",trackUri:ee.trackUri});N()}),S.appendChild(k),c.append(h,w,S),c.addEventListener("click",(R)=>R.stopPropagation()),document.body.appendChild(c)}function ne(h){if(W(),!h){if(y?.setUrl(null),d)d.textContent="No track playing";if(p)p.textContent="";if(u)u.textContent="Nothing was playing when this version was written.";if(g)g.textContent="";if(k)k.style.display="none";return}if(y?.setUrl(je(h.albumArtUrl,h.trackUri)),d)d.textContent=h.trackName;if(p)p.textContent=h.artistName;if(u)u.textContent=h.albumName;if(g)g.textContent=Fn(h.capturedAt);if(k)k.style.display=""}function oe(h){if(!c)return;let w=h.getBoundingClientRect(),O=c.offsetWidth||280,S=c.offsetHeight||200,R=8,ee=w.top-S-8,ye="bottom";if(ee<R)ee=w.bottom+8,ye="top";let le=At==="right"?w.right-O:w.left;le=Math.max(R,Math.min(le,window.innerWidth-O-R)),ee=Math.max(R,Math.min(ee,window.innerHeight-S-R)),c.style.left=`${le}px`,c.style.top=`${ee}px`,c.style.transformOrigin=`${ye} ${At}`}function Y(h){let w=h.target;if(!(w instanceof Node))return;if(c?.contains(w)||L?.contains(w))return;N()}function G(){N()}function Q(h){if(h.key==="Escape")N()}function M(h,w){ne(C(h)),v=h,L=w,c.classList.add("open"),oe(w),setTimeout(()=>{document.addEventListener("click",Y,!0),window.addEventListener("scroll",G,!0),window.addEventListener("resize",G,!0),document.addEventListener("keydown",Q,!0)},0)}function N(){if(!c||!v)return;c.classList.remove("open"),v=null,L=null,document.removeEventListener("click",Y,!0),window.removeEventListener("scroll",G,!0),window.removeEventListener("resize",G,!0),document.removeEventListener("keydown",Q,!0)}function q(h,w){if(v===h)N();else{if(v)N();M(h,w)}}function H(h,w){if(h!==m)A();m=h;let O=new Set(w.map((S)=>S.messageId));for(let S of[...o.keys()])if(!O.has(S))V(S);for(let S of w){let R=new Map;for(let[ee,ye]of Object.entries(S.bySwipe))R.set(Number(ee),ye);o.set(S.messageId,R),t.set(S.messageId,S.activeSwipe),b(S.messageId)}B()}function F(h,w,O,S){if(m&&h!==m)return;m=h;let R=o.get(w)??new Map;if(R.set(O,S),o.set(w,R),t.set(w,O),b(w),v===w)ne(C(w))}function z(h,w){if(t.set(h,w),I(h),v===h){let O=C(h);if(O)ne(O);else N()}}function V(h){if(v===h)N();o.delete(h),t.delete(h);let w=s.get(h);if(w){try{e.dom.uninject(w)}catch{}s.delete(h)}}function A(){N();for(let h of s.values())try{e.dom.uninject(h)}catch{}s.clear(),o.clear(),t.clear(),m=null}function K(){A(),y?.destroy(),c?.remove(),c=null}return{setChatSongs:H,setMessageSong:F,decorate:b,decorateMounted:B,setActiveSwipe:z,removeMessage:V,reset:A,destroy:K}}var Bn={width:320,height:196},Wn={width:348,height:520};var pn={width:300,height:420};function mn({desktopPopout:e,hasPlayback:n,viewportHeight:o,viewportWidth:t}){let s=n?Wn:Bn;if(e)return{...s};if(!n)return{width:Math.max(280,Math.min(s.width,t-24)),height:s.height};return{width:Math.max(pn.width,Math.min(s.width,t-24)),height:Math.max(pn.height,Math.min(s.height,o-24))}}var un='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>',mt=12,fn="subsonic-controls-widget-prefs";function yn(e){let n=[],o="__TAURI_INTERNALS__"in window&&new URLSearchParams(window.location.search).has("desktopWidgetExtension");n.push(e.dom.addStyle(Gt));let t=(i)=>e.sendToBackend(i),s=null,m=0,c=null,y=new Map,d=48,p=new Map;function u(i){if(/^(data|blob):/i.test(i))return Promise.resolve(i);return new Promise((l)=>{let a=crypto.randomUUID(),P=setTimeout(()=>{p.delete(a),l(null)},15000);p.set(a,{resolve:l,timer:P}),e.sendToBackend({type:"__cors_proxy_request",requestId:a,url:i,options:{method:"GET",mediaType:"image"}})})}function g(i,l){let a=p.get(i);if(!a)return;p.delete(i),clearTimeout(a.timer);let P=l?.headers?.["content-type"]||l?.headers?.["Content-Type"]||"image/jpeg";a.resolve(l?.status&&l.status>=200&&l.status<300&&l.encoding==="base64"&&l.body?`data:${P};base64,${l.body}`:null)}function k(){if(c)clearTimeout(c);c=null}function v(){k(),m+=1,t({type:"album_colors",colors:null})}function L(i,l){y.delete(i),y.set(i,l);while(y.size>d){let a=y.keys().next().value;if(!a)break;y.delete(a)}}function C(i=1800){k(),c=setTimeout(()=>{c=null,v()},i)}function E(i){return new Promise((l)=>{let a=new Image;a.onload=()=>{try{let P=document.createElement("canvas"),te=32;P.width=32,P.height=32;let we=P.getContext("2d");if(!we)return l(null);we.drawImage(a,0,0,32,32);let Te=we.getImageData(0,0,32,32).data,bt=0,at=0,Rt=0.5,Ht=-1,Ot=0,Dt=0,qt=0,xt=0;for(let ft=0;ft<Te.length;ft+=4){let $t=Te[ft],Vt=Te[ft+1],jt=Te[ft+2];Ot+=$t,Dt+=Vt,qt+=jt,xt+=1;let yt=$t/255,lt=Vt/255,gt=jt/255,rt=Math.max(yt,lt,gt),ht=Math.min(yt,lt,gt),Pt=(rt+ht)/2,wt=0,Nt=0;if(rt!==ht){let vt=rt-ht;if(Nt=Pt>0.5?vt/(2-rt-ht):vt/(rt+ht),rt===yt)wt=((lt-gt)/vt+(lt<gt?6:0))/6;else if(rt===lt)wt=((gt-yt)/vt+2)/6;else wt=((yt-lt)/vt+4)/6}let Yt=Nt*(1-Math.abs(Pt-0.5)*1.6);if(Yt>Ht)Ht=Yt,bt=wt,at=Nt,Rt=Pt}let Ft=Math.round(Ot/xt),Bt=Math.round(Dt/xt),Wt=Math.round(qt/xt),bn=0.299*Ft+0.587*Bt+0.114*Wt;l({dominant:{r:Ft,g:Bt,b:Wt},dominantHsl:{h:Math.round(bt*360),s:Math.round(at*100),l:Math.round(Rt*100)},isLight:bn>152})}catch{l(null)}},a.onerror=()=>l(null),u(i).then((P)=>{if(P)a.src=P;else l(null)})})}let I="none",b=Xt(t);e.ui.mount("settings_extensions").appendChild(b.root),n.push(()=>b.destroy());let W=e.ui.registerDrawerTab({id:"subsonic",title:"Subsonic Controls",shortName:"Subsonic",description:"Browse a Subsonic-compatible music server and control its optional Jukebox.",keywords:["subsonic","opensubsonic","music","jukebox","lyrics"],headerTitle:"Subsonic",iconSvg:un});n.push(()=>W.destroy()),W.root.classList.add("spotify-tab-root");let ne=document.createElement("div");ne.className="spotify-panel",W.root.appendChild(ne);function oe(){let i=W.root.getBoundingClientRect().top,l=W.root.parentElement?.getBoundingClientRect().bottom??window.innerHeight,a=window.visualViewport?.height??window.innerHeight,P=Math.min(l,a);W.root.style.setProperty("--spotify-tab-height",`${Math.max(240,P-i-2)}px`)}oe();let Y=new ResizeObserver(oe);Y.observe(W.root),window.addEventListener("resize",oe),n.push(()=>{Y.disconnect(),window.removeEventListener("resize",oe)});let G=Jt(),Q=new Set(["play","pause","next","previous","shuffle","queue"]),M=Kt(t),N=Zt(t),q=Qt(t),H=nn();ne.append(G.root,M.root,N.root,q.root,H.root),n.push(()=>G.destroy(),()=>M.destroy(),()=>N.destroy(),()=>q.destroy(),()=>H.destroy());let F=!1,z=null,V=null,A=!1,K="",h="",w=!1,O="",S="",R=!1,ee=1000,ye=null,le={small:36,medium:48,large:64},qe={small:112,medium:128,large:144},de=24,ze=256,ge=96,Ee=256;function Me(i){return i==="modern"?qe:le}function pe(i){return i==="modern"?{min:ge,max:Ee}:{min:de,max:ze}}function he(i,l){let{min:a,max:P}=pe(l);return Math.max(a,Math.min(i,P))}function Ie(i){return i==="small"||i==="medium"||i==="large"||i==="custom"}function re(i,l){let a=Me(l);if(i===a.small)return"small";if(i===a.large)return"large";return i===a.medium?"medium":"custom"}let D=48,xe="circle",se="medium",_="default",me=!0,Re,Fe=null;try{let i=JSON.parse(localStorage.getItem(fn)||"null");if(i?.miniPlayerStyle==="modern")_="modern";if(i?.lyricsBlur===!1)me=!1;if(typeof i?.size==="number")D=he(i.size,_);if(i?.shape==="squircle")xe="squircle";if(se=Ie(i?.sizeMode)?i.sizeMode:re(D,_),se!=="custom")D=Me(_)[se];if(typeof i?.x==="number"&&typeof i.y==="number")Re={x:i.x,y:i.y};if(i)Fe={size:D,shape:xe,sizeMode:se,miniPlayerStyle:_,lyricsBlur:me,...Re}}catch{}let X,Se=null,Le=!1;function Pe(){let i=X.getPosition(),l={size:D,shape:xe,sizeMode:se,miniPlayerStyle:_,lyricsBlur:me,x:i.x,y:i.y};Le=!0,localStorage.setItem(fn,JSON.stringify(l)),t({type:"set_widget_preferences",preferences:l})}let Be=null,Ge=null,Ae=null;function Je(){let{min:i,max:l}=pe(_);if(Be)Be.textContent=_==="modern"?"Collapsed Modern Player Size (px)":"Custom Widget Size (px)";if(Ge)Ge.textContent=_==="modern"?`Controls the compact size of the modern player before it expands (${i}–${l}px).`:`Controls the floating widget size (${i}–${l}px).`;if(Ae)Ae.min=String(i),Ae.max=String(l),Ae.placeholder=_==="modern"?"e.g. 128":"e.g. 56",Ae.value=se==="custom"?String(D):""}let Xe=b.root.querySelector(".spotify-settings-card-body");if(Xe){let i=document.createElement("div");i.style.cssText="height:1px;background:var(--lumiverse-border);margin:4px 0";let l=document.createElement("label");l.className="spotify-settings-label",Be=document.createElement("span"),Ge=document.createElement("div"),Ge.style.cssText="font-size:0.8em;opacity:0.6;margin-top:2px";let a=document.createElement("div");a.className="spotify-settings-row";let P=document.createElement("input");P.className="spotify-input",P.type="number",P.step="1",P.style.width="80px",Ae=P;let te=document.createElement("button");te.type="button",te.className="spotify-btn spotify-btn-primary",te.textContent="Apply",te.style.cssText="font-size:0.85em;padding:4px 12px";let we=()=>{let Te=P.valueAsNumber;if(!Number.isFinite(Te))return;se="custom",x(he(Math.round(Te),_))};te.addEventListener("click",we),P.addEventListener("keydown",(Te)=>{if(Te.key!=="Enter")return;Te.preventDefault(),we()}),a.append(P,te),l.append(Be,a,Ge),Xe.append(i,l)}Je();let We=null;function Ke(){if(We)We.checked=me}function He(){H.setBlurEnabled(me),ie.setLyricsBlur(me),Ke()}if(Xe){let i=document.createElement("div");i.style.cssText="height:1px;background:var(--lumiverse-border);margin:4px 0";let l=document.createElement("label");l.className="spotify-settings-check";let a=document.createElement("input");a.type="checkbox",a.checked=me,We=a;let P=document.createElement("span");P.textContent="Lyrics blur",l.append(a,P);let te=document.createElement("div");te.style.cssText="font-size:0.8em;opacity:0.65;margin-top:4px",te.textContent="Depth-blurs receding lyric lines and fades new lines in through a blur. Turn off for crisp text.";let we=document.createElement("div");we.append(l,te),a.addEventListener("change",()=>{me=a.checked,He(),Pe()}),Xe.append(i,we)}let J=document.createElement("div");J.className="spotify-float-widget";function Ze(){J.classList.remove("spotify-float-widget-mounted"),requestAnimationFrame(()=>requestAnimationFrame(()=>J.classList.add("spotify-float-widget-mounted")))}let Ne=document.createElement("div");Ne.className="spotify-float-widget-legacy";let Oe=document.createElement("div");Oe.className="spotify-float-widget-icon",Oe.innerHTML=un;let ke=Ye("spotify-float-widget-art");ke.el.style.display="none",Ne.append(Oe,ke.el),J.appendChild(Ne);let ae=!1,$e=420,Ve=null,ie=dn(t,()=>W.activate(),()=>f(!1));J.appendChild(ie.root);let Z=an(t,()=>W.activate(),()=>{let i=X.root.getBoundingClientRect();return{x:i.left,y:i.top,w:i.width,h:i.height}});Z.setStyle("default");function ut(){return mn({desktopPopout:o,hasPlayback:Boolean(z),viewportHeight:window.innerHeight,viewportWidth:window.innerWidth})}function Qe(i=ae){if(_==="modern")return i?ut():{width:D,height:D};return{width:D,height:D}}function ve(i=Qe()){let l=X.getPosition(),a=Math.max(mt,window.innerWidth-i.width-mt),P=Math.max(mt,window.innerHeight-i.height-mt),te=Math.max(mt,Math.min(l.x,a)),we=Math.max(mt,Math.min(l.y,P));if(te!==l.x||we!==l.y)X.moveTo(te,we)}function ot(i,l=!1){if(Ve)clearTimeout(Ve);let a=()=>{Ve=null,X.setSize(i.width,i.height)};if(l)Ve=setTimeout(a,$e);else a()}function et({delaySizeRequest:i=!1}={}){let l=Qe(),a=_==="modern"&&ae?"pan-y":"none";if(X.root.style.touchAction=a,X.root.style.transition="width 420ms cubic-bezier(0.22, 1, 0.36, 1), height 420ms cubic-bezier(0.22, 1, 0.36, 1)",J.style.transition="width 420ms cubic-bezier(0.22, 1, 0.36, 1), height 420ms cubic-bezier(0.22, 1, 0.36, 1), border-radius 420ms cubic-bezier(0.22, 1, 0.36, 1)",J.style.touchAction=a,ie.setCollapsedSize(D),_==="modern")J.classList.add("spotify-float-widget-modern-mode"),Ne.style.display="none",ie.root.style.display="block",X.root.style.width=`${l.width}px`,X.root.style.height=`${l.height}px`,J.style.width=`${l.width}px`,J.style.height=`${l.height}px`,J.style.borderRadius=ae?"30px":`${Math.max(18,Math.round(D*0.28))}px`,ot(l,i);else{J.classList.remove("spotify-float-widget-modern-mode"),Ne.style.display="flex",ie.root.style.display="none";let P=xe==="circle"?"50%":"22%";X.root.style.width=`${D}px`,X.root.style.height=`${D}px`,J.style.width=`${D}px`,J.style.height=`${D}px`,J.style.borderRadius=P;let te=Math.round(D*0.5),we=Oe.querySelector("svg");if(we)we.style.width=`${te}px`,we.style.height=`${te}px`;ot(l)}}function f(i){let l=ae;ae=i&&_==="modern",Z.hide(),ve(Qe(ae)),ie.setExpanded(ae),et({delaySizeRequest:l&&!ae}),requestAnimationFrame(()=>ve(Qe()))}function U(){if(X.root.style.display=F?"":"none",!F)Z.hide(),ae=!1,ie.setExpanded(!1);Z.update(z,F),ie.update(z,F),ue(z)}function ue(i){let l=je(i?.albumArtUrl??null,i?.trackUri);Oe.style.display=l?"none":"flex",ke.el.style.display=l?"":"none",ke.setUrl(l)}function ce(i=Re){if(X=e.ui.createFloatWidget({width:D,height:D,tooltip:"Subsonic",chromeless:!0}),X.root.appendChild(J),Ze(),X.onDragEnd((l)=>{Se=l,ve(),Pe()}),et(),U(),i)X.moveTo(i.x,i.y)}function r(){x(D)}function x(i){Z.hide(),ae=!1,ie.setExpanded(!1);let l=X.getPosition();Se=l,X.destroy(),D=he(i,_),Je(),ce(l),ve(),Pe()}function T(i){let l=i.miniPlayerStyle==="modern"?"modern":"default",a=Ie(i.sizeMode)?i.sizeMode:re(i.size,l);_=l,me=i.lyricsBlur!==!1,xe=i.shape==="squircle"?"squircle":"circle",se=a,D=a==="custom"?he(i.size,l):Me(l)[a],Z.setStyle(l),Z.hide(),ae=!1,ie.setExpanded(!1);let P=typeof i.x==="number"&&typeof i.y==="number"?{x:i.x,y:i.y}:X.getPosition();Se=P,X.destroy(),Je(),ce(P),ve(),He()}let j=0;async function De(i,l){let a=[{key:"small",label:"Small",active:se==="small"},{key:"medium",label:"Medium",active:se==="medium"},{key:"large",label:"Large",active:se==="large"},{key:"custom",label:"Custom…",active:se==="custom"}];if(_!=="modern")a.push({key:"shape-divider",label:"",type:"divider"},{key:"circle",label:"Circle",active:xe==="circle"},{key:"squircle",label:"Squircle",active:xe==="squircle"});a.push({key:"style-divider",label:"",type:"divider"},{key:"mini-default",label:"Default Mini Player",active:_==="default"},{key:"mini-modern",label:"Modern Lyrics Mini Player",active:_==="modern"}),j+=1,Z.setUiSuspended(!0),ie.setAutoScrollSuspended(!0),H.setAutoScrollSuspended(!0);let P;try{({selectedKey:P}=await e.ui.showContextMenu({position:{x:i,y:l},items:a}))}finally{if(j=Math.max(0,j-1),j===0)Z.setUiSuspended(!1),ie.setAutoScrollSuspended(!1),H.setAutoScrollSuspended(!1)}if(!P)return;if(P==="small"||P==="medium"||P==="large")se=P,x(Me(_)[P]);else if(P==="custom")e.events.emit("open-settings",{view:"extensions"});else if(P==="circle"||P==="squircle")xe=P,Pe(),et();else if(P==="mini-default"||P==="mini-modern"){if(_=P==="mini-modern"?"modern":"default",D=se==="custom"?he(D,_):Me(_)[se],Z.setStyle(_),_!=="modern")ae=!1,ie.setExpanded(!1);Z.hide(),Pe(),Je(),et(),ve()}}let Ce=!1,tt={x:0,y:0},Ue=5;J.addEventListener("pointerdown",(i)=>{if(Ce=!1,tt={x:i.clientX,y:i.clientY},!Z.isOpen())return;let l=null,a=()=>{if(Ce&&l===null)l=requestAnimationFrame(()=>{Z.reposition(),l=null})},P=()=>{if(document.removeEventListener("pointermove",a),l!==null)cancelAnimationFrame(l)};document.addEventListener("pointermove",a),document.addEventListener("pointerup",P,{once:!0})}),J.addEventListener("pointermove",(i)=>{if(Ce)return;let l=Math.abs(i.clientX-tt.x),a=Math.abs(i.clientY-tt.y);if(l>Ue||a>Ue)Ce=!0}),J.addEventListener("pointerup",()=>{requestAnimationFrame(()=>ve())}),J.addEventListener("click",(i)=>{if(Ce){i.stopPropagation(),Ce=!1;return}if(i.stopPropagation(),_==="modern"){if(!ae)f(!0);return}Z.toggle()}),J.addEventListener("contextmenu",(i)=>{i.preventDefault(),i.stopPropagation(),De(i.clientX,i.clientY)});let be=null,_e=!1,it={x:0,y:0};J.addEventListener("touchstart",(i)=>{_e=!1;let l=i.touches[0];it={x:l.clientX,y:l.clientY},be=setTimeout(()=>{_e=!0,navigator.vibrate?.(50),De(l.clientX,l.clientY)},500)}),J.addEventListener("touchmove",(i)=>{if(!be)return;let l=i.touches[0];if(Math.abs(l.clientX-it.x)>10||Math.abs(l.clientY-it.y)>10)clearTimeout(be),be=null}),J.addEventListener("touchend",(i)=>{if(be)clearTimeout(be),be=null;if(_e){_e=!1;return}if(_==="modern"&&ae){Ce=!1;return}if(!Ce){if(i.cancelable)i.preventDefault();if(_==="modern"){if(!ae)f(!0)}else Z.toggle()}Ce=!1}),ce(),ve(),He();let st=()=>{if(_==="modern"&&ae){et(),requestAnimationFrame(()=>ve(Qe()));return}ve()};window.addEventListener("resize",st),n.push(()=>window.removeEventListener("resize",st)),n.push(()=>{if(Ve)clearTimeout(Ve);Se=X.getPosition(),Pe(),ke.destroy(),Z.destroy(),ie.destroy(),X.destroy()});let nt=cn(e,t);n.push(()=>nt.destroy());let Ut=(i)=>{if(i)t({type:"get_chat_songs",chatId:i})};Ut(e.getActiveChat().chatId),n.push(e.events.on("CHAT_SWITCHED",(i)=>{nt.reset(),Ut(i.chatId||null)})),n.push(e.events.on("CHARACTER_MESSAGE_RENDERED",(i)=>{let l=i.messageId;if(l)nt.decorate(l)})),n.push(e.events.on("MESSAGE_SWIPED",(i)=>{let l=i.message;if(l?.id)nt.setActiveSwipe(l.id,l.swipe_id||0)})),n.push(e.events.on("MESSAGE_DELETED",(i)=>{let l=i.messageId;if(l)nt.removeMessage(l)}));let hn=e.onBackendMessage((i)=>{let l=i;if(l.type==="__cors_proxy_response"&&l.requestId){g(l.requestId,l.error?void 0:l.result);return}let a=i;switch(a.type){case"config":if(K&&K!==a.serverUrl)y.clear();I=a.remoteControl,F=a.connected,A=a.remoteControl==="jukebox",K=a.serverUrl,h=a.username,w=a.hasPassword,O=a.feishinUrl,S=a.feishinUsername,R=a.hasFeishinPassword,ee=a.playbackPositionOffsetMs,ye=a.jukeboxUnavailableReason,b.update(a.connected,a.serverUrl,a.username,a.hasPassword,a.remoteControl,a.feishinUrl,a.feishinUsername,a.hasFeishinPassword,a.playbackPositionOffsetMs,a.jukeboxUnavailableReason),N.setAvailable(!0),N.setPlaybackAvailable(a.remoteControl==="jukebox"),q.setPlaybackAvailable(a.remoteControl==="jukebox"),t({type:"get_playlists"}),M.update(z,F,a.remoteControl!=="none",a.remoteControl==="feishin"?"Feishin Controls":"Jukebox Controls"),U();break;case"widget_preferences":if(a.preferences&&!Le)T(a.preferences);else if(!a.preferences&&!Le&&Fe)t({type:"set_widget_preferences",preferences:Fe});else if(!a.preferences&&!Le)Pe();break;case"state":if(F=a.connected,z=a.playbackState,G.update(z,F),M.update(z,F,I!=="none",I==="feishin"?"Feishin Controls":"Jukebox Controls"),H.updatePlayback(z),z?.trackUri&&z.trackUri!==V)V=z.trackUri,H.setLoading(!0,z),Z.setLyricsLoading(!0),ie.setLyricsLoading(!0),t({type:"get_lyrics"});else if(!z)V=null,H.clear(),Z.updateLyrics(null,null,null,!1),ie.updateLyrics(null,null,null,!1);U();let P=je(z?.albumArtUrl??null,z?.trackUri),te=z?.albumArtKey||P;if(P!==s)if(s=P,P){k();let Te=te&&a.albumPalette?.artworkKey===te?a.albumPalette.colors:y.get(te||"");if(te&&Te)L(te,Te),t({type:"album_colors",colors:Te,artworkKey:te});else{let bt=++m;E(P).then((at)=>{if(bt!==m||P!==s)return;if(at){if(te)L(te,at);t({type:"album_colors",colors:at,artworkKey:te})}else if(!F)v()})}}else if(F)C();else v();break;case"connected":F=!0,U(),t({type:"get_config"}),t({type:"get_state"});break;case"disconnected":F=!1,z=null,V=null,A=!1,N.setAvailable(!0),N.setPlaybackAvailable(I==="jukebox"),q.setPlaybackAvailable(I==="jukebox"),s=null,y.clear(),v(),G.update(null,!1),M.update(null,!1,!1),H.clear(),Z.updateLyrics(null,null,null,!1),ie.updateLyrics(null,null,null,!1),U();break;case"search_results":N.setResults(a.results);break;case"playlists":q.setPlaylists(a.playlists);break;case"chat_songs":nt.setChatSongs(a.chatId,a.entries);break;case"message_song":nt.setMessageSong(a.chatId,a.messageId,a.swipeId,a.snapshot);break;case"lyrics":if(!V||a.trackUri===V)H.update(a.trackUri,a.plainLyrics,a.syncedLyrics,a.instrumental),H.updatePlayback(z),Z.updateLyrics(a.trackUri,a.plainLyrics,a.syncedLyrics,a.instrumental),ie.updateLyrics(a.trackUri,a.plainLyrics,a.syncedLyrics,a.instrumental);break;case"error":if(a.operation==="connect"||a.authenticationFailure)b.setError(a.message);M.setError(Q.has(a.operation||"")?a.message:null),console.warn("[Subsonic Controls]",a.message);break}});n.push(hn);let _t=(i)=>{if(i.detail?.extensionId!==e.manifest.identifier)return;t({type:"get_config"}),t({type:"get_state"})};window.addEventListener("spindle:desktop-widget-returned",_t),n.push(()=>window.removeEventListener("spindle:desktop-widget-returned",_t)),e.permissions.getGranted().then((i)=>{let l=["cors_proxy","ui_panels","app_manipulation","generation","chat_mutation"].filter((a)=>!i.includes(a));if(l.length)e.permissions.request(l,{reason:"Subsonic Controls needs CORS access for your server, a panel and album-art theme support, plus Generation and Chat Mutation to remember the song playing for each assistant reply."})});let vn=e.events.on("SPINDLE_PERMISSION_CHANGED",(i)=>{let l=i;if(l.extensionId!==e.manifest.identifier||l.permission!=="cors_proxy")return;if(l.granted){t({type:"get_config"}),t({type:"get_state"});return}F=!1,z=null,V=null,A=!1,s=null,y.clear(),v(),b.update(!1,"","",!1,"none","","",!1,ee,null),G.update(null,!1),M.update(null,!1,!1),H.clear(),U()});return n.push(vn),n.push(()=>{k(),m+=1;for(let[i,l]of p)clearTimeout(l.timer),l.resolve(null),p.delete(i)}),t({type:"get_config"}),t({type:"get_state"}),t({type:"get_widget_preferences"}),()=>{for(let i of n)i()}}function $n(e,n={}){let o={...n},t={componentId:`desktop-widget-detached-${crypto.randomUUID()}`,element:e instanceof HTMLElement?e:document.createElement("div"),update(s){o={...o,...s}},destroy(){},getValue(){if("checked"in o)return o.checked;return o.value},focus(){},blur(){}};return new Proxy(t,{get(s,m,c){if(m==="then")return;if(Reflect.has(s,m))return Reflect.get(s,m,c);return()=>{return}}})}function gn(e){let n=new Set,o=!1,t=()=>{let y=document.createElement("div");return n.add(y),y},s=(y)=>y instanceof Element&&[...n].some((d)=>d===y||d.contains(y)),m=new Proxy(e.components,{get(y,d,p){let u=Reflect.get(y,d,p);if(typeof u!=="function"||!String(d).startsWith("mount"))return u;return(g,k)=>{if(!o||s(g))return $n(g,k);return Reflect.apply(u,y,[g,k])}}}),c=new Proxy(e.ui,{get(y,d,p){if(d==="mount")return()=>t();if(d==="createFloatWidget"){let u=Reflect.get(y,d,p);return(...g)=>(o=!0,Reflect.apply(u,y,g))}if(d==="registerDrawerTab")return(u)=>({root:t(),tabId:u.id||"desktop-widget-detached",setTitle(){},setShortName(){},setBadge(){},activate(){},destroy(){},onActivate(){return()=>{}}});return Reflect.get(y,d,p)}});return new Proxy(e,{get(y,d,p){if(d==="components")return m;if(d==="ui")return c;return Reflect.get(y,d,p)}})}function Ai(e,n){return yn(gn(e))}export{Ai as setupWidget};
