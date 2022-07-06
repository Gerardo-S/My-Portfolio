import { Box, Typography, styled, Link } from "@mui/material";
import PageButton from "../../components/buttons/pageButton";

export default function Contacts() {
  return (
    <SectionContainer component="section">
      <Typography
        variant="h3"
        component="h2"
        fontSize="42px"
        textAlign="center"
      >
        Get In Touch
      </Typography>
      <Typography component="p" variant="p" fontSize="18px" textAlign="center">
        I am currently available for new opportunities. Send me an email and
        lets get started!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Link
          href={"mailto: hello@gerardosolis.dev"}
          underline="none"
          target="_blank"
          rel="noopener"
        >
          <PageButton btnText="Email" />
        </Link>
      </Box>
    </SectionContainer>
  );
}
const SectionContainer = styled(Box)(() => ({
  padding: "200px 0 200px ",
  paddingLeft: "10px",
  paddingRight: "10px"
}));
