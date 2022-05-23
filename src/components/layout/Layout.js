import NavBar from "../nav/NavBar";
import Footer from "../footer/footer";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
