import { createContext } from "react";

export default createContext({
  isModeAdmin: false,
  setisModeAdmin: () => {},

  isCollapsed: false,
  setIsCollapsed: () => {},

  currentTabSelected: "",
  setCurrentTabSelected: () => {},
});
