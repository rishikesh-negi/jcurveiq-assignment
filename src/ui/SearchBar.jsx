import { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { Search } from "@carbon/icons-react";
import SquareButtons from "./SquareButtons";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <form className="w-full">
      <div className="inline-flex items-center bg-background-1 p-3 rounded-lg border border-border w-full max-phone-lg:p-4 max-phone-lg:pl-6">
        <input
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="text-2xl w-full h-full rounded-xs placeholder:text-[#a8a8a8] focus:outline-none focus:ring focus:ring-accent-100 focus:ring-offset-14 max-phone-lg:text-4xl"
        />
        <SquareButtons
          icon={
            <Search
              size={16}
              fill="var(--color-background-1)"
              className="max-phone-lg:scale-120"
            />
          }
          styles="p-2 bg-tag-1 rounded-md cursor-pointer max-phone-lg:p-3.5"
        />
      </div>
    </form>
  );
}

export default SearchBar;
