import {
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
  List
} from "@mui/material";
import PositionTitle from "./PositionTitle";
import PositionLocationDetails from "./PositionLocationDetails";

export default function JobTitles() {
  return (
    <List>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            sx={{
              backgroundColor: "purple",
              width: 50,
              height: 50,
              marginRight: 2
            }}
          >
            M
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          sx={{ color: "white" }}
          primary={<PositionTitle />}
          secondary={<PositionLocationDetails />}
        />
      </ListItem>
    </List>
  );
}
