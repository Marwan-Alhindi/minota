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
npm install      # or yarn install
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
│   │   └── main.jsx       # Scene renderer and entry logic
│   ├── .gitignore         # Git ignore rules               # Server source code (FastAPI or Node.js)
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
3. Import and render it in `App.jsx` or via routing.

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

To contribute, please follow these steps:

1. **Open an issue** in GitHub under the appropriate milestone:

   * Application Development
   * Model Development
   * Infrastructure
2. **Create a feature branch** using the issue number and milestone abbreviation:

   * Application Development: `ad-<issue-number>` (e.g. `ad-10`)
   * Model Development: `md-<issue-number>` (e.g. `md-15`)
   * Infrastructure: `in-<issue-number>` (e.g. `in-7`)
3. **Commit your changes** to this branch and push to the repository.
4. **Open a Pull Request** targeting the `main` branch, and reference the issue (e.g., “Closes #10”).

Please follow existing component and scene patterns, and add tests where applicable. Thank you for contributing to Minota!

---

## ⚖️ License

This client code is licensed under the [MIT License](LICENSE).
