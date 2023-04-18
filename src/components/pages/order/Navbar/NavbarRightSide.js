import styled from "styled-components";
import Profile from "./Profile";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import { useState } from "react";
import { toast } from "react-toastify";
import ToastAdmin from "./ToastAdmin";

export default function NavbarRightSide({ username }) {
  //state
  const [isModeAdmin, setisModeAdmin] = useState(false);

  // comportement
  const displayToastNotificaiton = () => {
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
        labelIfUnchecked="activer le mode admin"
        labelIfChecked="désactiver le mode admin"
        onToggle={displayToastNotificaiton}
        className="toaster"
        bodyClassName="body-toast"
      />
      <Profile username={username} />
      <ToastAdmin />
    </NavbarRightSideStyled>
  );
}

const NavbarRightSideStyled = styled.div`
  display: flex;
  align-items: center;
  padding-right: 50px;
`;
