import { Link, styled, Avatar } from "@mui/material";
import Image from "next/image";
import StyledAvatar from "./AvatarStyle";
const MySqlBadge = () => {
  return (
    <Link
      href="https://www.mysql.com/"
      underline="none"
      target="_blank"
      rel="noopener"
    >
      <StyledAvatar>
        <Image
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
          layout="fill"
          alt="MySQL"
        />
      </StyledAvatar>
    </Link>
  );
};

export default MySqlBadge;
