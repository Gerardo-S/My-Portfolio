import { styled, Paper, Box, Slide } from "@mui/material";
import { Divider } from "@mui/material";
import NavLinkText from "../navLinks/NavLinkText";
import SocialIcons from "./SocialIcons";

export default function AsideSocialLinks({ checked, containerRef }) {
  return (
    <AsideContentWrapper>
      <Slide direction="left" in={checked} container={containerRef}>
        <Paper sx={{ zIndex: 2 }} elevation={4}>
          <Box
            sx={{
              height: "100vh"
            }}
          >
            <StyledAsideSocialContainer>
              <NavLinkText mobileMenuList={true} marginBottom="1.5em" />
              <StyledDivider orientation="vertical" color="white" />
              <SocialIcons />
            </StyledAsideSocialContainer>
          </Box>
        </Paper>
      </Slide>
    </AsideContentWrapper>
  );
}

const StyledAsideSocialContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  justifyContent: "center",
  alignItems: "center"
}));

const StyledDivider = styled(Divider)(() => ({
  height: "3em",
  marginBottom: "1em",
  marginTop: "1em"
}));
const AsideContentWrapper = styled(Box)(({ theme: { breakpoints } }) => ({
  [breakpoints.down("sm")]: {
    width: "30vh",
    right: "-1em"
  },
  [breakpoints.up("sm")]: {
    width: "50vh",
    right: "-25px"
  },
  position: "absolute",
  top: "-7.5px",
  overflow: "hidden",
  zIndex: 2
}));
