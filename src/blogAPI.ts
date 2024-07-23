import { notFound } from "next/navigation";
import { Articles } from "./type";

export const getAllArticles = async (): Promise<Articles[]> => {
  const response = await fetch("http://localhost:8000/posts", {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("エラーが発生しました。");
  }

  // ローディングアニメーション検証用
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  const articles = await response.json();
  return articles;
};

export const getDetailArticle = async (id: string): Promise<Articles> => {
  const response = await fetch(`http://localhost:8000/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("エラーが発生しました。");
  }

  // ローディングアニメーション検証用
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const article = await response.json();
  return article;
};
