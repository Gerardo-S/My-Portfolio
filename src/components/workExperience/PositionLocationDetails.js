import { Typography } from "@mui/material";

export default function PositionLocationDetails() {
  return (
    <>
      <Typography
        sx={{ display: "inline" }}
        component="span"
        variant="body2"
        color="#ffffffb3"
      >
        Location • Job Period
      </Typography>
      <Typography
        component="span"
        sx={{
          color: "#8892b0 ",
          fontSize: "small",
          display: "block"
        }}
      >
        technologies{" "}
      </Typography>
    </>
  );
}
