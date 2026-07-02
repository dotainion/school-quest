import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaSchool,
  FaTrophy,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaQuestionCircle,
  FaLightbulb,
  FaChartLine,
  FaMedal,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CountUpNumber } from "../components/CountUpNumber";

/* ---------------- ANIMATIONS ---------------- */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ---------------- HOME ---------------- */

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>

      {/* ================= HERO (MERGED BOTH VERSIONS) ================= */}
      <section
        className="position-relative overflow-hidden text-white"
        style={{
          minHeight: "90vh",
          background:
            "linear-gradient(135deg,#4338ca,#6d28d9,#7c3aed)",
        }}
      >

        <motion.div
          animate={{ y: [0, -25, 0], x: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(255,255,255,.08)",
            top: "-80px",
            right: "-120px",
          }}
        />

        <div className="container h-100">
          <div className="row align-items-center" style={{ minHeight: "90vh" }}>

            {/* LEFT */}
            <motion.div
              className="col-lg-7"
              variants={container}
              initial="hidden"
              animate="show"
            >

              <motion.span variants={fadeUp} className="badge bg-light text-dark mb-3 px-3 py-2">
                Student Learning Community
              </motion.span>

              <motion.h1 variants={fadeUp} className="display-2 fw-bold mb-4">
                Ask.<br />Learn.<br />Compete.
              </motion.h1>

              <motion.p variants={fadeUp} className="lead mb-4 opacity-75">
                School Quest helps students, teachers, and schools collaborate,
                ask questions, share answers, and compete in academic challenges.
              </motion.p>

              <motion.div variants={fadeUp} className="d-flex gap-3 flex-wrap">

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-light btn-lg"
                  onClick={() => navigate("/register")}
                >
                  Get Started
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline-light btn-lg"
                  onClick={() => navigate("/question/feed")}
                >
                  Browse Questions
                </motion.button>

              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              className="col-lg-5"
              variants={fadeRight}
              initial="hidden"
              animate="show"
            >
              <div className="card border-0 shadow-lg rounded-4">
                <div className="card-body p-4">

                  <h5 className="fw-bold mb-4">Live Activity</h5>

                  {[
                    "📚 Student answered a Math question",
                    "🏆 School gained leaderboard points",
                    "❓ New Physics question posted",
                    "🎖️ Badge unlocked",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="mb-3 text-muted"
                    >
                      {item}
                    </motion.div>
                  ))}

                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= STATS (MERGED BOTH) ================= */}
      <section className="py-5">
        <div className="container text-center">

          <div className="row">

            {[
              { value: 0, label: "Questions" },
              { value: 22000, label: "Approximate Students" },
              { value: 215, label: "Schools" },
              { value: 0, label: "Answers" },
            ].map((item, i) => (
              <div className="col-md-3 mb-4" key={i}>

                <motion.h2
                  className="fw-bold text-primary"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CountUpNumber end={item.value} />+
                </motion.h2>

                <p className="text-muted">{item.label}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-5 bg-light">
        <div className="container text-center">

          <h2 className="fw-bold mb-5">How It Works</h2>

          <div className="row g-4">

            {[
              { icon: <FaQuestionCircle />, title: "Ask Questions" },
              { icon: <FaLightbulb />, title: "Get Answers" },
              { icon: <FaChartLine />, title: "Earn Points" },
              { icon: <FaMedal />, title: "Compete" },
            ].map((item, i) => (
              <div key={i} className="col-lg-3">

                <motion.div
                  whileHover={{ y: -8 }}
                  className="card border-0 shadow-sm p-4"
                >
                  <div className="fs-2 text-primary mb-2">{item.icon}</div>
                  <h5>{item.title}</h5>
                </motion.div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= TOP SCHOOLS (MERGED) ================= */}
      <section className="py-5 bg-light">
  <div className="container">

    <div className="d-flex justify-content-between align-items-center mb-4">
      <h2 className="fw-bold">
        <FaTrophy className="me-2 text-warning" />
        Schools Leaderboard
      </h2>

      <button className="btn btn-outline-primary">
        View Rankings
      </button>
    </div>

    {/* EMPTY STATE / INITIAL STATE UI */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card border-0 shadow-sm rounded-4"
    >
      <div className="card-body text-center py-5">

        <FaTrophy size={40} className="text-warning mb-3" />

        <h4 className="fw-bold mb-2">
          Leaderboard is getting ready
        </h4>

        <p className="text-muted mb-4">
          Schools will appear here once competitions and participation data start building.
        </p>

        <div className="d-inline-block px-3 py-2 bg-white border rounded-pill">
          <small className="text-muted">
            Only verified schools will be ranked
          </small>
        </div>

      </div>
    </motion.div>

  </div>
</section>

      {/* ================= LATEST QUESTIONS ================= */}
      <section className="py-5">
        <div className="container">

          <h2 className="fw-bold mb-4">Latest Questions</h2>

          {[
            "How does photosynthesis work?",
            "Solve x² + 5x + 6 = 0",
            "What caused World War I?",
          ].map((q, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01 }}
              className="card mb-3 border-0 shadow-sm"
            >
              <div className="card-body d-flex justify-content-between">

                <div>
                  <h5>{q}</h5>
                  <small className="text-muted">{i + 2} answers</small>
                </div>

                <FaArrowRight />

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(135deg,#4338ca,#7c3aed)",
        }}
      >
        <div className="container">

          <FaSchool size={60} className="mb-3" />

          <h2 className="fw-bold display-5">
            Ready To Start Learning?
          </h2>

          <p className="lead opacity-75">
            Join students and schools across School Quest.
          </p>

          <Link to={'/register'} className="btn btn-light btn-lg mt-3">
            Create Free Account
          </Link>

        </div>
      </section>

    </div>
  );
};