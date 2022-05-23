import { styled, Typography, Box } from "@mui/material";

import JobItem from "../../components/workExperience/JobItem";

export default function Experience() {
  return (
    <SectionContainer component="section">
      <StyledSubTitle variant="h3" component="h2">
        Experience
      </StyledSubTitle>
      <JobItem />
      <JobItem />
      <JobItem />
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
    width: "570px",
    height: 1,
    borderRadius: 50,
    top: "-20px",
    right: "-170px",
    background: "#BCBCBC",
    boxShadow: `0 0 .3em 0.1em white`
  }
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: "200px 0 200px ",
  paddingLeft: "10px",
  paddingRight: "10px"
}));
