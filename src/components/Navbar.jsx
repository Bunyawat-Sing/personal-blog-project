import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavBar() {
  return (
    <nav className="z-50 sticky top-0 flex justify-center font-poppins w-screen h-[48px] md:h-[80px] border border-solid border-[#DAD6D1] bg-[#F9F8F6]">
      {/* Logo Section */}
      <div className="flex items-center justify-between w-[1200px]">
        <img
          src="./src/assets/img/hh.svg"
          alt="nav-icon"
          className="ml-[20px] w-[22px] h-[11px] md:w-[41px] md:h-[22px] md:ml-[44px]"
        />
        {/* Navigation Menu Buttons*/}
        <DropdownMenu>
          <DropdownMenuTrigger className="md:hidden mr-[20px] outline-none">
            <img
              src="./src/assets/img/Vector.svg"
              alt="nav-menu"
              className=" w-[18px] h-[12px]"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col justify-center items-center gap-6 w-screen h-[200px] text-center font-medium  md:hidden mt-[12px]">
            <a
              href="/login"
              className="py-3 w-[327px] h-[48px] border border-solid border-[#75716B] rounded-full"
            >
              Log in
            </a>
            <a
              href="/signup"
              className="py-3 w-[327px] h-[48px] bg-[#26231E] rounded-full text-[#FFFFFF]"
            >
              Sign up
            </a>
          </DropdownMenuContent>
        </DropdownMenu>

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
