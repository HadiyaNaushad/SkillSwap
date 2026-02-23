import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import About from "./components/About";
import LearnMore from "./components/LearnMore";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import './App.css'

function App() {
  const [page, setPage] = useState("home");

  const navigateTo = (nextPage) => {
    setPage(nextPage);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {page === "home" && <Navbar onNavigate={navigateTo} />}

      {page === "home" && (
        <>
          <Hero />
          <HowItWorks />
          <Features />
          <About />
          <LearnMore />
          <Contact />
        </>
      )}

      {/* Login & Signup don't show navbar/footer */}
      {page === "login" && <Login onBack={() => navigateTo("home")} />}
      {page === "signup" && <Signup onBack={() => navigateTo("home")} />}

      {/* Show Footer only on Home page */}
      {page === "home" && <Footer />}
    </>
  );
}

export default App;