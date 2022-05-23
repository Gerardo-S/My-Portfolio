import { styled, Typography, Box } from "@mui/material";
import TechBadge from "../../components/TechBadge";

export default function BadgeList() {
  return (
    <SectionContainer component="section">
      <StyledSubTitle variant="h3" component="h2">
        Technologies I've Worked With
      </StyledSubTitle>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <TechBadge />
        <TechBadge />
        <TechBadge />
        <TechBadge />
        <TechBadge />
        <TechBadge />
        <TechBadge />
      </Box>
    </SectionContainer>
  );
}

const StyledSubTitle = styled(Typography)(({ theme: { breakpoints } }) => ({
  position: "relative",
  paddingBottom: "2rem",
  "&::after": {
    content: `""`,
    position: "relative",
    display: "block",
    [breakpoints.down("sm")]: {
      width: "100px",
      right: "-200px",
      top: "-15px",
      textAlign: ""
    },
    width: "125px",
    height: 1,
    borderRadius: 50,
    top: "-20px",
    right: "-455px",
    background: "#BCBCBC",
    boxShadow: `0 0 .3em 0.1em white`
  }
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: "200px 0 200px ",
  paddingLeft: "10px",
  paddingRight: "10px"
}));
