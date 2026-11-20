"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-20 flex items-center  justify-center bg-slate-100">
      <div className="bg-white rounded-2xl shadow-md p-6 w-64 h-30  text-center">
        <h2 className="text-sm font-semibold text-slate-700 mb-2">
          🔢 Тоолуур
        </h2>

        <h1 className="text-5xl font-bold text-slate-900 mb-4">{count}</h1>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => setCount(count - 1)}
            className="w-10 h-10 rounded-full bg-slate-900 text-white text-lg hover:bg-slate-700"
          >
            −
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="w-10 h-10 rounded-full bg-slate-900 text-white text-lg hover:bg-slate-700"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
