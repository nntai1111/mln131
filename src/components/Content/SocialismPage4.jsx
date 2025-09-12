import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SocialismPage4 = () => {
    const [activeSection, setActiveSection] = useState('concept');
    const sections = {
        concept: {
            title: "Khái niệm thời kỳ quá độ",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Thời kỳ quá độ lên chủ nghĩa xã hội là giai đoạn mà xã hội thực hiện các thay đổi căn bản về kinh tế, chính trị, văn hóa, tư tưởng để chuyển từ hình thái kinh tế - xã hội cũ sang hình thái kinh tế - xã hội xã hội chủ nghĩa. Theo V.I. Lênin, thời kỳ quá độ là cần thiết do sự khác biệt về trình độ phát triển kinh tế - xã hội giữa các quốc gia, đặc biệt ở những nước chưa trải qua giai đoạn phát triển đầy đủ của chủ nghĩa tư bản. <br />
                    <strong>Đặc điểm:</strong> Thời kỳ quá độ không diễn ra đồng đều mà phụ thuộc vào điều kiện lịch sử, văn hóa, và kinh tế của từng quốc gia. Ở các nước phát triển tư bản, quá độ có thể trực tiếp, trong khi ở các nước lạc hậu (như Việt Nam), cần trải qua các bước trung gian như công nghiệp hóa, hiện đại hóa.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1578916171728-46d996de1117?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        necessity: {
            title: "Cần thiết khách quan",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    <strong>Mâu thuẫn kinh tế:</strong> Các lực lượng sản xuất và quan hệ sản xuất trong xã hội cũ (phong kiến, tư bản) không còn phù hợp, đòi hỏi phải thay đổi để phù hợp với yêu cầu phát triển của xã hội xã hội chủ nghĩa. <br />
                    <strong>Mâu thuẫn xã hội:</strong> Sự tồn tại của các giai cấp đối kháng (như tư sản và công nhân, địa chủ và nông dân) dẫn đến đấu tranh giai cấp, tạo tiền đề cho cách mạng xã hội chủ nghĩa. <br />
                    <strong>Yêu cầu lịch sử:</strong> Chủ nghĩa xã hội không thể hình thành ngay lập tức mà cần một quá trình cải tạo xã hội cũ, xây dựng các yếu tố mới về kinh tế, văn hóa, và tư tưởng. <br />
                    <strong>Liên hệ thực tiễn ở Việt Nam:</strong> Việt Nam thực hiện thời kỳ quá độ gián tiếp, bỏ qua chế độ tư bản chủ nghĩa, do xuất phát từ một nền kinh tế nông nghiệp lạc hậu. Công cuộc Đổi mới (1986) là bước cụ thể hóa thời kỳ quá độ, với việc phát triển kinh tế thị trường định hướng xã hội chủ nghĩa.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1516321318423-ffd3916b6e90?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80'
            ]
        },
        content: {
            title: "Nội dung của thời kỳ quá độ",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    Thời kỳ quá độ bao gồm các nhiệm vụ cơ bản sau: <br />
                    <strong>Về kinh tế:</strong> Xây dựng cơ sở vật chất - kỹ thuật cho chủ nghĩa xã hội thông qua công nghiệp hóa, hiện đại hóa; cải tạo và phát triển các lực lượng sản xuất; thiết lập quan hệ sản xuất xã hội chủ nghĩa dựa trên chế độ công hữu về tư liệu sản xuất. <br />
                    <strong>Về chính trị:</strong> Xây dựng nhà nước xã hội chủ nghĩa của dân, do dân, vì dân, dưới sự lãnh đạo của Đảng Cộng sản; củng cố nền dân chủ xã hội chủ nghĩa và quyền làm chủ của nhân dân. <br />
                    <strong>Về văn hóa - tư tưởng:</strong> Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc; nâng cao dân trí, đào tạo nguồn nhân lực chất lượng cao; đấu tranh xóa bỏ tư tưởng lạc hậu, xây dựng con người mới xã hội chủ nghĩa. <br />
                    <strong>Về xã hội:</strong> Thực hiện công bằng xã hội, xóa đói giảm nghèo, giảm dần chênh lệch giàu nghèo, đảm bảo an sinh xã hội. <br />
                    <strong>Liên hệ thực tiễn ở Việt Nam:</strong> Việt Nam tập trung vào công nghiệp hóa, hiện đại hóa, phát triển kinh tế nhiều thành phần, xây dựng nhà nước pháp quyền xã hội chủ nghĩa, và nâng cao đời sống văn hóa, tinh thần của nhân dân.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1497436072909-60f69c6c6b76?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1528183429752-0409130e9d1a?auto=format&fit=crop&w=300&q=80'
            ]
        },
        characteristics: {
            title: "Đặc điểm của thời kỳ quá độ ở Việt Nam",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    <strong>Xuất phát điểm thấp:</strong> Việt Nam đi lên chủ nghĩa xã hội từ một nền kinh tế nông nghiệp lạc hậu, chịu hậu quả nặng nề của chiến tranh và cấm vận. <br />
                    <strong>Quá độ gián tiếp:</strong> Do chưa trải qua giai đoạn phát triển đầy đủ của chủ nghĩa tư bản, Việt Nam cần thực hiện các bước trung gian như công nghiệp hóa, hiện đại hóa, và phát triển kinh tế thị trường định hướng xã hội chủ nghĩa. <br />
                    <strong>Sự lãnh đạo của Đảng:</strong> Đảng Cộng sản Việt Nam đóng vai trò trung tâm trong việc định hướng và tổ chức thực hiện các nhiệm vụ của thời kỳ quá độ. <br />
                    <strong>Hội nhập quốc tế:</strong> Việt Nam kết hợp xây dựng chủ nghĩa xã hội với hội nhập kinh tế quốc tế, tận dụng cơ hội từ toàn cầu hóa để phát triển kinh tế và nâng cao vị thế đất nước. <br />
                    <strong>Thành tựu và thách thức:</strong> Việt Nam đã đạt được nhiều thành tựu như xóa đói giảm nghèo, tăng trưởng kinh tế, và cải thiện đời sống nhân dân. Tuy nhiên, vẫn còn những thách thức như trình độ lực lượng sản xuất thấp, chênh lệch giàu nghèo, và nguy cơ tụt hậu kinh tế.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        significance: {
            title: "Ý nghĩa của thời kỳ quá độ",
            content: (
                <p className="text-lg leading-relaxed text-gray-900">
                    <strong>Lý luận:</strong> Thời kỳ quá độ là biểu hiện của quy luật phát triển lịch sử, khẳng định tính tất yếu của sự thay thế chủ nghĩa tư bản bằng chủ nghĩa xã hội. <br />
                    <strong>Thực tiễn:</strong> Đối với Việt Nam, thời kỳ quá độ giúp định hướng các chính sách phát triển kinh tế, chính trị, văn hóa, và xã hội, đồng thời tránh được những sai lầm trong quá trình xây dựng chủ nghĩa xã hội.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1578916171728-46d996de1117?auto=format&fit=crop&w=300&q=80',
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
                <h2 className="text-3xl font-bold text-gray-900">Thời kỳ quá độ lên chủ nghĩa xã hội</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
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

export default SocialismPage4;