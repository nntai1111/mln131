import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlinePlayCircle, AiOutlineStop } from 'react-icons/ai';

const HoChiMinhThought = () => {
    const [activeSection, setActiveSection] = useState('independence');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentSentence, setCurrentSentence] = useState('');
    const synthRef = useRef(null);

    const sections = {
        independence: {
            title: "Quyền thiêng liêng",
            content: (
                <div className="text-lg text-gray-900">
                    <p>Hồ Chí Minh xem độc lập, tự do là khát vọng lớn nhất của dân tộc Việt Nam, là quyền thiêng liêng không thể tước đoạt của mỗi dân tộc. Người đã gửi Bản yêu sách của nhân dân An Nam tới Hội nghị Vécxay năm 1919, đòi quyền tự do, dân chủ cho nhân dân bị áp bức.</p>
                    <p>Trong Tuyên ngôn Độc lập năm 1945, Người trịnh trọng tuyên bố trước quốc dân và thế giới rằng: <strong>"Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thực đã thành một nước tự do và độc lập. Toàn thể dân Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mệnh và của cải để giữ vững quyền tự do và độc lập ấy."</strong></p>
                    <p>Trước sự tái xâm lược của thực dân Pháp, Người kêu gọi toàn quốc kháng chiến với quyết tâm: <strong>"Không! Chúng ta thà hy sinh tất cả, chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ."</strong></p>
                    <p>Trong bối cảnh đế quốc Mỹ tăng cường chiến tranh xâm lược Việt Nam, Người khẳng định: <strong>"Không có gì quý hơn độc lập, tự do."</strong></p>
                </div>
            ),
            images: [
                '/hcm1.1.1.jpg',
                '/hcm1.1.2.jpg'
            ]
        },
        freedom: {
            title: "Tự do, hạnh phúc",
            content: (
                <div className="text-lg text-gray-900">
                    <p>Độc lập dân tộc trong tư tưởng Hồ Chí Minh không phải là mục đích cuối cùng của cách mạng. Người nhấn mạnh: <strong>"Nước độc lập mà dân không hưởng hạnh phúc, tự do, thì độc lập cũng chẳng có nghĩa lý gì."</strong></p>
                    <p>Sau thắng lợi của Cách mạng Tháng Tám năm 1945, Hồ Chí Minh yêu cầu Đảng và Chính phủ phải: <strong>"Làm cho dân có ăn. Làm cho dân có mặc. Làm cho dân có chỗ ở. Làm cho dân được học hành."</strong> Mục tiêu cao cả nhất là làm cho nước nhà được hoàn toàn độc lập, dân được hoàn toàn tự do, ấm no, hạnh phúc.</p>
                </div>
            ),
            images: [
                '/hcm1.2.1.jpg',
                '/hcm1.2.2.jpg',
                '/hcm1.2.3.jpg'
            ]
        },
        complete: {
            title: "Độc lập hoàn toàn",
            content: (
                <div className="text-lg text-gray-900">
                    <p>Theo Hồ Chí Minh, nền độc lập thật sự, hoàn toàn và triệt để phải được thể hiện trên mọi lĩnh vực, không chỉ là quyền tự quyết về ngoại giao mà còn phải có quân đội riêng, nền tài chính riêng.</p>
                    <p>Người đã thực hiện nhiều biện pháp để củng cố nền độc lập thật sự của đất nước sau Cách mạng Tháng Tám và trong bối cảnh khó khăn chống thù trong giặc ngoài.</p>
                </div>
            ),
            images: [
                '/hcm1.3.1.webp',
            ]
        },
        unity: {
            title: "Thống nhất lãnh thổ",
            content: (
                <div className="text-lg text-gray-900">
                    <p>Tư tưởng độc lập dân tộc gắn liền với thống nhất Tổ quốc, toàn vẹn lãnh thổ là một tư tưởng xuyên suốt trong cuộc đời hoạt động cách mạng của Hồ Chí Minh.</p>
                    <p>Người khẳng định: <strong>"Nước Việt Nam là một, dân tộc Việt Nam là một"</strong> và mong muốn đồng bào Nam, Bắc sẽ sum họp một nhà.</p>
                </div>
            ),
            images: [
                '/hcm1.4.1.jpg',
                ' /hcm1.4.2.jpg'
            ]
        },
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
                <h2 className="text-3xl font-bold text-[#ff6969]">I. Tư tưởng Hồ Chí Minh về Độc lập Dân tộc</h2>
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