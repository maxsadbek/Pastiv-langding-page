import HeroImg from "../images/hero-img.png";

const Hero = () => {
  return (
    <div className="container m-auto lg:px-30 px-2 flex items-center justify-between">
      <div className="lg:w-[450px] w-[100%]">
        <h2 className="lg:text-[55px] text-[38px] font-semibold tracking-wide lg:leading-20 mb-5">
          Navigating the digital landscape for success
        </h2>
        <img src={HeroImg} alt="this is hero img " className="lg:hidden" />
        <p className=":lgtext-[19.5px] text-[17px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="lg:text-[19.5px] text-[18px] w-full border-2 bg-[#191A23] text-white px-7 py-3 mt-4 rounded-xl cursor-pointer">
          Book a consultation
        </button>
      </div>
      <img src={HeroImg} alt="this is hero img" className="hidden lg:block" />
    </div>
  );
}

export default Hero
