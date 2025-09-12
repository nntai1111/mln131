import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1000, // Thời gian animation (ms)
  easing: "ease-in-out", // Hiệu ứng chuyển động
  once: false, // Chạy một lần khi cuộn
});
import Home from "./pages/User/Web/HomeUser";
// import Intro from "./pages/User/Web/Intro";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LearnAboutEmo from "./pages/User/Web/LearnAboutEmo";
import Intro from "./pages/User/Web/Intro";
import TestEmotion from "./pages/User/Web/TestEmotion";
import ContentFull from "./pages/User/Web/ContentFull";
import Analysis from "./pages/User/Web/Analysis";
function App() {
  return (
    <>
      {/* <TokenValidator> */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/intro" />} />
          <Route path="/intro" element={<Intro />}
          />
          <Route path="/mln131" element={<Home />}>
            {/* <Route index element={<Navigate to="learnAboutEmo" replace />} /> */}
            <Route path="" element={<LearnAboutEmo />} />
            <Route path="content" element={<ContentFull />} />
            <Route path="analysis" element={<Analysis />} />
            <Route path="test" element={<TestEmotion />} />
          </Route>

        </Routes>
      </Router>

      <ToastContainer />
      {/* </TokenValidator> */}
    </>
  );
}

export default App;
