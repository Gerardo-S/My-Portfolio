import { Link, styled, Avatar } from "@mui/material";
import Image from "next/image";
import StyledAvatar from "./AvatarStyle";
const GraphQlBadge = () => {
  return (
    <Link
      href="https://graphql.org/"
      underline="none"
      target="_blank"
      rel="noopener"
    >
      <StyledAvatar>
        <Image
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
          objectFit="cover"
          width={80}
          height={80}
          alt="GraphQl"
        />
      </StyledAvatar>
    </Link>
  );
};

export default GraphQlBadge;
