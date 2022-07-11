import { styled, Typography, Box } from "@mui/material";
import JobItem from "../../components/workExperience/JobItem";
import JobContent from "../../jobContent";

export default function Experience() {
  return (
    <SectionContainer component="section" id="experience-section">
      <StyledSubTitle variant="h3" component="h2">
        Experience
      </StyledSubTitle>
      {JobContent.map((jobExp) => (
        <JobItem key={jobExp.location} content={jobExp} />
      ))}
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
      width: "150px"
    },
    [breakpoints.up("sm")]: {
      width: "310px"
    },
    [breakpoints.up("md")]: {
      width: "460px"
    },
    height: 1,
    borderRadius: 50,
    top: "-20px",
    right: "-170px",
    background: "#BCBCBC",
    boxShadow: `0 0 .3em 0.1em white`
  }
}));

const SectionContainer = styled(Box)(() => ({
  padding: "50px 0 100px ",
  paddingLeft: "10px",
  paddingRight: "10px"
}));
