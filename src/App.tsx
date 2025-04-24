import React, { useState } from "react";
import axios from "axios";
import Home from "./components/pages/Home";
import APIs from "./components/pages/APIs";
import BugReport from "./components/pages/BugReport";
import Documentation from "./components/pages/Documentation";
import Generate from "./components/pages/Generate";
import Guestionaire from "./components/pages/Guestionaire";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App: any = () => {
  const [message, setMessage] = useState("");

  const handleGenerate = async () => {
    try {
      const response = await axios.get("http://localhost:5000/generate");
      const data = await response.data;
      setMessage(data);
    } catch (error) {
      setMessage(`Error generating API. Error: ${error}`);
    }
  };

  return (
    <Router>
      <div className="container-fluid h-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apis" element={<APIs />} />
          <Route path="/reports" element={<BugReport />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/questions" element={<Guestionaire />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
