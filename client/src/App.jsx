import React, { useState } from "react";
import Header from "./components/Header";
import SideBarComp from "./components/SideBar";
import ContentComponent from "./components/ContentComponent";
import tablemenudetails from "./assets/tablemenudetails.json";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-screen flex flex-col">
      {/* Pass selectedItem to Header */}
      <Header toggleSidebar={toggleSidebar} selectedItem={selectedItem} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-30 w-full md:w-[30%] transform bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              md:translate-x-0 md:static md:inset-0
            `}
        >
          <SideBarComp
            setSelectedSidebarItem={setSelectedItem}
            closeSidebar={() => setIsSidebarOpen(false)}
            tablemenudetails={tablemenudetails}
          />
        </div>

        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black opacity-50 md:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main content */}
        <div className="flex-1 w-full md:w-[70%] bg-gray-100 p-4 overflow-auto mt-16 md:mt-0">
          {selectedItem ? (
            <ContentComponent selectedItem={selectedItem} />
          ) : (
            <div>Select a menu item from the sidebar</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
