import { Typography, styled } from "@mui/material";

export default function PositionLocationDetails({
  location,
  period,
  technologies
}) {
  return (
    <>
      <StyledPositionLocation component="span" variant="body2">
        {location} • {period.start} - {period.end}
      </StyledPositionLocation>
      <br />
      {technologies.map((item, index) => (
        <StyledTechnologiesList key={index} component="span">
          {item}{" "}
        </StyledTechnologiesList>
      ))}
    </>
  );
}
const StyledPositionLocation = styled(Typography)(() => ({
  color: "#ffffffb3",
  fontSize: "medium",
  display: "inline"
}));
const StyledTechnologiesList = styled(Typography)(() => ({
  color: "#8892b0 ",
  fontSize: "small",
  display: "inline"
}));
