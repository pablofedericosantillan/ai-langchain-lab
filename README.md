# Backend

FastAPI backend, managed with `uv`.

## 1. Install dependencies

```bash
cd backend
uv sync
```

## 2. Choose a database

Controlled by the `DB_ENGINE` env var:

| `DB_ENGINE` | Use case                         | Requires Docker? |
|-------------|-----------------------------------|-------------------|
| `postgres`  | default, matches docker-compose   | yes               |
| `sqlite`    | quick local run, no setup needed  | no                |

You can also set `DATABASE_URL` directly to override the default connection string for
either engine (it always wins over `DB_ENGINE`).

### Option A: Postgres + Qdrant via Docker (recommended)

```bash
cd ../docker
bash setup.sh          # starts postgres + qdrant and waits until both are ready
```

This starts:
- **Postgres** on `localhost:5432` (db `langchain_lab`, user/pass `langchain`/`langchain`)
- **Qdrant** on `localhost:6333` (REST) / `localhost:6334` (gRPC), web UI at `http://localhost:6333/dashboard`

### Option B: SQLite (no Docker)

```bash
export DB_ENGINE=sqlite
```

Creates a local file at `backend/data/local.db` automatically on first run.

## 3. Run the server

```bash
cd backend
uv run dev
```

This is the `npm run dev` equivalent — a `[project.scripts]` entry point (see
`pyproject.toml` / `src/dev.py`) that runs uvicorn with hot-reload on `localhost:8000`.

(`uv run` executes inside the project's `.venv` — no need to activate it manually.)

Other ways to run the same thing:

```bash
uv run fastapi dev src/main.py     # FastAPI CLI
uv run uvicorn src.main:app --reload   # uvicorn directly
```


## 4. Try it
```bash
# create a chat
curl -X POST localhost:8000/api/chat/ -H "Content-Type: application/json" -d '{"title":"demo"}'

# add a message to it
curl -X POST localhost:8000/api/message/ -H "Content-Type: application/json" \
  -d '{"chat_id":1,"role":"user","content":"hola","model":"claude-sonnet-5","input_tokens":5,"output_tokens":0}'

# list messages in a chat
curl localhost:8000/api/chat/1/messages
```

## Project layout

```
backend/
  src/
    main.py                 # FastAPI app + lifespan (creates tables on startup)
    api/v1/                 # routers (chat, message)
    features/
      chat/                 # model, repository, service, schemas
      message/               # model, repository, service, schemas
    providers/db/           # SQLAlchemy engine/session + model auto-registration
    shared/config/          # env-driven settings (DB_ENGINE, DATABASE_URL, QDRANT_URL, ...)
```
