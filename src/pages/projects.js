import React, { useRef, useEffect, Fragment } from "react";
import { Layout } from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";
import { sr, srConfig } from "../utils/sr";
import { PageTitle } from "../components/pageTitle";
import { OverlayedImage } from "../components/overlayedImage";
import {
  RiShareBoxLine,
  RiFileCodeLine,
  RiWindowLine,
  RiSmartphoneLine,
} from "react-icons/ri";

const Projects = () => {
  const { allContentfulRecentProjects } = useStaticQuery(graphql`
    query {
      allContentfulRecentProjects(sort: { fields: priority, order: DESC }) {
        edges {
          node {
            name
            languageAndTechnologies
            description {
              description
            }
            type
            links {
              type
              url
              description
            }
            images {
              title
              file {
                url
              }
            }
          }
        }
      }
    }
  `);

  const revealProjects = useRef([]);
  useEffect(() => {
    revealProjects.current.forEach((ref, i) => {
      sr.reveal(ref, srConfig(i * 100));
    });
  }, []);

  const icons = {
    github: <RiFileCodeLine />,
    site: <RiShareBoxLine />,
    web: <RiWindowLine />,
    mobile: <RiSmartphoneLine />,
  };

  return (
    <Layout>
      <PageTitle title={"Projects"} />

      {allContentfulRecentProjects.edges.map((edge, i) => {
        const {
          name,
          languageAndTechnologies,
          links,
          images,
          description,
          type,
        } = edge.node;

        return (
          <Fragment key={i}>
            {/* Laptop view */}
            <div
              ref={(el) => (revealProjects.current[i] = el)}
              className="h-88 w-full max-w-4xl m-2 p-2 hidden md:flex relative overflow-hidden"
            >
              <div className="md:w-full flex flex-col mt-5">
                <div className="text-3xl text-text-primary flex justify-between md:w-2/5 items-center p-1">
                  <span>{name}</span>
                  {icons[type]}
                </div>
                <div className="flex flex-wrap items-center my-1 md:w-2/5">
                  {languageAndTechnologies.map((techName) => {
                    return (
                      <div
                        key={`${techName}`}
                        className="rounded mr-1 mb-1 px-1 bg-background-tag text-text-primary text-sm shadow"
                      >
                        {techName}
                      </div>
                    );
                  })}
                </div>
                <div className="z-10 text-base text-text-primary bg-background-secondary p-1 rounded shadow my-1 md:w-1/2">
                  {description.description}
                </div>
                <div className="flex my-1">
                  {links.map((link) => (
                    <a
                      key={link.url}
                      className="text-2xl mx-1"
                      href={`${link.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {icons[link.type]}
                    </a>
                  ))}
                </div>
              </div>
              <div className="absolute md:w-3/5 h-80 w-full right-0">
                <OverlayedImage
                  isHoverable={true}
                  imageSrc={images[0].file.url}
                  imageAlt={images[0].title}
                />
              </div>
            </div>
            {/* Mobile view */}
            <div
              ref={(el) =>
                (revealProjects.current[
                  i + allContentfulRecentProjects.edges.length
                ] = el)
              }
              className="h-88 w-full max-w-4xl m-2 p-2 flex md:hidden relative overflow-hidden"
            >
              <div className="absolute h-80 w-full right-0">
                <OverlayedImage
                  imageSrc={images[0].file.url}
                  imageAlt={images[0].title}
                >
                  <div className="text-text-primary">
                    <div className="text-3xl text-text-primary flex justify-between md:w-2/5 items-center p-1">
                      <span className="">{name}</span>
                      {icons[type]}
                    </div>
                    <div className="flex flex-wrap items-center my-1 md:w-2/5">
                      {languageAndTechnologies.map((techName) => {
                        return (
                          <div
                            key={techName}
                            className="rounded mr-1 mb-1 px-1 text-text-primary text-sm shadow"
                          >
                            {techName}
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-base text-text-primary p-1 my-1 md:w-1/2 ">
                      {description.description}
                    </div>
                    <div className="flex my-1">
                      {links.map((link) => (
                        <a
                          key={`mobile${link.url}`}
                          className="text-2xl mx-1"
                          href={`${link.url}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {icons[link.type]}
                        </a>
                      ))}
                    </div>
                  </div>
                </OverlayedImage>
              </div>
            </div>
          </Fragment>
        );
      })}
    </Layout>
  );
};

export default Projects;
