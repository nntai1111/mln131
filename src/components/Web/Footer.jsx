import styles from "../../styles/Web/Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="grid grid-cols-1">
      {/* Hàng 1 - Logo EMOEASE */}
      <div className="relative h-40 bg-white">
        <span
          className={`${styles.Holtwood}
            absolute
            text-[#ff8383]
            top-10
            left-1/2
            transform
            -translate-x-1/2
            font-bold
            text-[9rem]
            leading-none
            `}>
          MLN-131
        </span>
      </div>

      {/* Hàng 2 - Footer chính */}
      <div className="w-full bg-[#ff8383] py-8">
        {/* Container chính */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Phần trên - Logo, Links, Contact */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6">
            {/* Logo section */}


            {/* Links section */}

          </div>

          {/* Đường kẻ ngang */}
          {/* <hr className="border-t  my-4" /> */}

        </div>
      </div>
    </div>
  );
};

export default Footer;
