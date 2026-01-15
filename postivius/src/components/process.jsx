import { useState } from "react";
import { CiCircleMinus } from "react-icons/ci";

const Process = () => {
    const [isDropdown, setIsDropdown] = useState(false)

    const dropToggle = () =>{
        setIsDropdown(!isDropdown)
    }

    return (
      <div className="container px-30">
        <br />
        <div onClick={dropToggle}>
          <div
            className={`flex items-center justify-between bg-[#fff] px-12 py-9 rounded-[30px] border-2 border-b-[5px] ${
              isDropdown ? "bg-[#B9FF66] h-[300px]" : "bg-white h-auto"
            }`}
          >
            <div className="flex items-center gap-4">
              <h2 className="text-5xl font-semibold">01</h2>
              <p className="text-3xl">Conculation</p>
            </div>
            <p className="text-[40px] text-black">
              <CiCircleMinus />
            </p>
          </div>
        </div>
        <br />
        <div>
          <div className="flex items-center justify-between bg-[#fff] px-12 py-9 rounded-[30px] border-2 border-b-[5px]">
            <div className="flex items-center gap-4">
              <h2 className="text-5xl font-semibold">02</h2>
              <p className="text-3xl">Research and Strategy Development</p>
            </div>
            <p className="text-[40px] text-black">
              <CiCircleMinus />
            </p>
          </div>
        </div>{" "}
        <br />
        <div>
          <div className="flex items-center justify-between bg-[#fff] px-12 py-9 rounded-[30px] border-2 border-b-[5px]">
            <div className="flex items-center gap-4">
              <h2 className="text-5xl font-semibold">03</h2>
              <p className="text-3xl">Implementation</p>
            </div>
            <p className="text-[40px] text-black">
              <CiCircleMinus />
            </p>
          </div>
        </div>{" "}
        <br />
        <div>
          <div className="flex items-center justify-between bg-[#fff] px-12 py-9 rounded-[30px] border-2 border-b-[5px]">
            <div className="flex items-center gap-4">
              <h2 className="text-5xl font-semibold">04</h2>
              <p className="text-3xl">Monitoring and Optimization</p>
            </div>
            <p className="text-[40px] text-black">
              <CiCircleMinus />
            </p>
          </div>
        </div>{" "}
        <br />
        <div>
          <div className="flex items-center justify-between bg-[#fff] px-12 py-9 rounded-[30px] border-2 border-b-[5px]">
            <div className="flex items-center gap-4">
              <h2 className="text-5xl font-semibold">05</h2>
              <p className="text-3xl">Reporting and Communication</p>
            </div>
            <p className="text-[40px] text-black">
              <CiCircleMinus />
            </p>
          </div>
        </div>{" "}
        <br />
        <div>
          <div className="flex items-center justify-between bg-[#fff] px-12 py-9 rounded-[30px] border-2 border-b-[5px]">
            <div className="flex items-center gap-4">
              <h2 className="text-5xl font-semibold">06</h2>
              <p className="text-3xl">Continual Improvement</p>
            </div>
            <p className="text-[40px] text-black">
              <CiCircleMinus />
            </p>
          </div>
        </div>
        {isDropdown && (
          <div>
            <p>
              During the initial consultation, we will discuss your business
              goals and objectives, target audience, and current marketing
              efforts. This will allow us to understand your needs and tailor
              our services to best fit your requirements.
            </p>
          </div>
        )}
      </div>
    );
};

export default Process;
