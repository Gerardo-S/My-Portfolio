import {
  styled,
  Typography,
  Box,
  Avatar,
  Link,
  Grid,
  Container
} from "@mui/material";
const ucSanDiegoBootCamp =
  "https://extendedstudies.ucsd.edu/courses-and-programs/web-technologies-and-design";
const mthreeLink = "https://www.mthree.com/about/";

export default function About() {
  return (
    <SectionContainer component="section">
      <StyledSubTitle variant="h3" component="h2">
        About Me
      </StyledSubTitle>

      <Grid container spacing={6}>
        <Grid item sm={12} md={6} lg={8}>
          <Typography component="p" variant="p">
            Hello! My name is Gerardo and I enjoy the process of creating
            something out of code. My interest in programming started back in
            2019 when I was automating a process for the heat treat department
            at a bearing manufacturing plant. Seeing the tool I created
            benefiting the company and my coworkers excited me. From that day I
            have completed a full stack web development boot camp at{" "}
            <StyledLink
              href={ucSanDiegoBootCamp}
              underline="none"
              target="_blank"
              rel="noopener"
            >
              UC San Diego extension
            </StyledLink>
            , completed a full paid training program from{" "}
            <StyledLink
              href={mthreeLink}
              underline="none"
              target="_blank"
              rel="noopener"
            >
              mthree
            </StyledLink>
            , a training partner for Wiley a global leader in research and
            education.
          </Typography>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <OutlineContainer>
            <StyledAvatar alt="Remy Sharp" src="" />
          </OutlineContainer>
        </Grid>
      </Grid>
    </SectionContainer>
  );
}

const StyledSubTitle = styled(Typography)(({ theme: { breakpoints } }) => ({
  position: "relative",
  paddingBottom: "2rem",
  "&::after": {
    content: `""`,
    position: "relative",
    display: "block",
    [breakpoints.down("md")]: {
      width: "150px"
    },
    width: "580px",
    height: 1,
    borderRadius: 50,
    top: "-20px",
    right: "-160px",
    background: "#BCBCBC",
    boxShadow: `0 0 .3em 0.1em white`
  }
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: "200px 0 200px ",
  paddingLeft: "10px",
  paddingRight: "10px"
}));

const OutlineContainer = styled(Container)(() => ({
  width: "300px",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  "&::before": {
    content: `""`,
    position: "absolute",
    width: "100%",
    height: "100%",
    borderBottom: "solid 5px white",
    borderRight: "solid 5px white",
    borderRadius: "15px ",
    transition: "transform .3s",
    bottom: 0,
    left: 0
  },
  "&::after": {
    content: `""`,
    position: "absolute",
    width: "100%",
    height: "100%",
    borderBottom: "solid 5px #64ffda",
    borderRight: "solid 5px #64ffda",
    borderRadius: "15px ",
    transition: "transform .3s",
    bottom: 0,
    left: 0
  },

  " &:hover::after, &:focus": {
    transform: "translateY(9px) translateX(7px)"
  },
  " &:hover::before, &:focus": {
    transform: "translateY(5px) translateX(3px)"
  }
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200
}));

const StyledLink = styled(Link)(({ theme, classNames, ...props }) => ({
  color: theme.palette.secondary.main,
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
