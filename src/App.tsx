import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile, Landing, Chat } from "./Pages/index";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<Landing />} /> */}
                {/* <Route path="/profile" element={<Profile />} /> */}
				<Route path="/chat" element={<Chat />} /> 
            </Routes>
        </BrowserRouter>
    );
};

export default App;
