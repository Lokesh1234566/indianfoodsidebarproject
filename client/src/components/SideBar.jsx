/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import itemdata from "../assets/tableheading.json";

const SideBarComp = ({
  setSelectedSidebarItem,
  closeSidebar,
  tablemenudetails,
}) => {
  const [openCollapse, setOpenCollapse] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (collapseTitle, submenuKey, itemLabel, itemData) => {
    setOpenCollapse(openCollapse === collapseTitle ? null : collapseTitle);
    setSelectedItem(submenuKey);
    setSelectedSidebarItem(itemData);

    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  return (
    <div className="md:mt-0 h-screen flex flex-col overflow-y-auto">
      <Sidebar className="w-full">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {itemdata.heading_details.map((heading, id) => (
              <Sidebar.Collapse
                key={id}
                label={
                  <span className="whitespace-normal break-words">
                    {heading.Title}
                  </span>
                } // Ensure the label text wraps
                open={openCollapse === heading.Title}
                onClick={() =>
                  setOpenCollapse(
                    openCollapse === heading.Title ? null : heading.Title
                  )
                }
              >
                {Object.keys(heading)
                  .filter(
                    (key) =>
                      key.startsWith("submenu") && heading[key].trim() !== ""
                  )
                  .map((submenuKey, idx) => (
                    <Sidebar.Item
                      key={idx}
                      className="cursor-pointer"
                      onClick={() =>
                        handleItemClick(
                          heading.Title,
                          submenuKey,
                          heading[submenuKey],
                          tablemenudetails[heading.Title][heading[submenuKey]]
                        )
                      }
                      style={{
                        backgroundColor:
                          selectedItem === submenuKey
                            ? "#0000ff"
                            : "transparent",
                        color:
                          selectedItem === submenuKey ? "white" : "inherit",
                        fontWeight:
                          selectedItem === submenuKey ? "bold" : "normal",
                      }}
                    >
                      {heading[submenuKey]}
                    </Sidebar.Item>
                  ))}
              </Sidebar.Collapse>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBarComp;
