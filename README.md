# PlayArMr — Portfolio

> Personal portfolio and blog for **Mrudul Kulkarni (@PlayArMr)**.  
> Inspired by the clean desktop UI of [maxleiter.com](https://maxleiter.com/) and powered by an AMOLED cyberpunk terminal aesthetic.

Live deployment: **[mrudulkulkarni.vercel.app](https://mrudulkulkarni.vercel.app/)**

---

## Highlights & Features

- **Max Leiter-Inspired Desktop OS**:
  - Sticky frosted-glass top menubar with host badge (`~ / PlayArMr`), live IST clock, theme switcher, and command palette trigger.
  - Desktop applications sidebar grid (`ABOUT.md`, `projects`, `writing`, `terminal`, `github`, `linkedin`, `x`, `email`).
  - Modular window widgets with macOS-style window controls and responsive layouts.
- **Cyberpunk Terminal & ASCII Glitch Banner**:
  - Signature `PlayArMr` ASCII art with real-time cyan/pink chromatic aberration glitch shaders.
  - Dual-line Starship prompt (`whoami --verbose`) highlighting system config, tech stack, and studies at MES Wadia College of Engineering, Pune.
  - Interactive CLI terminal input supporting commands: `help`, `whoami`, `about`, `projects`, `posts`, `theme`, `crt`, `date`, `contact`, `clear`, and `matrix`.
- **Universal Command Palette (`⌘K` / `Ctrl+K` or `/`)**:
  - Instant fuzzy search across pages, projects, social links, and system actions.
  - Keyboard navigability with arrow keys, `Enter`, and `Escape`.
- **Dynamic GitHub Heatmap**:
  - Real-time 52-week activity calendar fetched live from GitHub contributions API with interactive hover tooltips and contribution counts.
- **AMOLED Dark & Cyber Sage Light Mode**:
  - Persistent theme switching stored in `localStorage` with zero-flash initial loading.
  - Optional retro CRT scanline shader with toggle controls.
- **Zero Dependencies**:
  - 100% pure vanilla HTML5, CSS3, and JavaScript — lightning fast, fully static, and zero build step required.

---

## File Structure

```
portfolio/
├── index.html                           # Main desktop OS dashboard & terminal
├── page2.html                           # Blog archive index (~/blog)
├── a-solution-to-data-degradation.html  # Technical & speculative essay reader
├── shared.css                           # Design system, themes & desktop widgets
├── shared.js                            # Theme sync, CRT shaders, command palette, live clock
└── README.md                            # Documentation
```

---

## Local Development

Simply serve the folder with any static web server:

```bash
# Python
python -m http.server 3000

# or Node.js npx serve
npx serve .
```

Or open `index.html` directly in any modern browser.
