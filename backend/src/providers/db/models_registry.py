"""
Auto-discover all model modules so their table definitions attach to Base.metadata.
Import this module once (in main.py, via the db provider) before calling metadata.create_all.

We load the model modules directly from file to avoid executing package __init__.py
chains that can trigger circular imports (e.g., __init__ that wildcard-import services).
"""

import importlib.util
from pathlib import Path
import sys

# Locate the src root and the features directory
SRC_ROOT = Path(__file__).resolve().parents[2]
FEATURES_DIR = SRC_ROOT / "features"

# Import every *_model.py under features/*/repositories/ without walking package __init__
# but register the module under its canonical package path so it is not reloaded later.
for model_file in FEATURES_DIR.glob("*/repositories/*_model.py"):
    module_path = ".".join(model_file.relative_to(SRC_ROOT).with_suffix("").parts)
    full_name = f"src.{module_path}"

    # Skip if already loaded
    if full_name in sys.modules:
        continue

    spec = importlib.util.spec_from_file_location(full_name, model_file)
    if spec and spec.loader:
        module = importlib.util.module_from_spec(spec)
        sys.modules[full_name] = module
        spec.loader.exec_module(module)
