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
          Sản phẩm của môn học Chủ nghĩa xã hội khoa học (MLN131)
        </span>
        <div className="bg-black/50 backdrop-blur-xl rounded-2xl shadow-lg max-w-4xl p-2 mx-auto text-center">
          <h1 className="text-5xl font-bold text-[#fd6c6c] mb-6">
            Chủ Nghĩa Xã Hội
          </h1>

          <h2 className="text-2xl text-[#ffadad] font-bold mt-4 mb-6">
            Chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội
          </h2>

          <p className="text-lg font-bold text-gray-200 mt-4">
            khám phá những nội dung cốt lõi về chủ nghĩa xã hội và thời kỳ quá độ lên chủ nghĩa xã hội,
            bao gồm khái niệm, bản chất, điều kiện ra đời, đặc trưng bản chất của chủ nghĩa xã hội,
            cũng như các đặc điểm, nội dung và ý nghĩa của thời kỳ quá độ,
            với sự liên hệ chặt chẽ đến thực tiễn xây dựng chủ nghĩa xã hội ở Việt Nam.
          </p>
          <div className="flex justify-center gap-6 mt-6 mb-2">
            <button className="flex items-center gap-2 bg-[#ff5e5e] text-white px-6 py-3 rounded-lg hover:bg-[#e24a4a] transition-colors">
              <span
                className="flex items-center gap-2"
                onClick={() => navigate("/mln131/content")}
              >
                <FaPlayCircle /> Khám phá ngay
              </span>
            </button>
            <button
              className="flex items-center gap-2 bg-white text-[#e24a4a] font-bold px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
              onClick={() => navigate("/mln131/test")}
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