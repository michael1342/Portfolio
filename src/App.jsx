import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import ProjectCasePage from "./pages/ProjectCasePage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          {/* Skip to main content — keyboard accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:font-semibold"
          >
            Skip to content
          </a>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectCasePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </MotionConfig>
    </ThemeProvider>
  );
}
