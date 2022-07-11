import {
  Avatar,
  ListItem,
  ListItemText,
  ListItemAvatar,
  List
} from "@mui/material";
import PositionTitle from "./PositionTitle";
import PositionLocationDetails from "./PositionLocationDetails";

export default function JobTitles({
  image,
  title,
  location,
  url,
  period,
  technologies
}) {
  return (
    <List sx={{ padding: 0 }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            sx={{
              width: 60,
              height: 60,
              marginRight: 2
            }}
            src={image ? image.src : null}
          />
        </ListItemAvatar>

        <ListItemText
          sx={{ color: "white" }}
          primary={<PositionTitle title={title} url={url} />}
          secondary={
            <PositionLocationDetails
              location={location}
              period={period}
              technologies={technologies}
            />
          }
        />
      </ListItem>
    </List>
  );
}
