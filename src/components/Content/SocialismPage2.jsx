import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePlayCircle, AiOutlineStop } from 'react-icons/ai';

const HoChiMinhThought = () => {
    const [activeSection, setActiveSection] = useState('proletarian');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSentence, setCurrentSentence] = useState('');
    const synthRef = useRef(null);

    const sections = {
        proletarian: {
            title: "Con đường cách mạng vô sản",
            content: (
                <div className="text-lg text-gray-900">
                    <p>+ Hồ Chí Minh đã không chọn con đường cách mạng tư sản vì nhận thấy nó không giải phóng triệt để được công nông và vẫn áp bức thuộc địa.</p>
                    <p>+ Sau khi tiếp cận Luận cương của Lênin về vấn đề dân tộc và thuộc địa, Người đã tìm thấy con đường cứu nước, giải phóng dân tộc theo con đường cách mạng vô sản và khẳng định: <strong>"Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản."</strong></p>
                </div>
            ),
            images: [
                '/hcm2.1.1.jpg',
                '/hcm2.1.2.jpg',
            ]
        },
        leadership: {
            title: "Đảng Cộng sản lãnh đạo",
            content: (
                <div className="text-lg text-gray-900">
                    <p>+ Hồ Chí Minh khẳng định vai trò lãnh đạo tuyệt đối của Đảng Cộng sản - đội tiên phong của giai cấp công nhân và nhân dân lao động, đồng thời là Đảng của cả dân tộc Việt Nam.</p>
                    <p>+ Trong tác phẩm <strong>"Đường cách mệnh" (1927)</strong>, Người đã nhấn mạnh: <strong>"Trước hết phải có đảng cách mệnh, để trong thì vận động và tổ chức dân chúng, ngoài thì liên lạc với dân tộc bị áp bức và vô sản giai cấp mọi nơi. Đảng có vững cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."</strong></p>
                </div>
            ),
            images: [
                '/hcm2.2.1.jpg',
                '/hcm2.2.2.png',
            ]
        },
        unity: {
            title: "Đại đoàn kết toàn dân tộc",
            content: (
                <div className="text-lg text-gray-900">
                    <p>+ Hồ Chí Minh đã kế thừa và phát triển lý luận Mác - Lênin về cách mạng là sự nghiệp của quần chúng, nhấn mạnh vai trò của nhân dân: <strong>"Dân là có tất cả, trên đời này không gì quý bằng dân, được lòng dân thì được tất cả, mất lòng dân thì mất tất cả."</strong></p>
                    <p>+ Người kêu gọi toàn thể dân tộc, không phân biệt giai cấp, tôn giáo, giới tính, tuổi tác, đứng lên đấu tranh chống ngoại xâm. Trong đó, công nhân và nông dân được xác định là lực lượng nền tảng, gốc của cách mạng.</p>
                </div>
            ),
            images: [
                '/hcm2.3.1.jpg',
                '/hcm2.3.2.jpg'
            ]
        },
        creativity: {
            title: "Sáng tạo và chủ động",
            content: (
                <div className="text-lg text-gray-900">
                    <p>+ Hồ Chí Minh sớm chỉ rõ mối quan hệ bình đẳng, hỗ trợ lẫn nhau giữa cách mạng thuộc địa và cách mạng vô sản ở chính quốc, không phải là mối quan hệ lệ thuộc. Người khẳng định cách mạng giải phóng dân tộc ở thuộc địa có thể giành thắng lợi trước cách mạng vô sản ở chính quốc.</p>
                    <p>+ Cách mạng thuộc địa có vị trí, vai trò, tầm quan trọng đặc biệt đối với chủ nghĩa đế quốc, là nơi suy tồn, phát triển của chủ nghĩa đế quốc.</p>
                </div>
            ),
            images: [
                '/hcm2.4.1.jpg',
                '/hcm2.4.2.jpg'
            ]
        },
        violence: {
            title: "Bạo lực cách mạng",
            content: (
                <div className="text-lg text-gray-900">
                    <p>+ Kế thừa lý luận Mác - Lênin, Hồ Chí Minh khẳng định sự cần thiết của bạo lực cách mạng để chống lại bạo lực phản cách mạng, giành và giữ chính quyền.</p>
                    <p>+ Bạo lực cách mạng được thể hiện bằng bạo lực của quần chúng, kết hợp chặt chẽ giữa lực lượng chính trị và lực lượng vũ trang. Hình thức đấu tranh phải linh hoạt, phù hợp với tình hình cụ thể.</p>
                </div>
            ),
            images: [
                '/hcm2.5.1.jpg',
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
                <h2 className="text-3xl font-bold text-[#ff6969]">II. Tư tưởng Hồ Chí Minh về Cách mạng Giải phóng Dân tộc</h2>
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
                                        className="w-1/3 h-1/3 object-cover rounded-lg shadow-md"
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