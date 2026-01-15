import CaseData from "../data/caseCard";

const Case = () => {
  return (
    <div className="container m-auto p-5 lg:p-30">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-10">
        <h2 className="px-3 py-0.5 bg-[#B9FF66] text-[25px] lg:text-[30px] rounded-[7px] tracking-wide font-medium">
          Case Studies
        </h2>
        <p className="max-w-[500px] text-[16px] lg:text-[17px]">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="bg-[#191A23] p-10 py-15 rounded-[40px] flex overflow-x-auto no-scrollbar gap-8 justify-between">
        {CaseData.map((item, index) => {
          return (
            <div
              key={item.id}
              className={`w-[300px] flex-shrink-0 flex flex-col justify-between
                ${index !== 0 ? "lg:border-l-2 lg:border-white lg:pl-10" : ""}`}
            >
              <p className="text-white text-[16px] lg:text-[18px] leading-relaxed">
                {item.text}
              </p>

              <div className="text-[#B9FF66] mt-6 flex items-center gap-3 transition-all cursor-pointer">
                <button className="cursor-pointer font-medium">
                  {item.button}
                </button>
                <span className="text-xl">{item.optRightIcon}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Case;
