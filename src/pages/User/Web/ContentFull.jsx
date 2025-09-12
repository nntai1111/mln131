import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaBook, FaLightbulb, FaGlobe, FaUsers } from 'react-icons/fa';
import SocialismPage1 from '../../../components/Content/SocialismPage1';
import SocialismPage2 from '../../../components/Content/SocialismPage2';
import SocialismPage3 from '../../../components/Content/SocialismPage3';
import SocialismPage4 from '../../../components/Content/SocialismPage4';

const SocialismApp = () => {
    const navigate = useNavigate();
    const sections = [
        {
            id: 'section1',
            title: 'Chủ nghĩa xã hội',
            icon: <FaBook className="text-4xl text-red-600 mb-4" />,
            component: <SocialismPage1 />,
        },
        {
            id: 'section2',
            title: 'Điều kiện ra đời',
            icon: <FaLightbulb className="text-4xl text-red-600 mb-4" />,
            component: <SocialismPage2 />,
        },
        {
            id: 'section3',
            title: 'Đặc trưng bản chất',
            icon: <FaGlobe className="text-4xl text-red-600 mb-4" />,
            component: <SocialismPage3 />,
        },
        {
            id: 'section4',
            title: 'Thời kỳ quá độ',
            icon: <FaUsers className="text-4xl text-red-600 mb-4" />,
            component: <SocialismPage4 />,
        },
    ];

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const Section = ({ section }) => {
        const controls = useAnimation();
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true, amount: 0.3 });

        useEffect(() => {
            if (isInView) controls.start('visible');
        }, [controls, isInView]);

        return (
            <motion.div
                ref={ref}
                variants={sectionVariants}
                initial="hidden"
                animate={controls}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8"
            >
                <div className="flex flex-col items-center text-center">
                    <div className="flex items-center gap-2 mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
                            <span className="relative top-1">{section.icon}</span>
                            <span className="ml-2">{section.title}</span>
                        </h2>
                    </div>

                    <div className="w-full">{section.component}</div>
                </div>

            </motion.div>
        );
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center py-12 px-4 font-sans bg-[url('/untitled-0.png')] bg-fixed bg-cover bg-center bg-opacity-20">
            {/* <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12 w-full px-4"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Khám Phá Chủ Nghĩa Xã Hội</h1>
                <p className="text-lg text-gray-700 mt-4">
                    Tìm hiểu về chủ nghĩa xã hội từ khái niệm cơ bản đến đặc trưng cốt lõi.
                </p>
            </motion.div> */}

            <div className="w-full px-4">
                {sections.map((section) => (
                    <Section key={section.id} section={section} />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
            >
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 
               text-white font-semibold rounded-full shadow-lg border-2 border-white
               animate-bounce hover:shadow-xl transition-all"
                    onClick={() => navigate("/mln131/test")}
                >
                    Ôn tập ngay
                </motion.a>
            </motion.div>

        </div>
    );
};

export default SocialismApp;