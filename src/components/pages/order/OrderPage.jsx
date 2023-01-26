import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../../reusable-ui/Navbar';

export default function OrderPage() {
    //state
    const {username} = useParams();
    // const navigate = useNavigate();
    //comportements
    // const handleClick = () => { 
    //     navigate('/')
    //  }

    //affichage
  return (
    <OrderPageStyled>
        <Navbar username={username}/>
        {/* <h1>Bonjour {username}</h1>
        <button onClick={handleClick}>Déconnexion</button> */}
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: orange;
  height: 100vh;
`;
