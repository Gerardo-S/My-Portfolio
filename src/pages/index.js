import Layout from "../components/layout/Layout";
import { Container } from "@mui/material";
import Intro from "./sections/Intro";
import About from "./sections/About";
import BadgeList from "./sections/BadgeList";
import Contacts from "./sections/Contacts";
import Experience from "./sections/Experience";
// import Music from "./sections/Music";
import Projects from "./sections/Projects";

export default function Home() {
  return (
    <Layout>
      <Container sx={{ minWidth: "375px", padding: 4 }} fixed>
        <Intro />
        <About />
        <Projects />
        <Experience />
        <BadgeList />
        {/* TODO add Spotify music */}
        {/* <Music /> */}
        <Contacts />
      </Container>
    </Layout>
  );
}
