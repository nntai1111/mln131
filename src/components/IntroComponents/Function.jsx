import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaStar, FaRocket, FaBook, FaBrain } from "react-icons/fa";

export const Func = React.forwardRef(({ isLoading }, ref) => {
    const navigate = useNavigate();

    // Handle navigation to /home
    const handleStart = () => {
        if (!isLoading) {
            navigate("/mln131");
        }
    };

    // Animated particles for sparkle effect
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        delay: Math.random() * 2,
        duration: 3 + Math.random() * 2,
    }));

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-black/50 backdrop-blur-sm h-screen flex flex-col justify-center items-center p-4 relative z-10 overflow-hidden"
            style={{
                position: "relative",
            }}
        >
            {/* Animated background particles */}
            <div className="absolute inset-0 pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-2 h-2 bg-white rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.5, 0],
                            scale: [0, 1, 0],
                            x: [0, Math.random() * 100 - 50, 0],
                            y: [0, Math.random() * 100 - 50, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* Floating icons with bolder animations */}
            <motion.div
                className="absolute top-10 left-10 text-purple-200 text-5xl opacity-30"
                animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.5))" }}
            >
                <FaBook />
            </motion.div>

            <motion.div
                className="absolute top-20 right-20 text-yellow-300 text-4xl opacity-30"
                animate={{
                    y: [0, 30, 0],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 8px rgba(234, 179, 8, 0.5))" }}
            >
                <FaStar />
            </motion.div>

            <motion.div
                className="absolute bottom-20 left-20 text-blue-300 text-5xl opacity-30"
                animate={{
                    y: [0, -25, 0],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))" }}
            >
                <FaBrain />
            </motion.div>

            <motion.div
                className="absolute bottom-10 right-10 text-green-300 text-4xl opacity-30"
                animate={{
                    y: [0, 20, 0],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.5))" }}
            >
                <FaRocket />
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center relative z-10"
            >
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-8"
                    style={{
                        background: "linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #a78bfa 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
                >
                    <span className="relative inline-block">
                        <motion.div
                            className="absolute -bottom-2 left-1/2 w-20 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 rounded-full mx-auto"
                            style={{ transform: "translateX(-50%)" }}
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: "5rem", opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
                        />
                        {/* Sparkle effect on title */}
                        <motion.div
                            className="absolute -top-2 -right-2 text-yellow-300"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.3 }}
                        >
                            <FaStar className="text-sm animate-pulse" />
                        </motion.div>
                    </span>
                </motion.h1>

                <motion.div className="text-white text-lg sm:text-xl max-w-3xl mx-auto mb-8 px-4 leading-relaxed">
                    <div className="space-y-4">
                        <p className="flex items-center justify-center gap-2 mb-4">
                            <FaBook className="text-purple-300 text-2xl" />
                            <span>Trang web này sẽ giúp bạn có thêm kiến thức sâu sắc về chủ nghĩa xã hội – giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa, bao gồm khái niệm, bản chất, điều kiện ra đời, 6 đặc trưng cơ bản, và thời kỳ quá độ lên chủ nghĩa xã hội.</span>
                        </p>
                        <p className="flex items-center justify-center gap-2 mb-4">
                            <FaBrain className="text-blue-300 text-2xl" />
                            <span>Với trọng tâm liên hệ thực tiễn Việt Nam, bạn sẽ hiểu rõ con đường Đổi Mới, kinh tế thị trường định hướng XHCN, và các nhiệm vụ xây dựng xã hội công bằng, dân chủ.</span>
                        </p>
                        <p className="flex items-start justify-center gap-2 mb-4">
                            <FaRocket className="text-green-300 text-2xl mt-1 flex-shrink-0" />
                            <span>Sau khi nắm vững nội dung, chúng mình còn cung cấp thêm các bài test tương tác, câu hỏi ôn tập, và quiz ngắn gọn để bạn củng cố kiến thức, dễ dàng áp dụng vào học tập hoặc nghiên cứu. Từ lý thuyết đến thực tiễn – tất cả chỉ trong một cú click!</span>
                        </p>
                        <p className="flex items-center justify-center gap-2 text-lg font-semibold text-purple-100">
                            <FaStar className="text-yellow-300" />
                            <span>Hãy cùng trải nghiệm ngay nhé! Bắt đầu bằng cách khám phá phần "Chủ Nghĩa Xã Hội" hoặc thử quiz đầu tiên. Bạn sẵn sàng chưa? 🚀</span>
                        </p>
                    </div>
                </motion.div>

                {/* Enhanced Button */}
                <motion.button
                    onClick={handleStart}
                    disabled={isLoading}
                    className={`relative px-8 py-4 bg-gradient-to-r from-[#602985] via-[#7b42b0] to-[#a78bfa] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 flex items-center gap-3 group ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:from-[#7b42b0] hover:to-[#a78bfa]"
                        }`}
                    whileHover={isLoading ? { scale: 1 } : { scale: 1.05 }}
                    whileTap={isLoading ? { scale: 1 } : { scale: 0.98 }}
                >
                    {isLoading ? (
                        <>
                            <motion.div
                                className="h-5 w-5 border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            <span className="text-base">Đang xử lý...</span>
                        </>
                    ) : (
                        <>
                            <span className="text-base relative">
                                Bắt đầu
                                {/* Button sparkle */}
                                <motion.div
                                    className="absolute -top-1 -right-1 text-yellow-300 text-xs"
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileHover={{ scale: 1, opacity: 1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <FaStar />
                                </motion.div>
                            </span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </>
                    )}
                    {/* Button glow effect */}
                    <motion.div
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.button>

                {/* Subtle footer text */}
                <motion.p
                    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-purple-200 opacity-50 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 1 }}
                >
                    Được thiết kế với ❤️ cho hành trình học tập của bạn
                </motion.p>
            </motion.div>
        </motion.div>
    );
});

export default Func;