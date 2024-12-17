import React from "react";
import { IoBookmarks } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10 flex justify-between">
      <Link to="/">
        <img src="/netflix_logo.svg" className="max-w-[150px]" />
      </Link>

      <Link to={"/watch-list"} className="flex gap-2 items-center"> 
        <IoBookmarks />
        İzleme Listesi
      </Link>
    </header>
  );
};

export default Header;
