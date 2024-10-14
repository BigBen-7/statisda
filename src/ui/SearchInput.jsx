/* eslint-disable react/prop-types */
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function SearchInput({ search, setSearch }) {
  return (
    <div className="flex justify-center items-center px-4 gap-4">
      <div className="relative mt-2 rounded-md ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="h-5 w-5 text-gray-400"
          />
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a student by name or email"
          className="block w-80 lg:w-96 rounded-r-md   py-3 pl-10 text-gray-900 bg-[#fcfafa] border-none  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#509CDB] sm:text-sm sm:leading-6 "
        />
      </div>
    </div>
  );
}
export default SearchInput;
