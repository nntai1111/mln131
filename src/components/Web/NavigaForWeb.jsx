import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHistory, FaChartBar, FaBook, FaComments } from "react-icons/fa"; // Importing icons for nav links
import { Book } from "lucide-react";

// Hook to check screen size
function useShortMenuLabel() {
  const [short, setShort] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setShort(window.innerWidth < 1100 && window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return short;
}

const NavigaForWeb = () => {
  const location = useLocation();
  const shortMenu = useShortMenuLabel();

  return (
    <nav className="w-full max-w-8xl bg-white mx-8 px-4 py-1 shadow-lg rounded-lg relative transition-all duration-300 ease-in-out">
      <div className="hidden md:flex items-center w-full justify-start">
        {/* Left Section: Logo and Links */}
        <div className="flex items-center gap-3">
          <img
            src="/hcm12.png"
            alt="Logo"
            className="w-20 h-15 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-[#ff6969] font-bold text-3xl tracking-wide">
              Tư tưởng Hồ Chí Minh
            </span>
            <span className="text-sm text-gray-600 font-bold">
              Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội
            </span>
          </Link>
        </div>
        {/* Right Section: Additional Links */}
        <div className="flex items-center gap-8 ml-auto text-lg">
          <Link
            to="/hcm202"
            className={` flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ease-in-out  ${location.pathname === "/hcm202" ? "bg-[#f15a5a] text-white" : "hover:bg-red-100 hover:text-red-500"
              }`}
          >
            <FaHome className=" " />
            {shortMenu ? "Trang..." : "Trang chủ"}
          </Link>
          <Link
            to="/hcm202/content"
            className={` flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ease-in-out  ${location.pathname === "/hcm202/content" ? "bg-[#f15a5a] text-white" : "hover:bg-red-100 hover:text-red-500"
              }`}
          >
            <Book className="" />
            {shortMenu ? "Nội..." : "Nội dung"}
          </Link>
          <Link
            to="/hcm202/analysis"
            className={` flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ease-in-out  ${location.pathname === "/hcm202/analysis" ? "bg-[#f15a5a] text-white" : "hover:bg-red-100 hover:text-red-500"
              }`}
          >
            {/* <FaChartBar className="" /> */}
            <FaComments className="" />
            {shortMenu ? "Câu..." : "Câu hỏi thường gặp"}
          </Link>
          <Link
            to="/hcm202/test"
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ease-in-out  ${location.pathname === "/hcm202/test" ? "bg-[#f15a5a] text-white" : "hover:bg-red-100 hover:text-red-500"
              }`}
          >
            <FaBook className="" />
            {shortMenu ? "Ôn..." : "Ôn tập"}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigaForWeb;