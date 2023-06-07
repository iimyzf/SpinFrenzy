import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile, Landing } from "./Pages/index";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
