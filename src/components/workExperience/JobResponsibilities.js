import { ListItem, ListItemText, ListItemIcon } from "@mui/material";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

export default function JobResponsibilities() {
  return (
    <ListItem>
      <ListItemIcon sx={{ color: "secondary.main" }}>
        <ArrowRightOutlinedIcon fontSize="medium" />
      </ListItemIcon>
      <ListItemText
        primaryTypographyProps={{
          fontSize: 15,
          fontWeight: "medium",
          lineHeight: "20px",
          mb: "2px",
          color: "#C1BDDB"
        }}
        primary="Job Duties"
      />
    </ListItem>
  );
}
