import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Web/BackGround.module.css";
import DownloadSection from "./DownloadSection";
import IntrFPT from "./IntrFPT";
import ImproveEmotion from "./ImproveEmotion";
import QuestionRequest from "./QuestionRequest";

const MOBILE_MAX_WIDTH = 768;

const BackGround = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < MOBILE_MAX_WIDTH : false
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_MAX_WIDTH);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Khởi tạo giá trị ban đầu
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="relative min-w-screen h-[150vh] overflow-hidden">
        {/* Nền chính - Không di chuyển */}
        <motion.div
          className="absolute top-[8%] left-0 w-full h-screen"
          style={{
            backgroundImage: "url('/untitled-0.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: `translateY(${scrollY * 0.1}px)`,
            zIndex: -1,
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        ></motion.div>

        {/* Component DownloadSection nằm chính giữa ảnh nền */}
        <div className="absolute top-1/7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full">
          <DownloadSection />
        </div>
        <motion.img
          src="/bg_right1.png"
          // src="/bg_HomeBottomRight.webp"
          alt=""
          animate={{ y: -scrollY * 0.1 }}
          className="absolute top-[30%] left-0 w-full  h-[100vh]"
        />
      </div>
      {/* Nội dung trang */}
      <>
        <div>
          <ImproveEmotion />
        </div>
        <div>
          <IntrFPT />
        </div>
        <div>
          <QuestionRequest />
        </div>

      </>
    </>
  );
};

export default BackGround;
