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
