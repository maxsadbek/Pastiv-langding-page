import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const Process = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const steps = [
    {
      id: "01",
      title: "Consultation",
      desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts.",
    },
    {
      id: "02",
      title: "Research and Strategy Development",
      desc: "We conduct deep research into your industry competitors and target market.",
    },
    {
      id: "03",
      title: "Implementation",
      desc: "Our team starts executing the agreed-upon strategy using best practices.",
    },
    {
      id: "04",
      title: "Monitoring and Optimization",
      desc: "We track performance metrics and adjust the strategy for better results.",
    },
    {
      id: "05",
      title: "Reporting and Communication",
      desc: "Regular updates and detailed reports on your campaign's progress.",
    },
    {
      id: "06",
      title: "Continual Improvement",
      desc: "We constantly look for new opportunities to scale and grow your business.",
    },
  ];

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 md:px-30 py-10">
      {steps.map((step, index) => (
        <div key={step.id} className="mb-6">
          <div
            onClick={() => toggleDropdown(index)}
            className={`cursor-pointer px-12 py-9 rounded-[30px] border-2 border-b-[5px] border-black transition-all duration-300 ${
              activeIndex === index ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h2 className="text-4xl md:text-5xl font-semibold">
                  {step.id}
                </h2>
                <p className="text-xl md:text-3xl font-medium">{step.title}</p>
              </div>
              <div className="text-[40px] text-black">
                {activeIndex === index ? <CiCircleMinus /> : <CiCirclePlus />}
              </div>
            </div>

            {activeIndex === index && (
              <div className="border-t-2 border-black mt-4 pt-4 animate-fadeIn">
                <p className="text-lg leading-relaxed">{step.desc}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Process;
