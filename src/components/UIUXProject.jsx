import React, { useRef } from "react";

import { Link, useNavigate } from "react-router-dom";

import Wireframe from "../imgs/WireframeBig.svg";
import Style1 from "../imgs/Style1.svg";
import Style2 from "../imgs/Style2.svg";
import Style3 from "../imgs/Style3.svg";
import Style4 from "../imgs/Style4.svg";
import Style5 from "../imgs/Style5.svg";
import Style6 from "../imgs/Style6.svg";
import Style7 from "../imgs/Style7.svg";
import websiteDesign from "../imgs/HighFidelityWireframe.svg";

import "./UIUXProject.css";
import skyfi from "../imgs/tech_noir__cyberpunk_a_cosmonaut_in_space_working (1).jpg";

const UIUXProject = () => {
  const nav = useNavigate();

  return (
    <div className="UIUXProject-fullpage">
      <div className="goBackButtonLine">
        <Link to="/">
          <button id="goBackButton"> Go Back to the main page </button>
        </Link>
      </div>

      <div className="UIUXProject_introduction">
        <h4> UI/UX Project</h4>
        <p>
          Successful platforms like PrometheanAI, Blockade Labs, and NVIDIA
          inspire me to contemplate the myriad of potential collaborations
          between people and AI that may shape the future. As such, I present a
          UI/UX project centered around a hypothetical company called Visualise.
        </p>
      </div>
      <p id="skyfi">
        This img was generated using the Blockade Labs AI tool
        https://www.blockadelabs.com
      </p>
      <img src={skyfi} className="skyfi-img" />

      <div className="UIUXProject">
        <h4 className="visualiseHeading"> Visualise</h4>

        <div className="textFlex">
          <p>
            <span className="spanAbout">Project Scope:</span> Visualise is an
            innovative company that leverages Artificial Intelligence to
            generate stunning visuals.
          </p>

          <p>
            <span className="spanAbout">Company Goals: </span>
            Empower every aspiring creator with the tools they need to transform
            their brilliant ideas into real and visually captivating projects.
          </p>
          <p>
            <span className="spanAbout">Target Audience:</span> Passionate young
            professionals eager to leave their mark on the world through
            creative endeavours such as game development, animation, or
            educational content creation. They possess great ideas and
            storytelling abilities but lack the expertise in design and drawing.
            Visualise fills this void by providing an AI model that intuitively
            understands their requirements and generates stunning visual
            representations.
          </p>
          <p>
            <span className="spanAbout">Integration of AI Technology:</span> The
            heart of the product is an advanced AI tool that transforms ideas
            into beautiful virtual worlds. This intelligent tool collaborates
            with users, bringing their narratives to life by creating
            captivating visuals with unparalleled precision.
          </p>
          <p>
            <span className="spanAbout">Problem Statement:</span> Visualise, an
            AI-powered Virtual World Creation company, faces the challenge of
            effectively showcasing their innovative AI technology and diverse
            virtual world concepts to potential customers. Their current digital
            presence lacks a centralized platform to communicate their value
            proposition and ease of use, hindering their ability to attract a
            wider audience and capitalize on collaboration and revenue
            opportunities. As a hired UI/UX developer, the task is to create an
            exceptional e-commerce website that instills confidence in potential
            customers, fosters lasting relationships, and establishes Visualise
            as a leading player in the dynamic world of virtual experiences.
          </p>
          <div className="projectGoals">
            <p>
              <span className="spanAbout">Project Goals:</span>
            </p>
            <p>
              1. Design the e-commerce website to effectively showcase
              Visualise's innovative AI technology and the diverse range of
              virtual world concepts they offer.{" "}
            </p>
            <p>
              2. Create a user-centric design that prioritizes the needs and
              preferences of Visualise's target audience, which includes
              creative professionals, storytellers, game developers, and
              educators.
            </p>
            <p>
              3. Implement design elements and strategies that encourage user
              engagement and drive conversions.
            </p>
          </div>
        </div>
        <h5>Style Guide</h5>
        <div className="grid">
          <img src={Style1} />
          <img src={Style2} />
          <img src={Style3} />
          <img src={Style5} />
          <img src={Style6} />
          <img src={Style7} />
        </div>

        <div className="thoughts">
          <h5> Persona Mapping</h5>

          <p className="firstThought">
            The product "Visualise" is designed with a specific target audience
            in mind, catering primarily to creators within the age range of 16
            to 30 years old. The focus is on individuals who possess a unique
            and innovative mindset, consistently seeking novel perspectives and
            introducing inventive ways of living. These creators engage in
            developing games, storytelling, and educational content to express
            their personal viewpoints and reflections on life. The appeal of the
            product lies not solely in age demographics but predominantly in
            aligning with this distinctive mindset.
          </p>
          <p className="secondThought">
            In order to identify an appropriate design concept that aligns with
            the intended vision, an exploration was conducted on the platform
            Pinterest. The result of this exploration is represented in the form
            of a mood board. The envisioned design concept includes a dark,
            starry night background, symbolizing the vast and boundless realm of
            creative possibilities. Accompanying this, the mood board features
            vibrant and colorful images, accompanied by prominent headings
            positioned atop the visual layout. The infusion of lively colors
            signifies the active and realized creativity emanating from the
            minds of these visionary creators.
          </p>
          <p className="thirdThought">
            The proposed design intends to create a visually captivating
            ambiance that resonates with the targeted creators, inspiring them
            to further explore their imaginative potential through the Visualise
            platform. The objective is to foster a connection with the audience
            by visually embodying the limitless scope of creativity that can be
            unlocked through their engagement with the product.
          </p>
        </div>

        <h5> Wireframes</h5>
        <div className="wireframes">
          <img src={Wireframe} className="wireframe" />
          <img src={websiteDesign} className="wireframe" />
        </div>
      </div>
    </div>
  );
};

export default UIUXProject;
