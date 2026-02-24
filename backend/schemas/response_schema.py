from pydantic import BaseModel
from typing import Dict, Any

class PredictionResponse(BaseModel):
    success: bool
    prediction: Dict[str, Any]
    report: Dict[str, Any]