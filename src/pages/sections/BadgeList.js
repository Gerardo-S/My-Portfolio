import { styled, Box } from "@mui/material";
import TechBadge from "../../components/TechBadge";
import badgeArray from "../../components/techBadges/badgeArray";
import { BadgeSectionTitle } from "../../components/sharedStyles/styles";
export default function BadgeList() {
  return (
    <SectionContainer component="section" id="skills-section">
      <BadgeSectionTitle variant="h3" component="h2">
        Technologies I've Worked With
      </BadgeSectionTitle>
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

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: "100px 0 200px ",
  paddingLeft: "10px",
  paddingRight: "10px"
}));
