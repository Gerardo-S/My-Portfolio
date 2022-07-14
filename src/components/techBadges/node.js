import { Link, styled, Avatar } from "@mui/material";
import Image from "next/image";
import StyledAvatar from "./AvatarStyle";
const NodeJsBadge = () => {
  return (
    <Link
      href="https://nodejs.org"
      underline="none"
      target="_blank"
      rel="noopener"
    >
      <StyledAvatar>
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
          layout="fill"
          alt="Node.js"
        />
      </StyledAvatar>
    </Link>
  );
};

export default NodeJsBadge;
