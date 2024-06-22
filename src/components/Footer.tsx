const Footer = () => {
  return (
    <div className="bg-primary flex flex-col gap-10 bg-blue-500 py-16 items-center w-full lg:justify-around justify-center mt-24">

      <div className="grid grid-cols-1 mx-10 lg:grid-cols-3 md:grid-cols-3 gap-5 py-5">
        <div className="">
          <div>
            <h2 className="text-white text-lg font-medium">Contact</h2>
            <h3 className="w-5 font-bold h-[3px] my-1 bg-[#ffff]"></h3>
          </div>
          <div className="my-1 text-lg text-text_white  font-semibold">
            <p className="">hello@decgamingstudio.com</p>
            <p className="">Mo. 7990667314</p>
          </div>
        </div>
        <div className="">
          <div>
            <h2 className="text-white font-medium text-lg">Business</h2>
            <h3 className="w-5 font-bold h-[3px] my-1 bg-[#ffff]"></h3>
          </div>
          <div className="text-lg my-1 text-text_white  font-semibold">
            <p className="">Education</p>
            <a className="underline" href="https://www.deckidz.com/">
              AR Toys
            </a>
            <p className="">App & Game Development</p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="">
            <div>
              <h2 className="text-[#ffff] font-medium text-lg">Address</h2>
              <h3 className="w-5 font-bold h-[3px] my-1 bg-[#ffff]"></h3>
            </div>
            <div className="my-1 text-lg text-text_white   font-semibold">
              <p className="">C-230, Siddharth Excellence, opp D-mart,</p>
              <p className="">Vasana Road, Vadodara,</p>
              <p className="">Gujarat 390007 India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
