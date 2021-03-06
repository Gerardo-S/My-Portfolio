import Button from "@mui/material/Button";
import { styled } from "@mui/material";

export default function PageButton({ btnText }) {
  return (
    <StyledButton size="large" color="secondary" variant="outlined">
      {btnText}
    </StyledButton>
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
