import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import ConstructionIcon from "@mui/icons-material/Construction";
import { IconGitHub, IconLinkedin, IconTwitter, IconResume } from "../icons";
const navLinks = {
  navHomeLogoAlt: "G-Logo",
  navItems: [
    { title: "About", Icon: PersonOutlineIcon },
    { title: "Projects", Icon: CodeOutlinedIcon },
    { title: "Experience", Icon: ConstructionIcon },
    { title: "Skills", Icon: DiamondOutlinedIcon }
  ]
};
const resumeLink =
  "https://drive.google.com/file/d/1hMWhAVn3mAEYwy66EoIZb7kCzXpQXyzR/view?usp=sharing";
const introText = [
  { text: "Hello there,", variant: "h1" },
  { text: "I'm Gerardo Solis.", variant: "h2" },
  {
    text: "  I'm an engineer based in San Diego, California. I specialize in front  end web development.",
    variant: "p"
  }
];

const ucSanDiegoBootCamp =
  "https://extendedstudies.ucsd.edu/courses-and-programs/web-technologies-and-design";
const mthreeLink = "https://www.mthree.com/about/";
const LinkedIn = "https://www.linkedin.com/in/gerardo-a-solis/";

const socialMediaIcons = [
  { icon: IconGitHub, url: "https://github.com/Gerardo-S" },
  { icon: IconTwitter, url: "https://twitter.com/Gerardo_A_Solis" },
  { icon: IconLinkedin, url: LinkedIn },
  { icon: IconResume, url: resumeLink }
];

export {
  navLinks,
  resumeLink,
  introText,
  ucSanDiegoBootCamp,
  mthreeLink,
  LinkedIn,
  socialMediaIcons
};
