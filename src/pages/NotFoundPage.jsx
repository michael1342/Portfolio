import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <PageLayout>
      <div className="min-h-[70vh] flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-8xl font-black text-accent/20 mb-4">404</p>
          <h1 className="text-3xl font-bold text-primary mb-3">Page not found</h1>
          <p className="text-secondary mb-8 max-w-xs mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </motion.div>
      </div>
    </PageLayout>
  );
}
