import React from "react";
import { motion } from "framer-motion";
import {
  FaSchool,
  FaTrophy,
  FaUsers,
  FaQuestionCircle,
  FaMedal,
  FaArrowUp,
  FaFire,
} from "react-icons/fa";
import { CountUpNumber } from "../components/CountUpNumber";

export const SchoolProfile = () => {
  const topStudents = [
    {
      id: 1,
      name: "Sarah Johnson",
      points: 5420,
    },
    {
      id: 2,
      name: "Michael Brown",
      points: 4910,
    },
    {
      id: 3,
      name: "Emma Davis",
      points: 4530,
    },
  ];

  const recentQuestions = [
    "How does photosynthesis work?",
    "Solve x² + 5x + 6 = 0",
    "What caused World War I?",
    "Difference between velocity and acceleration?",
  ];

  return (
    <div>
      {/* HERO */}
      <section
        className="position-relative overflow-hidden text-white"
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
            width: 350,
            height: 350,
            borderRadius: "50%",
            background: "rgba(255,255,255,.08)",
            top: "-100px",
            right: "-100px",
          }}
        />

        <div className="container h-100 py-5">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
              >
                <div
                  className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: 100,
                    height: 100,
                  }}
                >
                  <FaSchool size={40} />
                </div>

                <h1 className="display-4 fw-bold">
                  West Academy
                </h1>

                <p className="lead opacity-75">
                  Building future leaders through collaboration,
                  learning, and academic excellence.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <span className="badge bg-warning text-dark px-3 py-2">
                    🏆 Rank #1
                  </span>

                  <span className="badge bg-light text-dark px-3 py-2">
                    320 Students
                  </span>

                  <span className="badge bg-success px-3 py-2">
                    +12% This Month
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {[
              {
                icon: <FaTrophy />,
                value: 15820,
                label: "Total Points",
              },
              {
                icon: <FaUsers />,
                value: 320,
                label: "Students",
              },
              {
                icon: <FaQuestionCircle />,
                value: 543,
                label: "Questions Asked",
              },
              {
                icon: <FaMedal />,
                value: 12,
                label: "Challenge Wins",
              },
            ].map((stat, index) => (
              <div
                className="col-md-6 col-lg-3"
                key={index}
              >
                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  className="card border-0 shadow-sm h-100"
                >
                  <div className="card-body text-center p-4">
                    <div
                      className="text-primary mb-3"
                      style={{ fontSize: "2rem" }}
                    >
                      {stat.icon}
                    </div>

                    <h2 className="fw-bold">
                      <CountUpNumber end={stat.value} />
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

      {/* SCHOOL PERFORMANCE */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* LEFT */}
            <div className="col-lg-8">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="card border-0 shadow-sm"
              >
                <div className="card-body p-4">
                  <h3 className="fw-bold mb-4">
                    School Performance
                  </h3>

                  <div className="row text-center">
                    <div className="col-md-4">
                      <h2 className="text-success fw-bold">
                        #1
                      </h2>
                      <p className="text-muted">
                        Current Rank
                      </p>
                    </div>

                    <div className="col-md-4">
                      <h2 className="text-primary fw-bold">
                        +12%
                      </h2>
                      <p className="text-muted">
                        Monthly Growth
                      </p>
                    </div>

                    <div className="col-md-4">
                      <h2 className="text-warning fw-bold">
                        12
                      </h2>
                      <p className="text-muted">
                        Competition Wins
                      </p>
                    </div>
                  </div>

                  <hr />

                  <div className="d-flex align-items-center text-success">
                    <FaArrowUp className="me-2" />
                    School performance is improving faster
                    than 85% of participating schools.
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-4">
              <motion.div
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                className="card border-0 shadow-sm"
              >
                <div className="card-body">
                  <h5 className="fw-bold mb-4">
                    <FaFire className="text-danger me-2" />
                    Recent Activity
                  </h5>

                  <div className="mb-3">
                    Sarah earned 120 points
                  </div>

                  <div className="mb-3">
                    New Biology question posted
                  </div>

                  <div className="mb-3">
                    School won a challenge
                  </div>

                  <div>
                    35 new answers submitted
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP STUDENTS */}
      <section className="py-5">
        <div className="container">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fw-bold">
                Top Contributors
              </h2>

              <button className="btn btn-outline-primary">
                View All Students
              </button>
            </div>

            <div className="row g-4">
              {topStudents.map(
                (student, index) => (
                  <div
                    className="col-md-4"
                    key={student.id}
                  >
                    <motion.div
                      whileHover={{
                        y: -8,
                      }}
                      className="card border-0 shadow-sm h-100"
                    >
                      <div className="card-body text-center">
                        <div
                          className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                          style={{
                            width: 80,
                            height: 80,
                            fontSize: "1.5rem",
                          }}
                        >
                          {student.name.charAt(0)}
                        </div>

                        <h5 className="fw-bold">
                          {student.name}
                        </h5>

                        <p className="text-primary fw-bold">
                          {student.points.toLocaleString()} pts
                        </p>

                        {index === 0 && (
                          <span className="badge bg-warning text-dark">
                            Top Contributor
                          </span>
                        )}
                      </div>
                    </motion.div>
                  </div>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* RECENT QUESTIONS */}
      <section className="py-5 bg-light">
        <div className="container">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <h2 className="fw-bold mb-4">
              Recent Questions
            </h2>

            {recentQuestions.map((question, index) => (
              <motion.div
                key={index}
                whileHover={{
                  x: 8,
                }}
                className="card border-0 shadow-sm mb-3"
              >
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="mb-0">
                      {question}
                    </h6>

                    <button className="btn btn-sm btn-primary">
                      View
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
          >
            <h2 className="display-5 fw-bold">
              Support West Academy
            </h2>

            <p className="lead opacity-75">
              Every question and answer helps your school
              earn points and rise in the rankings.
            </p>

            <button className="btn btn-light btn-lg">
              Join This School
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};