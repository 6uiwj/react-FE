import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StoreListPage from "./pages/StoreListPage";

function App() {
 return (
  <BrowserRouter>
    <Routes>

      <Route path = "/login" element={<LoginPage />} />
      <Route path = "/stores" element={<StoreListPage />} />
  
    </Routes>
  </BrowserRouter>
);
 }
  

export default App
