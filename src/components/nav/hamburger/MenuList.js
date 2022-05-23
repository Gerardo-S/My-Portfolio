import { Box } from "@mui/material";
import { Divide as ReactHamburger } from "hamburger-react";
import { useMediaQuery, useTheme, styled } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import AsideSocialLinks from "./AsideSocialLinks";

export default function MenuList() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const containerRef = useRef(null);
  const [checked, setChecked] = useState(false);

  const openMenu = (toggled) => {
    toggled ? setChecked(true) : setChecked(false);
  };

  useEffect(() => {
    if (!isMatch) {
      setChecked(false);
    }
  }, [isMatch]);

  useEffect(() => {
    if (checked) {
      window.document.body.style.overflow = "hidden";
      window.document.body.style.touchAction = "none";
    }
    return () => {
      window.document.body.style.overflow = "";
      window.document.body.style.touchAction = "";
    };
  }, [checked]);

  return (
    <>
      <MenuWrapper ref={containerRef}>
        <HamburgerWrapper>
          <ReactHamburger
            color="#64ffda"
            easing="ease-in"
            onToggle={openMenu}
            rounded
            hideOutline={false}
          />
        </HamburgerWrapper>
        <AsideSocialLinks
          checked={checked}
          containerRef={containerRef.current}
        />
      </MenuWrapper>
      <BlurContainer sx={{ display: checked ? "block" : "none" }} />
    </>
  );
}

const HamburgerWrapper = styled(Box)(() => ({
  height: "70px",
  position: "relative",
  zIndex: 3,
  display: "flex",
  alignItems: "center",
  width: "100%",
  marginLeft: "1em",
  justifyContent: "end"
}));

const MenuWrapper = styled(Box)(() => ({
  position: "relative",
  height: "70px",
  paddingRight: "5px"
}));

const BlurContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  width: "100%",
  height: "100vh",
  left: "1px",
  top: "80px",
  backdropFilter: "blur(8px)"
}));
