import { notFound } from "next/navigation";
import { Article } from "./type";

export const getAllArticles = async (): Promise<Article[]> => {
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

export const getDetailArticle = async (id: string): Promise<Article> => {
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

export const createArticle = async (
  id: string,
  title: string,
  content: string
): Promise<Article> => {
  const curenteDatetime = new Date().toISOString();
  const response = await fetch("http://localhost:8000/posts/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, title, content, createdAt: curenteDatetime }),
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("エラーが発生しました。");
  }

  // ローディングアニメーション検証用
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newArticle = await response.json();
  return newArticle;
};

export const deleteArticle = async (id: string): Promise<Article> => {
  const response = await fetch(`http://localhost:8000/posts/${id}`, {
    method: "DELETE",
  });

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("エラーが発生しました。");
  }

  // ローディングアニメーション検証用
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const deleteArticle = await response.json();
  return deleteArticle;
};
