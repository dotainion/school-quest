import React from "react";
import { motion } from "framer-motion";
import { FaSchool, FaUserGraduate } from "react-icons/fa";

export const Register = () => {
  return (
    <div className="min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="row shadow-lg rounded overflow-hidden">

          {/* LEFT SIDE */}
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
            <FaUserGraduate size={60} className="mb-4" />

            <h1 className="fw-bold display-5">
              Join the Learning Revolution
            </h1>

            <p className="lead opacity-75 mt-3">
              Create your account to start asking questions, earning
              points, and representing your school in competitions.
            </p>

            <ul className="mt-4 list-unstyled">
              <li className="mb-2">✔ Compete with schools</li>
              <li className="mb-2">✔ Earn badges & achievements</li>
              <li className="mb-2">✔ Track your progress</li>
            </ul>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            className="col-lg-6 bg-white p-5"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="fw-bold mb-4">Create Account</h2>

            <form>
              {/* Name */}
              <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
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

              {/* Password */}
              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Create a password"
                />
              </div>

              {/* School */}
              <div className="mb-3">
                <label className="form-label">
                  School
                </label>

                <select className="form-select form-select-lg">
                  <option>Select your school</option>
                  <option>West Academy</option>
                  <option>Central High</option>
                  <option>Future Scholars</option>
                  <option>Green Valley College</option>
                </select>
              </div>

              {/* Terms */}
              <div className="form-check mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                />
                <label className="form-check-label">
                  I agree to the terms and conditions
                </label>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-primary btn-lg w-100"
              >
                Create Account
              </motion.button>
            </form>

            {/* Login Link */}
            <p className="text-center mt-4 mb-0 text-muted">
              Already have an account?{" "}
              <a href="#" className="text-primary fw-bold">
                Login
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};