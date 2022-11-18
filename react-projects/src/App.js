import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import BusinessCardHome from "../src/pages/businessCard/BusinessCardHome";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
    return (
        <>
            <Navbar />
            <SideBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/businessCard" element={<BusinessCardHome />} />
                <Route path="" element="" />
            </Routes>
        </>
    );
}

export default App;
