import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./page/about";
import Profile from "./page/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
