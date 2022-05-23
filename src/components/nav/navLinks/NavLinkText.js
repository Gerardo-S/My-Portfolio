import * as React from "react";
import { Link, styled, Box } from "@mui/material";
import { navLinks } from "../constants";
import { animated, useTrail } from "react-spring";
import { useEffect, useState } from "react";

export default function NavLinkText({ marginBottom, mobileMenuList }) {
  const navText = navLinks.navItems;
  const [pageLoadAnimation, setPageLoadAnimation] = useState(false);

  useEffect(() => {
    const animationDelay = setTimeout(() => {
      setPageLoadAnimation(true);
    }, "800");

    return () => clearTimeout(animationDelay);
  }, []);

  const Trail = ({ pageLoadAnimation, children }) => {
    const items = children;

    const trail = useTrail(items.length, {
      from: { opacity: 0, height: 100 },
      opacity: pageLoadAnimation ? 1 : 0,
      height: pageLoadAnimation ? 25 : 100
    });

    return (
      <>
        {trail.map(({ height, opacity }, index) => (
          <AnimatedStyledLink
            href={`/${items[index].title}`}
            underline="none"
            marginBottom={marginBottom}
            key={index}
            style={{ opacity, height }}
          >
            <Box sx={{ mr: 2 }} component={items[index].Icon} />
            {items[index].title}
          </AnimatedStyledLink>
        ))}
      </>
    );
  };
  return (
    <>
      <Trail pageLoadAnimation={pageLoadAnimation}>{navText}</Trail>
    </>
  );
}

const StyledLink = styled(Link)(({ theme, classNames }) => ({
  color: "#BCBCBC",
  marginRight: "2em",
  transition: "color 500ms",
  "&:hover": {
    color: theme.palette.secondary.main
  },
  display: "flex"
}));

const AnimatedStyledLink = animated(StyledLink);
