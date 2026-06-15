import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaGoogle, FaFacebook } from "react-icons/fa";

export const Login = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="row shadow-lg rounded overflow-hidden">

          {/* LEFT SIDE (Branding) */}
          <motion.div
            className="col-lg-6 text-white p-5 d-flex flex-column justify-content-center"
            style={{
              background:
                "linear-gradient(135deg,#4338ca,#6d28d9,#7c3aed)",
            }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaSchool size={60} className="mb-4" />

            <h1 className="fw-bold display-5">
              Welcome Back
            </h1>

            <p className="lead opacity-75 mt-3">
              Log in to continue asking questions, earning points,
              and helping your school climb the leaderboard.
            </p>

            <ul className="mt-4 list-unstyled">
              <li className="mb-2">✔ Ask & answer questions</li>
              <li className="mb-2">✔ Earn points & badges</li>
              <li className="mb-2">✔ Compete with schools</li>
            </ul>
          </motion.div>

          {/* RIGHT SIDE (FORM) */}
          <motion.div
            className="col-lg-6 bg-white p-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fw-bold mb-4">Login</h2>

            <form>
              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter your password"
                />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                  />
                  <label className="form-check-label">
                    Remember me
                  </label>
                </div>

                <a href="#" className="text-primary">
                  Forgot password?
                </a>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-primary btn-lg w-100"
              >
                Login
              </motion.button>
            </form>

            {/* Divider */}
            <div className="text-center my-4 text-muted">
              or continue with
            </div>

            {/* Social Login */}
            <div className="d-flex gap-3">
              <button className="btn btn-outline-dark w-50">
                <FaGoogle className="me-2" />
                Google
              </button>

              <button className="btn btn-outline-primary w-50">
                <FaFacebook className="me-2" />
                Facebook
              </button>
            </div>

            <p className="text-center mt-4 mb-0 text-muted">
              Don’t have an account?{" "}
              <a href="#" className="text-primary fw-bold">
                Sign up
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};