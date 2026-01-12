import { IoIosMenu } from "react-icons/io";
import Logo from "./../images/icons/logo.svg";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [isOPenMenu, setIsOpenMenu] = useState(false);

  const menuToggle = () => {
    setIsOpenMenu(!isOPenMenu);
    console.log(isOPenMenu);
  };

  return (
    <div className="container m-auto flex justify-between lg:px-30 px-2 py-6 items-center">
      <img
        src={Logo}
        alt="this is logo"
        className="lg:w-auto w-[160px] cursor-pointer"
      />
      <div className="flex gap-6">
        <ul className="hidden items-center gap-6 text-[18px] lg:flex">
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Use Cases</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
        <p onClick={menuToggle} className="lg:hidden block text-[30px]">
          <IoIosMenu />
        </p>
        <button className="px-5 py-3 border-2 rounded-xl text-[18px] cursor-pointer active:translate-y-0.5 duration-200 hidden lg:block">
          Request a quote
        </button>
      </div>

      {isOPenMenu && (
        <div className="fixed top-0 right-0 h-full w-[70%] bg-white p-4 flex flex-col items-center justify-center shadow-lg z-50">
          {" "}
          <button
            onClick={menuToggle}
            className="absolute top-5 right-5 text-black text-4xl hover:bg-gray-100 p-2 rounded-full transition-all"
            aria-label="Close menu"
          >
            <IoCloseOutline />
          </button>
          <nav>
            <ul className="absolute gap-6 text-center left-12 top-30 md:left-40 ">
              {["About us", "Services", "Use Cases", "Pricing", "Blog"].map(
                (item) => (
                  <li
                    key={item}
                    className="mb-5 text-2xl font-medium px-10 text-center cursor-pointer pb-2 p-2 transition-colors md:text-3xl w-full hover:bg-gray-200 max-w-full rounded-2xl"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
