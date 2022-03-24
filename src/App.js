import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./page/about";
import Profile from "./page/profile";
import UserStore from "./store/user";

function App() {
  return (
    <UserStore>
      <BrowserRouter>
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </UserStore>
  );
}

export default App;
