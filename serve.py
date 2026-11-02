#!/usr/bin/env python3
"""Start Next.js dev server."""
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
subprocess.call([sys.executable, "-m", "npm", "run", "dev"], cwd=ROOT)
