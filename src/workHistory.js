import WileyImage from "./assets/jobThumbnail-image/wiley-edge.jpg";
import RBCImage from "./assets/jobThumbnail-image/rbc.jpg";
import GLogo from "./assets/jobThumbnail-image/G-Logo.png";

const WorkHistory = [
  {
    image: GLogo,
    position: "Contract Web Developer",
    location: "Alianza Coachella Valley",
    url: "alianzacv.org",
    period: { start: "Nov 2021", end: "Present" },
    technologies: ["Next.js •", "TypeScript •", "Contentful •", "React"],
    description: [
      "Implemented and developed dashboard features using Next.js showcasing community science gathered data on the Salton Sea",
      "Utilized Next.js and Material-UI to create responsive landing pages for client",
      "Integrated Contentful CMS and provided technical support",
      "Pair programmed with other developers and participated in code reviews",
      "Appended additional water/air sensors and displayed measured output"
    ]
  },

  {
    image: WileyImage,
    position: "Fullstack Developer",
    location: "Wiley Edge",
    url: "https://www.wiley.com/edge/about/",
    period: { start: "Nov 2021", end: "June 2022" },

    technologies: ["React •", "MongoDB •", "NoSQL •", "GraphQL •", "JWT"],
    description: [
      "On board training program for frontend engineers. Topics covered include Git, Github, and REST paradigm",
      "Participated in Re-skill program for engineers involving latest technology used in industry such as the MERN stack and GraphQL",
      "Built fullstack applications using JWT tokens for authentication, and utilized Apollo client for fetching application data"
    ]
  },
  {
    image: RBCImage,
    position: "Materials Engineer/Quality Engineer",
    location: "RBC Bearings",
    url: "https://www.rbcbearings.com/",
    period: { start: "Nov 2017", end: "Nov 2020" },

    technologies: [
      "Microsoft Office •",
      "Microscope •",
      "Etching Chemicals •",
      "Hardness Tester"
    ],
    description: [
      "Develope and maintain procedures for heat treating processes and metallurgical evaluation",
      "Improved automation cell production output by implementing Lean Six Sigma principles",
      "Resolved interdepartmental conflicts by communicating issues to team of manufacturing engineers, design engineers, operators, inspectors, and customers on a daily basis",
      "Reviewed customer drawings and manufacturing planners to ensure they meet specifications and conform to manufacturing principles"
    ]
  }
];

export default WorkHistory;
