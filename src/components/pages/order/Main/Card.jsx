import styled from "styled-components";
import { theme } from "../../../../theme";
import { formatPrice } from "../../../../utils/maths";
import Button from "../../../reusable-ui/Button";

export default function Card({ image, title, id, price }) {
  return (
    <CardStyled key={id}>
      <div className="imgbox">
        <img src={image} alt={title} />
      </div>
      <div className="description">
        <div className="title">{title.toUpperCase()}</div>
        <div className="price-and-button">
          <span className="price">{formatPrice(price)}</span>
          <Button label="Ajouter" />
        </div>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
  width: 200px;
  height: 300px;
  border-radius: ${theme.borderRadius.extraRound};
  background-color: red;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;

  .imgbox {
    border: 1px solid fuchsia;
    width: 100%;
    height: auto;
    margin-top: 30px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .description {
    border: 1px solid fuchsia;
    .title {
      font-family: "Amatic SC", cursive;
      font-size: ${theme.fonts.size.P4};
      font-weight: ${theme.fonts.weights.bold};
    }
    .price-and-button {
      display: flex;
      /* justify-content: flex-end; */
      align-items: center;
      button {
        width: 95px;
        height: 38px;
      }
      .price {
        width: 95px;
        color: ${theme.colors.primary};
      }
    }
  }
`;
