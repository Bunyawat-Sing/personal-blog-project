import { Linkedin, Github, Mail } from "lucide-react";
export function Footer() {
  return (
    <footer className="flex flex-row justify-center items-center w-full gap-6 h-[152px] md:h-[144px] bg-gray-100 font-poppins">
      <div className="flex flex-col justify-center items-center md:flex-row md:justify-between w-[226px] md:w-[1200px]">
        <div className="flex items-center justify-between w-[226px] md:ml-[44px]">
          <h1 className="text-[16px] font-medium leading-[24px] text-[#43403B]">
            Get in touch
          </h1>
          <div className="flex gap-5">
            <div className="flex flex-col justify-center items-center bg-black w-[24px] h-[24px] rounded-full">
              <a href="https://linkedin.com" target="_blank">
                <Linkedin className="text-white w-[16px] h-[16px]" />
              </a>
            </div>
            <div className="flex flex-col items-center justify-end bg-black w-[24px] h-[24px] rounded-full">
              <a href="https://github.com" target="_blank">
                <Github className="text-white w-[20px] h-[20px]" />
              </a>
            </div>
            <div className="flex flex-col justify-center items-center bg-black w-[24px] h-[24px] rounded-full">
              <a href="https://linkedin.com" target="_blank">
                <Mail className="text-white w-[16px] h-[16px]" />
              </a>
            </div>
          </div>
        </div>
        <h1 className="md:mr-[44px] text-[16px] font-medium underline underline-offset-3 leading-[24px]  text-[#43403B]">
          Home page
        </h1>
      </div>
    </footer>
  );
}
