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

export function ArticleSection() {
  return (
    <div className="flex flex-col justify-center items-center font-poppins h-[236px]">
      <div className="w-[343px] md:w-[80%]">
        <h1 className="text-[24px] font-semibold py-[16px] md:text-left">
          Lasted articles
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-3 w-full md:w-[80%] md:px-5 md:rounded-3xl md:h-[82px] h-[172px] bg-[#EFEEEB]">
        <div className="hidden md:flex space-x-2">
          <button
            className="px-4 py-3 transition-colors rounded-sm text-sm font-medium bg-[#DAD6D1]
            "
          >
            Highlight
          </button>
          <button
            className="px-4 py-3 transition-colors rounded-sm text-sm font-medium bg-[muted]
            "
          >
            Cat
          </button>
          <button
            className="px-4 py-3 transition-colors rounded-sm text-sm font-medium bg-[muted]
            "
          >
            Inspiration
          </button>
          <button
            className="px-4 py-3 transition-colors rounded-sm text-sm font-medium bg-[muted]
            "
          >
            General
          </button>
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
  );
}
