import { Link, styled, Avatar } from "@mui/material";
import Image from "next/image";
import StyledAvatar from "./AvatarStyle";
const MongoDbBadge = () => {
  return (
    <Link
      href="https://www.mongodb.com/"
      underline="none"
      target="_blank"
      rel="noopener"
    >
      <StyledAvatar>
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
          objectFit="cover"
          width={80}
          height={80}
          alt="mongoDB"
        />
      </StyledAvatar>
    </Link>
  );
};

export default MongoDbBadge;
