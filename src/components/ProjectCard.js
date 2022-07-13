import Image from "next/image";
import { styled, AccordionDetails } from "@mui/material";
import { Typography, Box, Paper, Link } from "@mui/material";
import { Card, CardMedia, CardActionArea } from "@mui/material";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordion from "@mui/material/Accordion";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import { IconGitHub, IconExternal } from "./icons";
import titleCase from "../lib/titleCase";

export default function ProjectCard({
  cardDetails: {
    title,
    description,
    technologies,
    gitURL,
    deployedURL,
    screenshot
  }
}) {
  const formatTitle = titleCase(title);
  return (
    <CardWrapper className="projectCard" elevation={5}>
      <Card className="projectCard" elevation={0}>
        <StyledCardActionArea>
          <Link href={deployedURL} target="_blank" rel="noopener">
            <StyledProjectTitle className="cardTitle" component="h2">
              {formatTitle}
            </StyledProjectTitle>
            <CardMedia>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "300px"
                }}
              >
                <Image
                  src={screenshot}
                  blurDataURL={screenshot.blurDataURL}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  alt="place holder"
                />
              </Box>
            </CardMedia>
          </Link>
        </StyledCardActionArea>
        <Accordion>
          <AccordionSummary
            aria-controls={`panel1a-content-${title}`}
            id={`panel1a-header-${title}`}
          >
            <Typography sx={{ fontSize: "14px" }}>View Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {title == "sset-website" ? (
              <DescriptionText>
                {description} Refactored to TypeScript and integrated netlify
                cms.
              </DescriptionText>
            ) : (
              <DescriptionText>{description}</DescriptionText>
            )}
          </AccordionDetails>
        </Accordion>
      </Card>

      <CardFooter component="footer">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "80%"
          }}
        >
          {technologies.map((item, id) => (
            <Typography
              component="p"
              key={id}
              sx={{ color: "#8892b0 ", mr: "1em" }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Box>
          <StyledSocial
            sx={{ marginRight: 1 }}
            href={gitURL}
            underline="none"
            target="_blank"
            rel="noopener"
          >
            {IconGitHub}
          </StyledSocial>
          <StyledSocial
            href={deployedURL}
            underline="none"
            target="_blank"
            rel="noopener"
          >
            {IconExternal}
          </StyledSocial>
        </Box>
      </CardFooter>
    </CardWrapper>
  );
}

const CardWrapper = styled(Paper)(({ theme }) => ({
  color: "white",
  transition: "transform 300ms",
  "&:hover,&:focus .projectCard:not(:hover)": {
    transform: "translateY(-4px)"
  }
}));
const StyledCardActionArea = styled(CardActionArea)(({ theme }) => ({
  "&:hover ": {
    " .cardTitle": { color: theme.palette.secondary.main }
  }
}));
const StyledProjectTitle = styled(Typography)(() => ({
  color: "#ccd6f6",
  textAlign: "center",
  fontSize: "22px",
  transition: "color 300ms"
}));

const DescriptionText = styled(Typography)(() => ({
  fontSize: "14px",
  color: "#C1BDDB"
}));

const CardFooter = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0.5),
  display: "flex",
  justifyContent: "space-between",
  margin: ".5rem .5rem 0 0.5rem"
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,

  "&:not(:last-child)": {
    borderBottom: 0
  },
  "&:before": {
    display: "none"
  },
  transition: "color 300ms"
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <DoubleArrowSharpIcon sx={{ fontSize: "1.2rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  color: "white",
  transition: "color 300ms",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)"
  },
  "&:hover": {
    color: theme.palette.secondary.main,
    svg: {
      color: theme.palette.secondary.main
    }
  }
}));

const StyledSocial = styled(Link)(({ theme }) => ({
  cursor: "pointer",
  svg: {
    height: "20px",
    " &:hover, &:focus": {
      stroke: theme.palette.secondary.main
    }
  }
}));
