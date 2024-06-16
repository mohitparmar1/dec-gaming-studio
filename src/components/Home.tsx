import Img2 from "../assets/gaming-2.jpg";

const HomeComponent = () => {
  return (
    <div className="w-full h-screen lg:flex bg-[url('./assets/gaming-2.jpg')]">
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
        <img src={Img2} alt="gaming" className="w-1/2 h-full" />
      </div>
    </div>
  );
};

export default HomeComponent;
