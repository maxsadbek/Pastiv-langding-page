import Contacts from "./../images/contact.png"

const Contact = () => {
  return (
    <div className="container mx-auto lg:px-10 px-2 flex items-center bg-[#F3F3F3] lg:max-w-[1280px] w-full rounded-[40px] mt-22 justify-between h-[350px] relative">
      <div>
        <h3 className="text-[28px] font-semibold mb-10">
          Let’s make things happen
        </h3>
        <p className="lg:w-[400px] w-full">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>
        <button className="mt-7 px-6 py-3 text-[17px] rounded-xl bg-[#191A23] text-[#fff] lg:w-auto">
          Get your free proposal
        </button>
      </div>
      <img
        src={Contacts}
        alt="this is contact img"
        className="absolute right-0 lg:block hidden"
      />
    </div>
  );
}

export default Contact
