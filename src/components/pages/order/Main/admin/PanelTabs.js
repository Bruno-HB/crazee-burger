import { useContext } from "react";
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import OrderContext from "../../../../../context/OrderContext";

export default function PanelButtons() {
  //state
  const {
    isCollapsed,
    setIsCollapsed,
    isEditSelected,
    setIsEditSelected,
    isAddSelected,
    setIsAddSelected,
  } = useContext(OrderContext);

  //comportement
  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    if (tabSelected === "add") {
      setIsAddSelected(true);
      setIsEditSelected(false);
    }

    if (tabSelected === "edit") {
      setIsAddSelected(false);
      setIsEditSelected(true);
    }
  };
  const tabsConfig = [
    {
      label: "",
      Icon: !isCollapsed ? <FiChevronDown /> : <FiChevronUp />,
      onClick: () => setIsCollapsed(!isCollapsed),
      className: isCollapsed ? "is-active" : "",
    },
    {
      label: "Ajouter un produit",
      Icon: <AiOutlinePlus />,
      onClick: () => selectTab("add"),
      className: isAddSelected ? "is-active" : "",
    },
    {
      label: "Modifier un produit",
      Icon: <MdModeEditOutline />,
      onClick: () => selectTab("edit"),
      className: isEditSelected ? "is-active" : "",
    },
  ];
  return (
    <PanelButtonsStyled>
      {tabsConfig.map((tab) => {
        return (
          <Tab
            label={tab.label}
            Icon={tab.Icon}
            onClick={tab.onClick}
            className={tab.className}
          />
        );
      })}
    </PanelButtonsStyled>
  );
}

const PanelButtonsStyled = styled.div`
  display: flex;
  position: absolute;
  top: -43px;
  left: 5%;
  padding: 0 20px;

  .is-active {
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    background-color: ${theme.colors.background_dark};
  }

  button {
    margin-left: 1px;
  }
`;
