import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";

function App() {
    return (
        <div className="">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="" element="" />
                <Route path="" element="" />
            </Routes>
        </div>
    );
}

export default App;
