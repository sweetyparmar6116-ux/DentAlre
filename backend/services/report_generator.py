def generate_report(prediction: dict):
    diagnosis = prediction["diagnosis"]
    risk = prediction["risk_score"]

    recommendations = {
        "Healthy": "Maintain good oral hygiene and regular checkups.",
        "Moderate Risk": "Schedule a dental consultation within 2-4 weeks.",
        "High Risk": "Immediate dental consultation is recommended."
    }

    return {
        "summary": f"AI Diagnosis: {diagnosis}",
        "risk_score": risk,
        "recommendation": recommendations.get(diagnosis, "Consult a dentist."),
        "traffic_light": prediction.get("traffic_light")
    }