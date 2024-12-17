import React from "react";
// import pic from "../../public/Abdullah picture.jpeg";
import pic from "../../public/abdullah-pict-3.png";
// import pic from "../../public/abdullah-pic-1.png";
// import pic from "../../public/abdullah-pic-2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-xl md:text-4xl">
              <h1>Hello, I'm a </h1>
              {/* <span className="text-red-700 font-bold">Web Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={[
                  "Web Developer",
                  "Frontend Developer",
                  "UI Developer",
                ]}
                typeSpeed={50}
                backSpeed={60}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hi there! I’m Abdullah Khan, a passionate Web Developer and UI
              Designer with a knack for creating visually stunning and
              user-friendly websites.
              <br />
              <br />
              My expertise includes <strong>HTML</strong>, <strong>CSS</strong>,{" "}
              <strong>JavaScript</strong>, <strong>React</strong>,{" "}
              <strong>Bootstrap</strong>, and <strong>TailwindCSS</strong>.
              Along with web development, I have experience working with design
              tools like <strong>Photoshop</strong>, <strong>Figma</strong>,{" "}
              <strong>Canva</strong>, and <strong>Adobe XD</strong>, which
              enable me to craft compelling and user-focused designs.
              <br />
              <br />
              My goal is to craft seamless digital experiences that leave a
              lasting impression. With a strong eye for detail and a dedication
              to excellence, I strive to turn ideas into reality. Let’s build
              something extraordinary together!
            </p>

            <br />
            {/* {social media Icon} */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-semibold">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/abdullah-khan-467a0b197/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Abdullahkhan100"
                      target="_blank"
                    >
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div className="space-y-2">
                <h1 className="font-bold">Currently Working on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    {" "}
                    <IoLogoJavascript className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <FaHtml5 className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <FaCss3 className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <FaBootstrap className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <RiTailwindCssFill className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                </ul>
              </div> */}

              <div className="mt-4">
                <a
                  href="../../public\Abdullah khan resume (2024).pdf" // Replace with the actual path to your CV file
                  download="Abdullah_Khan_CV.pdf"
                  className="px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-200"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[420px] md:h-[450] border"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
