import MenuList from "./hamburger/MenuList";
import { useMediaQuery, useTheme } from "@mui/material";
import NavLinkTextWrapper from "./navLinks/NavLinkTextWrapper";

export default function ActivateMenuButton() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return <>{isMatch ? <MenuList /> : <NavLinkTextWrapper />}</>;
}
