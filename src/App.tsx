import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile, Landing, Chat } from "./Pages/index";
import AddChannel from "./components/AddChannel";

const App = () => {
    return (
        // <AddChannel />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/profile" element={<Profile />} />
        		<Route path="/chat" element={<Chat />} />
				{/* <Route path="/add-channel" element={<AddChannel />} /> */}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
