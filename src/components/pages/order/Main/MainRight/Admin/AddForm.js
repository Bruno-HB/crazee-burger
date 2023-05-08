import { useState, useContext } from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";
import { FaHamburger } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../../theme";
import PrimaryButton from "../../../../../reusable-ui/PrimaryButton";
import MenuContext from "../../../../../../context/MenuContext";
import { parseJson } from "../../../../../../utils/functions";

export default function AddForm() {
  //state
  const [productName, setProductName] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [success, setSuccess] = useState(false);
  const { menu, setMenu } = useContext(MenuContext);
  //comportements
  const handleSubmit = (event) => {
    setSuccess(true);
    event.preventDefault();
    turnOffSuccess();
    const copyMenu = parseJson(menu);
    const newProduct = {
      id: Date.now(),
      imageSource: "/images/coming-soon.png",
      title: productName,
      price: productPrice,
      quantity: 0,
      isAvailable: true,
      isAdvertised: false,
    };
    copyMenu.push(newProduct);
    setMenu(copyMenu);
    setProductName("");
    setProductUrl("");
    setProductPrice("");
  };

  const turnOffSuccess = () => {
    setTimeout(() => setSuccess(false), 2000);
  };

  const handleChangeName = (event) => {
    setProductName(event.target.value);
  };
  const handleChangeUrl = (event) => {
    setProductUrl(event.target.value);
  };
  const handleChangePrice = (event) => {
    setProductPrice(event.target.value);
  };
  //affichage
  return (
    <AddFormStyled>
      <div className="image">Aucune image</div>
      <form action="submit" onSubmit={handleSubmit}>
        <TextInput
          className={"input"}
          type="text"
          onChange={handleChangeName}
          value={productName}
          Icon={<FaHamburger className="icon" />}
          placeholder={"Nom du produit (ex: Super Burger)"}
        />
        <TextInput
          className={"input"}
          type="text"
          onChange={handleChangeUrl}
          value={productUrl}
          Icon={<BsFillCameraFill className="icon" />}
          placeholder={
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)"
          }
        />
        <TextInput
          className={"input"}
          type="text"
          onChange={handleChangePrice}
          value={productPrice}
          placeholder={"Prix"}
          Icon={<MdOutlineEuro className="icon" />}
        />
        <div>
          <PrimaryButton
            label={"Ajouter un nouveau produit au menu"}
            className={"button"}
          />
          {success && (
            <span className="success">
              <FiCheck className="icon-success" /> Ajouté avec succès !
            </span>
          )}
        </div>
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
    left: 71px;
    top: 31px;

    border: 1px solid ${theme.colors.greyLight};
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
        background-color: ${theme.colors.greyLight};
        margin-bottom: 8px;
        padding: 0 0;

        &::placeholder {
          background: ${theme.colors.greyLight};
          color: ${theme.colors.greyMedium};
        }
      }
    }
    .button {
      width: 275.25px;
      height: 34.05px;
      background-color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
      font-size: ${theme.fonts.size.XS};
      :hover {
        color: ${theme.colors.white};
      }
      :active {
        border: 1px solid ${theme.colors.success};
        color: ${theme.colors.success};
        background-color: ${theme.colors.white};
      }
    }
    .success {
      color: ${theme.colors.success};
      margin-left: 18px;
      font-size: ${theme.fonts.size.SM};
      font-weight: ${theme.fonts.weights.regular};
      .icon-success {
        border: 1px solid ${theme.colors.success};
        border-radius: ${theme.borderRadius.circle};
        width: ${theme.fonts.size.XS};
        height: ${theme.fonts.size.XS};
      }
    }
  }
`;
