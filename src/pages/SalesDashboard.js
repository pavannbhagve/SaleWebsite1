import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function SalesDashboard() {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/sales")
            .then(response => setSales(response.data))
            .catch(error => console.log(error));
    }, []);

    const updateStatus = (id, status) => {
        axios.put(`http://localhost:5000/api/sales/${id}`, { status })
            .then(() => setSales(sales.map(sale => sale._id === id ? { ...sale, status } : sale)))
            .catch(error => console.log(error));
    };

    return (
        <div>
            <h1>Sales Tracker Dashboard</h1>
            <Link to="/add"><button>Add New Record</button></Link>
            <table border="1">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Details</th>
                        <th>Status</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map(sale => (
                        <tr key={sale._id}>
                            <td>{sale.category}</td>
                            <td>{sale.details}</td>
                            <td>{sale.status}</td>
                            <td>
                                <button onClick={() => updateStatus(sale._id, "In Progress")}>In Progress</button>
                                <button onClick={() => updateStatus(sale._id, "Completed")}>Completed</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SalesDashboard;
