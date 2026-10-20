# NoteMind Practice

A full-stack learning project built to practice backend development with **FastAPI** and frontend development with **Next.js**. The project uses **uv** for Python dependency management and virtual environment setup.

## Tech Stack

### Backend
- **Python** — Backend programming language
- **FastAPI** — API development framework
- **uv** — Python package and project management
- **Virtual Environment** — Isolated Python dependencies

### Frontend
- **Next.js** — React framework
- **React** — UI development
- **TypeScript** — Type-safe JavaScript
- **Tailwind CSS** — Styling
- **shadcn/ui** — Reusable UI components

## Project Structure

```text
NoteMind Practice/
├── backend/
│   ├── src/
│   ├── main.py
│   ├── pyproject.toml
│   ├── uv.lock
│   └── .python-version
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── pnpm-lock.yaml
│   └── next.config.ts
│
└── README.md
```

## Prerequisites

Install the following tools before getting started:

- [Python](https://www.python.org/downloads/)
- [uv](https://docs.astral.sh/uv/getting-started/installation/)
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/installation)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd "NoteMind Practice"
```

Replace the repository URL and directory name with your actual values.

### 2. Set up the backend

Navigate to the backend directory:

```bash
cd backend
```

Create a virtual environment and install the project's dependencies using uv:

```bash
uv sync
```

Activate the virtual environment in PowerShell:

```powershell
.venv\Scripts\Activate.ps1
```

Start the FastAPI development server:

```bash
uv run fastapi dev main.py
```

The backend will typically be available at:

- **API:** http://127.0.0.1:8000
- **Interactive API documentation:** http://127.0.0.1:8000/docs
- **Alternative API documentation:** http://127.0.0.1:8000/redoc

Keep the backend terminal running.

