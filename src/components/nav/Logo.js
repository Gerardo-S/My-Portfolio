import Box from "@mui/material/Box";
import { Paper, styled } from "@mui/material";
import LogoImage from "../../assets/jobThumbnail-image/G-Logo.png";
import Image from "next/image";
import { navLinks } from "./constants";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";

export default function Logo() {
  const [pageLoadAnimation, setPageLoadAnimation] = useState(false);
  useEffect(() => {
    setPageLoadAnimation(true);
  }, []);

  const animationStyles = useSpring({
    from: { opacity: 0 },
    opacity: pageLoadAnimation ? 1 : 0
  });
  return (
    <AnimateLogoFade style={animationStyles} className="logo-wrapper">
      <Divider className="logo" />
      <StyledImage
        className="logo"
        src={LogoImage}
        alt={navLinks.navHomeLogoAlt}
        width={60}
        height={60}
      />
      <Divider className="logo" />
    </AnimateLogoFade>
  );
}

const LogoWrapper = styled(Box)(({ className, ...props }) => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: "2px",
  flexGrow: 1,
  pointerEvents: "none",
  paddingBottom: ".5rem",
  "&:hover .logo:not(:hover)": {
    filter: "invert(50%)"
  }
}));

const Divider = styled(Paper)(({ className, ...props }) => ({
  opacity: 1,
  backgroundColor: "#64ffda",
  width: "25px",
  height: "8px",
  margin: 5,
  padding: 0,
  transition: "500ms",
  pointerEvents: "auto"
}));

const StyledImage = styled(Image)(({ className, ...props }) => ({
  filter: "grayscale(100%)",
  pointerEvents: "auto"
}));

const AnimateLogoFade = animated(LogoWrapper);
