"use client";
import { deleteArticle } from "@/blogAPI";
import { useRouter } from "next/navigation";
import React from "react";
7;
type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      // await deleteArticle(id);
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      await fetch(`${API_URL}/api/${id}`, { method: "DELETE" });

      router.push("/");
    } catch (error) {
      console.log("記事の削除に失敗しました:", error);
    }
  };

  return (
    <div
      className="bg-red-500 rounded hover:bg-red-600 py-2 px-5 inline cursor-pointer"
      onClick={handleDelete}
    >
      記事を削除する
    </div>
  );
};
7;
export default DeleteButton;
