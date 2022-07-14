import { Link, styled, Avatar } from "@mui/material";
import Image from "next/image";
import StyledAvatar from "./AvatarStyle";
const GitBadge = () => {
  return (
    <Link
      href="https://git-scm.com/"
      underline="none"
      target="_blank"
      rel="noopener"
    >
      <StyledAvatar>
        <Image
          src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
          layout="fill"
          alt="Git"
        />
      </StyledAvatar>
    </Link>
  );
};

export default GitBadge;
