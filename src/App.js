import Page from "./views/Dashboard";
import Home from "./views/Home";
import InsProgetto from "./views/InsProgetto";
import PaginaCard from "./views/PaginaCard"
import Profile from "./views/Profile"
import Swap from "./views/Swap"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Page/>} />
          <Route path="insprogetto" element={<InsProgetto />} />
          <Route path="card" element={<PaginaCard />} />
          <Route path="insprogetto" element={<PaginaCard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="swap" element={<Swap />} />
      </Routes>
    </BrowserRouter>
  );

  return <Page />;
}

export default App;
