import { Articles } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

type articleListProps = {
  articles: Articles[];
};

const ArticleList = ({ articles }: articleListProps) => {
  return (
    <div>
      {articles.map((article) => {
        // random image
        const randomNum = Math.floor(Math.random() * 100);
        const randomImg = `https://picsum.photos/id/${randomNum}/1920/1080`;
        return (
          <article className="shadow my-4" key={article.id}>
            <Link
              href={`articles/${article.id}`}
              className="before:hover:opacity-75"
            >
              <Image
                src={randomImg}
                alt=""
                width={1280}
                height={720}
                className="rounded-t"
              />
            </Link>
            <div className="bg-white flex flex-col justify-start p-6 rounded-b">
              <Link href="#" className="text-blue-700 pb-4 font-bold">
                Technology
              </Link>
              <Link
                href={`articles/${article.id}`}
                className="text-slate-900 text-3xl font-bold hover:text-gray-700  pb-4"
              >
                {article.title}
              </Link>
              <p className="text-sm pb-3 text-slate-900">
                Published on {article.createdAt}
              </p>
              <Link
                href={`articles/${article.id}`}
                className="text-slate-900 pb-6"
              >
                {article.content}
              </Link>
              <Link
                href={`articles/${article.id}`}
                className="text-pink-800 hover:text-black"
              >
                続きを読む
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ArticleList;
