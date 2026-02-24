from fastapi import APIRouter, UploadFile, File, HTTPException
from services.inference import run_inference
from services.report_generator import generate_report

router = APIRouter()

@router.post("/predict")
async def predict(file: UploadFile = File(...)):
    if not file:
        raise HTTPException(status_code=400, detail="No file uploaded")

    contents = await file.read()

    # Run AI inference
    prediction = run_inference(contents)

    # Generate report
    report = generate_report(prediction)

    return {
        "success": True,
        "prediction": prediction,
        "report": report
    }