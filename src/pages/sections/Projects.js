import { styled, Typography, Box, Grid } from "@mui/material";
import ProjectCard from "../../components/ProjectCard";

// const responsiveSize = [6, 6, 4, 4, 4];
export default function Projects({ repos }) {
  return (
    <SectionContainer component="section" id="projects-section">
      <StyledSubTitle variant="h3" component="h2">
        Some of My Work
      </StyledSubTitle>
      <Grid container spacing={2}>
        {repos.map((cardDetails) => (
          <Grid item lg={cardDetails.size} md={12} sm={12} key={cardDetails.id}>
            <ProjectCard cardDetails={cardDetails} />
          </Grid>
        ))}
      </Grid>
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
    [breakpoints.down("md")]: {
      width: "45px"
    },
    [breakpoints.up("sm")]: {
      width: "200px"
    },
    [breakpoints.up("md")]: {
      width: "360px"
    },
    height: 1,
    borderRadius: 50,
    top: "-20px",
    right: "-275px",
    background: "#BCBCBC",
    boxShadow: `0 0 .3em 0.1em white`
  }
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: "25px 0 200px ",
  paddingLeft: "10px",
  paddingRight: "10px"
}));
