import { Route, Routes } from "react-router-dom";
import "./App.css";
import SpeechToText from "./components/SpeechToText.jsx";
import TextToSpeech from "./components/TextToSpeech.jsx";
import Home from "./routes/Home.jsx";
import ContactUs from "./routes/ContactUs.jsx";
import AboutUs from "./routes/AboutUs.jsx";
import GoToApp from "./routes/GoToApp.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/go-to-app" element={<GoToApp />} />
          <Route path="/app/text-to-speech" element={<TextToSpeech />} />
          <Route path="/app/speech-to-text" element={<SpeechToText />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
