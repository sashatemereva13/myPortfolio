import React from "react";
import { saveAs } from "file-saver";

import "./social.css";

const Social = () => {
  const handleDownload = () => {
    const pdfUrl = "/pdf/SashaTemereva.pdf";
    const fileName = "SashaTemereva.pdf";

    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => saveAs(blob, fileName))
      .catch((error) => console.error("Error downloading PDF:", error));
  };
  return (
    <div className="home_social">
      <div className="LinkedIn">
        <a
          href="https://www.linkedin.com/in/sashatemereva"
          className="home_social-icon"
          target="_blank"
        >
          <i className="bx bxl-linkedin-square"></i>
          LinkedIn
        </a>
      </div>
      <div className="mail">
        <a
          href="mailto:sasha.uiux.13@gmail.com"
          className="home_social-icon"
          target="_blank"
        >
          <i className="bx bx-envelope"></i> Mail
        </a>
      </div>
      <div className="github">
        <a
          href="https://github.com/sashatemereva13"
          className="home_social-icon"
          target="_blank"
        >
          <i className="bx bxl-github"></i> GitHub
        </a>
      </div>
      <div className="CV">
        <button onClick={handleDownload} className="download-button">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Social;
