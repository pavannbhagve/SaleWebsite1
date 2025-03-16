const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";  

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/api/data`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error("API fetch error:", error);
    return null;
  }
};
