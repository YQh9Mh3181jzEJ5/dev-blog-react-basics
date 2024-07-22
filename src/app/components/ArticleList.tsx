import Image from "next/image";
import Link from "next/link";
import React from "react";

// random image
const romdomNum = Math.floor(Math.random() * 100);
const randomImg = `https://picsum.photos/id/${romdomNum}/1920/1080`;

const ArticleList = () => {
  return (
    <div>
      <article className="shadow my-4">
        <Link href="#" className="before:hover:opacity-75">
          <Image
            src={randomImg}
            alt=""
            width={1280}
            height={720}
            className="rounded-t-md"
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6 rounded-b-md">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700  pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 2024/07/22</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            distinctio fugit a at maiores, voluptates tempore quod enim
            voluptatum, voluptate consequuntur rem temporibus optio. Labore quia
            animi dolorum officiis iure.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4">
        <Link href="#" className="before:hover:opacity-75">
          <Image
            src={randomImg}
            alt=""
            width={1280}
            height={720}
            className="rounded-t-md"
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6 rounded-b-md">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700  pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 2024/07/22</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            distinctio fugit a at maiores, voluptates tempore quod enim
            voluptatum, voluptate consequuntur rem temporibus optio. Labore quia
            animi dolorum officiis iure.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
      <article className="shadow my-4">
        <Link href="#" className="before:hover:opacity-75">
          <Image
            src={randomImg}
            alt=""
            width={1280}
            height={720}
            className="rounded-t-md"
          />
        </Link>
        <div className="bg-white flex flex-col justify-start p-6 rounded-b-md">
          <Link href="#" className="text-blue-700 pb-4 font-bold">
            Technology
          </Link>
          <Link
            href="#"
            className="text-slate-900 text-3xl font-bold hover:text-gray-700  pb-4"
          >
            Next.jsの勉強中
          </Link>
          <p className="text-sm pb-3 text-slate-900">Published on 2024/07/22</p>
          <Link href="#" className="text-slate-900 pb-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            distinctio fugit a at maiores, voluptates tempore quod enim
            voluptatum, voluptate consequuntur rem temporibus optio. Labore quia
            animi dolorum officiis iure.
          </Link>
          <Link href="#" className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
