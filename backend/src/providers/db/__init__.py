from .db import Base, engine, SessionLocal, get_db
# Auto-registers all models
import src.providers.db.models_registry  # noqa: F401,E402