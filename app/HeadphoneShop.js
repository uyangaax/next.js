"use client";

import { useState } from "react";

export function HeadphoneShop() {
  // 1. State-үүдээ зарлах
  const [size, setSize] = useState("Basic");
  const [color, setColor] = useState("purple");
  const [box, setBox] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isOrdered, setIsOrdered] = useState(false);

  const sizePrices = {
    Basic: { name: "Basic", price: 89000 },
    Pro: { name: "Pro", price: 149000 },
    Max: { name: "Max", price: 199000 },
  };

  const colorPick = {
    dark: {
      name: " Хар",
      color: "#0d0d0d",
      image: "/images/har.webp",
    },
    white: {
      name: " Цэнхэр ",
      color: "#3966cfff",
      image: "/images/tsenher.webp",
    },
    purple: {
      name: " Ягаан",
      color: "#9e77a1ff",
      image: "/images/ygaan.webp",
    },
  };

  const extras = [
    {
      name: "🎁 Бэлгийн хайрцаг",
      price: 5000,
      state: box,
      setState: setBox,
    },
    {
      name: "🛡️ Нэмэлт хамгаалалт",
      price: 10000,
      state: privacy,
      setState: setPrivacy,
    },
    {
      name: "🚚 Хүргэлт",
      price: 8000,
      state: delivery,
      setState: setDelivery,
    },
  ];

  // neg chihewchnii nemelt une
  const extraPrice = extras.reduce(
    (sum, item) => sum + (item.state ? item.price : 0),
    0,
  );

  // neg chihewchnii une
  const singlePrice = sizePrices[size].price + extraPrice;

  // niit une
  const totalPrice = singlePrice * quantity;

  // hymdral
  const discount = quantity >= 3 ? totalPrice * 0.15 : 0;
  const finalPrice = totalPrice - discount;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      <img
        key={color}
        src={colorPick[color].image}
        alt="Сонгосон өнгийн чихэвч"
        className="absolute inset-0 w-full h-full object-cover opacity-90"
      />

      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 min-h-45 flex items-right justify-right p-6">
        <div className="w-full max-w-md p-6  backdrop-blur-lg rounded-2xl shadow-2xl">
          <h1 className="text-3xl text-gray-400 font-bold text-center mb-6">
            🎧 Headphone Shop
          </h1>

          <h2 className="font-bold text-gray-400 text-lg mb-3">Загвар</h2>

          <div className="flex gap-2 mb-6">
            {["Basic", "Pro", "Max"].map((item) => (
              <button
                key={item}
                onClick={() => setSize(item)}
                className={`flex-1 p-3 rounded-lg border ${
                  size === item
                    ? "bg-{colorPick[color] text-white border-[#A4888A]"
                    : "bg-{colorPick[color] text-gray-400 border-[#A4888A]"
                }`}
              >
                <p>{sizePrices[item].name}</p>
                <p>{sizePrices[item].price.toLocaleString()}₮</p>
              </button>
            ))}
          </div>

          <h2 className="font-bold text-gray-400 text-lg mb-3">Өнгө</h2>

          <div className="flex gap-2 mb-6">
            {["dark", "white", "purple"].map((item) => (
              <button
                key={item}
                onClick={() => setColor(item)}
                className={`flex-1 p-3 rounded-lg border ${
                  color === item
                    ? "bg-{colorPick[color] text-white border-[#A4888A]"
                    : "bg-{colorPick[color] text-gray-400 border-[#A4888A]"
                }`}
              >
                <span
                  className="inline-block w-5 h-5 rounded-full border border-gray-400 mr-2 align-middle"
                  style={{ backgroundColor: colorPick[item].color }}
                ></span>
                <span>{colorPick[item].name}</span>
              </button>
            ))}
          </div>

          <p className="text-center text-gray-400 text-sm">
            Сонгосон өнгө: {colorPick[color].name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeadphoneShop;
