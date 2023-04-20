import { useContext } from "react";
import styled from "styled-components";
import Tab from "../../../../reusable-ui/Tab";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../theme";
import OrderContext from "../../../../../context/OrderContext";
import { getTabsConfig } from "./getTabsConfig";

export default function PanelButtons() {
  //state
  const {
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
  } = useContext(OrderContext);

  //comportement
  const selectTab = (tabSelected) => {
    setIsCollapsed(false);
    setCurrentTabSelected(tabSelected);
  };
  const tabs = getTabsConfig(currentTabSelected);
  return (
    <PanelButtonsStyled>
      <Tab
        label={""}
        Icon={!isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : ""}
      />
      {tabs.map((tab) => {
        return (
          <Tab
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => selectTab(tab.index)}
            className={currentTabSelected === tab.index ? "is-active" : ""}
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
