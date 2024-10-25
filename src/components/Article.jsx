import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
//import { Button } from "@/components/ui/button";
import { blogPosts } from "../data/blogPosts";
import authorImage from "../assets/img/cat.svg";
import { useState } from "react";

function BlogCard(props) {
  return (
    <div className="flex flex-col gap-4">
      <a href="#" className="relative h-[212px] sm:h-[360px]">
        <img
          className="w-full h-full object-cover rounded-md"
          src={props.image}
          alt={props.title}
        />
      </a>
      <div className="flex flex-col">
        <div className="flex">
          <span className="bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-600 mb-2">
            {props.category}
          </span>
        </div>
        <a href="#">
          <h2 className="text-start font-bold text-xl mb-2 line-clamp-2 hover:underline">
            {props.title}
          </h2>
        </a>
        <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
          {props.description}
        </p>
        <div className="flex items-center text-sm">
          <img
            className="w-8 h-8 rounded-full mr-2"
            src={authorImage}
            alt={props.author}
          />
          <span>{props.author}</span>
          <span className="mx-2 text-gray-300">|</span>
          <span>{props.date}</span>
        </div>
      </div>
    </div>
  );
}

const categories = ["Highlight", "Cat", "Inspiration", "General"];

export function ArticleSection() {
  const [category, setCategory] = useState(categories[0]);

  return (
    <>
      <div className=" font-poppins h-[236px] w-screen">
        <h1 className="ml-20 text-[24px] font-semibold py-[16px] md:text-left md:ml-20">
          Lasted articles
        </h1>

        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-3 md:ml-20 md:mr-20 md:px-5 md:rounded-3xl md:h-[82px] h-[172px] bg-[#EFEEEB]">
          <div className="hidden md:flex space-x-2">
            {categories.map((button) => {
              return (
                <button
                  key={button}
                  onClick={() => setCategory(button)}
                  className={`px-4 py-3 rounded-sm text-sm font-medium text-[#43403B] ${
                    category === button ? "bg-[#DAD6D1]" : "hover:bg-muted"
                  }`}
                >
                  {button}
                </button>
              );
            })}
          </div>
          <div className="w-[343px] ">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search"
                className=" py-3 rounded-sm font-medium bg-white text-[#75716B] h-[48px]"
              />
            </div>
          </div>
          <div className="md:hidden">
            <h1 className="text-[16px] font-medium text-[#75716B]">Category</h1>
            <Select>
              <SelectTrigger className="w-[343px] h-[48px] font-medium text-[#75716B] bg-white">
                <SelectValue placeholder="Highlight" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Group</SelectLabel>
                  {categories.map((item) => {
                    return <SelectItem value={item}>{item}</SelectItem>;
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <article className="font-poppins mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 md:ml-20 md:mr-20">
        {blogPosts.map((blogProps, index) => {
          return (
            <BlogCard
              key={index}
              image={blogProps.image}
              category={blogProps.category}
              title={blogProps.title}
              description={blogProps.description}
              author={blogProps.author}
              date={blogProps.date}
            />
          );
        })}
      </article>
      <div className="font-poppins w-full mt-20 mb-20 text-center">
        <button className="underline">View More</button>
      </div>
    </>
  );
}
