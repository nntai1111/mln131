import React from "react";

const ImproveEmotion = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen px-4 pb-6">

      <h1 className="text-4xl sm:text-5xl font-bold  text-[#fd6c6c] max-w-3xl text-center mb-12 tracking-tight">
        I. Chủ nghĩa xã hội
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-7 gap-8 max-w-7xl w-full">
        {/* Card 1 */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-yellow-100 rounded-2xl shadow-lg p-6 flex flex-col transition-transform hover:scale-105 lg:col-span-2"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            1. Chủ nghĩa xã hội, giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 flex-1">
            <li>
              <strong>Chủ nghĩa xã hội:</strong> Giai đoạn đầu của cộng sản, dựa trên công hữu, phân phối “làm theo năng lực, hưởng theo lao động”, phủ định CNTB.
            </li>
            <li>
              <strong>Việt Nam:</strong> Bỏ qua CNTB, qua Đổi mới 1986 xây dựng kinh tế thị trường định hướng XHCN.
            </li>
          </ul>
          <img
            src="/nd1.png"
            alt="Free Your Mind"
            className=" mx-auto  object-contain"
          />
        </div>

        {/* Card 2 */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-blue-100 rounded-2xl shadow-lg p-6 flex flex-col transition-transform hover:scale-105 lg:col-span-2"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            2. Điều kiện ra đời chủ nghĩa xã hội
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 flex-1">
            <li>
              <strong>Kinh tế:</strong> Lực lượng sản xuất phát triển, mâu thuẫn với sở hữu tư nhân.
            </li>
            <li>
              <strong>Xã hội:</strong> Giai cấp công nhân trưởng thành, dưới sự lãnh đạo của Đảng.
            </li>
            <li>
              <strong>Việt Nam:</strong> Cách mạng Tháng Tám 1945 mở đường cho CNXH.
            </li>
          </ul>
          <img
            src="/nd22.png"
            alt="Share to Lighten"
            className=" mx-auto  object-contain"
          />
        </div>

        {/* Card 3 - Spans 2 columns */}
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-purple-100 rounded-2xl shadow-lg p-6 flex flex-col transition-transform hover:scale-105 lg:col-span-3"
        >
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
            3. Những đặc trưng bản chất của chủ nghĩa xã hội
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 flex-1 text-sm">
            <li>
              <strong>Giải phóng con người:</strong> Xóa bóc lột, phát triển toàn diện. <em>(Việt Nam: “dân giàu, nước mạnh”).</em>
            </li>
            <li>
              <strong>Nhân dân làm chủ:</strong> Nhà nước của dân, do dân, vì dân. <em>(Việt Nam: nhà nước pháp quyền XHCN).</em>
            </li>
            <li>
              <strong>Kinh tế công hữu:</strong> Công hữu tư liệu sản xuất, phân phối theo lao động. <em>(Việt Nam: kinh tế thị trường XHCN).</em>
            </li>
            <li>
              <strong>Văn hóa – xã hội:</strong> Nâng dân trí, công bằng, an sinh. <em>(Việt Nam: giáo dục, y tế).</em>
            </li>
            <li>
              <strong>Đoàn kết:</strong> Bình đẳng, hợp tác quốc tế. <em>(Việt Nam: tham gia LHQ, ASEAN).</em>
            </li>
            <li>
              <strong>Lãnh đạo của Đảng:</strong> Đảng đại diện lợi ích nhân dân. <em>(Việt Nam: Đảng lãnh đạo duy nhất).</em>
            </li>
          </ul>
          <img
            src="/nd33.png"
            alt="A Healthy Life"
            className=" w-72 mx-auto  object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImproveEmotion;