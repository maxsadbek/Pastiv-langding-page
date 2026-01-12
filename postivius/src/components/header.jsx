import Logo from "./../images/icons/logo.svg"

const header = () => {
  return (
    <div className="container m-auto flex justify-between lg:px-30 px-2 py-10">
      <img src={Logo} alt="this is logo" />
      <div className="flex gap-6">
        <ul className="flex items-center gap-6 text-[18px]">
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
        <button className="px-5 py-1.5 border-2 rounded-xl text-[18px] cursor-pointer active:translate-y-0.5 duration-200">Request a quote</button>
      </div>
    </div>
  );
}

export default header
