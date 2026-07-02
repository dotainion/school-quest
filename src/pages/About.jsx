import React from "react";
import { motion } from "framer-motion";
import {
  FaSchool,
  FaTrophy,
  FaQuestionCircle,
  FaAward,
  FaUsers,
  FaArrowRight,
  FaLightbulb,
  FaChartLine,
  FaBook,
  FaGlobe,
  FaRocket,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

export const About = () => {
  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO (ENHANCED ONLY - NOTHING REMOVED) ================= */}
      <section
        className="position-relative text-white d-flex align-items-center"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #4338ca 0%, #6d28d9 50%, #7c3aed 100%)",
        }}
      >

        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="position-absolute"
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,.08)",
            top: "10%",
            right: "-80px",
          }}
        />

        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="position-absolute"
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(255,255,255,.05)",
            bottom: "10%",
            left: "-50px",
          }}
        />

        <div className="container position-relative">
          <motion.div initial="hidden" animate="show" variants={fadeUp} className="text-center">

            <span className="badge bg-light text-dark px-3 py-2 mb-4">
              Student Powered Learning Platform
            </span>

            <h1 className="fw-bold mb-4" style={{ fontSize: "clamp(3rem,8vw,5.5rem)" }}>
              Learn Together.
              <br />
              Compete Together.
              <br />
              Grow Together.
            </h1>

            <p className="lead text-light opacity-75 mb-4">
              Ask questions, share knowledge, earn rewards, and help your school climb the leaderboard.
            </p>

            {/* ================= ADDED CONTENT (NOT REPLACED) ================= */}
            <div className="row mt-4 text-start text-white-50">
              <div className="col-md-4 mb-2">📌 Real-time Q&A system</div>
              <div className="col-md-4 mb-2">📌 Gamified school ranking engine</div>
              <div className="col-md-4 mb-2">📌 Student analytics dashboard</div>
              <div className="col-md-4 mb-2">📌 Achievement & badge system</div>
              <div className="col-md-4 mb-2">📌 Teacher moderation tools</div>
              <div className="col-md-4 mb-2">📌 AI-assisted learning support</div>
            </div>

            <div className="d-flex justify-content-center gap-3 flex-wrap mt-3">
              <Link to={'/register'} className="btn btn-light btn-lg px-4">Join Now</Link>
              <Link to={'/question/feed'} className="btn btn-outline-light btn-lg px-4">Explore Questions</Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ================= PLATFORM PURPOSE (EXPANDED, NOT REMOVED) ================= */}
      <section className="py-5">
        <div className="container py-5 text-center">

          <h2 className="display-5 fw-bold mb-4">Why We Built This</h2>

          <p className="lead text-muted col-lg-8 mx-auto">
            Students shouldn't struggle alone. We created a space where asking questions is encouraged,
            helping others is rewarded, and schools work together to create stronger learning communities.
          </p>

          {/* ORIGINAL IDEA + EXPANSION */}
          <div className="row mt-5">
            {[
              { icon: <FaLightbulb />, title: "Encourage Thinking" },
              { icon: <FaBook />, title: "Structured Learning Flow" },
              { icon: <FaChartLine />, title: "Performance Tracking" },
              { icon: <FaGlobe />, title: "Global Academic Network" },
              { icon: <FaRocket />, title: "Faster Learning Progress" },
              { icon: <FaShieldAlt />, title: "Safe Learning Environment" },
            ].map((item, i) => (
              <div className="col-md-4 col-lg-2 mb-3" key={i}>
                <motion.div whileHover={{ y: -8 }} className="p-3 border rounded-4 shadow-sm h-100">
                  <div className="text-primary fs-3 mb-2">{item.icon}</div>
                  <h6 className="fw-bold">{item.title}</h6>
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= HOW IT WORKS (EXPANDED NOT REPLACED) ================= */}
      <section className="bg-light py-5">
        <div className="container py-5">

          <h2 className="text-center fw-bold mb-5">How It Works</h2>

          <div className="row g-4">

            {[
              {
                icon: <FaQuestionCircle />,
                title: "Ask Questions",
                text: "Students post academic questions and get answers.",
              },
              {
                icon: <FaUsers />,
                title: "Collaborate",
                text: "Students help each other solve problems.",
              },
              {
                icon: <FaAward />,
                title: "Earn Points",
                text: "Every contribution earns rewards and badges.",
              },
              {
                icon: <FaTrophy />,
                title: "Boost School",
                text: "Your school climbs the leaderboard.",
              },
            ].map((item, i) => (
              <div className="col-md-6 col-lg-3" key={i}>
                <motion.div whileHover={{ y: -10 }} className="card border-0 shadow-sm h-100">
                  <div className="card-body text-center">
                    <div className="fs-3 text-primary mb-3">{item.icon}</div>
                    <h5>{item.title}</h5>
                    <p className="text-muted">{item.text}</p>

                    {/* EXTRA ADDED DEPTH */}
                    <small className="text-muted">
                      AI moderation • Verified answers • Instant feedback
                    </small>
                  </div>
                </motion.div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= SCHOOL COMPETITION (HEAVILY EXPANDED) ================= */}
      <section className="py-5">
        <div className="container py-5">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <h2 className="fw-bold mb-3">Academic Competition System</h2>

              <p className="text-muted">
                Schools are ranked based on participation, accuracy, engagement,
                and consistency across all academic activities.
              </p>

              <ul className="list-unstyled">
                <li>✔ Real-time ranking updates</li>
                <li>✔ Student contribution scoring system</li>
                <li>✔ Subject-based analytics tracking</li>
                <li>✔ Weekly and monthly competitions</li>
                <li>✔ Achievement badges & milestones</li>
                <li>✔ Teacher monitoring dashboard</li>
                <li>✔ Anti-spam + quality scoring system</li>
              </ul>

            </div>

            <div className="col-lg-6">

              <div className="card shadow-lg border-0">
                <div className="card-body p-4">

                  <h5 className="fw-bold mb-3">Live Rankings Preview</h5>

                  {[
                    ["JW Fletcher", 1, "Leading engagement"],
                    ["Central High", 2, "Strong consistency"],
                    ["Future Scholars", 3, "Fast improvement"],
                  ].map(([name, rank, desc]) => (
                    <div key={name} className="d-flex justify-content-between mb-3">
                      <div>
                        <strong>#{rank} {name}</strong>
                        <div className="text-muted small">{desc}</div>
                      </div>
                      <FaArrowRight />
                    </div>
                  ))}

                  <hr />

                  <small className="text-muted">
                    Rankings update every 24 hours based on student activity, accuracy, and engagement quality.
                  </small>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= STATS (EXPANDED) ================= */}
      <section className="text-white py-5" style={{ background: "linear-gradient(135deg,#4338ca,#7c3aed)" }}>
        <div className="container text-center">

          <h3 className="mb-4">Platform Impact</h3>

          <div className="row">

            {[
              ["5000+", "Questions Asked"],
              ["1200+", "Active Students"],
              ["75+", "Schools Joined"],
              ["25000+", "Answers Given"],
              ["100%", "Focus on Learning Growth"],
            ].map(([value, label]) => (
              <div className="col-md-3 mb-4" key={label}>
                <h2 className="fw-bold">{value}</h2>
                <p>{label}</p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA (EXPANDED) ================= */}
      <section className="py-5">
        <div className="container text-center py-5">

          <FaSchool size={60} className="text-primary mb-3" />

          <h2 className="fw-bold mb-3">Join the Future of Learning</h2>

          <p className="text-muted mb-4">
            A fully interactive academic ecosystem built for students, teachers, and schools.
          </p>

          <div className="row mb-4 text-muted">
            <div className="col-md-4">✔ Free to join</div>
            <div className="col-md-4">✔ Built for schools</div>
            <div className="col-md-4">✔ Gamified learning system</div>
            <div className="col-md-4">✔ Real-time analytics</div>
            <div className="col-md-4">✔ Competition-based motivation</div>
            <div className="col-md-4">✔ Future-ready education model</div>
          </div>

          <Link to={'/register'} className="btn btn-primary btn-lg px-5">
            Create Account
          </Link>

        </div>
      </section>

    </div>
  );
};