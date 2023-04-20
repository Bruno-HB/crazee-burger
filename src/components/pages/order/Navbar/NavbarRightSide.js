import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";
import { useContext } from "react";
import OrderContext from "../../../../context/OrderContext";
export default function NavbarRightSide() {
  //state

  const { isModeAdmin, setisModeAdmin } = useContext(OrderContext);
  // comportement
  const displayToastNotification = () => {
    if (!isModeAdmin) {
      toast.info("Mode admin activé", {
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setisModeAdmin(!isModeAdmin);
  };

  //affichage
  return (
    <NavbarRightSideStyled className="right-side">
      <ToggleButton
        isChecked={isModeAdmin}
        labelIfUnchecked="activer le mode admin"
        labelIfChecked="désactiver le mode admin"
        onToggle={displayToastNotification}
        className="toaster"
        bodyClassName="body-toast"
      />
      <Profile />
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
