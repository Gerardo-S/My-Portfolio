import WileyImage from "./assets/jobExp/wiley-edge.jpg";
import RBCImage from "./assets/jobExp/rbc.jpg";
import GLogo from "./assets/jobExp/G-Logo.png";

const jobContent = [
  {
    image: GLogo,
    position: "Frontend Developer",
    location: "Freelance",
    url: " https://www.gerardosolis.dev/",
    period: { start: "Nov 2020", end: "Present" },
    technologies: ["Next.js •", "TypeScript •", "React"],
    description: [
      "Create landing pages for clients such as personal portfolios and CMS integrations, primarily built using Next.js as frontend framework",
      "Communicate with clients retrieving webpage criteria and integrating them as requested."
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
      "Resolved interdepartmental conflicts by communicating issues to team of manufacturing engineers, design engineers, operators, inspectors, and customers on a daily basis"
    ]
  }
];

export default jobContent;
