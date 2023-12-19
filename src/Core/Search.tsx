import { IoSearch } from "react-icons/io5";
import "./search.css";
const Search = () => {
  return (
    <div className="bg -[#E8F3FF] w-[50%]  h-[40px] flex justify-center rounded-3xl bg-[#E8F3FF] search ">
      <button className=" w-[50px] flex items-center  justify-center  text-[24px]">
        <IoSearch />
      </button>
      <input
        type="text"
        className="w-[90%] text-[16] placeholder:italic placeholder:text-[16px] placeholder:text-slate-400 outline-none bg-transparent"
        placeholder="Поиск сотрудников"
      />
    </div>
  );
};

export default Search;
