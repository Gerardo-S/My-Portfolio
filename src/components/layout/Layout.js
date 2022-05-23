import NavBar from "../navBar/NavBar";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
