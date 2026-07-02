import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLock, FaEnvelope } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: connect to backend later
    console.log("Reset link sent to:", email);

    setSent(true);
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg,#4338ca,#7c3aed)",
      }}
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="card border-0 shadow-lg p-4"
        style={{ width: "100%", maxWidth: "420px", borderRadius: "16px" }}
      >
        <div className="text-center mb-4">
          <FaLock size={40} className="text-primary mb-2" />
          <h3 className="fw-bold">Forgot Password</h3>
          <p className="text-muted mb-0">
            Enter your email to receive a reset link
          </p>
        </div>

        {!sent ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email Address</label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>

                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <button className="btn btn-primary w-100 py-2" type="submit">
              Send Reset Link
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h5 className="text-success fw-bold">
              Reset Link Sent!
            </h5>
            <p className="text-muted">
              Check your email inbox for instructions to reset your password.
            </p>

            <button
              className="btn btn-outline-primary mt-2 w-100"
              onClick={() => setSent(false)}
            >
              Send Again
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};