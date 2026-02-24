def get_disease_info(diagnosis: str):
    knowledge = {
        "Healthy": "No major dental issues detected.",
        "Moderate Risk": "Possible cavities or gum inflammation.",
        "High Risk": "Potential severe dental disease detected."
    }
    return knowledge.get(diagnosis, "No data available.")