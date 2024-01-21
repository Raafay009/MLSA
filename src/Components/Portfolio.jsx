/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/stairs.jpg";

const imageAltText = "background image of stairs";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Secure Scope",
    description:
      "Secure Scope has been developed as part of Google Developer Student Clubs Solution Challenge 2023 targetting 5 out of 17 of UN's sustainable goals.",
    url: "https://scope-3f3e3.web.app/",
  },
  {
    title: "U2F Hardware Keys: The Next Gen of 2-Factor Authentication",
    description:
      "Article om U2F Hardware Keys: The Next Gen of 2-Factor Authentication",
    url: "https://abdurraafay.hashnode.dev/u2f-hardware-keys-the-next-gen-of-2-factor-authentication",
  },
  {
    title: "A Guide to Analyzing Suspicious Emails",
    description:
      "An article on how to analyze suspicious emails and how to protect yourself from phishing attacks.",
    url: "https://abdurraafay.hashnode.dev/a-guide-to-analyzing-suspicious-emails",
  },
  {
    title: "LinkedIn",
    description:
      "My LinkedIn profile where I share my experiences and connect with other professionals.",
    url: "https://www.linkedin.com/in/ma-raafay/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
