import "./styles.css";
import Intro from "./components/Intro";
import ResumeData from "./components/resumeData";
import About from "./components/About";
import React from "react";
import Exp from "./components/Exp";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Intro resumeData={ResumeData} />
      <About resumeData={ResumeData} />
      <Exp />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
