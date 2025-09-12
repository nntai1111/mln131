import React, { useEffect, useState } from "react";
import data from '../../data/people_ask.json';
import styles from "../../styles/Web/IntroFPT.module.css";

const QuestionRequest = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  useEffect(() => {
    try {
      setQuestions(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  // Chỉ mở một câu hỏi tại một thời điểm
  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  // Xử lý đóng popup khi click bên ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openQuestion !== null && !event.target.closest(".question-item")) {
        setOpenQuestion(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openQuestion]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center p-8 text-red-500">
        <p>Something went wrong. Please try again later.</p>
        <p className="text-sm mt-2">Error: {error}</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center w-full min-h-screen py-16 bg-white">
      <span className="text-xl font-thin text-red-700 uppercase">
        Bạn có câu hỏi?
      </span>
      <h1
        className={`${styles.sourceSerif} text-5xl text-[#ff5858] font-bold text-center mt-4 mb-4`}>
        Câu hỏi thường gặp
      </h1>
      <p className="font-normal text-gray-600 text-center max-w-2xl mb-12">
        Tìm câu trả lời về chủ nghĩa xã hội, những đặc trưng của nó và thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam.
      </p>

      <div className="w-full max-w-4xl px-4 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((q) => (
            <div
              key={q.id}
              className="question-item relative bg-white rounded-xl shadow-md border border-red-100 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-center p-5 cursor-pointer">
                <h3 className="font-medium text-red-900 pr-4">
                  {q.Question}
                </h3>
                <button
                  className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition-colors duration-200"
                  onClick={() => toggleQuestion(q.id)}>
                  {openQuestion === q.id ? "−" : "+"}
                </button>
              </div>

              {/* Popup trả lời */}
              {openQuestion === q.id && (
                <div className="absolute z-20 left-0 right-0 md:left-auto md:right-0 md:w-full mt-2 bg-white border-2 border-red-300 rounded-lg shadow-xl p-4 animate-fadeIn">
                  <div className="bg-red-50 p-4 rounded-md italic text-gray-700">
                    {q.Answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-center bg-gradient-to-r from-red-100 to-red-200 p-8 rounded-2xl shadow-md max-w-3xl">
        <h3
          className={`${styles.sourceSerif} text-2xl font-semibold text-red-800 mb-4`}>
          Không tìm thấy câu trả lời bạn cần?
        </h3>
        <p className="text-gray-700 mb-6">
          Nhóm của chúng tôi luôn sẵn sàng chia sẻ chi tiết về chủ nghĩa xã hội.
        </p>
        <button className="cursor-pointer relative border rounded-xl bg-[#ff5858] max-w-48 h-13 px-3 font-mono font-thin text-white transition-colors duration-10000 ease-linear before:absolute before:right-20 before:top-6 before:-z-[1] before:h-3/4 before:w-2/3 before:origin-center before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping before:rounded-xl before:bg-[#ff9696] hover:bg-[#ff9696] hover:before:bg-[#ff9696] z-2">
          Talk to our team
        </button>
      </div>

      {/* Thêm CSS animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default QuestionRequest;