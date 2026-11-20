"use client";

import { useState } from "react";

export function PizzaBuilder() {
  const [size, setSize] = useState("M");
  const [cheese, setCheese] = useState(false);
  const [mushroom, setMushroom] = useState(false);
  const [pepper, setPepper] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isOrdered, setIsOrdered] = useState(false);

  const sizePrices = {
    S: { name: "Жижиг", price: 15000 },
    M: { name: "Дунд", price: 20000 },
    L: { name: "Том", price: 25000 },
  };

  const extras = [
    { name: "🧀 Бяслаг", price: 3000, state: cheese, setState: setCheese },
    { name: "🍄 Мөөг", price: 2000, state: mushroom, setState: setMushroom },
    { name: "🌶️ Чинжүү", price: 1500, state: pepper, setState: setPepper },
  ];

  // neg pizzani nemelt une
  const extraPrice =
    (cheese ? 3000 : 0) + (mushroom ? 2000 : 0) + (pepper ? 1000 : 0);

  // neg pizzani une
  const singlePrice = sizePrices[size].price + extraPrice;

  // niit une
  const totalPrice = singlePrice * quantity;

  // hymdral
  const discount = quantity >= 3 ? totalPrice * 0.1 : 0;
  const finalPrice = totalPrice - discount;

  return (
    <div className="m-20">
      <div className=" max-w-md mx-auto h-200 p-6 bg-white rounded-2xl shadow-lg text-gray-900">
        <h1 className="text-3xl font-bold text-center mb-6">🍕 Пицца угсрах</h1>

        <h2 className="font-bold text-lg mb-3">Хэмжээ</h2>

        <div className="flex gap-2 mb-6">
          {["S", "M", "L"].map((item) => (
            <button
              key={item}
              onClick={() => setSize(item)}
              className={`flex-1 p-3 rounded-lg border ${
                size === item
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              <p>{sizePrices[item].name}</p>
              <p>{sizePrices[item].price.toLocaleString()}₮</p>
            </button>
          ))}
        </div>

        <h2 className="font-bold text-lg mb-3">Нэмэлт</h2>

        <div className="flex gap-2 mb-6">
          {extras.map((item) => (
            <button
              key={item.name}
              onClick={() => item.setState(!item.state)}
              className={`flex-1 p-3 rounded-lg border ${
                item.state
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-grey-700 border-gray-300"
              }`}
            >
              <p>{item.name}</p>
              <p>{item.price.toLocaleString()}₮</p>
            </button>
          ))}
        </div>

        <h2 className="font-bold text-lg mb-3"> Тоо ширхэг</h2>

        <div className="flex items-center  gap-6 mb-6">
          <button
            disabled={quantity === 1}
            onClick={() => setQuantity(quantity - 1)}
            className="bg-gray-200 px-4 py-2 rounded-lg disabled:opacity-30"
          >
            −
          </button>

          <span className="text-2xl font-bold">{quantity}</span>

          <button
            disabled={quantity === 5}
            onClick={() => setQuantity(quantity + 1)}
            className="bg-gray-200 px-4 py-2 rounded-lg disabled:opacity-30"
          >
            +
          </button>
        </div>

        {/* zahialgiin medeelel */}
        <div className="bg-orange-50 rounded-xl p-4 space-y-1">
          <p className="text-sm font-bold text-gray-800">
            {sizePrices[size].name} пицца ·{" "}
            {[cheese && "🧀", mushroom && "🍄", pepper && "🌶️"]
              .filter(Boolean)
              .join(" ") || "нэмэлтгүй"}
          </p>

          <p className="text-sm text-gray-500">
            Нэг пицца: {singlePrice.toLocaleString()}₮ · Тоо: {quantity}
          </p>

          {discount > 0 && (
            <p className="text-sm text-gray-400 line-through">
              {totalPrice.toLocaleString()}₮
            </p>
          )}

          <p className="text-2xl font-bold text-gray-900">
            Нийт: {(discount > 0 ? finalPrice : totalPrice).toLocaleString()}₮
          </p>

          {discount > 0 && (
            <p className="text-sm font-semibold text-green-600">
              🎉 10% хямдрал: -{discount.toLocaleString()}₮
            </p>
          )}
        </div>

        {/* zahialah */}
        <button
          onClick={() => setIsOrdered(true)}
          className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl shadow"
        >
          Захиалах 🍕
        </button>

        {isOrdered && (
          <p className="text-green-600 font-bold text-center mt-4">
            ✅ Захиалга баталгаажлаа!
          </p>
        )}
      </div>
    </div>
  );
}

export default PizzaBuilder;
