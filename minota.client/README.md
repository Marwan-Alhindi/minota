# 📦 Minota Client

This is the **front‑end** application for **Minota**, built with React, Vite, React Three Fiber, Drei, and Tailwind CSS. It powers the immersive 3D village, note overlays, and all interactive UI.

---

## 🚀 Quick Start

### Prerequisites

* Node.js v14 or newer
* npm (v6+) or Yarn

### Installation

```bash
# from project root
git clone <repo-url> minota
cd minota/client
npm install
```

### Available Scripts

| Command           | Description                             |
| ----------------- | --------------------------------------- |
| `npm run dev`     | Start dev server with Hot Module Reload |
| `npm run build`   | Build optimized production files        |
| `npm run preview` | Preview production build locally        |

Run the dev server and visit `http://localhost:5173` (or displayed port) to see your 3D village.

---

## 📁 Project Structure

```plaintext
minota/
├── documents/             # Design specs, diagrams, .excalidraw files
├── minota.client/         # Front-end application (React + R3F + Tailwind)
│   ├── node_modules/      # Installed packages
│   ├── public/            # Static assets & index.html
│   ├── src/
│   │   ├── assets/        # Images, fonts, 3D models
│   │   ├── components/    # Reusable UI components (buttons, panels)
│   │   ├── scenes/        # R3F scene modules (Village, Houses, etc.)
│   │   ├── styles/        # Tailwind entrypoint & global CSS (`index.css`)
│   │   └── main.jsx       # Entry point and render logic
│   ├── .gitignore         # Git ignore rules
│   ├── eslint.config.js   # ESLint configuration
│   ├── index.html         # HTML template
│   ├── package.json       # Dependencies & scripts
│   ├── package-lock.json  # Exact package versions
│   ├── tailwind.config.js # Tailwind CSS configuration
│   ├── postcss.config.js  # PostCSS plugins
│   └── vite.config.js     # Vite configuration
├── minota.server/         # Backend API and services
│   ├── src/               # Server source code (FastAPI or Node.js)
│   ├── requirements.txt or package.json  # Server dependencies
│   └── ...
└── README.md              # Root project README
```

---

## 🛠️ Technologies & Configuration

* **React + Vite**: Fast bundler, HMR support.
* **React Three Fiber (`@react-three/fiber`)**: Core React renderer for Three.js.
* **Drei (`@react-three/drei`)**: Helpers for lights, controls, loaders.
* **Tailwind CSS**: Utility-first styling.

Tailwind is initialized in `src/styles/index.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

and imported once in `src/main.jsx`.

---

## 🛰️ Adding a New 3D Scene

1. Create a file under `src/scenes/`, e.g. `MyScene.jsx`.
2. Export a React component wrapping your `<Canvas>` or meshes.
3. Import and render it in `main.jsx` or via routing.

```jsx
// src/scenes/MyScene.jsx
import { Canvas } from '@react-three/fiber';
export default function MyScene() {
  return (
    <Canvas>
      {/* lights, meshes, controls here */}
    </Canvas>
  );
}
```

---

## 🎨 Styling & Theming

* All styling is via **Tailwind CSS**.
* Customize theme colors or extend in `tailwind.config.js`.
* Use utility classes in JSX (`className="p-4 bg-gray-100"`).

---

## 🤝 Contributing

* Please open issues or PRs for bugs and features under the **Application Development** milestone.
* Follow existing component patterns and add relevant unit tests if needed.

---

## ⚖️ License

This client code is licensed under the [MIT License](LICENSE).
