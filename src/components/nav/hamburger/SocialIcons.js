import { styled, Link } from "@mui/material";
import { List, ListItem } from "@mui/material";
import { socialMediaIcons } from "../constants";

export default function SocialIcons({ footer }) {
  return (
    <List
      sx={{
        display: footer ? "flex" : null
      }}
    >
      {socialMediaIcons.map(({ icon, url }) => {
        const key = `${icon.props.data}`;
        return (
          <Link
            href={url}
            underline="none"
            target="_blank"
            rel="noopener"
            key={key}
          >
            <StyledSocial sx={{ marginBottom: footer ? 0 : "10px" }}>
              {icon}
            </StyledSocial>
          </Link>
        );
      })}
    </List>
  );
}

const StyledSocial = styled(ListItem)(({ theme }) => ({
  cursor: "pointer",
  svg: {
    height: "30px",
    width: "30px",
    transition: "transform 300ms",
    " &:hover, &:focus": {
      transform: "translateY(-3px)",
      stroke: theme.palette.secondary.main
    }
  }
}));
