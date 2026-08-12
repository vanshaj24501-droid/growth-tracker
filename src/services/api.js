const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzOaZWy3VkMkxGhzIuJiFckCJCZAtlxFVWACotW_V9Dcj1abGide1LKRkDHQ5PzExhmgg/exec";

export async function fetchSystemData() {
  try {
    const res = await fetch(APPS_SCRIPT_URL);
    if (!res.ok) throw new Error("Failed to fetch system data.");
    return await res.json();
  } catch (err) {
    console.error("GET Error:", err);
    return null;
  }
}

export async function logWorkout(payload) {
  try {
    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload)
    });
    return await res.json();
  } catch (err) {
    console.error("POST Error:", err);
    return { status: "error", message: err.toString() };
  }
}