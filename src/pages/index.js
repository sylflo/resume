import React, { useState } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SEO from "../components/seo"
import Navbar from '../components/navbar/navbar';
import Homepage from '../components/homepage';
import Project from '../components/projects/projects';
import PullRequest from '../components/projects/pull-requests';
import WorkExperience from '../components/work-experience';
import Contact from '../components/contact/index';

export default function() {
  const [navbarOpen, setNavbarOpen] =  useState(false);

  const handleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <div>
      <ToastContainer />
      <SEO
        keywords={[`Sylvain`, `Chateau`, `devops`, `developer`]}
        title="Sylvain Chateau Developer/DevOps"
      />
      <Navbar
        navbarState={navbarOpen} 
        handleNavbar={handleNavbar}
      />
      <Homepage />
      <WorkExperience />
      <Project />
      <PullRequest />
      <Contact />
    </div>
  );
  
}
