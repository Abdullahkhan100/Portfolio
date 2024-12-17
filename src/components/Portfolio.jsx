import React, { useState } from "react";
import Modal from "react-modal";
import crmLogo from "../../public/crm-img.png";
import crmScreenshot1 from "../../public/crm home.png";
import crmScreenshot2 from "../../public/crm-image.png";
import afstandeduLogo from "../../public/afstand icon.jpg";
import afstandeduScreenshot1 from "../../public/Afstand-1 (1).png";
import afstandeduScreenshot2 from "../../public/Afstand-1 (2).png";
import afstandeduScreenshot3 from "../../public/Afstand-1 (3).png";
import erpLogo from "../../public/erp-logo.png";
import erpScreenshot1 from "../../public/erp.png";
import erpScreenshot2 from "../../public/erp-2.png";

// Ensure the modal root element is set (important for accessibility and rendering).
Modal.setAppElement("#root");

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const projects = [
    {
      id: 1,
      logo: crmLogo,
      name: "Complete CRM UI Design",
      description:
        "A comprehensive CRM application UI, designed with a focus on user experience and responsive layout.",
      screenshots: [crmScreenshot1, crmScreenshot2],
    },
    {
      id: 2,
      logo: afstandeduLogo,
      name: "Afstand Education Website",
      description:
        "An educational platform designed and deployed for streamlined online learning.",
      screenshots: [
        afstandeduScreenshot1,
        afstandeduScreenshot2,
        afstandeduScreenshot3,
      ],
      liveUrl: "https://afstandedu.com/",
    },
    {
      id: 3,
      logo: erpLogo,
      name: "ERP Application",
      description:
        "Developed core UI components and integrated dynamic functionality for an ERP application.",
      screenshots: [erpScreenshot1, erpScreenshot2],
    },
  ];

  const openModal = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProject(null);
  };

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
      <span className="underline font-semibold">Featured Projects</span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-5">
        {projects.map(
          ({ id, logo, name, description, screenshots, liveUrl }) => (
            <div
              className="border-2 rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-16 h-16 object-cover rounded-full mx-auto"
                alt={`${name} logo`}
              />
              <h2 className="font-bold text-xl mb-2 text-center">{name}</h2>
              <p className="text-gray-700 text-center">{description}</p>
              <div className="text-center mt-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                  onClick={() => openModal({ name, screenshots })}
                >
                  View Screenshots
                </button>
              </div>
              {liveUrl && (
                <div className="text-center mt-4">
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Live Project
                  </a>
                </div>
              )}
            </div>
          )
        )}
      </div>

      {/* Modal for Viewing Screenshots */}
      {isModalOpen && currentProject && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Project Screenshots"
          className="w-4/5 md:w-1/2 mx-auto bg-white p-5 rounded-lg shadow-lg my-20"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <h2 className="text-2xl font-bold mb-4">{currentProject.name}</h2>
          <div className="flex justify-center space-x-4">
            {currentProject.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="w-64 h-auto rounded-md"
              />
            ))}
          </div>
          <button
            onClick={closeModal}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
        </Modal>
      )}
    </div>
  );
}

export default Portfolio;
