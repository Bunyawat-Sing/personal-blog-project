import "./App.css";

function NavBar() {
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

function HeroSection() {
  return (
    <div className="flex justify-center md:h-[529px] w-full">
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-center md:gap-12 md:max-w-[1200px]">
        {/* Hero Header */}
        <div className="flex flex-col justify-center text-center  w-[343px] h-[184px] mt-[40px] md:w-[347] md:h-[180px] md:mt-0 md:text-right">
          <h1 className="text-[40px] font-semibold leading-[48px] md:leading-[60px] md:text-[52px]">
            Stay
            <br className="hidden md:block" /> Informed,
            <br /> Stay Inspired
          </h1>
          <p className="text-[16px] font-medium leading-[24px] p-2">
            Discover a World of Knowledge at Your Fingertips. Your Daily Dose of
            Inspiration and Information.
          </p>
        </div>
        {/* Hero Image */}
        <img
          src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg"
          className="md:w-1/3 md:max-w-[343px] w-[343px] h-[470px] object-cover rounded-2xl"
        />

        {/* Hero Content */}
        <div className="flex flex-col justify-between max-w-[343px] h-[284px] mt-[30px] mb-[60px] md:mt-0">
          <div>
            <p className="text-[12px]">-Author</p>
            <h1 className="text-[24px] font-semibold">Thompson P.</h1>
          </div>

          <p className="text-[16px] font-medium leading-[24px]">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="text-[16px] font-medium leading-[24px]">
            When i’m not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
    </>
  );
}

export default App;
