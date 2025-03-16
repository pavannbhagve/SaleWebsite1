import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddRecord() {
    const [category, setCategory] = useState("");
    const [details, setDetails] = useState("");
    const navigate = useNavigate();

    const addRecord = () => {
        axios.post("http://localhost:5000/api/sales", { category, details })
            .then(() => navigate("/"))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>Add Sales Record</h1>
            <label>Category:</label>
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select</option>
                <option value="Quotation">Quotation</option>
                <option value="New Lead">New Lead</option>
                <option value="Payment">Payment</option>
                <option value="Spare Parts">Spare Parts</option>
                <option value="AMC">AMC</option>
            </select>

            <label>Details:</label>
            <input type="text" onChange={(e) => setDetails(e.target.value)} />

            <button onClick={addRecord}>Add Record</button>
        </div>
    );
}

export default AddRecord;
