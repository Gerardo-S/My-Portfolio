import { styled, Typography, Box } from "@mui/material";
import TechBadge from "../../components/TechBadge";
import badgeArray from "../../components/techBadges/badgeArray";

export default function BadgeList() {
  return (
    <SectionContainer component="section" id="skills-section">
      <StyledSubTitle variant="h3" component="h2">
        Technologies I've Worked With
      </StyledSubTitle>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {badgeArray.map((item, index) => (
          <TechBadge Badge={item} key={index} />
        ))}
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
    [breakpoints.down("md")]: {
      width: "100%",
      top: "15px",
      right: "0px"
    },
    [breakpoints.up("md")]: {
      width: "200px"
    },
    [breakpoints.up("lg")]: {
      width: "400px"
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
  padding: "100px 0 200px ",
  paddingLeft: "10px",
  paddingRight: "10px"
}));
