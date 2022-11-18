import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import BusinessCardHome from "../src/pages/businessCard/BusinessCardHome";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/businessCard" element={<BusinessCardHome />} />
                <Route path="" element="" />
            </Routes>
        </>
    );
}

export default App;
