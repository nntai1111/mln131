// MoodOption.jsx
import React from "react";
import { motion } from "framer-motion";

export const ContentList = React.forwardRef(({ onConfirm, isLoading }, ref) => {
    // Animation variants for cards
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        }),
        hover: {
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen  flex flex-col justify-center items-center p-2 sm:p-8 
            bg-black/70 rounded-xl"
        >
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-20 text-center relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
                <span className="text-white brightness-150 contrast-125">
                    Chủ nghĩa Xã hội
                </span>

                <motion.div
                    className="absolute -bottom-3 left-1/2 w-20 h-1 bg-gradient-to-r from-red-300 to-red-500 rounded-full"
                    style={{ transform: "translateX(-50%)" }}
                    initial={{ width: 0 }}
                    animate={{ width: "5rem" }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                />
            </motion.h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {[
                    {
                        title: "Chủ nghĩa Xã hội: Giai đoạn Đầu",
                        image: "/ndi1.jpg",
                        description:
                            "Giai đoạn thấp của hình thái cộng sản chủ nghĩa, dựa trên chế độ công hữu, giải phóng con người, phân phối theo lao động.",
                    },
                    {
                        title: "Điều kiện Ra đời",
                        image: "/ndi2.jpg",
                        description:
                            "Ra đời từ mâu thuẫn chủ nghĩa tư bản, với lực lượng sản xuất phát triển và giai cấp công nhân trưởng thành, dưới sự lãnh đạo của Đảng Cộng sản.",
                    },
                    {
                        title: "Đặc trưng Bản chất",
                        image: "/ndi3.jpg",
                        description:
                            "Giải phóng con người, nhân dân làm chủ, kinh tế công hữu, phát triển văn hóa - giáo dục, đoàn kết dân tộc - quốc tế, lãnh đạo bởi Đảng Cộng sản.",
                    },
                ].map((item, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transform transition-all duration-300"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover brightness-120"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-xl font-bold text-[#ff5858] mb-3 text-center">
                                {item.title}
                            </h2>
                            <p className="text-gray-600 text-sm text-center flex-grow">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.button
                onClick={onConfirm}
                disabled={isLoading}
                className={`relative z-50 mt-4 px-5 py-2 bg-gradient-to-r from-[#602985] to-[#7b42b0] text-white rounded-lg hover:bg-purple-800 transition-all flex items-center gap-1 ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                whileHover={{ scale: isLoading ? 1 : 1.03 }}
                whileTap={{ scale: isLoading ? 1 : 0.97 }}
            >
                {isLoading ? "Đang xử lý..." : "Tiếp theo"}
            </motion.button>

        </motion.div>
    );
});

export default ContentList;