/**
 * PlayArMr — Shared Interactive Engine
 * Inspired by Max Leiter's desktop UI + Cyberpunk CLI
 */

(function () {
  'use strict';

  // --- 1. Theme Management ---
  function initTheme() {
    const saved = localStorage.getItem('playarmr-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    updateThemeUI(saved);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('playarmr-theme', next);
    updateThemeUI(next);
  }

  function updateThemeUI(theme) {
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');
    if (icon) {
      if (theme === 'light') {
        // Sun icon for light mode
        icon.innerHTML = `<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>`;
      } else {
        // Moon icon for dark mode
        icon.innerHTML = `<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>`;
      }
    }
    if (label) {
      label.textContent = theme;
    }
  }

  // --- 2. CRT Scanlines Management ---
  function initCRT() {
    const saved = localStorage.getItem('playarmr-crt');
    const isActive = saved === null ? true : saved === 'true';
    if (isActive) {
      document.body.classList.add('crt-active');
    } else {
      document.body.classList.remove('crt-active');
    }
    updateCRTUI(isActive);
  }

  function toggleCRT() {
    const isActive = document.body.classList.toggle('crt-active');
    localStorage.setItem('playarmr-crt', isActive);
    updateCRTUI(isActive);
  }

  function updateCRTUI(isActive) {
    const btn = document.getElementById('crt-toggle-btn');
    if (btn) {
      btn.innerHTML = `<span style="opacity:0.7">CRT:</span> ${isActive ? '<span style="color:var(--green)">ON</span>' : '<span style="color:var(--fg-dim)">OFF</span>'}`;
    }
  }

  // --- 3. Menubar Live Clock (IST) ---
  function initClock() {
    const clockEl = document.getElementById('menubar-clock');
    if (!clockEl) return;

    function update() {
      const now = new Date();
      // IST is UTC+5:30
      const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istDate = new Date(utcMs + (330 * 60000));
      const pad = (n) => String(n).padStart(2, '0');
      const timeStr = `${pad(istDate.getHours())}:${pad(istDate.getMinutes())}:${pad(istDate.getSeconds())} IST`;
      clockEl.textContent = timeStr;
    }

    update();
    setInterval(update, 1000);
  }

  // --- 4. Obfuscated Email Helper ---
  function getEmail() {
    const user = 'dev.playarmr';
    const domain = 'protonmail.com';
    return `${user}@${domain}`;
  }

  function initEmailTargets() {
    const email = getEmail();
    document.querySelectorAll('[data-email-target]').forEach((el) => {
      if (el.tagName.toLowerCase() === 'a') {
        el.href = `mailto:${email}`;
      }
      el.textContent = email;
    });
  }

  function copyEmail() {
    const email = getEmail();
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email copied to clipboard: ' + email);
    }).catch(() => {
      window.location.href = `mailto:${email}`;
    });
  }

  // --- 5. Quick Toast Notification ---
  function showToast(msg) {
    let toast = document.getElementById('system-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'system-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        z-index: 10005;
        background: var(--bg-window);
        border: 1px solid var(--cyan);
        color: var(--fg);
        font-family: var(--font-mono);
        font-size: 0.8125rem;
        padding: 0.65rem 1.1rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 10px rgba(0,240,255,0.2);
        opacity: 0;
        transform: translateY(10px);
        transition: all 0.25s ease;
        pointer-events: none;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
    }, 3200);
  }

  // --- 6. About Modal ---
  function openAboutModal() {
    const modal = document.getElementById('about-modal-overlay');
    if (modal) {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
    }
  }

  function closeAboutModal() {
    const modal = document.getElementById('about-modal-overlay');
    if (modal) {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
    }
  }

  // --- 7. Command Palette Database & Modal ---
  const PALETTE_DATA = [
    { category: 'Navigation', title: '~ (Desktop Home)', url: './index.html', icon: '⌂', badge: 'Page' },
    { category: 'Navigation', title: '~/blog (All Writing)', url: './page2.html', icon: '◈', badge: 'Page' },
    { category: 'Navigation', title: 'A Solution to Data Degradation', url: './a-solution-to-data-degradation.html', icon: '✦', badge: 'Essay' },
    { category: 'Navigation', title: 'ABOUT.md (Whoami)', action: openAboutModal, icon: 'ℹ', badge: 'Modal' },

    { category: 'Projects', title: 'citygen (Python · OpenStreetMap Maps)', url: 'https://github.com/PlayArMr/citygen', icon: '⬡', badge: 'GitHub ↗' },
    { category: 'Projects', title: 'Project Rivendell (C Terminal Text RPG)', url: 'https://github.com/PlayArMr/Project_Rivendell', icon: '⬡', badge: 'GitHub ↗' },

    { category: 'Social & Connect', title: 'GitHub (@PlayArMr)', url: 'https://github.com/PlayArMr', icon: '↗', badge: 'External' },
    { category: 'Social & Connect', title: 'LinkedIn (/in/kulkarni-mrudul)', url: 'https://linkedin.com/in/kulkarni-mrudul', icon: '↗', badge: 'External' },
    { category: 'Social & Connect', title: 'X / Twitter (@PlayArMr2)', url: 'https://x.com/PlayArMr2', icon: '↗', badge: 'External' },
    { category: 'Social & Connect', title: 'Email (dev.playarmr@protonmail.com)', action: copyEmail, icon: '✉', badge: 'Copy' },

    { category: 'System Actions', title: 'Toggle Theme (Dark / Light)', action: toggleTheme, icon: '◐', badge: 'Action' },
    { category: 'System Actions', title: 'Toggle CRT Scanline Effect', action: toggleCRT, icon: '📺', badge: 'Action' },
    { category: 'System Actions', title: 'Copy Email to Clipboard', action: copyEmail, icon: '📋', badge: 'Action' }
  ];

  let selectedIndex = 0;
  let filteredItems = [];

  function openPalette() {
    const overlay = document.getElementById('palette-overlay');
    const input = document.getElementById('palette-input');
    if (!overlay || !input) return;

    overlay.classList.add('open');
    input.value = '';
    renderPaletteResults('');
    input.focus();
  }

  function closePalette() {
    const overlay = document.getElementById('palette-overlay');
    if (overlay) {
      overlay.classList.remove('open');
    }
  }

  function renderPaletteResults(query) {
    const resultsContainer = document.getElementById('palette-results');
    if (!resultsContainer) return;

    const q = query.trim().toLowerCase();
    filteredItems = PALETTE_DATA.filter(item => {
      if (!q) return true;
      return item.title.toLowerCase().includes(q) ||
             item.category.toLowerCase().includes(q) ||
             (item.badge && item.badge.toLowerCase().includes(q));
    });

    if (filteredItems.length === 0) {
      resultsContainer.innerHTML = `
        <div style="padding: 1.5rem; text-align: center; color: var(--fg-dim); font-size: 0.8125rem;">
          No matching items found for "${escapeHtml(query)}"
        </div>
      `;
      return;
    }

    selectedIndex = 0;
    let html = '';
    let currentCategory = '';

    filteredItems.forEach((item, index) => {
      if (item.category !== currentCategory) {
        currentCategory = item.category;
        html += `<div class="palette-category">${escapeHtml(currentCategory)}</div>`;
      }
      const isSelected = index === selectedIndex;
      html += `
        <div class="palette-item ${isSelected ? 'selected' : ''}" data-index="${index}">
          <div class="palette-item-left">
            <span style="color:var(--cyan); width: 18px; text-align:center;">${item.icon || '•'}</span>
            <span>${escapeHtml(item.title)}</span>
          </div>
          <span class="palette-item-badge">${escapeHtml(item.badge || '')}</span>
        </div>
      `;
    });

    resultsContainer.innerHTML = html;

    // Attach click listeners to items
    resultsContainer.querySelectorAll('.palette-item').forEach(el => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        executePaletteItem(idx);
      });
      el.addEventListener('mouseenter', () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        updateSelection(idx);
      });
    });
  }

  function updateSelection(newIdx) {
    if (filteredItems.length === 0) return;
    selectedIndex = Math.max(0, Math.min(newIdx, filteredItems.length - 1));
    const items = document.querySelectorAll('#palette-results .palette-item');
    items.forEach((el, idx) => {
      if (idx === selectedIndex) {
        el.classList.add('selected');
        el.scrollIntoView({ block: 'nearest' });
      } else {
        el.classList.remove('selected');
      }
    });
  }

  function executePaletteItem(index) {
    const item = filteredItems[index];
    if (!item) return;
    closePalette();

    if (item.action) {
      item.action();
    } else if (item.url) {
      if (item.url.startsWith('http')) {
        window.open(item.url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = item.url;
      }
    }
  }

  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // --- 8. Global Keyboard Listeners ---
  function initKeyboard() {
    window.addEventListener('keydown', (e) => {
      // ⌘K or Ctrl+K or / (when not typing in an input)
      const isCmdK = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k';
      const isSlash = e.key === '/' && !['input', 'textarea'].includes(document.activeElement.tagName.toLowerCase());

      if (isCmdK || isSlash) {
        e.preventDefault();
        openPalette();
        return;
      }

      // Escape key closes modals
      if (e.key === 'Escape') {
        closePalette();
        closeAboutModal();
        return;
      }

      // Palette Navigation
      const palette = document.getElementById('palette-overlay');
      if (palette && palette.classList.contains('open')) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          updateSelection(selectedIndex + 1);
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          updateSelection(selectedIndex - 1);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          executePaletteItem(selectedIndex);
        }
      }
    });

    const paletteInput = document.getElementById('palette-input');
    if (paletteInput) {
      paletteInput.addEventListener('input', (e) => {
        renderPaletteResults(e.target.value);
      });
    }

    // Backdrop click handlers
    const paletteOverlay = document.getElementById('palette-overlay');
    if (paletteOverlay) {
      paletteOverlay.addEventListener('click', (e) => {
        if (e.target === paletteOverlay) closePalette();
      });
    }

    const aboutOverlay = document.getElementById('about-modal-overlay');
    if (aboutOverlay) {
      aboutOverlay.addEventListener('click', (e) => {
        if (e.target === aboutOverlay) closeAboutModal();
      });
    }
  }

  // --- Export helpers to window for inline triggers ---
  window.PlayArMr = {
    toggleTheme,
    toggleCRT,
    openPalette,
    closePalette,
    openAboutModal,
    closeAboutModal,
    copyEmail,
    showToast
  };

  // --- DOM Ready Bootstrapping ---
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCRT();
    initClock();
    initEmailTargets();
    initKeyboard();
  });

})();
