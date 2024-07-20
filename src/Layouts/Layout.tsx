import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import HomeComponent from "../components/Home";
import Navbar from "../components/Navbar";

type props = {
  children: React.ReactNode;
};

const Layout = ({ children }: props) => {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Navbar />
      {children}
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Layout;
