import { Link, styled, Avatar } from "@mui/material";
import Image from "next/image";
import StyledAvatar from "./AvatarStyle";
const PostManBadge = () => {
  return (
    <Link
      href="https://postman.com"
      underline="none"
      target="_blank"
      rel="noopener"
    >
      <StyledAvatar>
        <Image
          src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
          layout="fill"
          alt="PostMan"
        />
      </StyledAvatar>
    </Link>
  );
};

export default PostManBadge;
