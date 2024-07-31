import { Article } from "@/type";
import React, { Suspense } from "react";
import ArticleCard from "./ArticleCard";

type articleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: articleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
