import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Simplify from "./components/Simplify";
import Footer from "./components/Footer";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="overflow-x-hidden relative">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Simplify />
      <Footer />
    </div>
  );
};

export default App;
