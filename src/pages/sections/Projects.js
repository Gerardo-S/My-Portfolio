import { styled, Typography, Box, Grid, Paper } from "@mui/material";
import ProjectCard from "../../components/ProjectCard";

export default function Projects() {
  return (
    <SectionContainer component="section" id="projects-section">
      <StyledSubTitle variant="h3" component="h2">
        Some of My Work
      </StyledSubTitle>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <ProjectCard />
        </Grid>
        <Grid item md={6}>
          <ProjectCard />
        </Grid>
        <Grid item md={4}>
          <ProjectCard />
        </Grid>
        <Grid item md={4}>
          <ProjectCard />
        </Grid>
        <Grid item md={4}>
          <ProjectCard />
        </Grid>
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
    width: "460px",
    height: 1,
    borderRadius: 50,
    top: "-20px",
    right: "-275px",
    background: "#BCBCBC",
    boxShadow: `0 0 .3em 0.1em white`
  }
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: "25px 0 100px ",
  paddingLeft: "10px",
  paddingRight: "10px"
}));
