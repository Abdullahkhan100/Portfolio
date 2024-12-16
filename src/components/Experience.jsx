import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import bootstrap from "../../public/bootstrap-logo.png";
import javascript from "../../public/javascript.png";
import tailwind from "../../public/tailwind_css.png";
import react from "../../public/reactjs.png";

function Experience() {
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
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10"
    >
      <h1 className="text-3xl font-bold mb-5">Experiance</h1>
      <p className="">
        I've more than 3 years of experiance in below technologies.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
        {cardItems.map(({ id, logo, name }) => (
          <div
            className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300"
            key={id}
          >
            <img src={logo} className="w-[100px]" alt="" />
            <div>
              <div className="px-2 font-bold text-xl mb-2">{name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
