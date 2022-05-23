import * as React from "react";
import { Box, styled } from "@mui/material";
import NavLinkText from "./NavLinkText";

export default function NavLinkTextWrapper() {
  return (
    <NavItemsWrapper>
      <NavLinkText />
    </NavItemsWrapper>
  );
}

const NavItemsWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "end",
  paddingLeft: "1em",
  flexGrow: 0.5
}));
