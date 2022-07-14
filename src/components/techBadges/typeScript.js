import { Link, styled, Avatar } from "@mui/material";
import Image from "next/image";
import StyledAvatar from "./AvatarStyle";
const TypeScriptBadge = () => {
  return (
    <Link
      href="https://www.typescriptlang.org/"
      underline="none"
      target="_blank"
      rel="noopener"
    >
      <StyledAvatar>
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
          layout="fill"
          alt="TypeScript"
        />
      </StyledAvatar>
    </Link>
  );
};

export default TypeScriptBadge;
