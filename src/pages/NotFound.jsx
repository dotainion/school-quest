import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg,#4338ca,#6d28d9,#7c3aed)",
            color: "white",
        }}
    >
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-4"
        >
                <FaExclamationTriangle size={60} className="mb-3" />

                <h1 className="display-3 fw-bold">404</h1>

                <h3 className="mb-3">Page Not Found</h3>

                <p className="opacity-75 mb-4">
                The page you are looking for doesn’t exist or has been moved.
                </p>

                <button
                className="btn btn-light btn-lg px-4 d-inline-flex align-items-center gap-2"
                onClick={() => navigate("/")}
                >
                    <FaHome />
                    Back to Home
                </button>
        </motion.div>
    </div>
  );
};