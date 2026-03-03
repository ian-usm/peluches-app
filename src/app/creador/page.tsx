"use client";

import { useState } from "react";

export default function CreadorPage() {
  const [color, setColor] = useState("black");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div
        className={`w-40 h-40 rounded-full ${
          color === "black" ? "bg-black" : "bg-pink-400"
        }`}
      />

      <div className="flex gap-4">
        <button
          onClick={() => setColor("black")}
          className="px-4 py-2 bg-gray-800 text-white rounded"
        >
          Negro
        </button>

        <button
          onClick={() => setColor("pink")}
          className="px-4 py-2 bg-pink-400 text-white rounded"
        >
          Rosa
        </button>
      </div>
    </main>
  );
}