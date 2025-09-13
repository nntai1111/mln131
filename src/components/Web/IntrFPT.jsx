import React, { useState, useEffect } from 'react';

const IntroFPT = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const content = [
    {
      title: "1. Chủ nghĩa Mác - Lênin",
      description: "Nguyên lý đấu tranh giai cấp, cách mạng vô sản, luận cương Lênin về dân tộc, thuộc địa.",
      details: "Nguyên lý cơ bản: Đấu tranh giai cấp, cách mạng vô sản, vai trò lịch sử của giai cấp công nhân.\n\nLuận cương của Lênin (1920): Vấn đề dân tộc và thuộc địa → chỉ ra con đường giải phóng dân tộc ở các nước thuộc địa phải gắn với cách mạng vô sản.\n\nĐây là cơ sở lý luận quan trọng để Hồ Chí Minh tìm thấy con đường cứu nước đúng đắn.",
      image: "/maclenin.jpg",
    },
    {
      title: "2. Bối cảnh lịch sử",
      description: "Việt Nam dưới thực dân Pháp, phong trào yêu nước thất bại. Quốc tế: Cách mạng Tháng Mười Nga (1917).",
      details: "Trong nước:\n- Việt Nam bị thực dân Pháp đô hộ, nhân dân mất độc lập, đói nghèo.\n- Nhiều phong trào yêu nước diễn ra (Cần Vương, Đông Du, Duy Tân, Khởi nghĩa Yên Bái…) nhưng đều thất bại → chưa tìm ra con đường đúng.\n\nQuốc tế:\n- Cách mạng Tháng Mười Nga (1917) thành công → mở ra thời đại mới: thời đại quá độ từ CNTB lên CNXH.\n- Phong trào giải phóng dân tộc dâng cao ở nhiều nước thuộc địa, tạo ảnh hưởng mạnh mẽ đến Việt Nam.",
      image: "/boicanh.png",
    },
    {
      title: "3. Cuộc đời Hồ Chí Minh",
      description: "Hành trình tìm đường cứu nước, tác phẩm <i>Đường cách mệnh</i>, <i>Tuyên ngôn độc lập</i>.",
      details: "1911: Ra đi tìm đường cứu nước, đi nhiều nước, tìm hiểu nhiều con đường.\n1920: Đến với chủ nghĩa Mác – Lênin, tìm thấy con đường giải phóng dân tộc.\n\nTác phẩm tiêu biểu:\n- <i>Đường cách mệnh</i> (1927): Nêu quan điểm về cách mạng giải phóng dân tộc và vai trò của Đảng.\n- <i>Tuyên ngôn độc lập</i> (1945): Khẳng định quyền tự do, độc lập của dân tộc Việt Nam.\n- <i>Di chúc</i> (1969): Tổng kết con đường cách mạng Việt Nam, nhấn mạnh độc lập dân tộc gắn với CNXH.",
      image: "/bacho.jpg",
    },
    {
      title: "4. Khái niệm cơ bản",
      description: "Độc lập dân tộc, chủ nghĩa xã hội, đại đoàn kết, bạo lực cách mạng.",
      details: "Độc lập dân tộc: Không chỉ là thoát khỏi ách ngoại xâm, mà phải gắn với tự do, hạnh phúc cho nhân dân.\nChủ nghĩa xã hội: Xã hội công bằng, dân chủ, văn minh, không có áp bức, bóc lột.\nĐại đoàn kết dân tộc: Lực lượng quyết định thắng lợi của cách mạng, lấy công – nông làm nền tảng.\nBạo lực cách mạng: Phải dùng sức mạnh của quần chúng để chống lại bạo lực phản cách mạng, giành và giữ chính quyền.",
      image: "/khainiem.jpg",
    },
    {
      title: "5. Truyền thống Việt Nam",
      description: "Lòng yêu nước, đoàn kết, tư tưởng nhân văn.",
      details: "Lòng yêu nước nồng nàn: Sức mạnh tinh thần to lớn của dân tộc trong mọi cuộc kháng chiến.\nTinh thần đoàn kết, nhân ái: 'Bầu ơi thương lấy bí cùng', đoàn kết chống giặc ngoại xâm.\nTư tưởng nhân văn: Đặt con người ở vị trí trung tâm, độc lập gắn liền với hạnh phúc của nhân dân.",
      image: "/truyenthong.jpg",
    },
    {
      title: "6. Phương pháp học",
      description: "Tư duy logic, liên hệ thực tiễn, đọc tài liệu gốc Hồ Chí Minh.",
      details: "Tư duy logic: Nhận diện mối quan hệ giữa độc lập dân tộc và CNXH (biện chứng, không tách rời).\nLiên hệ thực tiễn: So sánh với tình hình Việt Nam hiện nay (giữ vững độc lập, phát triển theo định hướng XHCN).\nĐọc tài liệu gốc của Hồ Chí Minh: Như <i>Đường cách mệnh</i>, <i>Tuyên ngôn độc lập</i>, <i>Di chúc</i>… để hiểu trực tiếp quan điểm của Người.",
      image: "/pphap.png",
    },
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedItem(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const renderDetails = (details) => {
    return details.split('\n').map((line, index) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return <br key={index} />;
      if (trimmedLine.startsWith('-')) {
        return (
          <li key={index} className="text-gray-700 text-base leading-relaxed ml-6 list-disc">
            <span dangerouslySetInnerHTML={{ __html: trimmedLine.replace(/^- /, '').replace(/<i>(.*?)<\/i>/g, '<i>$1</i>') }} />
          </li>
        );
      }
      return (
        <p key={index} className="text-gray-700 text-base leading-relaxed mt-2">
          <span dangerouslySetInnerHTML={{ __html: trimmedLine.replace(/<i>(.*?)<\/i>/g, '<i>$1</i>') }} />
        </p>
      );
    });
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl font-bold text-[#fd6c6c] max-w-3xl text-center mb-12 tracking-tight">
        Những điều cần biết trước khi xem nội dung
      </h1>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {content.map((item, index) => (
          <div
            key={index}
            onClick={() => openModal(item)}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:bg-red-50"
          >
            <div className="w-full h-40 sm:h-48">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-red-600 mb-2">{item.title}</h2>
              <p
                className="text-gray-700 text-base leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedItem && (
        <div
          className={`fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'
            }`}
        >
          <div
            className={`bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative transform transition-all duration-300 ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
              }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-2xl transition-colors duration-200"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-red-600 mb-4">{selectedItem.title}</h2>
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-40 object-cover rounded-md mb-4"
              loading="lazy"
            />
            <div className="text-gray-700 text-base leading-relaxed">
              {renderDetails(selectedItem.details)}
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={closeModal}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IntroFPT;