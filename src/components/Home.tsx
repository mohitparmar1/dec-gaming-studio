import videoSourc from "../assets/4354243-uhd_3840_2160_25fps.mp4";
import Img3 from "../assets/gaming-3.jpg";
import Carousel from "../utils/Carousal";
const HomeComponent = () => {
  const images = [
    "https://images.unsplash.com/photo-1560253023-3ec5d502959f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560252719-59e35a3bbc6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1600861194942-f883de0dfe96?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <>
      <div className="relative w-full h-screen overflow-hidden bg-img bg-cover">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={videoSourc} type="video/mp4" />
        </video>
        <div className="flex flex-col text-3xl md:text-4xl lg:text-5xl gap-3 py-10 px-6 md:py-20 md:px-20 lg:py-40 lg:px-44 font-sans text-white ">
          <span className="text-[#ffff] font-bold underline ">
            DEC Gaming Studio
          </span>
          <p>
            An Environment that is
            <span className="border-b-4 ml-2 md:border-b-6 lg:border-b-8 border-[#7F93FF]">
              Connecting
            </span>{" "}
            Creative, Professional Experts
          </p>
          <div>
            <p className="text-lg md:text-xl lg:text-2xl font-thin mt-3">
              Finding new horizons for visionaries to accelerate their
              innovation and progress.
            </p>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
              <button className="bg-[#6A35FF] text-base md:text-xl text-white font-bold py-2 px-4 md:py-2 md:px-6 rounded-md cursor-pointer">
                Explore Our Services
              </button>
              <button className="border-2 border-[#6881FF] text-white text-base md:text-xl rounded-md py-2 px-4 md:py-2 md:px-6 cursor-pointer">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full my-24">
        <div
          id="about"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-full"
        >
          <div className="flex flex-col my-10 items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 my-2 w-10 h-10 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <h1 className="font-bold text-3xl text-center mb-5 text-blue-500">
              Our Story
            </h1>
            <p className="w-3/4 text-start tracking-normal leading-8">
              <span className="text-lg font-semibold">
                Leading Edge Technology:
              </span>{" "}
              DEC teams are armed with the industry's most innovative game
              platform technology for collecting, analyzing, and delivering data
              in an actionable format. Building and delivering Cross-platform
              solutions help the client turn around faster and more intelligent
              with the right consumer data. Analytics, Insights & Intelligence
              made by the teams at DEC helps the client make proactive,
              insight-based recommendations at the execution level. Gamification
              data and User behavior generates the effectiveness of
              trade-promotion and optimizes distribution, pricing, and
              assortment.
            </p>
            <hr />
          </div>
          <div className="flex flex-col my-10 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 my-2 w-10 h-10 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
              />
            </svg>

            <h1 className="font-bold text-3xl text-center mb-5 text-blue-500">
              Our Vision
            </h1>
            <p className="w-3/4 text-start tracking-normal leading-8">
              ​Gaming brings excitement and enjoyment to the lives of millions
              of people every day. Our mission is to bring innovation and
              inspiration to every gamer, to unlock new experiences and to fuel
              their favorite passion. Closer to 'You' as the Customer:- DEC does
              not believe in a one-size-fits-all approach. We collaborate
              closely with clients to develop tailored, flexible Gaming
              solutions designed to suit specific needs and maximize results.
              The solutions we develop are also scalable and continuously
              evolving to meet changing demands.
            </p>
            <hr />
          </div>
          <div className="flex flex-col my-10 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-10 my-2 w-10 h-10 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
              />
            </svg>

            <h1 className="font-bold text-3xl text-center mb-5 text-blue-500">
              Technology
            </h1>
            <p className="w-3/4 text-start tracking-normal leading-8">
              DEC Gaming Studio is the home of AR/VR/XR Apps and Game Makers. We
              use UnityEngine for Apps & Game Development that allowing
              developers to create within a single code base and then publish
              them to run natively across multiple platforms including Android,
              iOS, HTML5, PS4, Xbox One, Windows Desktop, OS X, Ubuntu, Windows
              UWP.
            </p>
          </div>
        </div>
      </div>
      <div
        id="career"
        className="flex  flex-col justify-center items-center mx-10"
      >
        <div className="flex items-center gap-4 text-center mb-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-9 my-3 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
            />
          </svg>
          <h1 className="text-3xl font-bold text-blue-500 mr-14">Careers</h1>
        </div>
        <div className="flex flex-col  flex-1 lg:flex-row lg:justify-around lg:px-24 lg:py-24">
          <div className="flex flex-col gap-10 py-5">
            <h2 className="font-bold text-xl text-blue-500">
              <a
                href="https://5c5bcaaebf931.site123.me/career/unity-game-developer"
                target="_blank"
                className="underline"
              >
                AR Developer:
              </a>{" "}
              2 to 5 years Exp. - Remote Work
            </h2>
            <p className="tracking-wide my-3">
              DEC Gaming Studio is looking for an AR Developer interested in
              creating fulfilling, interactive AR experiences for Multiplayer.
              DEC Gaming Studio is an App & Game Development Company based in
              Vadodara.
            </p>
            <ul className="list-decimal mx-10">
              <li> Creating games in Unity</li>
              <li>
                Working on games from the concept to design to art to
                development stage so getting exposure to the entire lifecycle of
                games
              </li>
              <li>
                Integrating analytics and ads and also being involved with the
                analytics team to understand what can be changed in the games to
                increase user experience and retention
              </li>
            </ul>
            <p className="">
              Send your CV to '
              <a
                href="mailto:jobs@decgamingstudio.com"
                className="font-bold cursor-pointer"
              >
                jobs@decgamingstudio.com
              </a>
              '
            </p>
          </div>
          <Carousel images={images} autoPlayInterval={3000} />
        </div>
      </div>
    </>
  );
};

export default HomeComponent;
