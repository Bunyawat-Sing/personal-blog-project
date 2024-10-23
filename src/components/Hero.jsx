export function HeroSection() {
  return (
    <div className="flex justify-center md:h-[529px] w-screen font-poppins">
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-center md:justify-center md:gap-12 md:max-w-[1200px]">
        {/* Hero Header */}
        <div className="flex flex-col justify-center text-center  w-[343px] h-[184px] mt-[40px] md:w-[347px] md:h-[180px] md:gap-5 md:mt-0 md:text-right">
          <h1 className="text-[40px] font-semibold leading-[48px] md:leading-[60px] md:text-[52px] text-[#26231E]">
            Stay
            <br className="hidden md:block" /> Informed,
            <br /> Stay Inspired
          </h1>
          <p className="text-[16px] font-medium leading-[24px] p-2 text-[#75716B]">
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
            <p className="text-[12px] text-[#75716B]">-Author</p>
            <h1 className="text-[24px] font-semibold text-[#26231E]">
              Thompson P.
            </h1>
          </div>

          <p className="text-[16px] font-medium leading-[24px] text-[#75716B]">
            I am a pet enthusiast and freelance writer who specializes in animal
            behavior and care. With a deep love for cats, I enjoy sharing
            insights on feline companionship and wellness.
          </p>
          <p className="text-[16px] font-medium leading-[24px] text-[#75716B]">
            When i’m not writing, I spends time volunteering at my local animal
            shelter, helping cats find loving homes.
          </p>
        </div>
      </div>
    </div>
  );
}
