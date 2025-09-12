import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SocialismPage1 = () => {
    const [activeSection, setActiveSection] = useState('concept');
    const sections = {
        concept: {
            title: "Khái niệm",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Chủ nghĩa xã hội là một chế độ xã hội mà ở đó các lực lượng sản xuất được phát triển ở mức độ cao, dựa trên chế độ công hữu về tư liệu sản xuất làm nền tảng chủ đạo. Đây là xã hội do nhân dân lao động làm chủ, với mục tiêu giải phóng con người khỏi áp bức, bóc lột, hướng tới bình đẳng, công bằng và sự phát triển toàn diện của con người. Theo C. Mác trong tác phẩm <strong>"Phê phán cương lĩnh Gotha" (1875)</strong>, chủ nghĩa xã hội là giai đoạn thấp của hình thái kinh tế - xã hội cộng sản chủ nghĩa, nơi thực hiện nguyên tắc phân phối <strong>"làm theo năng lực, hưởng theo lao động"</strong>, khác với giai đoạn cao (cộng sản chủ nghĩa) với nguyên tắc <strong>"làm theo năng lực, hưởng theo nhu cầu"</strong>.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1516321318423-ffd3916b6e90?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80'
            ]
        },
        essence: {
            title: "Bản chất",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Chủ nghĩa xã hội là sự phủ định biện chứng đối với chủ nghĩa tư bản, kế thừa những thành tựu của nhân loại nhưng loại bỏ tình trạng bóc lột và bất công. Nó không phải là một mô hình cứng nhắc mà linh hoạt, tùy thuộc vào điều kiện lịch sử cụ thể của từng quốc gia. V.I. Lênin nhấn mạnh rằng chủ nghĩa xã hội là sản phẩm của cách mạng vô sản, nơi giai cấp công nhân nắm quyền lực và xây dựng nền kinh tế kế hoạch hóa, phục vụ lợi ích của toàn dân.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1497436072909-60f69c6c6b76?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1528183429752-0409130e9d1a?auto=format&fit=crop&w=300&q=80'
            ]
        },
        practice: {
            title: "Thực tiễn Việt Nam",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Việt Nam xác định con đường đi lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa, phù hợp với điều kiện của một quốc gia nông nghiệp lạc hậu. Công cuộc Đổi mới (từ năm 1986) đã cụ thể hóa mô hình kinh tế thị trường định hướng xã hội chủ nghĩa, kết hợp giữa kinh tế nhà nước, kinh tế tư nhân và các thành phần kinh tế khác, nhằm phát triển lực lượng sản xuất và nâng cao đời sống nhân dân.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        }
    };

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-lg p-6 mb-6"
            >
                <h2 className="text-3xl font-bold text-gray-900">Chủ nghĩa xã hội, giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {Object.keys(sections).map((key) => (
                    <motion.button
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-3 rounded-lg text-gray-900 font-semibold transition-colors ${activeSection === key ? 'bg-red-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
                        onClick={() => setActiveSection(key)}
                    >
                        {sections[key].title}
                    </motion.button>
                ))}
            </div>
            <AnimatePresence mode="wait">
                {Object.keys(sections).map((key) => (
                    activeSection === key && (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gray-100 rounded-lg p-6"
                        >
                            {sections[key].content}
                            <div className="mt-4 flex gap-4 overflow-x-auto pb-4">
                                {sections[key].images.map((src, index) => (
                                    <motion.img
                                        key={index}
                                        src={src}
                                        alt={`Hình ${index + 1} cho ${sections[key].title}`}
                                        className="w-40 h-28 object-cover rounded-lg shadow-md"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    )
                ))}
            </AnimatePresence>
        </div>
    );
};

export default SocialismPage1;