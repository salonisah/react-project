import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./layouts/header";
import Home from "./pages/homepage";
import About from "./pages/about";
import ServicePage from "./pages/servicepage";
import CasePage from "./pages/casespage";
import BlogsPage from "./pages/blogspage";
import ContactPage from "./pages/contactpage";
import Teampage from "./pages/teampage";
import Casesingle from "./pages/cases-single";
import Blogsingle from "./pages/blog-singlepage";
import Footer from "./layouts/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/servicess" element={<ServicePage />} />
            <Route path="/cases" element={<CasePage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/contactpage" element={<ContactPage />} />
            <Route path="/teampage" element={<Teampage />} />
            <Route path="/cases-single" element={<Casesingle />} />
            <Route path="/blog-single-page" element={<Blogsingle/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
