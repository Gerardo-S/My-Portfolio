import { styled, Box, Grid } from "@mui/material";
import ProjectCard from "../../components/ProjectCard";
import { ProjectsSectionTitle } from "../../components/sharedStyles/styles";
export default function Projects({ repos }) {
  return (
    <SectionContainer component="section" id="projects-section">
      <ProjectsSectionTitle variant="h3" component="h2">
        Some of My Work
      </ProjectsSectionTitle>
      <Grid container spacing={2}>
        {repos &&
          repos.map((cardDetails) => (
            <Grid
              item
              lg={cardDetails.size}
              md={12}
              sm={12}
              key={cardDetails.id}
            >
              <ProjectCard cardDetails={cardDetails} />
            </Grid>
          ))}
      </Grid>
    </SectionContainer>
  );
}

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: "25px 0 200px ",
  paddingLeft: "10px",
  paddingRight: "10px"
}));
