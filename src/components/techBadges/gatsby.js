import { Link, styled, Avatar } from "@mui/material";
import Image from "next/image";
import StyledAvatar from "./AvatarStyle";
const GatsbyBadge = () => {
  return (
    <Link
      href="https://www.gatsbyjs.com/"
      underline="none"
      target="_blank"
      rel="noopener"
    >
      <StyledAvatar>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg"
          layout="fill"
          alt="Gatsby"
        />
      </StyledAvatar>
    </Link>
  );
};

export default GatsbyBadge;
