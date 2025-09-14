import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePlayCircle, AiOutlineStop } from 'react-icons/ai';

const HoChiMinhThought = () => {
    const [activeSection, setActiveSection] = useState('conception');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSentence, setCurrentSentence] = useState('');
    const synthRef = useRef(null);

    const sections = {
        conception: {
            title: "Quan niệm về chủ nghĩa xã hội",
            content: (
                <div className="text-lg text-gray-900">
                    <p>+ Theo Hồ Chí Minh, chủ nghĩa xã hội là giai đoạn đầu của chủ nghĩa cộng sản, là xã hội không còn áp bức, bóc lột, do nhân dân lao động làm chủ, mọi người có công ăn việc làm, được ấm no và sống một đời hạnh phúc.</p>
                    <p>+ Người xác định chủ nghĩa xã hội là một xã hội ưu việt hơn hẳn xã hội tư bản chủ nghĩa, nơi lợi ích cá nhân đúng đắn và lợi ích tập thể được bảo đảm hài hòa.</p>
                </div>
            ),
            images: [
                'https://images.unsplash.com/photo-1516321318423-ffd3916b6e90?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80'
            ]
        },
        inevitability: {
            title: "Tất yếu khách quan",
            content: (
                <div className="text-lg text-gray-900">
                    <p>+ Vận dụng học thuyết hình thái kinh tế - xã hội của Mác, Hồ Chí Minh khẳng định sự phát triển của xã hội loài người là một quá trình lịch sử - tự nhiên. Các chế độ xã hội từ nguyên thủy, chiếm hữu nô lệ, phong kiến, tư bản chủ nghĩa đều tiến lên chủ nghĩa xã hội.</p>
                    <p>+ Đặc biệt, Hồ Chí Minh khẳng định Việt Nam có thể tiến lên chủ nghĩa xã hội từ một nước nông nghiệp lạc hậu, bỏ qua giai đoạn phát triển tư bản chủ nghĩa.</p>
                </div>
            ),
            images: [
                'https://images.unsplash.com/photo-1497436072909-60f69c6c6b76?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1528183429752-0409130e9d1a?auto=format&fit=crop&w=300&q=80'
            ]
        },
        characteristics: {
            title: "Đặc trưng cơ bản",
            content: (
                <div className="text-lg text-gray-900">
                    <p><strong>Về chính trị:</strong> Xã hội chủ nghĩa là xã hội do nhân dân lao động làm chủ, dưới sự lãnh đạo của Đảng Cộng sản trên nền tảng liên minh công - nông. Mọi quyền lực thuộc về nhân dân, nhà nước là của dân, do dân, vì dân.</p>
                    <p><strong>Về kinh tế:</strong> Là một nền kinh tế phát triển cao, dựa trên lực lượng sản xuất hiện đại (máy móc, sức điện, nguyên tử) và chế độ sở hữu tư liệu sản xuất chủ yếu là của nhân dân.</p>
                    <p><strong>Về văn hóa, đạo đức và các quan hệ xã hội:</strong> Xã hội có nền văn hóa, đạo đức phát triển, đảm bảo công bằng, hợp lý. Con người được tôn trọng, đối xử bình đẳng, đoàn kết, không có bóc lột, sống ấm no, tự do, hạnh phúc.</p>
                </div>
            ),
            images: [
                'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        },
        goals: {
            title: "Mục tiêu chủ nghĩa xã hội",
            content: (
                <div className="text-lg text-gray-900">
                    <p><strong>Chính trị:</strong> Xây dựng một chế độ dân chủ, nơi nhân dân là chủ và làm chủ.</p>
                    <p><strong>Kinh tế:</strong> Xây dựng nền kinh tế phát triển cao, gắn với mục tiêu chính trị. Phát triển công nghiệp, nông nghiệp hiện đại. Kinh tế quốc doanh là hình thức sở hữu toàn dân, đóng vai trò chủ đạo.</p>
                    <p><strong>Văn hóa:</strong> Xây dựng nền văn hóa mang tính dân tộc, khoa học, đại chúng, tiếp thu tinh hoa văn hóa nhân loại. Xóa bỏ mọi tàn tích của văn hóa thực dân, phong kiến, diệt trừ các hủ tục.</p>
                    <p><strong>Quan hệ xã hội:</strong> Đảm bảo dân chủ, công bằng, văn minh. Mọi người có quyền làm việc, nghỉ ngơi, học tập, tự do ngôn luận, tín ngưỡng, bầu cử.</p>
                </div>
            ),
            images: [
                'https://images.unsplash.com/photo-1516321318423-ffd3916b6e90?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80'
            ]
        },
        motivation: {
            title: "Động lực xây dựng",
            content: (
                <div className="text-lg text-gray-900">
                    <p>+ Động lực tổng hợp của cả nội lực và ngoại lực, bao gồm tất cả các lĩnh vực (kinh tế, chính trị, văn hóa, khoa học, giáo dục, quốc phòng, ngoại giao).</p>
                    <p>+ Trong đó, động lực mạnh mẽ nhất là sức mạnh của nhân dân, thể hiện qua lợi ích của dân, dân chủ của dân và sức mạnh đại đoàn kết toàn dân.</p>
                    <p>+ Sự lãnh đạo của Đảng Cộng sản, sự quản lý của Nhà nước và vai trò của các tổ chức chính trị - xã hội cũng là những động lực quan trọng.</p>
                    <p>+ Con người Việt Nam phải là những con người mới của chủ nghĩa xã hội, có ý thức làm chủ, tinh thần tập thể, chống tham ô, lãng phí.</p>
                </div>
            ),
            images: [
                'https://images.unsplash.com/photo-1497436072909-60f69c6c6b76?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1528183429752-0409130e9d1a?auto=format&fit=crop&w=300&q=80'
            ]
        },
        transition: {
            title: "Thời kỳ quá độ",
            content: (
                <div className="text-lg text-gray-900">
                    <p>+ <strong>Tính chất, đặc điểm và nhiệm vụ:</strong> Đây là thời kỳ cải biến sâu sắc, phức tạp, lâu dài, khó khăn, gian khổ. Việt Nam tiến thẳng lên chủ nghĩa xã hội từ một nước nông nghiệp lạc hậu, bỏ qua chế độ tư bản chủ nghĩa. Nhiệm vụ chủ yếu là đấu tranh cải tạo, xóa bỏ tàn tích của chế độ xã hội cũ và xây dựng các yếu tố mới trên tất cả các lĩnh vực của đời sống.</p>
                    <p>+ <strong>Một số nguyên tắc xây dựng chủ nghĩa xã hội trong thời kỳ quá độ:</strong></p>
                    <ul className="list-disc pl-5">
                        <li>- Mọi tư tưởng, hành động phải được thực hiện trên nền tảng chủ nghĩa Mác - Lênin.</li>
                        <li>- Phải giữ vững độc lập dân tộc. Độc lập dân tộc là mục tiêu đầu tiên và là điều kiện tiên quyết, cơ sở vững chắc để thực hiện chủ nghĩa xã hội.</li>
                        <li>- Phải đoàn kết, học tập kinh nghiệm của các nước anh em.</li>
                        <li>- Phải đi đôi với chống đối (chống lại mọi hình thức cản trở, phá hoại thành quả cách mạng).</li>
                    </ul>
                </div>
            ),
            images: [
                'https://images.unsplash.com/photo-1531219572328-a0171b4448a3?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=300&q=80'
            ]
        }
    };

    // Hàm đệ quy để trích xuất văn bản từ cây React
    const extractText = (children) => {
        return React.Children.toArray(children)
            .map(child => {
                if (typeof child === 'string') return child;
                if (React.isValidElement(child)) return extractText(child.props.children);
                return '';
            })
            .join(' ')
            .replace(/<[^>]+>/g, ''); // Loại bỏ thẻ HTML
    };

    const handleToggleRead = (content) => {
        if ('speechSynthesis' in window) {
            if (!isPlaying) {
                // Trích xuất văn bản thô
                const text = extractText(content.props.children);
                const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim());
                let currentIndex = 0;

                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'vi-VN';
                utterance.rate = 0.8;
                utterance.pitch = 1;
                utterance.volume = 1;

                utterance.onboundary = (event) => {
                    let charIndex = event.charIndex;
                    let currentSentence = sentences.find((sentence, index) => {
                        const sentenceStart = sentences.slice(0, index).join(' ').length;
                        const sentenceEnd = sentenceStart + sentence.length;
                        return charIndex >= sentenceStart && charIndex < sentenceEnd;
                    });
                    setCurrentSentence(currentSentence || '');
                };

                utterance.onend = () => {
                    setIsPlaying(false);
                    setCurrentSentence('');
                };

                synthRef.current = utterance;
                speechSynthesis.speak(utterance);
                setIsPlaying(true);
            } else {
                speechSynthesis.cancel();
                setIsPlaying(false);
                setCurrentSentence('');
            }
        } else {
            alert('Trình duyệt không hỗ trợ Web Speech API');
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
                <h2 className="text-3xl font-bold text-[#ff6969]">III. Tư tưởng Hồ Chí Minh về Chủ nghĩa Xã hội và Xây dựng Chủ nghĩa Xã hội ở Việt Nam</h2>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
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
                            <button
                                onClick={() =>
                                    handleToggleRead(
                                        sections[key].content
                                    )
                                }
                                className={`
                                    mb-4
                                    px-5 py-3
                                    rounded-xl
                                    font-semibold
                                    text-white
                                    shadow-md
                                    transition-all
                                    flex items-center gap-3
                                    ${isPlaying
                                        ? 'bg-gradient-to-r from-rose-500 to-red-500 hover:from-rose-600 hover:to-red-600'
                                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600'}
                                    active:scale-95
                                `}
                            >
                                {isPlaying ? <AiOutlineStop size={22} /> : <AiOutlinePlayCircle size={22} />}
                                <span>{isPlaying ? 'Dừng' : 'Đọc'}</span>
                            </button>
                            <div className="mb-4">
                                {currentSentence && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="bg-yellow-100 p-3 rounded-lg"
                                    >
                                        <strong>Đang đọc: </strong>{currentSentence}
                                    </motion.div>
                                )}
                            </div>
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

export default HoChiMinhThought;