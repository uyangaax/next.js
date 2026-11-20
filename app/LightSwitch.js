"use client";

import { useState } from "react";

export function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="min-h-40 flex items-center justify-center bg-slate-100">
      <div
        className={`w-72 p-8 text-center rounded-2xl shadow-md h-30 transition-colors duration-300 ${
          isOn ? "bg-yellow-100" : "bg-slate-800"
        }`}
      >
        <h2
          className={`text-sm font-semibold mb-4 ${
            isOn ? "text-slate-800" : "text-white"
          }`}
        >
          💡 Гэрэл
        </h2>

        <h1 className="text-6xl mb-6">{isOn ? "💡" : "🌑"}</h1>

        <button
          onClick={() => setIsOn(!isOn)}
          className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
            isOn
              ? "bg-yellow-400 text-slate-900 hover:bg-yellow-500"
              : "bg-yellow-400 text-slate-900 hover:bg-yellow-500"
          }`}
        >
          {isOn ? "Унтраах" : "Асаах"}
        </button>
      </div>
    </div>
  );
}

export default LightSwitch;
