import React from "react";
import Footer from "./components/Footer";
import "./init-gsap";

/**
 * This code defines the react app
 *
 * Imports the router functionality to provide page navigation
 * Defines the Home function outlining the content on each page
 * Content specific to each page (Home and About) is defined in their components in /pages
 * Each page content is presented inside the overall structure defined here
 * The router attaches the page components to their paths
 */

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router";

// The component that adds our Meta tags to the page
import Seo from "./components/seo";

// Home function that is reflected across the site
export default function Home() {
  return (
    <>
      <Seo />
      <main role="main" className="wrapper">
        <div className="content">
          {/* Router specifies which component to insert here as the main content */}
          <PageRouter />
        </div>
      </main>
      <Footer />
    </>
  );
}
