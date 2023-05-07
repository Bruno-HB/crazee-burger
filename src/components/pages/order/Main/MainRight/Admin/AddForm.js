import { useState } from "react";
import styled from "styled-components";
import TextInput from "../../../../../reusable-ui/TextInput";

export default function AddForm() {
  //state
  const [productName, setProductName] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [productPrice, setProductPrice] = useState("");
  //comportements

  //affichage
  return (
    <AddFormStyled>
      <div>Aucune image</div>
      <form>
        {/*<TextInput value={productName} />
        <TextInput value={productUrl} />
        <TextInput value={productPrice} />*/}
      </form>
    </AddFormStyled>
  );
}

const AddFormStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 48.0625px 55.3906px 48.0781px 53.75px;

    position: absolute;
    width: 215.14px;
    height: 120.14px;
    //left: calc(50% - 215.14px / 2 - 332.73px);
    left: 71px;
    top: calc(50% - 120.14px / 2 - 21.02px);

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
`;
