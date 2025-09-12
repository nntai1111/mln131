import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SocialismPage3 = () => {
    const [activeSection, setActiveSection] = useState('liberation');
    const sections = {
        liberation: {
            title: "Giải phóng giai cấp, dân tộc, xã hội",
            content: (
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Đây là bản chất cốt lõi của chủ nghĩa xã hội, nhằm xóa bỏ tình trạng bóc lột giai cấp, giải phóng nhân dân lao động khỏi áp bức và bất công. Chủ nghĩa xã hội thúc đẩy sự phát triển tự do, toàn diện về thể chất, tinh thần và đạo đức của con người, giúp con người không còn bị tha hóa như trong chủ nghĩa tư bản mà trở thành chủ thể sáng tạo của lịch sử. <br />
                    <strong>Liên hệ thực tiễn ở Việt Nam:</strong> Đảng Cộng sản Việt Nam xác định mục tiêu xây dựng chủ nghĩa xã hội với phương châm "dân giàu, nước mạnh, dân chủ, công bằng, văn minh", hướng tới phát triển con người toàn diện.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1578916171728-46d996de1117?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        ownership: {
            title: "Nhân dân lao động làm chủ",
            content: (
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Nhân dân lao động là chủ thể của xã hội xã hội chủ nghĩa, nắm quyền lực thông qua nhà nước kiểu mới (nhà nước của dân, do dân, vì dân). Điều này được thể hiện qua nền dân chủ xã hội chủ nghĩa, nơi mọi quyết định đều phục vụ lợi ích của nhân dân lao động. Đảng Cộng sản lãnh đạo nhưng dựa trên ý chí và nguyện vọng của nhân dân, đảm bảo quyền làm chủ được thực thi thông qua các cơ chế như bầu cử, giám sát và tham gia quản lý xã hội. <br />
                    <strong>Liên hệ thực tiễn ở Việt Nam:</strong> Việt Nam xây dựng nhà nước pháp quyền xã hội chủ nghĩa, với các cơ chế như Quốc hội, Mặt trận Tổ quốc, và các tổ chức chính trị - xã hội để đảm bảo quyền làm chủ của nhân dân.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1516321318423-ffd3916b6e90?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80'
            ]
        },
        economy: {
            title: "Kinh tế phát triển cao",
            content: (
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Kinh tế xã hội chủ nghĩa dựa trên chế độ công hữu (bao gồm sở hữu nhà nước và sở hữu tập thể) làm nền tảng, kết hợp với các hình thức sở hữu khác trong giai đoạn đầu. Các lực lượng sản xuất hiện đại bao gồm công nghiệp hóa, ứng dụng khoa học - công nghệ và cơ giới hóa. Phân phối theo lao động là nguyên tắc chính, đảm bảo công bằng dựa trên đóng góp lao động của mỗi người. Ở giai đoạn đầu, vẫn tồn tại nền kinh tế nhiều thành phần để thúc đẩy sản xuất. <br />
                    <strong>Liên hệ thực tiễn ở Việt Nam:</strong> Việt Nam phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa, trong đó kinh tế nhà nước giữ vai trò chủ đạo, kết hợp với kinh tế tư nhân và các thành phần kinh tế khác.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1497436072909-60f69c6c6b76?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1528183429752-0409130e9d1a?auto=format&fit=crop&w=300&q=80'
            ]
        },
        culture: {
            title: "Văn hóa, giáo dục, công bằng xã hội",
            content: (
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Chủ nghĩa xã hội chú trọng xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc, nâng cao dân trí và đảm bảo công bằng xã hội. Giáo dục và khoa học được ưu tiên phát triển để nâng cao chất lượng nguồn nhân lực và thúc đẩy sáng tạo. Công bằng xã hội được thể hiện qua việc giảm dần chênh lệch giàu nghèo, đảm bảo an sinh xã hội và tạo cơ hội bình đẳng cho mọi người. <br />
                    <strong>Liên hệ thực tiễn ở Việt Nam:</strong> Việt Nam thúc đẩy phổ cập giáo dục, phát triển y tế và các chính sách an sinh xã hội như xóa đói giảm nghèo, bảo hiểm y tế, và hỗ trợ vùng sâu, vùng xa.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        unity: {
            title: "Đoàn kết dân tộc và quốc tế",
            content: (
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Chủ nghĩa xã hội đề cao sự đoàn kết giữa các dân tộc trong một quốc gia và giữa các quốc gia trên thế giới, dựa trên nguyên tắc bình đẳng, tôn trọng lẫn nhau. Trong bối cảnh toàn cầu hóa, chủ nghĩa xã hội nhấn mạnh hợp tác quốc tế để xây dựng hòa bình, ổn định và phát triển bền vững. <br />
                    <strong>Liên hệ thực tiễn ở Việt Nam:</strong> Việt Nam thực hiện chính sách đại đoàn kết dân tộc, hòa hợp các dân tộc thiểu số, đồng thời tích cực tham gia các tổ chức quốc tế như Liên Hợp Quốc, ASEAN để thúc đẩy hợp tác và hòa bình.
                </p>
            ),
            images: [
                'https://images.unsplash.com/photo-1578916171728-46d996de1117?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        leadership: {
            title: "Lãnh đạo của Đảng Cộng sản",
            content: (
                <p className="text-lg leading-relaxed text-gray-900 text-left">
                    Đảng Cộng sản đóng vai trò lãnh đạo trong việc tổ chức, định hướng và xây dựng xã hội xã hội chủ nghĩa. Đảng đại diện cho lợi ích của giai cấp công nhân và nhân dân lao động, đảm bảo sự thống nhất trong mục tiêu và hành động. Sự lãnh đạo của Đảng là yếu tố then chốt để đảm bảo thắng lợi của cách mạng xã hội chủ nghĩa. <br />
                    <strong>Liên hệ thực tiễn ở Việt Nam:</strong> Đảng Cộng sản Việt Nam là lực lượng lãnh đạo duy nhất, tổ chức thực hiện đường lối đổi mới và xây dựng chủ nghĩa xã hội phù hợp với điều kiện đất nước.
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
                <h2 className="text-3xl font-bold text-gray-900 text-left">Những đặc trưng bản chất của chủ nghĩa xã hội</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6 justify-start">
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

export default SocialismPage3;