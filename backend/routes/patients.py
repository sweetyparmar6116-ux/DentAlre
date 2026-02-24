from fastapi import APIRouter

router = APIRouter()

# Temporary in-memory DB
patients_db = []

@router.get("/patients")
def get_patients():
    return {"patients": patients_db}

@router.post("/patients")
def add_patient(patient: dict):
    patients_db.append(patient)
    return {
        "message": "Patient added successfully",
        "patient": patient
    }