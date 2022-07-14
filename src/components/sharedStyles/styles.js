import { styled, Link, Typography } from "@mui/material";

const DefaultLinkStyle = styled(Link)(({ theme, classNames }) => ({
  position: "relative",
  "&::after": {
    content: `""`,
    position: "absolute",
    width: "100%",
    height: 1,
    borderRadius: 50,
    borderRadius: "4px",
    backgroundColor: theme.palette.secondary.main,
    bottom: 0,
    left: 0,
    transformOrigin: "center",
    transform: "scaleX(0)",
    transition: "transform .4s ease-in-out"
  },
  "&:hover::after": {
    transform: "scaleX(1)"
  }
}));

const BodyLink = styled(DefaultLinkStyle)(({ theme, classNames }) => ({
  color: theme.palette.secondary.main
}));

const StyledPositionTitle = styled(DefaultLinkStyle)(({ theme }) => ({
  color: "white",
  fontSize: "large",
  transition: "color 300ms",
  "&:hover": {
    color: theme.palette.secondary.main
  }
}));

const DefaultSubTitle = styled(Typography)(() => ({
  position: "relative",
  paddingBottom: "2rem",
  "&::after": {
    content: `""`,
    position: "relative",
    display: "block",
    height: 1,
    borderRadius: 50,
    top: "-20px",
    background: "#BCBCBC",
    boxShadow: `0 0 .3em 0.1em white`
  }
}));

const AboutSectionTitle = styled(DefaultSubTitle)(
  ({ theme: { breakpoints } }) => ({
    "&::after": {
      [breakpoints.down("md")]: {
        width: "150px"
      },
      [breakpoints.up("sm")]: {
        width: "310px"
      },
      [breakpoints.up("md")]: {
        width: "480px"
      },
      right: "-160px"
    }
  })
);

const BadgeSectionTitle = styled(DefaultSubTitle)(
  ({ theme: { breakpoints } }) => ({
    "&::after": {
      [breakpoints.down("sm")]: {
        width: "100px",
        right: "-200px",
        top: "-15px",
        textAlign: ""
      },
      [breakpoints.down("md")]: {
        width: "100%",
        top: "15px",
        right: "0px"
      },
      [breakpoints.up("md")]: {
        width: "200px"
      },
      [breakpoints.up("lg")]: {
        width: "400px"
      },
      width: "125px",
      right: "-455px"
    }
  })
);

const ExperienceSectionTitle = styled(DefaultSubTitle)(
  ({ theme: { breakpoints } }) => ({
    "&::after": {
      [breakpoints.down("md")]: {
        width: "150px"
      },
      [breakpoints.up("sm")]: {
        width: "310px"
      },
      [breakpoints.up("md")]: {
        width: "460px"
      },
      right: "-170px"
    }
  })
);

const ProjectsSectionTitle = styled(DefaultSubTitle)(
  ({ theme: { breakpoints } }) => ({
    "&::after": {
      [breakpoints.down("md")]: {
        width: "45px"
      },
      [breakpoints.up("sm")]: {
        width: "200px"
      },
      [breakpoints.up("md")]: {
        width: "360px"
      },
      right: "-275px"
    }
  })
);

export {
  BodyLink,
  StyledPositionTitle,
  AboutSectionTitle,
  BadgeSectionTitle,
  ExperienceSectionTitle,
  ProjectsSectionTitle
};
