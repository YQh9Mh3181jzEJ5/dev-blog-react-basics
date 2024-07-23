import { getDetailArticle } from "@/blogAPI";
import Image from "next/image";
import React from "react";

const Article = async ({ params }: { params: { id: string } }) => {
  const detailArtice = await getDetailArticle(params.id);

  const articleImg = `https://picsum.photos/id/${detailArtice.id}/1280/720`;
  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={articleImg}
        alt=""
        width={1280}
        height={720}
        className="rounded-t"
      />
      <h1 className="text-4xl text-center mb-10 mt-10">{detailArtice.title}</h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArtice.content}</p>
      </div>
    </div>
  );
};

export default Article;
