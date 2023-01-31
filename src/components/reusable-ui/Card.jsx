import styled from "styled-components";
import Button from "./Button";

export default function Card({ image, title, id, price }) {
  return (
    <CardStyled key={id}>
      <img src={image} alt={title} />
      <div>{title.toUpperCase()}</div>
      <div>
        <span className="pricebox">{price}</span>
        <Button label="Ajouter" />
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  background-color: red;
`;
