import numpy as np
from utils.preprocess import preprocess_image

def run_inference(image_bytes: bytes):
    """
    Simulated AI inference.
    Replace with your PyTorch model later.
    """
    image = preprocess_image(image_bytes)

    # Dummy AI prediction (0 to 1 risk score)
    risk_score = float(np.random.uniform(0, 1))

    if risk_score < 0.3:
        diagnosis = "Healthy"
        color = "green"
    elif risk_score < 0.7:
        diagnosis = "Moderate Risk"
        color = "yellow"
    else:
        diagnosis = "High Risk"
        color = "red"

    return {
        "risk_score": round(risk_score, 2),
        "diagnosis": diagnosis,
        "traffic_light": color
    }