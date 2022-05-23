import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { animated, useSpring } from "react-spring";

export default function AnimatedPageButton({ btnText, pageLoadAnimation }) {
  const animateButtonOpacity = useSpring({
    config: { tension: 90 },
    from: { bottom: -250, opacity: 0 },
    bottom: pageLoadAnimation ? 0 : -350,
    opacity: pageLoadAnimation ? 1 : 0
  });
  return (
    <AnimatePageButton
      size="large"
      color="secondary"
      variant="outlined"
      style={animateButtonOpacity}
    >
      {btnText}
    </AnimatePageButton>
  );
}

const StyledButton = styled(Button)(({ theme }) => ({
  textShadow: "0 0 0.125em hsl(0 0% 100%/0.3), 0 0 0.45em currentColor",

  boxShadow: "inset 0 0 0.5em 0 currentColor, 0 0 0.5em 0 currentColor",
  position: "relative",

  "&::after": {
    content: `""`,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition: "opacity 300ms linear",
    boxShadow: `0 0 2em 0.5em ${theme.palette.secondary.main}`,
    opacity: 0
  },

  "&:hover::after": {
    opacity: 1
  },

  "&:hover,  &:focus": {
    background: " rgb(100, 255, 218,90%)",
    color: "currentColor",
    textShadow: "none"
  }
}));

const AnimatePageButton = animated(StyledButton);
