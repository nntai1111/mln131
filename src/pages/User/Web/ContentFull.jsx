import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaFlag, FaFistRaised, FaHammer, FaHandshake } from 'react-icons/fa';
import SocialismPage1 from '../../../components/Content/SocialismPage1';
import SocialismPage2 from '../../../components/Content/SocialismPage2';
import SocialismPage3 from '../../../components/Content/SocialismPage3';
import SocialismPage4 from '../../../components/Content/SocialismPage4';

const SocialismApp = () => {
    const navigate = useNavigate();
    const [activeSections, setActiveSections] = useState([0]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = [
        {
            id: 'section1',
            title: 'Về độc lập dân tộc',
            icon: <FaFlag className="text-4xl text-amber-600 mb-4" />,
            component: <SocialismPage1 />,
        },
        {
            id: 'section2',
            title: 'Về cách mạng giải phóng dân tộc',
            icon: <FaFistRaised className="text-4xl text-amber-600 mb-4" />,
            component: <SocialismPage2 />,
        },
        {
            id: 'section3',
            title: 'Về chủ nghĩa xã hội và xây dựng chủ nghĩa xã hội ở Việt Nam',
            icon: <FaHammer className="text-4xl text-amber-600 mb-4" />,
            component: <SocialismPage3 />,
        },
        {
            id: 'section4',
            title: 'Mối quan hệ giữa độc lập dân tộc và chủ nghĩa xã hội',
            icon: <FaHandshake className="text-4xl text-amber-600 mb-4" />,
            component: <SocialismPage4 />,
        },
    ];

    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const Section = ({ section, index }) => {
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
                className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-8"
            >
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-2 mb-4">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 flex items-center">
                            <span className="relative top-1">{section.icon}</span>
                            <span className="ml-2">{section.title}</span>
                        </h2>
                    </div>
                    <div className="w-full">{section.component}</div>
                </div>
            </motion.div>
        );
    };

    const toggleSection = (index) => {
        setActiveSections((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-4 font-sans bg-[url('/hcm3.png')] bg-fixed bg-cover bg-center bg-opacity-20">
            {/* Tab Navigation */}
            <div className="w-full max-w-5xl mb-6">
                <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-4">
                    <div className="grid grid-cols-2 gap-3">
                        {sections.map((section, index) => (
                            <motion.button
                                key={section.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full px-4 py-2 rounded-full font-medium text-sm md:text-base text-center transition-all duration-200
                                    ${activeSections.includes(index)
                                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                    }`}
                                onClick={() => toggleSection(index)}
                            >
                                {section.title}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Display Active Sections */}
            <div className="w-full px-4">
                {activeSections.length === 0 ? (
                    <p className="text-center text-gray-600">Vui lòng chọn một hoặc nhiều tab để xem nội dung.</p>
                ) : (
                    activeSections.map((index) => (
                        <Section key={sections[index].id} section={sections[index]} index={index} />
                    ))
                )}
            </div>

            {/* Navigation Button */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
            >
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-full shadow-lg border-2 border-white animate-bounce hover:shadow-xl transition-all"
                    onClick={() => navigate('/hcm202/test')}
                >
                    Ôn tập ngay
                </motion.a>
            </motion.div>
        </div>
    );
};

export default SocialismApp;