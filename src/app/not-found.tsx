import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="p-8 bg-white shadow-md rounded text-center">
        <h1 className="text-2xl text-gray-800 mb-4 font-bold">404</h1>
        <p className="text-gray-800">ページが見つかりませんでした。</p>
      </div>
    </div>
  );
}
