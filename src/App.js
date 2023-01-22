import LoginPage from "./components/pages/login/LoginPage";
import {Routes, Route} from "react-router-dom";
import OrderPage from "./components/pages/order/OrderPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import styled from "styled-components";



function App() {
  // state

  // comportements

  // affichage 

  return (
    <AppStyled>
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="/*" element={<ErrorPage/>} />
    </Routes>
    </AppStyled>
  )

}
export default App;

const AppStyled = styled.div`
  background-image: url("/F03 burger-background.jpg");
  background-size: cover;
  height: 100vh;
`;