import React from "react";
import { motion } from "framer-motion";
import {
  FaSchool,
  FaQuestionCircle,
  FaTrophy,
  FaUsers,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-top mt-5">
      <div className="container py-5">

        <div className="row g-4">

          {/* BRAND */}
          <div className="col-lg-4">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div className="d-flex align-items-center mb-3">

                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2"
                  style={{ width: 45, height: 45 }}
                >
                  <FaSchool />
                </div>

                <h5 className="fw-bold mb-0">School Quest</h5>

              </div>

              <p className="text-muted">
                A collaborative learning platform where students and schools
                ask questions, share knowledge, and compete to improve academic performance.
              </p>

            </motion.div>

          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2">

            <h6 className="fw-bold mb-3">Platform</h6>

            <ul className="list-unstyled">

              <li className="mb-2">
                <Link className="text-muted text-decoration-none" to="/">
                  Home
                </Link>
              </li>

              <li className="mb-2">
                <Link className="text-muted text-decoration-none" to="/question/feed">
                  Questions
                </Link>
              </li>

              <li className="mb-2">
                <Link className="text-muted text-decoration-none" to="/schools">
                  Schools
                </Link>
              </li>

              <li className="mb-2">
                <Link className="text-muted text-decoration-none" to="/leaderboard">
                  Leaderboard
                </Link>
              </li>

            </ul>

          </div>

          {/* FEATURES */}
          <div className="col-lg-3">

            <h6 className="fw-bold mb-3">Features</h6>

            <ul className="list-unstyled text-muted">

              <li className="mb-2"><FaQuestionCircle className="me-2" /> Ask Questions</li>
              <li className="mb-2"><FaUsers className="me-2" /> Student Profiles</li>
              <li className="mb-2"><FaTrophy className="me-2" /> Competitions</li>
              <li className="mb-2"><FaSchool className="me-2" /> School Rankings</li>

            </ul>

          </div>

          {/* CONTACT */}
          <div className="col-lg-3">

            <h6 className="fw-bold mb-3">Contact</h6>

            <p className="text-muted mb-2">
              <FaEnvelope className="me-2" />
              support@schoolquest.com
            </p>

            <div className="d-flex gap-3 mt-3">

              <a href="#" className="text-muted fs-5">
                <FaFacebook />
              </a>

              <a href="#" className="text-muted fs-5">
                <FaTwitter />
              </a>

              <a href="#" className="text-muted fs-5">
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-top mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center">

          <small className="text-muted">
            © {new Date().getFullYear()} School Quest. All rights reserved.
          </small>

          <small className="text-muted">
            Learn • Compete • Achieve
          </small>

        </div>

      </div>
    </footer>
  );
};