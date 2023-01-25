import styled from "styled-components";
import { theme } from "../../theme";

export default function TextInput({value, onChange, Icon, ...otherProps}) {
  return (
    <TextInputSyled>
        {Icon && Icon}
        <input 
        value={ value }
        onChange={ onChange }
        type="text"
        {...otherProps}
        />
    </TextInputSyled>
  )
}
 
const TextInputSyled = styled.div`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;
    .icon {
        font-size: ${theme.fonts.size.P0};
        margin-right: ${theme.gridUnit}px;
        color: ${theme.colors.greySemiDark};
    }
    input {
        border: none;
        width: 100%;
        font-size: ${theme.fonts.size.P0};
        color: ${theme.colors.dark};
        
        &::placeholder {
            background: ${theme.colors.white};
            color: ${theme.colors.greyMedium};
        }
    }
`;