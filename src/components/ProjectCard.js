import Image from "next/image";
import { styled, AccordionDetails } from "@mui/material";
import { Typography, Box, Paper, Link } from "@mui/material";
import { Card, CardMedia, CardActionArea } from "@mui/material";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordion from "@mui/material/Accordion";
import DoubleArrowSharpIcon from "@mui/icons-material/DoubleArrowSharp";
import { IconGitHub, IconExternal } from "./icons";
const ImageSrc =
  "https://mui.com/static/images/cards/contemplative-reptile.jpg";

export default function ProjectCard() {
  return (
    <CardWrapper className="projectCard" elevation={5}>
      <Card className="projectCard" elevation={0}>
        <StyledCardActionArea>
          <StyledProjectTitle className="cardTitle" component="h2">
            Title
          </StyledProjectTitle>
          <CardMedia>
            <Box sx={{ position: "relative", width: "100%", height: "250px" }}>
              <Image
                src={ImageSrc}
                blurDataURL={ImageSrc}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                alt="place holder"
              />
            </Box>
          </CardMedia>
        </StyledCardActionArea>
        <Accordion>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography sx={{ fontSize: "14px" }}>View Description</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DescriptionText>
              Description will appear here: Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. In mattis blandit tortor, ut sagittis
              massa feugiat a. Integer ligula sapien, rutrum vel lacus vel,
              varius semper lorem. Donec venenatis erat et elit facilisis, sed
              pharetra sapien venenatis. Ut pretium luctus velit, a rhoncus arcu
              semper a.
            </DescriptionText>
          </AccordionDetails>
        </Accordion>
      </Card>

      <CardFooter component="footer">
        <Typography component="p" sx={{ color: "#8892b0 " }}>
          technologies{" "}
        </Typography>
        <Box>
          <StyledSocial
            sx={{ marginRight: 1 }}
            href={"/"}
            underline="none"
            target="_blank"
            rel="noopener"
          >
            {IconGitHub}
          </StyledSocial>
          <StyledSocial
            href={"/"}
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
  padding: theme.spacing(1),
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

const CardFooter = styled(Box)(() => ({
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
