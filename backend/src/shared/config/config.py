import os
from pathlib import Path

# Database
# DB_ENGINE selects which database backend to use: "postgres" (default, needs
# the docker-compose service running) or "sqlite" (zero-setup local file, no docker needed).
# DATABASE_URL, if set, always wins over DB_ENGINE.
DB_ENGINE = os.getenv("DB_ENGINE", "postgres").lower()

_SQLITE_PATH = Path(__file__).resolve().parents[3] / "data" / "local.db"
_DEFAULT_URLS = {
    "postgres": "postgresql+psycopg://langchain:langchain@localhost:5432/langchain_lab",
    "sqlite": f"sqlite:///{_SQLITE_PATH}",
}

if DB_ENGINE not in _DEFAULT_URLS:
    raise ValueError(f"Invalid DB_ENGINE '{DB_ENGINE}'. Expected one of {list(_DEFAULT_URLS)}.")

DATABASE_URL = os.getenv("DATABASE_URL", _DEFAULT_URLS[DB_ENGINE])

# Vector store
QDRANT_URL = os.getenv("QDRANT_URL", "http://localhost:6333")

# AI ENVs
ANTHROPIC_API_KEY   = os.getenv("ANTHROPIC_API_KEY", "")


# Auth & security
JWT_SECRET        = os.getenv("JWT_SECRET", "super_secret_key")
FRONTEND_BASE_URL = os.getenv("FRONTEND_BASE_URL", "http://localhost:3001")


# OAuth providers
GOOGLE_CLIENT_ID     = os.getenv("GOOGLE_CLIENT_ID")
GOOGLE_CLIENT_SECRET = os.getenv("GOOGLE_CLIENT_SECRET")
