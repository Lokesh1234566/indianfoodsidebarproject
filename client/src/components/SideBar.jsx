/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const SideBarComp = ({ setSelectedSidebarItem, closeSidebar }) => {
  const [openCollapse, setOpenCollapse] = useState(null);
  const location = useLocation();

  const currentPath = location.pathname.slice(1);
  const [selectedItem, setSelectedItem] = useState(currentPath || "thiamine");

  const handleItemClick = (collapseTitle, itemKey, itemLabel, itemColor) => {
    setOpenCollapse(openCollapse === collapseTitle ? null : collapseTitle);
    setSelectedItem(itemKey);
    setSelectedSidebarItem({ name: itemLabel, color: itemColor });

    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  return (
    <div className="mt-9 md:h-[91vh] flex flex-col overflow-y-auto  md:mt-0">
      {/* Sidebar for mobile with mt-[5px], reset for desktop */}
      <Sidebar className="w-full">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            {/* First Field */}
            <Sidebar.Collapse
              label="Water Soluble Vitamins"
              open={openCollapse === "vitamins"}
              onClick={() =>
                setOpenCollapse(openCollapse === "vitamins" ? null : "vitamins")
              }
            >
              <Sidebar.Item
                as={Link}
                to="/thiamine"
                className="cursor-pointer"
                onClick={() =>
                  handleItemClick(
                    "vitamins",
                    "thiamine",
                    "Thiamine(B1)",
                    "#ffcdd2"
                  )
                }
                style={{
                  backgroundColor:
                    selectedItem === "thiamine" ? "#0000ff" : "transparent",
                  color: selectedItem === "thiamine" ? "white" : "inherit",
                  fontWeight: selectedItem === "thiamine" ? "bold" : "normal",
                }}
              >
                Thiamine(B1)
              </Sidebar.Item>
              <Sidebar.Item
                as={Link}
                to="/riboflavin"
                className="cursor-pointer"
                onClick={() =>
                  handleItemClick(
                    "vitamins",
                    "riboflavin",
                    "Riboflavin(B2)",
                    "#e1bee7"
                  )
                }
                style={{
                  backgroundColor:
                    selectedItem === "riboflavin" ? "#0000ff" : "transparent",
                  color: selectedItem === "riboflavin" ? "white" : "inherit",
                  fontWeight: selectedItem === "riboflavin" ? "bold" : "normal",
                }}
              >
                Riboflavin(B2)
              </Sidebar.Item>
              {/* Add more items as needed */}
            </Sidebar.Collapse>

            {/* Second Field */}
            <Sidebar.Collapse
              label="Carotenoids"
              open={openCollapse === "carotenoids"}
              onClick={() =>
                setOpenCollapse(
                  openCollapse === "carotenoids" ? null : "carotenoids"
                )
              }
            >
              <Sidebar.Item
                as={Link}
                to="/lutein"
                className="cursor-pointer"
                onClick={() =>
                  handleItemClick("carotenoids", "lutein", "Lutein", "#c5e1a5")
                }
                style={{
                  backgroundColor:
                    selectedItem === "lutein" ? "#0000ff" : "transparent",
                  color: selectedItem === "lutein" ? "white" : "inherit",
                  fontWeight: selectedItem === "lutein" ? "bold" : "normal",
                }}
              >
                Lutein
              </Sidebar.Item>
              {/* Add more items as needed */}
            </Sidebar.Collapse>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBarComp;
