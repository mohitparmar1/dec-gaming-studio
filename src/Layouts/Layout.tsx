import About from "../components/About";
import Footer from "../components/Footer";
import HomeComponent from "../components/Home";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="bg-white flex flex-col h-screen">
      <Navbar />
      <HomeComponent />
      <About />
    </div>
  );
};

export default Layout;
