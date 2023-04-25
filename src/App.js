import LoginPage from "./components/pages/login/LoginPage";
import { Routes, Route } from "react-router-dom";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import OrderContext from "./context/OrderContext";
import { useState } from "react";

function App() {
  // state
  const [isModeAdmin, setisModeAdmin] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [currentTabSelected, setCurrentTabSelected] = useState("add");

  // comportements
  const orderContextValue = {
    isModeAdmin,
    setisModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  };
  // affichage

  return (
    <OrderContext.Provider value={orderContextValue}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </OrderContext.Provider>
  );
}
export default App;
