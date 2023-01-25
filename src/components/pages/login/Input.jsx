import styled from "styled-components";

export default function Input({value, onChange, Icon, ...otherProps}) {
  return (
    <InputSyled>
        {Icon && Icon}
        <input 
        value={ value }
        onChange={ onChange }
        type="text"
        {...otherProps}
        />
    </InputSyled>
  )
}
 
const InputSyled = styled.div`
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    .icon {
        font-size: 15px;
        margin-right: 8px;
        color: #93a2b1;
    }
    input {
        border: none;
        width: 100%;
        font-size: 15px;
        color: #17161a;
    }

    &::placeholder {
        background: white;
        color: lightgrey;
    }

`;