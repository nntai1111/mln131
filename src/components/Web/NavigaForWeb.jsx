import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaHistory, FaChartBar, FaBook } from "react-icons/fa"; // Importing icons for nav links
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
            src="/logoxhcn1.png"
            alt="Logo"
            className="w-15 h-15 object-contain transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <Link to="/" className="flex flex-col leading-tight">
            <span className="text-[#ff6969] font-bold text-3xl tracking-wide">
              Chủ Nghĩa Xã Hội
            </span>
            <span className="text-sm text-gray-600 font-bold">
              Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội
            </span>
          </Link>
        </div>
        {/* Right Section: Additional Links */}
        <div className="flex items-center gap-8 ml-auto text-lg">
          <Link
            to="/mln131"
            className={` flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ease-in-out  ${location.pathname === "/mln131" ? "bg-[#f15a5a] text-white" : "hover:bg-red-100 hover:text-red-500"
              }`}
          >
            <FaHome className=" " />
            {shortMenu ? "Trang..." : "Trang chủ"}
          </Link>
          <Link
            to="/mln131/content"
            className={` flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ease-in-out  ${location.pathname === "/mln131/content" ? "bg-[#f15a5a] text-white" : "hover:bg-red-100 hover:text-red-500"
              }`}
          >
            <Book className="" />
            {shortMenu ? "Nội..." : "Nội dung"}
          </Link>
          <Link
            to="/mln131/analysis"
            className={` flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ease-in-out  ${location.pathname === "/mln131/analysis" ? "bg-[#f15a5a] text-white" : "hover:bg-red-100 hover:text-red-500"
              }`}
          >
            <FaChartBar className="" />
            {shortMenu ? "Phân..." : "Phân tích kết luận"}
          </Link>
          <Link
            to="/mln131/test"
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 ease-in-out  ${location.pathname === "/mln131/test" ? "bg-[#f15a5a] text-white" : "hover:bg-red-100 hover:text-red-500"
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