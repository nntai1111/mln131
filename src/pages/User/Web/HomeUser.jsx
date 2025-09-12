import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";
import NavigaForWeb from "../../../components/Web/NavigaForWeb";
import Footer from "../../../components/Web/Footer";
import Social from "../../../components/Web/Social";

const Home = () => {
  const location = useLocation();
  const userRole = useSelector((state) => state.auth.userRole);
  const [isLoggedIn, setIsLoggedIn] = useState(!!userRole);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    setIsLoggedIn(!!userRole);
  }, [userRole]);

  useEffect(() => {
    const handleResize = () => {
      setShowFooter(window.innerWidth >= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      {/* Header with fixed position */}
      {location.pathname !== "/HomeUser/dashboardUser" && (
        <header className="fixed top-0 left-0 right-0 z-50  w-full   transition-all duration-300 ease-in-out">
          <nav className="flex justify-center">
            <NavigaForWeb />
          </nav>
        </header>
      )}

      {/* Main content with padding to avoid overlap with fixed header */}
      <main className="flex justify-center flex-grow pt-24">
        <Outlet />
      </main>

      {/* Social component */}
      {/* <div className="bottom-[12%] fixed z-50">
        {location.pathname === "/EMO/learnAboutEmo" && <Social />}
      </div> */}

      {/* Footer */}
      {location.pathname === "/mln131" && showFooter && <Footer />}
    </div>
  );
};

export default Home;