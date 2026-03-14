import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import StoreListPage from "./pages/StoreListPage";
import StoreMenuPage from "./pages/StoreMenuPage";

function App() {
 return (
  <BrowserRouter>
    <Routes>

      <Route path = "/login" element={<LoginPage />} />
      <Route path = "/stores" element={<StoreListPage />} />
      <Route path="/menus/:storeId" element={<StoreMenuPage />} />

    </Routes>
  </BrowserRouter>
);
 }
  

export default App
