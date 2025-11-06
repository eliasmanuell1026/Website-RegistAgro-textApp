import React from "react";
import { MdHeight } from "react-icons/md";
import { StaggeredGrid } from "react-staggered-grid";


const data = [
  {
    id: 2,
    type: "text",
    color: "bg-red-500",
    text: "41% of recruiters say entry-level positions are the hardest to fill.",
    className: "row-span-2", 
  },
  {
    id: 5,
    type: "image",
    src: "../src/assets/image/campo.jpg",
    className: "row-span-1",
  },
  {
    id: 4,
    type: "image",
    src: "../src/assets/image/anoitecer.jpg",
    className: "row-span-2",
  },
  {
    id: 1,
    type: "image",
    src: "../src/assets/image/dia.jpg",
    className: "row-span-2",
  },
  {
    id: 6,
    type: "text",
    color: "bg-green-500",
    text: "76% of hiring managers admit attracting the right job candidates is their greatest challenge.",
    className: "row-span-1",
  },
  {
    id: 7,
    type: "image",
    src: "../src/assets/image/Fazenda1.jpg",
    className: "row-span-2",
  },
  {
    id: 8,
    type: "image",
    src: "../src/assets/image/machine.jpg",
    className: "row-span-1",
  },
  {
    id: 9,
    type: "image",
    src: "../src/assets/image/por-do-sol.jpg",
    className: "row-span-2",
  },
   {
    id: 10,
    type: "image",
    src: "../src/assets/image/tarde.jpg",
    className: "row-span-1",
  },
  {
    id: 7,
    type: "image",
    src: "../src/assets/image/machine.jpg",
    className: "row-span-2",
  }
];
export default function StatsGrid() {
  return (
    <div className="max-w-3xl">
      <div className="grid grid-cols-3 gap-4">
        {data.map((item) =>
          item.type === "text" ? (
            <div
              key={item.id}
              className={`${item.color} ${item.className} rounded-lg text-white p-4 flex items-center justify-center text-center font-bold text-lg`}
            >
              {item.text}
            </div>
          ) : (
            <div
              key={item.id}
              className={`${item.className} rounded-lg overflow-hidden`}
            >
              <img
                src={item.src}
                alt="grid-item"
                className="w-full h-full object-cover"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

