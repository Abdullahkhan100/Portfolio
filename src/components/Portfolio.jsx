import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import bootstrap from "../../public/bootstrap-logo.png";
import javascript from "../../public/javascript.png";
import tailwind from "../../public/tailwind_css.png";
import react from "../../public/reactjs.png";

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "html",
    },
    {
      id: 2,
      logo: css,
      name: "css",
    },
    {
      id: 3,
      logo: bootstrap,
      name: "bootstrap",
    },
    {
      id: 4,
      logo: javascript,
      name: "javascript",
    },
    {
      id: 5,
      logo: tailwind,
      name: "tailwind",
    },
    {
      id: 6,
      logo: react,
      name: "react",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
      <span className="underline font-semibold">Featured Project</span>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
        {cardItems.map(({ id, logo, name }) => (
          <div
            className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
            key={id}
          >
            <img
              src={logo}
              className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
              alt=""
            />
            <div>
              <div className="px-2 font-bold text-xl mb-2">{name}</div>
              <p className="px-2 text-gray-700">Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="px-6 py-4 space-x-4 justify-around">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                Video
              </button>
              <button className="bg-green-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                Src code
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
