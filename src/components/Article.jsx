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
import { Button } from "@/components/ui/button";
import { blogPosts } from "../data/blogPosts";
import authorImage from "../assets/img/cat.svg";

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

export function ArticleSection() {
  return (
    <>
      <div className=" font-poppins h-[236px]">
        <h1 className="ml-20 text-[24px] font-semibold py-[16px] md:text-left md:ml-20">
          Lasted articles
        </h1>

        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-3 md:ml-20 md:mr-20 md:px-5 md:rounded-3xl md:h-[82px] h-[172px] bg-[#EFEEEB]">
          <div className="hidden md:flex space-x-2">
            <Button
              className="px-4 py-3 transition-colors rounded-sm text-sm font-medium text-[#43403B] hover:bg-[#DAD6D1] bg-[muted]]
            "
            >
              Highlight
            </Button>
            <Button
              className="px-4 py-3 transition-colors rounded-sm text-sm font-medium text-[#43403B] hover:bg-[#DAD6D1] bg-[muted]
            "
            >
              Cat
            </Button>
            <Button
              className="px-4 py-3 transition-colors rounded-sm text-sm font-medium text-[#43403B] hover:bg-[#DAD6D1] bg-[muted]
            "
            >
              Inspiration
            </Button>
            <Button
              className="px-4 py-3 transition-colors rounded-sm text-sm font-medium text-[#43403B] hover:bg-[#DAD6D1] bg-[muted]
            "
            >
              General
            </Button>
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
                  <SelectItem value="item1">item1</SelectItem>
                  <SelectItem value="item2">item2</SelectItem>
                  <SelectItem value="item3">item3</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      <article className="font-poppins mt-10 md:mt-0 grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-0 md:ml-20 md:mr-20">
        <BlogCard
          image={blogPosts[0].image}
          category={blogPosts[0].category}
          title={blogPosts[0].title}
          description={blogPosts[0].description}
          author={blogPosts[0].author}
          date={blogPosts[0].date}
        />
        <BlogCard
          image={blogPosts[1].image}
          category={blogPosts[1].category}
          title={blogPosts[1].title}
          description={blogPosts[1].description}
          author={blogPosts[1].author}
          date={blogPosts[1].date}
        />
        <BlogCard
          image={blogPosts[2].image}
          category={blogPosts[2].category}
          title={blogPosts[2].title}
          description={blogPosts[2].description}
          author={blogPosts[2].author}
          date={blogPosts[2].date}
        />
        <BlogCard
          image={blogPosts[3].image}
          category={blogPosts[3].category}
          title={blogPosts[3].title}
          description={blogPosts[3].description}
          author={blogPosts[3].author}
          date={blogPosts[3].date}
        />
        <BlogCard
          image={blogPosts[4].image}
          category={blogPosts[4].category}
          title={blogPosts[4].title}
          description={blogPosts[4].description}
          author={blogPosts[4].author}
          date={blogPosts[4].date}
        />
        <BlogCard
          image={blogPosts[5].image}
          category={blogPosts[5].category}
          title={blogPosts[5].title}
          description={blogPosts[5].description}
          author={blogPosts[5].author}
          date={blogPosts[5].date}
        />
      </article>
      <div className="font-poppins w-full mt-20 mb-20 text-center">
        <button className="underline">View More</button>
      </div>
    </>
  );
}
