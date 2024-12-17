import React from "react";

function About() {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-5">About Me</h1>
        <p className="text-md text-justify">
          Hello, I’m Abdullah Khan, a dedicated and passionate Web Developer and
          UI Designer with 3.8 years of experience in building visually
          appealing and user-centric websites. My expertise lies in creating
          clean, responsive, and functional designs using technologies like
          HTML, CSS, JavaScript, React, Bootstrap, and TailwindCSS.
          <br />
          <br />
          Combining technical skills with creativity, I also have hands-on
          experience using design tools like Photoshop, Figma, Canva, and Adobe
          XD to craft visually compelling user interfaces. I am always striving
          to bridge the gap between functionality and aesthetics to deliver an
          exceptional user experience.
        </p>
        <br />
        <h1 className="text-green-500 font-semibold text-xl">Education</h1>
        <p>
          I completed my Bachelor of Technology (B.Tech) from Jamia Hamdard
          University in 2020. To enhance my skills further, I pursued Web
          Development training at Piro Technology in 2021.
        </p>
        <br />
        <h1 className="text-green-500 font-semibold text-xl">Skills</h1>
        <p>
          I am proficient in:
          <ul className="list-disc list-inside mt-2">
            <li>HTML, CSS, SASS</li>
            <li>Bootstrap, TailwindCSS</li>
            <li>JavaScript, React</li>
            <li>UI Development Concepts</li>
            <li>Photoshop, Figma, Canva, Adobe XD</li>
          </ul>
          My strengths include attention to detail, excellent problem-solving
          abilities, and effective collaboration in team environments.
        </p>
        <br />
        <h1 className="text-green-500 font-semibold text-xl">Mission</h1>
        <p>
          My mission is to create impactful and innovative web solutions that
          enhance user experiences while meeting business goals. I am committed
          to continuous learning and always eager to embrace new challenges that
          allow me to grow both personally and professionally.
        </p>
      </div>
      <hr />
    </>
  );
}

export default About;
