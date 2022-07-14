import { Link, styled, Avatar } from "@mui/material";
import Image from "next/image";
import StyledAvatar from "./AvatarStyle";
const JavaScriptBadge = () => {
  return (
    <Link
      href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
      underline="none"
      target="_blank"
      rel="noopener"
    >
      <StyledAvatar>
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          layout="fill"
          alt="JavaScript"
        />
      </StyledAvatar>
    </Link>
  );
};

export default JavaScriptBadge;
