import { styled, Link } from "@mui/material";

const ucSanDiegoBootCamp =
  "https://extendedstudies.ucsd.edu/courses-and-programs/web-technologies-and-design";

export default function PositionTitle() {
  return (
    <StyledLink
      href={ucSanDiegoBootCamp}
      underline="none"
      target="_blank"
      rel="noopener"
    >
      Position Title
    </StyledLink>
  );
}

const StyledLink = styled(Link)(({ theme, classNames, ...props }) => ({
  color: "white",
  position: "relative",
  transition: "color 300ms",
  "&:hover": {
    color: theme.palette.secondary.main
  },
  "&::after": {
    content: `""`,
    position: "absolute",
    width: "100%",
    height: 1,
    borderRadius: 50,
    borderRadius: "4px",
    backgroundColor: theme.palette.secondary.main,
    bottom: 0,
    left: 0,
    transformOrigin: "center",
    transform: "scaleX(0)",
    transition: "transform .4s ease-in-out"
  },
  "&:hover::after": {
    transform: "scaleX(1)"
  }
}));
