import { Link, styled, Avatar } from "@mui/material";
import Image from "next/image";
import StyledAvatar from "./AvatarStyle";
const NextBadge = () => {
  return (
    <Link
      href="https://nextjs.org/"
      underline="none"
      target="_blank"
      rel="noopener"
    >
      <StyledAvatar>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
          layout="fill"
          alt="Next.js"
        />
      </StyledAvatar>
    </Link>
  );
};

export default NextBadge;
