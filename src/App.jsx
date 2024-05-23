import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashboardLayout from './pages/dashboard/Layout'
import Dashboard from "./pages/dashboard/Home";
import Restake from "./pages/dashboard/Restake";
import Defi from "./pages/dashboard/Defi";
import { useState } from "react";

function App() {
  const [activeNav, setActiveNav] = useState('')

  function handleNav (data) {
    setActiveNav(data);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="dashboard" element={<DashboardLayout  activeNav={activeNav} />}>
            <Route index element={<Dashboard setActiveNav={handleNav}/>} />
            <Route path="restake" element={<Restake setActiveNav={handleNav}/>} />
            <Route path="defi" element={<Defi setActiveNav={handleNav}/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
