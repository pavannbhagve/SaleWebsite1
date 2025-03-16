import axios from "axios";

const API_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

export const addSale = async (saleData) => {
    try {
        console.log("Sending Data:", saleData);  // ✅ Debugging log
        const response = await axios.post(`${API_URL}/api/sales`, saleData, {
            headers: { "Content-Type": "application/json" },
        });
        return response.data;
    } catch (error) {
        console.error("❌ API Error:", error);
        return null;
    }
};
