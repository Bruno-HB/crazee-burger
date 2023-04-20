import LoginPage from "./components/pages/login/LoginPage";
import { Routes, Route } from "react-router-dom";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import AdminContext from "./context/AdminContext";
import { useContext, useState } from "react";

function App() {
  // state
  const [isModeAdmin, setisModeAdmin] = useState(false);

  const info = useContext(AdminContext);
  // comportements
  const isModeAdminContext = {
    isModeAdmin,
    setisModeAdmin,
  };
  // affichage

  return (
    <AdminContext.Provider value={isModeAdminContext}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </AdminContext.Provider>
  );
}
export default App;
