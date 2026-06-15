import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaUserGraduate,
  FaTrophy,
  FaMedal,
  FaQuestionCircle,
  FaCheckCircle,
  FaSchool,
  FaFire,
} from "react-icons/fa";

export const StudentProfile = () => {
  const achievements = [
    {
      title: "Top Helper",
      icon: <FaMedal />,
      color: "warning",
    },
    {
      title: "100 Answers",
      icon: <FaCheckCircle />,
      color: "success",
    },
    {
      title: "Math Expert",
      icon: <FaTrophy />,
      color: "primary",
    },
  ];

  const activity = [
    "Answered a Physics question",
    "Earned 50 points for Biology answer",
    "Asked a Math question",
    "Received 10 upvotes",
  ];

  return (
    <div>
      {/* HERO */}
      <section
        className="text-white position-relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,#4338ca,#6d28d9,#7c3aed)",
          minHeight: "420px",
        }}
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="position-absolute"
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,.08)",
            top: "-80px",
            right: "-80px",
          }}
        />

        <div className="container py-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="d-flex align-items-center gap-4 flex-wrap">
              <div
                className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: 110,
                  height: 110,
                  fontSize: "2rem",
                  fontWeight: "bold",
                }}
              >
                SJ
              </div>

              <div>
                <h1 className="display-5 fw-bold mb-1">
                  Sarah Johnson
                </h1>

                <p className="lead opacity-75 mb-2">
                  West Academy • Grade 11 Student
                </p>

                <span className="badge bg-warning text-dark">
                  ⭐ Top 5 Student
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4 text-center">
            {[
              { label: "Points", value: 5420 },
              { label: "Answers", value: 180 },
              { label: "Questions", value: 35 },
              { label: "Rank", value: 5 },
            ].map((stat, i) => (
              <div className="col-md-3" key={i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="card border-0 shadow-sm"
                >
                  <div className="card-body p-4">
                    <h2 className="fw-bold text-primary">
                      <CountUp
                        end={stat.value}
                        duration={2}
                        separator=","
                      />
                    </h2>

                    <p className="text-muted mb-0">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* LEFT */}
            <div className="col-lg-8">
              {/* ACHIEVEMENTS */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card border-0 shadow-sm mb-4"
              >
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">
                    Achievements
                  </h4>

                  <div className="row g-3">
                    {achievements.map((a, i) => (
                      <div className="col-md-4" key={i}>
                        <div className={`card border-0 bg-${a.color} bg-opacity-10`}>
                          <div className="card-body text-center">
                            <div className={`text-${a.color} mb-2`}>
                              {a.icon}
                            </div>

                            <strong>{a.title}</strong>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* ACTIVITY */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card border-0 shadow-sm"
              >
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">
                    Recent Activity
                  </h4>

                  {activity.map((item, i) => (
                    <div
                      key={i}
                      className="d-flex align-items-center mb-3"
                    >
                      <FaFire className="text-warning me-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-4">
              {/* SCHOOL */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card border-0 shadow-sm mb-4"
              >
                <div className="card-body text-center">
                  <FaSchool size={40} className="text-primary mb-3" />

                  <h5 className="fw-bold">
                    West Academy
                  </h5>

                  <p className="text-muted mb-0">
                    Member since 2024
                  </p>
                </div>
              </motion.div>

              {/* RANKING */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card border-0 shadow-sm"
              >
                <div className="card-body">
                  <h5 className="fw-bold mb-3">
                    Ranking Progress
                  </h5>

                  <div className="mb-2">
                    <strong>#5</strong> Current Rank
                  </div>

                  <div className="mb-2 text-success">
                    ↑ Improved by 3 positions this month
                  </div>

                  <div className="text-muted">
                    Keep contributing to reach Top 1
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-5 text-white text-center"
        style={{
          background:
            "linear-gradient(135deg,#4338ca,#7c3aed)",
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <FaUserGraduate size={60} className="mb-3" />

            <h2 className="fw-bold">
              Keep Learning, Keep Growing
            </h2>

            <p className="lead opacity-75">
              Every answer you give helps your school and your
              personal ranking.
            </p>

            <button className="btn btn-light btn-lg">
              Ask a Question
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};