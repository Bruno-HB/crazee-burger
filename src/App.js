import LoginPage from "./components/pages/login/LoginPage";
import {Routes, Route} from "react-router-dom";
import OrderPage from "./components/pages/order/OrderPage";




function App() {
  // state

  // comportements

  // affichage 

  return (
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/order/:username" element={<OrderPage />} />
    </Routes>
  )

}
export default App;
