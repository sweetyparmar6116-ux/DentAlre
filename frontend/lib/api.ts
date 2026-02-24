const API_URL = "http://127.0.0.1:8000/api";

export async function predictScan(file: File) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/predict`, {
    method: "POST",
    body: formData,
  });

  return res.json();
}