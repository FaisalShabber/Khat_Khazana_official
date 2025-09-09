// @ts-nocheck
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Aboutus from "./components/Aboutus";
import Latters from "./components/Letters";
import Homepage from "./components/HomePage";
import Englishletter from "./components/Englishletter";
import Urduletter from "./components/Urduletter";
import Punjabiletter from "./components/Punjabiletter";
import LattersDetailpage from "./components/LattersDetailpage";
import PhotoGraph from "./components/PhotoGraph";
import SubmissionForm from "./components/SubmissionForm";
import Featurelatter from "./components/Featurelatter";
import PhotoGraphDetail from "./components/PhotoGraphDetail";

// Simple placeholders – replace with your real pages
const Page = ({ title }) => (
  <div className="max-w-[1240px] mx-auto mt-6 bg-white/75 p-6 rounded-md border border-black/10">
    <h1 className="text-2xl font-title mb-2">{title}</h1>
    <p>Content goes here…</p>
  </div>
);

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {/* ✅ Navbar sirf homepage "/" pe hide hoga */}
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutus />} />

        {/* Main Letters page */}
        <Route path="/letters" element={<Latters />} />

        {/* Sub routes with details */}
        <Route path="/letters/english" element={<Englishletter />} />
        <Route path="/letters/english/:id" element={<LattersDetailpage />} />

        <Route path="/letters/urdu" element={<Urduletter />} />
        <Route path="/letters/urdu/:id" element={<LattersDetailpage />} />

        <Route path="/letters/punjabi" element={<Punjabiletter />} />
        <Route path="/letters/punjabi/:id" element={<LattersDetailpage />} />

        <Route path="/photographs" element={<PhotoGraph title="Photographs" />} />
        <Route path="/PhotoGraphs/:id" element={<PhotoGraphDetail />}/>
        <Route
          path="/featured"
          element={<Featurelatter title="Featured letters & Photographs" />}
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/submission" element={<SubmissionForm title="Submission" />} />
        <Route path="/shop" element={<Page title="Shop" />} />
      </Routes>

      {/* ✅ Footer sirf homepage pe hide hoga */}
      {location.pathname !== "/" && <Footer />}
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
