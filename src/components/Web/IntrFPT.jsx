import React from "react";
import styles from "../../styles/Web/IntroFPT.module.css";
const IntrFPT = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen mt-2">

      <h1 className="text-4xl sm:text-5xl font-bold  text-[#fd6c6c] max-w-4xl text-center my-8 tracking-tight">
        II. Thời kỳ quá độ lên chủ nghĩa xã hội
      </h1>

      <div className="grid grid-cols-2 px-20 mt-10 w-full ">
        <div className="flex flex-col items-center justify-center ">
          <div
            data-aos="zoom-out"
            className="mt-10 ml-5 max-w-3xl text-lg font-light  leading-relaxed"
          >
            <p>
              <strong className="text-red-500 font-bold">
                Thời kỳ quá độ lên CNXH:
              </strong>{" "}
              Giai đoạn chuyển từ xã hội thấp (phong kiến, tư bản) sang CNXH, phức tạp, lâu dài, cần lãnh đạo đúng đắn, phù hợp điều kiện mỗi nước.
            </p>
          </div>

          <div
            data-aos="zoom-out"
            className="mt-10 ml-5 max-w-2xl text-lg font-light  leading-relaxed"
          >
            <p>
              <strong className="text-red-500 ">Khái niệm:</strong> Giai đoạn phức tạp, lâu dài, phụ thuộc điều kiện mỗi quốc gia.<br />
              <strong className="text-red-500 ">Cần thiết:</strong> Do mâu thuẫn kinh tế, xã hội và yêu cầu lịch sử (Việt Nam: Đổi mới 1986).<br />
              <strong className="text-red-500 ">Nội dung:</strong> Xây dựng kinh tế (công nghiệp hóa), chính trị (nhà nước của dân), văn hóa (nâng dân trí), xã hội (công bằng, an sinh).<br />
              <strong className="text-red-500 ">Đặc điểm Việt Nam:</strong> Xuất phát thấp, quá độ gián tiếp, Đảng lãnh đạo, hội nhập quốc tế, có thành tựu và thách thức.<br />
              <strong className="text-red-500 ">Ý nghĩa:</strong> Lý luận về quy luật phát triển, định hướng chính sách thực tiễn.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-in-up"
          className="flex justify-center items-center text-lg mr-12">
          <div className="relative w-[400px]">
            {/* Hình ảnh chính */}
            <div className="w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/nd2ii.jpg"
                alt="FPT Campus"
                className="w-full h-full object-cover object-left border-white rounded-2xl border-[10px]"
              />
            </div>

            {/* Hình ảnh nhỏ (overlay) */}
            <div className="absolute bottom-[-60px] right-[-200px] w-[300px] h-[250px] rounded-xl shadow-md overflow-hidden">
              <img
                src="/nd2ii1.jpg"
                alt="Trải nghiệm khởi nghiệp"
                className="w-full h-full object-cover object-left border-white rounded-2xl border-[10px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntrFPT;
