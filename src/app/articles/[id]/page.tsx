import DeleteButton from "@/app/components/DeleteButton";
import { deleteArticle, getDetailArticle } from "@/blogAPI";
import Image from "next/image";
import React from "react";

const Article = async ({ params }: { params: { id: string } }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/blog/${params.id}`, {
    next: { revalidate: 60 },
  });
  const detailArticle = await res.json();
  const articleImg = `https://picsum.photos/id/${detailArticle.id}/1280/720`;

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={articleImg}
        alt=""
        width={1280}
        height={720}
        className="rounded-t"
      />
      <h1 className="text-4xl text-center mb-10 mt-10">
        {detailArticle.title}
      </h1>
      <div className="text-lg leading-relaxed text-justify">
        <p>{detailArticle.content}</p>
      </div>
      <div className="text-right mt-3">
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  );
};

export default Article;
