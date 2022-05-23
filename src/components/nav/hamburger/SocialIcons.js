import { styled } from "@mui/material";
import { List, ListItem } from "@mui/material";
import { IconGitHub, IconLinkedin, IconTwitter, IconResume } from "../../icons";

const socialMediaIcons = [IconGitHub, IconTwitter, IconLinkedin, IconResume];

export default function SocialIcons({ footer }) {
  return (
    <List
      sx={{
        display: footer ? "flex" : null
      }}
    >
      {socialMediaIcons.map((icon) => {
        const key = `${icon.props.data}`;
        return (
          <StyledSocial sx={{ marginBottom: footer ? 0 : "10px" }} key={key}>
            {icon}
          </StyledSocial>
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
