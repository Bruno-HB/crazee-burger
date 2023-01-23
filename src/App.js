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
    <div className="background">
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="/*" element={<ErrorPage/>} />
    </Routes>
    </div>
    </AppStyled>
  )

}
export default App;

const AppStyled = styled.div`
  background: url("/F03 burger-background.jpg");
  background-size: cover;
  height: 100vh;
  .background {
    background-color: rgba(0,0,0,0.7);
    height: 100%;
    width: 100%;
  }
`;