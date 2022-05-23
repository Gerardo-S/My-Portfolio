import { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, styled } from "@mui/material";
import Logo from "./Logo.js";
import ActivateMenuButton from "./ActivateMenuButton";

export default function NavBar() {
  const [pageLoadAnimation, setPageLoadAnimation] = useState(false);

  useEffect(() => {
    setPageLoadAnimation(true);
  }, []);

  return (
    <NavBarContainer>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Logo />
          <ActivateMenuButton />
        </StyledToolbar>
      </StyledAppBar>
      <NavBarUnderFill
        sx={{ transform: pageLoadAnimation ? "scaleX(1)" : "" }}
      />
    </NavBarContainer>
  );
}
const StyledToolbar = styled(Toolbar)(() => ({
  width: "100%",
  paddingTop: "10px"
}));

const StyledAppBar = styled(AppBar)(() => ({
  height: 75,
  width: "100%"
}));

const NavBarContainer = styled(Box)(() => ({
  width: "100%",
  minWidth: "375px"
}));

const NavBarUnderFill = styled(Box)(() => ({
  width: "100%",
  backgroundColor: "white",
  height: "2px",
  transformOrigin: "center",
  transform: "scaleX(0)",
  transition: "transform 1s ease-in-out;"
}));
