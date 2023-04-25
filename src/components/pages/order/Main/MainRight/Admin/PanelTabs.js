import { useContext } from "react";
import styled from "styled-components";
import Tab from "../../../../../reusable-ui/Tab";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { theme } from "../../../../../../theme";
import OrderContext from "../../../../../../context/OrderContext";
import { tabsConfig } from "./tabsConfig";

export default function PanelTabs() {
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
  const tabs = tabsConfig;
  return (
    <PanelButtonsStyled>
      <Tab
        key={"chevronUpDown"}
        label={""}
        Icon={!isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={isCollapsed ? "is-active" : "is-not-active"}
      />
      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.index}
            label={tab.label}
            Icon={tab.Icon}
            onClick={() => selectTab(tab.index)}
            className={
              currentTabSelected === tab.index
                ? "is-active "
                : `${!isCollapsed && "is-not-active"}`
            }
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

  .is-active {
    color: ${theme.colors.white};
    border-color: ${theme.colors.background_dark};
    background-color: ${theme.colors.background_dark};
  }
  .is-not-active {
    :hover {
      border-bottom: 2px solid ${theme.colors.white};
    }
  }

  button {
    margin-left: 1px;
  }
`;
