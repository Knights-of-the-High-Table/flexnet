import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Friends from "./pages/Friends";
import Groups from "./pages/Groups";
import NoPage from "./pages/NoPage";
import { useTheme } from "@emotion/react";

function App() {  
  const theme = useTheme();
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home theme={theme} />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<Login />} />
        <Route path="friends" element={<Friends theme={theme} />} />
        <Route path="groups" element={<Groups theme={theme} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
