export function NavBar() {
  return (
    <nav className="sticky top-0 flex justify-center w-full h-[48px] md:h-[80px] border border-solid border-[#DAD6D1] bg-[#F9F8F6]">
      {/* Logo Section */}
      <div className="flex items-center justify-between w-[1200px]">
        <img
          src="./src/assets/img/hh.svg"
          alt="nav-icon"
          className="ml-[20px] w-[22px] h-[11px] md:w-[41px] md:h-[22px] md:ml-[44px]"
        />
        {/* Navigation Menu Buttons*/}
        <button type="button" className="md:hidden mr-[20px]">
          <img
            src="./src/assets/img/Vector.svg"
            alt="nav-menu"
            className=" w-[18px] h-[12px]"
          />
        </button>

        {/* Log in and Sign up Buttons */}
        <div className="hidden md:flex md:items-center md:justify-between w-[276px] mr-[20px] md:mr-[44px]">
          <button
            type="button"
            className="w-[127px] h-[48px] border border-solid border-[#75716B] rounded-full"
          >
            Log in
          </button>

          <button
            type="button"
            className="w-[141px] h-[48px] bg-[#26231E] rounded-full text-[#FFFFFF]"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}
