import { ListItem, ListItemText, ListItemIcon, Box } from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

export default function JobResponsibilities({ responsibilities }) {
  return (
    <ListItem>
      <Box sx={{ display: "flex" }}>
        <ListItemIcon sx={{ color: "secondary.main" }}>
          <ArrowRightOutlinedIcon fontSize="medium" />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            fontSize: "medium",
            fontWeight: "medium",
            lineHeight: "20px",
            color: "#C1BDDB"
          }}
          primary={responsibilities}
        />
      </Box>
    </ListItem>
  );
}
