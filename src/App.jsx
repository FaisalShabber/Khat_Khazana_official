// @ts-nocheck

import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import Aboutus from "./Aboutus";
import Latters from "./Letters";
import Homepage from "./HomePage";
import Englishletter from "./Englishletter";
import Urduletter from "./Urduletter";
import Punjabiletter from "./Punjabiletter";
import PhotoGraph from "./PhotoGraph";
import SubmissionForm from "./SubmissionForm";
import Featurelatter from "./Featurelatter";
import PhotoGraphDetail from "./PhotoGraphDetail";
import ShopPage from "./ShopPage";
import LetterDetailPage from "./LetterDetailPage";

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
        <Route path="/letters/english/:id" element={<LetterDetailPage />} />

        <Route path="/letters/urdu" element={<Urduletter />} />
        <Route path="/letters/urdu/:id" element={<LetterDetailPage />} />

        <Route path="/letters/punjabi" element={<Punjabiletter />} />
        <Route path="/letters/punjabi/:id" element={<LetterDetailPage />} />

        <Route
          path="/photographs"
          element={<PhotoGraph title="Photographs" />}
        />
        <Route path="/PhotoGraphs/:id" element={<PhotoGraphDetail />} />
        <Route
          path="/featured"
          element={<Featurelatter title="Featured letters & Photographs" />}
        />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/submission"
          element={<SubmissionForm title="Submission" />}
        />
        <Route path="/shop" element={<ShopPage title="Shop" />} />
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
