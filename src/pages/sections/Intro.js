import { useEffect, useState } from "react";
import { styled, useTheme, useMediaQuery } from "@mui/material";
import { Typography, Box, Container, Link } from "@mui/material";
import { animated, useTrail } from "react-spring";
import AnimatedPageButton from "../../components/buttons/AnimatedPageButton";

const resumeLink =
  "https://drive.google.com/file/d/1hMWhAVn3mAEYwy66EoIZb7kCzXpQXyzR/view?usp=sharing";
const introText = [
  { text: "Hello there,", variant: "h1" },
  { text: "I'm Gerardo Solis.", variant: "h2" },
  {
    text: "  I'm an engineer based in San Diego, California. I specialize in front  end web development.",
    variant: "p"
  }
];

export default function Intro() {
  const [pageLoadAnimation, setPageLoadAnimation] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setTimeout(() => {
      setPageLoadAnimation(true);
    }, "1500");
  }, []);

  const Trail = ({ pageLoadAnimation, children }) => {
    const items = children;
    const trail = useTrail(items.length, {
      opacity: pageLoadAnimation ? 1 : 0,
      height: pageLoadAnimation ? (isMatch ? 200 : 90) : 0,
      from: { opacity: 0, height: 0 }
    });

    return (
      <>
        {trail.map(({ height, opacity }, index) => (
          <AnimatedTypographyBox key={index} style={{ height }}>
            <AnimatedTypography
              style={{ opacity }}
              variant={items[index].variant}
            >
              {items[index].text}
            </AnimatedTypography>
          </AnimatedTypographyBox>
        ))}
      </>
    );
  };

  return (
    <IntroContainer component="section">
      <Trail pageLoadAnimation={pageLoadAnimation}>{introText}</Trail>
      <Link href={resumeLink} underline="none" target="_blank" rel="noopener">
        <AnimatedPageButton
          pageLoadAnimation={pageLoadAnimation}
          btnText={"Resume"}
        />
      </Link>
    </IntroContainer>
  );
}
const IntroContainer = styled(Container)(({ theme: { breakpoints } }) => ({
  [breakpoints.up("sm")]: {
    paddingTop: "100px"
  },
  boxSizing: "border-box",
  paddingBottom: "100px",
  width: "100%"
}));
const TypographyBox = styled(Box)(() => ({
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  marginBottom: "5px"
}));

const AnimatedTypography = animated(Typography);

const AnimatedTypographyBox = animated(TypographyBox);