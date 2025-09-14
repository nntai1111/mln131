import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePlayCircle, AiOutlineStop } from 'react-icons/ai';

const HoChiMinhThought = () => {
    const [activeSection, setActiveSection] = useState('premise');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSentence, setCurrentSentence] = useState('');
    const synthRef = useRef(null);

    const sections = {
        premise: {
            title: "Độc lập dân tộc - Tiền đề",
            content: (
                <div className="text-lg text-gray-900">
                    <p>+ Hồ Chí Minh xác định phương hướng chiến lược của cách mạng Việt Nam là <strong>"làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản"</strong>.</p>
                    <p>+ Giải phóng dân tộc là mục tiêu đầu tiên của cách mạng, là điều kiện tiên quyết để có thể thực hiện mục tiêu tiếp theo là chủ nghĩa xã hội và chủ nghĩa cộng sản. Không có độc lập dân tộc thì không thể có chủ nghĩa xã hội.</p>
                </div>
            ),
            images: [
                'https://images.unsplash.com/photo-1516321318423-ffd3916b6e90?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&q=80'
            ]
        },
        socialism: {
            title: "Chủ nghĩa xã hội - Điều kiện",
            content: (
                <div className="text-lg text-gray-900">
                    <p>+ Chủ nghĩa xã hội là xu thế tất yếu của thời đại và là con đường để bảo đảm nền độc lập dân tộc được vững chắc, lâu dài.</p>
                    <p>+ Việc xây dựng một xã hội chủ nghĩa sẽ tạo nền tảng kinh tế vững mạnh, chính trị ổn định, văn hóa phát triển, là tấm gương cho các dân tộc khác, góp phần củng cố nền độc lập dân tộc.</p>
                </div>
            ),
            images: [
                'https://images.unsplash.com/photo-1497436072909-60f69c6c6b76?auto=format&fit=crop&w=300&q=80',
                'https://images.unsplash.com/photo-1528183429752-0409130e9d1a?auto=format&fit=crop&w=300&q=80'
            ]
        },
        conditions: {
            title: "Ba điều kiện bảo đảm",
            content: (
                <div className="text-lg text-gray-900">
                    <p>+ <strong>Thứ nhất</strong>, phải bảo đảm vai trò lãnh đạo tuyệt đối của Đảng Cộng sản Việt Nam trong suốt tiến trình cách mạng.</p>
                    <p>+ <strong>Thứ hai</strong>, phải củng cố và tăng cường khối đại đoàn kết toàn dân tộc, với liên minh công - nông - trí làm nền tảng.</p>
                    <p>+ <strong>Thứ ba</strong>, phải đoàn kết, gắn bó chặt chẽ với cách mạng thế giới để tạo sức mạnh tổng hợp, góp phần chung cho hòa bình, độc lập, dân chủ và chủ nghĩa xã hội trên thế giới.</p>
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
                <h2 className="text-3xl font-bold text-[#ff6969]">IV. Mối Quan hệ giữa Độc lập Dân tộc và Chủ nghĩa Xã hội</h2>
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