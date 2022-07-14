import { styled, CardMedia } from "@mui/material";
import { Card, Avatar } from "@mui/material";

export default function TechBadge({ Badge }) {
  return (
    <StyledCard className="badge" elevation={5}>
      <CardMedia
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        {Badge && <Badge />}
      </CardMedia>
    </StyledCard>
  );
}

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  cursor: "pointer",
  [theme.breakpoints.down("sm")]: {
    marginRight: 15
  },
  marginRight: 30,
  marginTop: 30,
  color: theme.palette.primary.main,
  transition: "transform 300ms",
  borderRadius: 15,
  height: 115,
  width: 130,
  backgroundColor: "#BCBCBC",
  "&:hover,&:focus .badge:not(:hover)": {
    transform: "translateY(-4px)"
  }
}));
