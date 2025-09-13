import { openLoginModal } from "../../store/authSlice";
import { toast } from "react-toastify";
import { FaPlayCircle, FaBook } from "react-icons/fa"; // Import icons from react-icons
import { useNavigate } from "react-router-dom";

const DownloadSection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="text-center">
        <span className="text-sm my-8 mt-24 inline-block rounded-full bg-red-100 text-gray-800 px-3 py-2 font-semibold">
          Sản phẩm của môn học Tư Tưởng Hồ Chí Minh (HCM202)
        </span>
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg max-w-4xl p-2 mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#fd6c6c] mb-4">
            Tư tưởng Hồ Chí Minh
          </h1>
          <h2 className="text-2xl font-semibold text-[#fd6c6c] mb-6">
            Về độc lập dân tộc và chủ nghĩa xã hội
          </h2>
          <p className="text-lg  leading-relaxed mb-8">
            Khám phá tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội, bao gồm quan niệm, bản chất, nguyên tắc của độc lập dân tộc; con đường cách mạng giải phóng dân tộc; đặc trưng, mục tiêu, động lực và nguyên tắc xây dựng chủ nghĩa xã hội; cùng mối quan hệ biện chứng giữa độc lập dân tộc và chủ nghĩa xã hội, gắn liền với thực tiễn cách mạng Việt Nam.
          </p>
          <div className="flex justify-center gap-6 mt-6 mb-2">
            <button className="flex items-center gap-2 bg-[#ff5e5e] text-white px-6 py-3 rounded-lg hover:bg-[#e24a4a] transition-colors">
              <span
                className="flex items-center gap-2"
                onClick={() => navigate("/hcm202/content")}
              >
                <FaPlayCircle /> Khám phá ngay
              </span>
            </button>
            <button
              className="flex items-center gap-2 bg-white text-[#e24a4a] font-bold px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              onClick={() => navigate("/hcm202/test")}
            >
              <FaBook /> Kiểm tra kiến thức
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default DownloadSection;