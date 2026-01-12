import { IoIosMenu } from "react-icons/io";
import Logo from "./../images/icons/logo.svg";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
  const [isOPenMenu, setIsOpenMenu] = useState(false)

  const menuToggle = () =>{
    setIsOpenMenu(!isOPenMenu)
    console.log(isOPenMenu);

  }

  return (
    <div className="container m-auto flex justify-between lg:px-30 px-2 py-6 items-center">
      <img src={Logo} alt="this is logo" className="lg:w-auto w-[160px] cursor-pointer" />
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
        <div className="fixed inset-0 z-50 p-4 bg-white">
          <button
            onClick={menuToggle}
            className="text-black text-3xl cursor-pointer hover:opacity-70 transition-opacity absolute right-3 p-1 hover:bg-gray-300 rounded-2xl duration-200 ease-in-out"
            aria-label="Close menu"
          >
            <IoCloseOutline />
          </button>
          d
        </div>
      )}
    </div>
  );
};

export default Header;
