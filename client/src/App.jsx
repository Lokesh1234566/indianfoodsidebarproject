import React, { useState } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Thiamine from "./components/Thiamine";
import Riboflavin from "./components/Riboflavin";

const App = () => {
  const [selectedSidebarItem, setSelectedSidebarItem] = useState({
    name: "Thiamine(B1)",
    color: "#ffcdd2",
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="w-screen h-screen flex flex-col">
        <Header
          selectedSidebarItem={selectedSidebarItem}
          toggleSidebar={toggleSidebar}
        />

        <div className="flex flex-1">
          <div
            className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              md:translate-x-0 md:static md:inset-0
            `}
          >
            <SideBar
              setSelectedSidebarItem={setSelectedSidebarItem}
              closeSidebar={() => setIsSidebarOpen(false)}
            />
          </div>

          {isSidebarOpen && (
            <div
              className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
              onClick={toggleSidebar}
            ></div>
          )}

          <div className="flex-1 bg-gray-100 p-4 overflow-auto mt-16 md:mt-0">
            {/* Adjust top margin on mobile to accommodate fixed header */}
            <Routes>
              <Route path="/" element={<Navigate to="/thiamine" />} />
              <Route path="/thiamine" element={<Thiamine />} />
              <Route path="/riboflavin" element={<Riboflavin />} />
              {/* Add more routes as necessary */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
