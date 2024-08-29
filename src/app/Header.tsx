import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-bold">
          <Link href="/">My blog</Link>
        </h1>
      </div>
      <div>
        <nav className="text-sm font-medium">
          <Link href="articles/new" className="bg-gray-800 p-3 rounded">
            記事を書く
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
