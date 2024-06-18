const About = () => {
  return (
    <div className="w-full h-screen ">
      <div className="grid grid-cols-1 lg:grid-cols-3 col w-full h-full">
        <div className="flex flex-col my-24 items-center">
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
            trade-promotion and optimizes distribution, pricing, and assortment.
          </p>
        </div>
        <div className="flex flex-col my-24 items-center">
          <h1 className="font-bold text-3xl text-center mb-5 text-blue-500">
            Our Vision
          </h1>
          <p className="w-3/4 text-start tracking-normal leading-8">
            ​Gaming brings excitement and enjoyment to the lives of millions of
            people every day. Our mission is to bring innovation and inspiration
            to every gamer, to unlock new experiences and to fuel their favorite
            passion. Closer to 'You' as the Customer:- DEC does not believe in a
            one-size-fits-all approach. We collaborate closely with clients to
            develop tailored, flexible Gaming solutions designed to suit
            specific needs and maximize results. The solutions we develop are
            also scalable and continuously evolving to meet changing demands.
          </p>
        </div>
        <div className="flex flex-col my-24 items-center">
          <h1 className="font-bold text-3xl text-center mb-5 text-blue-500">
            Technology
          </h1>
          <p className="w-3/4 text-start tracking-normal leading-8">
            DEC Gaming Studio is the home of AR/VR/XR Apps and Game Makers. We
            use UnityEngine for Apps & Game Development that allowing developers
            to create within a single code base and then publish them to run
            natively across multiple platforms including Android, iOS, HTML5,
            PS4, Xbox One, Windows Desktop, OS X, Ubuntu, Windows UWP.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
