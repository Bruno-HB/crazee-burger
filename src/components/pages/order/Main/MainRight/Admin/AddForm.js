import { useState } from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../../theme";

export default function AddForm() {
  //state
  const [productName, setProductName] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  //comportements

  //affichage
  return (
    <AddFormStyled>
      <div className="image">Aucune image</div>
      <form>
        <TextInput
          className={"input"}
          value={productName}
          Icon={<FaHamburger className="icon" />}
          placeholder={"Nom du produit (ex: Super Burger)"}
        />
        <TextInput
          className={"input"}
          value={productUrl}
          Icon={<BsFillCameraFill className="icon" />}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
        />
        <TextInput
          className={"input"}
          value={productPrice}
          placeholder={"Prix"}
          Icon={<MdOutlineEuro className="icon" />}
        />
      </form>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .image {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 48.0625px 55.3906px 48.0781px 53.75px;

    position: absolute;
    width: 215.14px;
    height: 120.14px;
    //left: calc(50% - 215.14px / 2 - 332.73px);
    left: 71px;
    top: 31px;

    border: 1px solid #e4e5e9;
    border-radius: 5px;
    white-space: nowrap;
    width: 106px;
    height: 24px;

    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    align-items: center;

    color: #93a2b1;
  }
  form {
    box-sizing: border-box;
    position: absolute;
    left: 306.14px;
    top: 31px;
    .input {
      .icon {
        margin-left: 24px;
        margin-right: 15px;
      }
      width: 645.45px;
      height: 35px;
      background-color: ${theme.colors.greyLight};
      margin-bottom: 8px;
      input {
        margin-top: 8px;
        margin-bottom: 8px;

        &::placeholder {
          background: ${theme.colors.greyLight};
          color: ${theme.colors.greyMedium};
        }
      }
    }
  }
`;
