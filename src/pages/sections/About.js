import Image from "next/image";
import {
  BodyLink,
  AboutSectionTitle
} from "../../components/sharedStyles/styles";
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
import {
  ucSanDiegoBootCamp,
  mthreeLink,
  LinkedIn
} from "../../components/nav/constants";

export default function About() {
  return (
    <SectionContainer component="section" id="about-section">
      <AboutSectionTitle variant="h3" component="h2">
        About Me
      </AboutSectionTitle>

      <Grid container>
        <Grid item sm={12} md={6} lg={8}>
          <Typography component="p" variant="p">
            Hello! My name is Gerardo and I enjoy the process of creating
            something out of code. My interest in programming started back in
            2019 when I was automating a process for the heat treat department
            at a bearing manufacturing plant. Seeing the tool I created
            benefiting the company and my coworkers excited me. From that day
            onwards I have completed a full stack web development boot camp at{" "}
            <BodyLink
              href={ucSanDiegoBootCamp}
              underline="none"
              target="_blank"
              rel="noopener"
            >
              UC San Diego extension
            </BodyLink>
            , completed a full paid training program from{" "}
            <BodyLink
              href={mthreeLink}
              underline="none"
              target="_blank"
              rel="noopener"
            >
              mthree
            </BodyLink>
            , a training partner for Wiley a global leader in research and
            education, and have worked with clients integrating custom features
            to their websites.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <Link href={LinkedIn} target="_blank" rel="noopener">
            <OutlineContainer>
              <StyledAvatar>
                <Image
                  src={ProfileImage}
                  objectFit="cover"
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

const SectionContainer = styled(Box)(() => ({
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

const StyledAvatar = styled(Avatar)(() => ({
  width: 200,
  height: 200
}));
