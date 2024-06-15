import Img1 from "../assets/gaming-1.jpg";
import Img2 from "../assets/gaming-2.jpg";
import Img3 from "../assets/gaming-3.jpg";
import Img4 from "../assets/gaming-4.jpg";
import Slider from "react-slick";
import { Carousel } from "@material-tailwind/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeComponent = () => {
  const data = [
    {
      img: Img1,
      index: 1,
    },
    {
      img: Img2,
      index: 2,
    },
    {
      img: Img3,
      index: 3,
    },
    {
      img: Img4,
      index: 4,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: true,
  };
  return (
    <div className="w-full h-screen lg:flex">
      <div className="flex mx-auto my-24 w-full">
        <div className="flex flex-col justify-center gap-4 py-10 mx-5 px-10">
          <h1 className="text-xl lg:text-4xl font-bold ">
            DEC Gaming Studio Pvt Ltd
          </h1>
          <p className="lg:text-xl">
            An Environment that is connecting Creative, Professional Experts
          </p>
          <button className="text-black hover:bg-black hover:text-white border-2 mt-5 border-black rounded-md w-36 py-1 ">
            Product
          </button>
        </div>
        {/* <img src={Img1} alt="gaming" className="w-auto h-auto lg:w-[400px] " /> */}
    
 
    <Carousel className="rounded-xl">
      <img
        src={Img1}
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src={Img2}
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src={Img3}
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src={Img4}
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>

      </div>
    </div>
  );
};

export default HomeComponent;
