import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { ObjectDetection } from "./components/ObjectDetection";
import { OCRReader } from "./components/OCRReader";
import { FaceRecognition } from "./components/FaceRecognition";
import { Navigation } from "./components/Navigation";
import { VoiceCommands } from "./components/VoiceCommands";
import { Eye, Camera, FileText, Users, Map } from "lucide-react";
import { motion } from "framer-motion";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        {/* Header */}
        <header className="bg-opacity-80 backdrop-blur-md shadow-lg p-5">
          <div className="container mx-auto flex items-center gap-3">
            <Eye size={32} className="text-blue-400 animate-pulse" />
            <h1 className="text-3xl font-extrabold tracking-wide">Visual Assist AI</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto p-6">
          <Routes>
            <Route
              path="/"
              element={
                <div className="text-center py-12">
                  <motion.h2
                    className="text-4xl font-bold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Welcome to <span className="text-blue-400">Visual Assist AI</span>
                  </motion.h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Your intelligent assistant for visual navigation and object recognition.
                  </p>

                  {/* Features Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {[
                      { label: "Object Detection", path: "detect", icon: <Camera size={28} />, color: "blue" },
                      { label: "Read Text (OCR)", path: "ocr", icon: <FileText size={28} />, color: "green" },
                      { label: "Recognize Faces", path: "faces", icon: <Users size={28} />, color: "purple" },
                      { label: "Voice Navigation", path: "navigate", icon: <Map size={28} />, color: "yellow" },
                    ].map((item, index) => (
                      <motion.a
                        key={index}
                        href={`#/${item.path}`}
                        className={`flex flex-col items-center justify-center gap-2 bg-${item.color}-500 text-white p-5 rounded-xl shadow-lg hover:bg-${item.color}-600 transform hover:scale-105 transition-all`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {item.icon}
                        <span className="text-lg font-semibold">{item.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              }
            />
            <Route path="/detect" element={<ObjectDetection />} />
            <Route path="/ocr" element={<OCRReader />} />
            <Route path="/faces" element={<FaceRecognition />} />
            <Route path="/navigate" element={<Navigation />} />
          </Routes>
        </main>

        {/* Voice Commands Component */}
        <VoiceCommands />
      </div>
    </Router>
  );
}

export default App;
