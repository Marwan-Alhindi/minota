# Minota

Minota is a complete 3D second-brain knowledge ecosystem, where your ideas, tasks, habits, friends and AI companions all live together in an immersive digital village.

We believe life’s goal is to optimize inputs to maximize impact. Inputs vary by person, but everyone needs a unified system that blends task management with knowledge organization—and does so in a way that leverages today’s engagement mechanics for our benefit, not distraction.

# Why: The Four Pillars of Minota

1. Addictive: Modern digital products—from mobile games with time-gated mechanics to content platforms with autoplay—use endless engagement hooks that drive mindless repeat use rather than purposeful action (for instance, social media’s infinite feeds and random “likes”). Minota repurposes these same hooks by tying notifications, streaks, and rewards to real tasks and learning goals, so every check-in directly advances your progress. Each check-in happens within your personalized world, helping your own character grow—creating a deep sense of personal connection and ownership.

2. Connection: Many apps offer shallow gestures—likes, follows, or basic chat—that create a veneer of community without fostering real collaboration or support (e.g., surface-level social media interactions). Minota builds genuine connection through shared village visits, co-op quests, and contextual feedback on habits and notes, turning social features into mutual motivation and collective growth.

3. Uncertainty: Social platforms exploit our FOMO with unpredictable notifications—new comments, trending stories, “someone liked your post”—keeping us hooked on the next surprise rather than substance. Minota harnesses that same suspense by turning new comments, trending stories, and likes into meaningful feedback—on your notes, habit streaks, world, and character—making every surprise feel personal and purposeful.

4. Growth: Generic progress bars and hollow XP grinds in many apps and games give the illusion of advancement without reflecting true skill gains or knowledge mastery in real life. Minota awards XP, levels, and unlocks only for genuine habit consistency, note mastery, and task completion—and visually expands your village to mirror your real-world progress.

# How: The features of Minota

### Write & Retrieve

* Unified Access: Write, view, and retrieve notes or tasks from anywhere via an always-on UI overlay.
* AI-Powered RAG: Generate new notes, fetch relevant content using per-library or scoped LLMs, and get tested on your own notes by the AI—which evolves and deepens its questioning as your expertise grows.
* Quick Hierarchies: Instantly traverse, create, and nest new libraries and sub-notes through the hierarchy explorer.

### Structure & Templates

* Consistent Schemas: Start each library with built-in templates (notes, habits, quests) that enforce uniform organization.
* Autocomplete Hints: AI suggests titles, tags, and content structures as you begin a new note or task.
* Auto-Apply Templates: New notes automatically inherit the right template for your subject or habit type.

### Explore & Navigate

* 3D Village Walkthrough: Stroll through houses, rooms, and shelves to access your content in an immersive map.
* Quick-Jump Controls: Teleport to any note, header, task, or habit via hotkeys or UI shortcuts.
* Graph & Map View: Visualize your entire knowledge base or progress map as a node graph or village layout.

### Restructure

* Seamless Refactor: Rename or move libraries, sub-notes, and tasks without breaking backlinks or AI contexts.
* Drag-and-Drop: Reorganize entire branches of your hierarchy in one action, preserving streaks and XP history.
* Section-Level Updates: Bulk-rename or relocate individual sections within notes using intuitive controls or regex tools.

### Villages (Vaults)

* Multiple Worlds: Spin up separate “vaults” for work, study, or personal growth—each with its own village.
* Cross-Village Libraries: Share or clone libraries between vaults to mix knowledge domains.
* Publish & Collaborate: Export vault snapshots or invite others into your village with granular public/private settings.

### Share & Collaborate

* Social Reactions: Like and comment on friends’ habit streaks, notes, and village decorations.
* Public Villages: Explore and join other users’ worlds—and tackle co-op quests together.
* Leaderboards & Chat: Compete on global/friend leaderboards, and chat in-app to strategize or celebrate progress.

---

## 🚀 Quick Start

### Prerequisites

* Node.js v14 or newer
* npm (v6+) or Yarn
* Python 3.9+ (for backend server)

### Installation

```bash
# from project root
git clone <repo-url> minota
cd minota/client
npm install      # or yarn install
```

---

## 📁 Project Structure

```plaintext
minota/
├── documents/             # Design specs, diagrams, .excalidraw files
├── minota.client/         # Front-end application (React + R3F + Tailwind)
│   ├── public/            # Static assets & index.html
│   ├── src/
│   │   ├── assets/        # Images, fonts, 3D models
│   │   ├── components/    # Reusable UI components
│   │   ├── scenes/        # R3F scenes (Village, Rooms, etc.)
│   │   ├── styles/        # Tailwind styles
│   │   └── main.jsx       # App entry
│   └── ...
├── minota.server/         # Backend API (FastAPI)
│   ├── main.py            # Entry point
│   ├── app/               # API routes and logic
│   ├── models/            # Pydantic schemas / DB models
│   └── requirements.txt   # Server dependencies
└── README.md              # Project overview (this file)
```

---

## 🛠️ Technologies & Configuration

* **React + Vite** for fast frontend dev.
* **React Three Fiber** and **Drei** for 3D rendering.
* **Tailwind CSS** for utility-first styling.
* **FastAPI** (Python) for the backend server and AI services.
* **Supabase** or **PostgreSQL** for backend data storage.

Tailwind is initialized in `src/styles/index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

and imported once in `src/main.jsx`.

---

## 📜 Available Scripts

In `minota.client`:

```bash
npm run dev       # Start dev server
npm run build     # Build for production
npm run preview   # Preview production build locally
```

---

## 🛰️ Adding a New 3D Scene

1. Create a file in `src/scenes/`, e.g. `MyScene.jsx`.
2. Export a functional component that returns a `<Canvas>`.
3. Import it where needed (e.g., `App.jsx`).

```jsx
import { Canvas } from '@react-three/fiber';
export default function MyScene() {
  return (
    <Canvas>
      {/* Add lighting, meshes, controls here */}
    </Canvas>
  );
}
```

---

## 🎨 Styling & Theming

* Styling is fully handled via Tailwind CSS.
* Edit `tailwind.config.js` to customize your design system.
* Use classes like `bg-sky-500 p-4 rounded-lg` directly in JSX.

---

## 🖥️ Running the Server

### Backend Setup (FastAPI)

1. Go to the server folder:

   ```bash
   cd minota/minota.server
   ```

2. Create a virtual environment and activate it:

   ```bash
   python -m venv env
   source env/bin/activate  # or env\Scripts\activate on Windows
   ```

3. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Start the API server:

   ```bash
   uvicorn main:app --reload
   ```

   The API should now be live at: `http://localhost:8000`

---

## Contributing

To contribute to either the **client** or **server**, please follow these steps:

1. **New Feature or Bug:** If no issue exists, open an issue under one of the milestones:

   * **Application Development** (frontend): `ad-<issue-number>`
   * **Model Development** (AI): `md-<issue-number>`
   * **Infrastructure** (backend): `in-<issue-number>`
   * **Marketing & Appearance:** `ma-<issue-number>`
2. **Existing Issue:** If an issue is already open, skip to branch creation.
3. **Create a feature branch** named `<milestone-abbreviation>-<issue-number>` (e.g., `ad-10`, `md-5`, `in-3`, `ma-2`).
4. **Commit your changes** and push the branch.
5. **Open a Pull Request** against `main`, referencing the issue (e.g., “Closes #<issue-number>”).

Please follow existing patterns, add tests where applicable, and include any relevant diagrams or specs from `/documents/`. Thank you for helping build Minota!

---

## ⚖️ License

This project is licensed under the [MIT License](LICENSE).
