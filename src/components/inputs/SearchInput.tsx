import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const SearchInput = () => {
  return (
    <div className="flex focus-within:bg-white items-center border bg-gray-50  w-full p-2">
      <input
        className="bg-transparent flex-1 outline-none"
        placeholder="Search"
      />
      <MagnifyingGlassIcon className="h-5" />
    </div>
  );
};

export default SearchInput;
