import Layout from "../components/layout/Layout";
import { Box } from "@mui/material";
import Intro from "./sections/Intro";
import About from "./sections/About";
import BadgeList from "./sections/BadgeList";
import Contacts from "./sections/Contacts";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import getRepos from "../lib/api/gitHubAPI";
import projectImages from "../components/assetImages";

const reposToDisplay = [
  "sset-website",
  "pokeBase",
  "bracket-explore",
  "TheGrandUniverse",
  "v1"
];
const responsiveSize = [6, 6, 4, 4, 4];

export default function Home({ repos }) {
  const filteredRepos = repos.filter((repo) => {
    return reposToDisplay.includes(repo.title);
  });

  for (let i = 0; i < responsiveSize.length; i++) {
    filteredRepos[i].size = responsiveSize[i];
    filteredRepos[i].screenshot = projectImages[i];
  }
  return (
    <Layout>
      <Box
        sx={{
          minWidth: "375px",
          padding: 4,
          margin: "auto",
          width: "75%"
        }}
        fixed
      >
        <Intro />
        <About />
        <Projects repos={filteredRepos} />
        <Experience />
        <BadgeList />
        {/* TODO add Spotify music */}
        {/* <Music /> */}
        <Contacts />
      </Box>
    </Layout>
  );
}
export const getStaticProps = async () => {
  const repos = await getRepos();
  if (!repos) {
    return {
      notFound: true
    };
  }
  return {
    props: {
      repos
    }
  };
};
