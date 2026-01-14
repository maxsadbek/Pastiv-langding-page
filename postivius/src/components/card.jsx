import CardData from "./../data/cardData";
import ButtonIcon from "../images/icons/icon.svg"
import { IconBase } from "react-icons";

const Card = () => {
  return (
    <div className="container m-auto lg:px-30 px-2 mt-17">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-10">
        <h2 className="px-3 py-0.5 bg-[#B9FF66] text-[30px] rounded-[7px] tracking-wide">
          Services
        </h2>
        <p className="px-1 py-1.5 lg:w-[500px] text-[17px]">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {CardData.map((item) => {
          return (
            <div
              key={item.id}
              className={`p-10 border border-b-4 border-black rounded-[45px] flex justify-between items-center h-[300px] bg-[${item.bgColor}] `}
            >
              <div>
                <h3 className="text-[26px] font-medium bg-[#B9FF66] inline-block px-1 rounded-sm">
                  {item.text1}
                </h3>
                <br />
                <h3 className="text-[26px] font-medium bg-[#B9FF66] inline-block px-1 rounded-sm">
                  {item.text2}
                </h3>
                <div className="mt-9 flex items-center gap-4">
                  <img src={ButtonIcon} alt="" />
                  <p className={`text-[${item.textColor}] text-[17px] cursor-pointer`}>Learn more</p>
                </div>
              </div>

              <div className="w-[190px]">
                <img
                  src={item.img}
                  alt={item.text1}
                  className="w-full object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
