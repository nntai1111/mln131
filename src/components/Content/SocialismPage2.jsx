import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SocialismPage2 = () => {
    const [activeSection, setActiveSection] = useState('material');
    const sections = {
        material: {
            title: "Tiền đề vật chất",
            content: (
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Sự phát triển cao của các lực lượng sản xuất dưới chủ nghĩa tư bản dẫn đến mâu thuẫn giữa tính chất xã hội hóa của sản xuất và hình thức chiếm hữu tư nhân về tư liệu sản xuất. Theo C. Mác và Ph. Ăngghen, khi các lực lượng sản xuất đạt đến một trình độ nhất định, chủ nghĩa tư bản trở thành lực cản đối với sự tiến bộ xã hội, đòi hỏi phải thay thế bằng chế độ công hữu về tư liệu sản xuất.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1516321318423-ffd3916b6e90?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80'
            ]
        },
        social: {
            title: "Tiền đề xã hội",
            content: (
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Sự trưởng thành của giai cấp công nhân với ý thức đấu tranh giai cấp và sứ mệnh lịch sử. Giai cấp công nhân, dưới sự lãnh đạo của Đảng Cộng sản, thực hiện cách mạng xã hội chủ nghĩa để lật đổ chủ nghĩa tư bản và thiết lập quyền lực của nhân dân lao động.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1497436072909-60f69c6c6b76?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1528183429752-0409130e9d1a?auto=format&fit=crop&w=300&q=80'
            ]
        },
        historical: {
            title: "Điều kiện lịch sử",
            content: (
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Cách mạng Tháng Mười Nga (1917) là minh chứng đầu tiên cho thấy chủ nghĩa xã hội có thể ra đời ở các quốc gia lạc hậu về kinh tế nếu có sự lãnh đạo đúng đắn. V.I. Lênin bổ sung rằng ở những nước chưa trải qua giai đoạn phát triển đầy đủ của chủ nghĩa tư bản, cần thực hiện thời kỳ quá độ gián tiếp thông qua các bước trung gian như công nghiệp hóa, hợp tác hóa nông nghiệp và hiện đại hóa kinh tế.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        cause: {
            title: "Nguyên nhân sâu xa",
            content: (
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản trong chủ nghĩa tư bản dẫn đến đấu tranh giai cấp ngày càng gay gắt, cuối cùng kết thúc bằng cách mạng vô sản. Đây là quy luật tất yếu theo học thuyết về hình thái kinh tế - xã hội của chủ nghĩa Mác - Lênin.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1578916171728-46d996de1117?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        practice: {
            title: "Thực tiễn Việt Nam",
            content: (
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Ở Việt Nam, điều kiện ra đời của chủ nghĩa xã hội được xác định bởi mâu thuẫn giữa nhân dân lao động với thực dân và phong kiến, kết hợp với sự lãnh đạo của Đảng Cộng sản Việt Nam. Cách mạng Tháng Tám (1945) đã tạo tiền đề cho việc xây dựng chủ nghĩa xã hội ở miền Bắc và sau đó trên cả nước sau năm 1975.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1516321318423-ffd3916b6e90?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80'
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
                <h2 className="text-3xl font-bold text-gray-900 text-left">Điều kiện ra đời chủ nghĩa xã hội</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6 justify-start">
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

export default SocialismPage2;