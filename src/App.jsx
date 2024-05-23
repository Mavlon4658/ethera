import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashboardLayout from './pages/dashboard/Layout'
import Dashboard from "./pages/dashboard/Home";
import Restake from "./pages/dashboard/Restake";
import Defi from "./pages/dashboard/Defi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="restake" element={<Restake />} />
            <Route path="defi" element={<Defi />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
