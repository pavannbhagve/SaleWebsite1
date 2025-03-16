import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SalesDashboard from "./pages/SalesDashboard";
import AddRecord from "./pages/AddRecord";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SalesDashboard />} />
                <Route path="/add" element={<AddRecord />} />
            </Routes>
        </Router>
    );
}

export default App;
