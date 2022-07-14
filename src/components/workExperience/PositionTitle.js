import { StyledPositionTitle } from "../sharedStyles/styles";

export default function PositionTitle({ title, url }) {
  return (
    <StyledPositionTitle
      href={url}
      underline="none"
      target="_blank"
      rel="noopener"
    >
      {title}
    </StyledPositionTitle>
  );
}
