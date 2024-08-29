"use client";
import Loading from "@/app/loading";
import { createArticle } from "@/blogAPI";
import { Postpone } from "next/dist/server/app-render/dynamic-rendering";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);

      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      await fetch(`${API_URL}/api/blog`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id, title, content }),
      });
      router.push("/");
    } catch (error) {
      console.error("記事の作成に失敗しました:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>
      <form
        className="bg-slate-200 p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">
            タイトル
          </label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`py-3
             px-4 rounded w-full text-white font-bold bg-slate-700 ${
               loading ? "cursor-not-allowed" : "hover:bg-slate-800"
             } `}
        >
          {loading ? "投稿中..." : "新規投稿する"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
