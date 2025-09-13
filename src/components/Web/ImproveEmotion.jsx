import React from "react";
import { motion, useAnimation, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ImproveEmotion = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full min-h-screen px-4 pb-6">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#fd6c6c] max-w-3xl text-center mb-12 tracking-tight">
        Tóm tắt và khái quát nội dung
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
        {/* Card 1: Độc lập dân tộc */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-yellow-100 rounded-2xl shadow-lg p-6 flex flex-col transition-transform hover:scale-105 lg:col-span-1"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            1. Độc lập Dân tộc
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 flex-1 text-sm">
            <li>
              <strong>Quyền thiêng liêng:</strong> Độc lập là quyền bất khả xâm phạm, gắn với tự do, hạnh phúc nhân dân và toàn vẹn lãnh thổ.
            </li>
            <li>
              <strong>Độc lập toàn diện:</strong> Bao gồm chính trị, kinh tế, quân sự; “Không có gì quý hơn độc lập, tự do.”
            </li>
            <li>
              <strong>Mục tiêu:</strong> Độc lập phải đi đôi với hạnh phúc của nhân dân.
            </li>
          </ul>
          <img
            src="/doclap.png"
            alt="National Independence"
            className="mx-auto object-contain mb-6 "
          />
        </div>

        {/* Card 2: Cách mạng giải phóng dân tộc */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-blue-100 rounded-2xl shadow-lg p-6 flex flex-col transition-transform hover:scale-105 lg:col-span-1"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            2. Cách mạng Giải phóng
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 flex-1 text-sm">
            <li>
              <strong>Con đường vô sản:</strong> Do Đảng Cộng sản lãnh đạo, dựa trên liên minh công - nông.
            </li>
            <li>
              <strong>Đại đoàn kết:</strong> Lấy sức mạnh toàn dân làm nền tảng, kết hợp bạo lực chính trị và vũ trang.
            </li>
            <li>
              <strong>Linh hoạt:</strong> Có thể thắng lợi trước cách mạng ở chính quốc, sáng tạo trong chiến lược.
            </li>
          </ul>
          <img
            src="/nd22.png"
            alt="Revolutionary Path"
            className="mx-auto object-contain"
          />
        </div>

        {/* Card 3: Chủ nghĩa xã hội */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-green-100 rounded-2xl shadow-lg p-6 flex flex-col transition-transform hover:scale-105 lg:col-span-1"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            3. Chủ nghĩa Xã hội
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 flex-1 text-sm">
            <li>
              <strong>Xã hội công bằng:</strong> Nhân dân làm chủ, không áp bức, bóc lột, đảm bảo ấm no, hạnh phúc.
            </li>
            <li>
              <strong>Đặc trưng:</strong> Dân chủ chính trị, kinh tế hiện đại, văn hóa tiến bộ, công bằng xã hội.
            </li>
            <li>
              <strong>Con đường Việt Nam:</strong> Bỏ qua giai đoạn tư bản, tiến thẳng lên chủ nghĩa xã hội từ nền nông nghiệp lạc hậu.
            </li>
          </ul>
          <img
            src="/untitled-0.png"
            alt="Socialism Characteristics"
            className="mx-auto object-contain mb-6"
          />
        </div>

        {/* Card 4: Mối quan hệ và điều kiện */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-purple-100 rounded-2xl shadow-lg p-6 flex flex-col transition-transform hover:scale-105 lg:col-span-1"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            4. Mối quan hệ & Điều kiện
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 flex-1 text-sm">
            <li>
              <strong>Mối quan hệ:</strong> Độc lập dân tộc là tiền đề, chủ nghĩa xã hội bảo đảm độc lập vững chắc.
            </li>
            <li>
              <strong>Ba điều kiện:</strong> Lãnh đạo của Đảng, đại đoàn kết dân tộc, đoàn kết quốc tế.
            </li>
            <li>
              <strong>Động lực:</strong> Sức mạnh nhân dân, vai trò Đảng, và hợp tác quốc tế.
            </li>
          </ul>
          <img
            src="/hcm5.png"
            alt="Relationship and Conditions"
            className="mx-auto object-contain mb-6"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center"
      >
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 mt-12 bg-gradient-to-r from-red-500 to-red-600 
                     text-white font-semibold rounded-full shadow-lg border-2 border-white
                     animate-bounce hover:shadow-xl transition-all"
          onClick={() => navigate("/hcm202/content")}
        >

          Xem chi tiết nội dung
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ImproveEmotion;