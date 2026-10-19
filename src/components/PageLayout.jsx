import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorGlow from "./CursorGlow";

export default function PageLayout({ children }) {
  return (
    <div className="relative isolate min-h-screen bg-background text-primary">
      <CursorGlow />
      <div className="relative z-10">
        <Navbar />
        <main id="main-content" className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
