import { Divider, Box } from "@mui/material";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Typography, styled } from "@mui/material";
import SocialIcons from "../navBar/hamburger/SocialIcons";

export default function Footer() {
  return (
    <FooterWrapper component="footer">
      <StyledDivider color="#BCBCBC" />
      <FooterContentContainer>
        <SocialIcons footer={true} />
        <TextWrapper>
          <StyledText component="p">Made with</StyledText>
          <StyledFavoriteOutlinedIcon fontSize="small" />
          <StyledText component="p">by Gerardo Solis</StyledText>
        </TextWrapper>
      </FooterContentContainer>
      <StyledDivider color="#BCBCBC" />
    </FooterWrapper>
  );
}
const TextWrapper = styled(Box)(() => ({
  display: "flex",
  alignItems: "center"
}));

const FooterWrapper = styled(Box)(() => ({
  backgroundColor: "primary.main",
  minWidth: "375px",
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: "1em"
}));

const FooterContentContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
}));

const StyledFavoriteOutlinedIcon = styled(FavoriteOutlinedIcon)(() => ({
  color: "red",
  marginLeft: "4px ",
  marginRight: "4px "
}));

const StyledText = styled(Typography)(() => ({
  color: "#BCBCBC"
}));

const StyledDivider = styled(Divider)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: "30%"
  },
  [theme.breakpoints.down("sm")]: {
    width: "15%"
  },
  height: "2px",
  marginBottom: "1em",
  marginTop: "1em"
}));
