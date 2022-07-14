import { Link, styled, Avatar } from "@mui/material";
import Image from "next/image";
import StyledAvatar from "./AvatarStyle";
const ExpressBadge = () => {
  return (
    <Link
      href="https://expressjs.com"
      underline="none"
      target="_blank"
      rel="noopener"
    >
      <StyledAvatar>
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
          layout="fill"
          alt="Express"
        />
      </StyledAvatar>
    </Link>
  );
};

export default ExpressBadge;
