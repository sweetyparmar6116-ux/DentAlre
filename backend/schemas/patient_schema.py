from pydantic import BaseModel

class PatientCreate(BaseModel):
    name: str
    age: int

class PatientResponse(BaseModel):
    id: int
    name: str
    age: int
    diagnosis: str
    risk_score: float