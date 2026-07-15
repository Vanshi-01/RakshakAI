import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SmsScanner from "./pages/SmsScanner";
import WebsiteScanner from "./pages/WebsiteScanner";
import ScreenshotScanner from "./pages/ScreenshotScanner";
import Result from "./pages/Result";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sms" element={<SmsScanner />} />
      <Route path="/website" element={<WebsiteScanner />} />
      <Route path="/screenshot" element={<ScreenshotScanner />} />
      <Route path="/result" element={<Result />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    
    </Routes>
  );
}

export default App;