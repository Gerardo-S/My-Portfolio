import Image from "next/image";
import {
  styled,
  Typography,
  Box,
  Avatar,
  Link,
  Grid,
  Container
} from "@mui/material";
import ProfileImage from "../../assets/profile-image.PNG";

const ucSanDiegoBootCamp =
  "https://extendedstudies.ucsd.edu/courses-and-programs/web-technologies-and-design";
const mthreeLink = "https://www.mthree.com/about/";
const LinkedIn = "https://www.linkedin.com/in/gerardo-a-solis/";
export default function About() {
  return (
    <SectionContainer component="section" id="about-section">
      <StyledSubTitle variant="h3" component="h2">
        About Me
      </StyledSubTitle>

      <Grid container>
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
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Link href={LinkedIn} target="_blank" rel="noopener">
            <OutlineContainer>
              <StyledAvatar>
                <Image
                  src={ProfileImage}
                  blurDataURL={
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNME2Q6AgACnQE/KbNfPwAAAABJRU5ErkJggg=="
                  }
                  objectFit="cover"
                  placeholder="blur"
                  alt="place holder"
                  height={310}
                  width={200}
                  quality={100}
                />
              </StyledAvatar>
            </OutlineContainer>
          </Link>
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
    [breakpoints.up("sm")]: {
      width: "310px"
    },
    [breakpoints.up("md")]: {
      width: "480px"
    },
    height: 1,
    borderRadius: 50,
    top: "-20px",
    right: "-160px",
    background: "#BCBCBC",
    boxShadow: `0 0 .3em 0.1em white`
  }
}));

const SectionContainer = styled(Box)(({ theme }) => ({
  padding: "190px 0 250px "
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
