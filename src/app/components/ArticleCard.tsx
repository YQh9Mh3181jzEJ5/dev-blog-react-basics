import { Article } from "@/type";
import { formatDateToJapanese } from "@/utils/formatDateToJapanese";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  const randomImg = `https://picsum.photos/id/${article.id}/1280/720`;
  return (
    <div>
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
            Published on {formatDateToJapanese(article.createdAt)}
          </p>
          <Link href={`articles/${article.id}`} className="text-slate-900 pb-6">
            {article.content.length > 100
              ? article.content.substring(0, 100) + "..."
              : article.content}
          </Link>
          <Link
            href={`articles/${article.id}`}
            className="text-pink-800 hover:text-black"
          >
            続きを読む
          </Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
