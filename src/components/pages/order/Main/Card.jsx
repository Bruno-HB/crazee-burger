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
  width: 240px;
  height: 330px;
  border-radius: ${theme.borderRadius.extraRound};
  background-color: red;

  .imgbox {
    width: 200px;
    max-height: 145px;
    text-align: center;
    border: 1px solid fuchsia;
    img {
      max-width: 100%;
      max-height: 100%;
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
