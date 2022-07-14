import { styled, Box } from "@mui/material";
import JobItem from "../../components/workExperience/JobItem";
import JobContent from "../../jobContent";
import { ExperienceSectionTitle } from "../../components/sharedStyles/styles";
export default function Experience() {
  return (
    <SectionContainer component="section" id="experience-section">
      <ExperienceSectionTitle variant="h3" component="h2">
        Experience
      </ExperienceSectionTitle>
      {JobContent.map((jobExp) => (
        <JobItem key={jobExp.location} content={jobExp} />
      ))}
    </SectionContainer>
  );
}

const SectionContainer = styled(Box)(() => ({
  padding: "50px 0 100px ",
  paddingLeft: "10px",
  paddingRight: "10px"
}));
