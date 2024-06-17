import videoSourc from "../assets/4354243-uhd_3840_2160_25fps.mp4";
import Img3 from "../assets/gaming-3.jpg";
const HomeComponent = () => {
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoSourc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex  w-full h-1/2  items-center justify-start mx-auto my-24">
        <div
          className="flex flex-row w-1/2 h-full
         justify-center gap-4 lg:py-10 md:py-5  mx-5 px-10 lg:bg-white md:bg-white lg:bg-opacity-70 rounded-md"
        >
          <div className="flex flex-col gap-5 mt-24 mx-10 lg:my-10">
            <h1 className="text-2xl lg:text-3xl font-bold text-white md:text-black lg:text-zinc-900">
              DEC Gaming Studio Pvt Ltd
            </h1>
            <p className="lg:text-xl">
              An Environment that is connecting Creative, Professional Experts
            </p>
            <button className="text-black bg-white hover:bg-black hover:text-white border-2 mt-5  rounded-md w-36 py-1">
              Product
            </button>
          </div>
          <div>
            <img src={Img3} alt="logo" className="w-[400px] h-[300px] object-fill my-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
