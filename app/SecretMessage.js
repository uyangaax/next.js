"use client";

import { useState } from "react";

export function SecretMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-40 flex items-center justify-center bg-slate-100">
      <div className="w-72 bg-white rounded-2xl shadow-md h-30 p-6 text-center">
        <h2 className="text-sm font-semibold text-slate-700 mb-4">
          🔒 Нууц мессеж
        </h2>

        <h1 className="text-5xl mb-4">{isVisible ? "🔓" : "🔒"}</h1>

        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700"
        >
          {isVisible ? "Нуух" : "Харах"}
        </button>

        {isVisible && (
          <p className="mt-4 bg-purple-100 text-slate-800 text-sm font-semibold rounded-lg p-3">
            🎉 Миний нууц мессеж!
          </p>
        )}
      </div>
    </div>
  );
}

export default SecretMessage;
