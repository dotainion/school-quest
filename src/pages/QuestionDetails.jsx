import React from "react";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaCommentDots,
  FaEye,
  FaClock,
  FaThumbsUp,
  FaUserGraduate,
  FaBook,
} from "react-icons/fa";

export const QuestionDetails = () => {
  const answers = [
    {
      id: 1,
      author: "Sarah Johnson",
      school: "West Academy",
      votes: 24,
      accepted: true,
      content:
        "Photosynthesis is the process by which plants convert sunlight, water, and carbon dioxide into glucose and oxygen. It occurs primarily in the chloroplasts of plant cells.",
      time: "1 hour ago",
    },
    {
      id: 2,
      author: "Michael Brown",
      school: "Central High",
      votes: 14,
      accepted: false,
      content:
        "A simple way to remember it is that plants use sunlight as energy to create food for themselves.",
      time: "45 minutes ago",
    },
    {
      id: 3,
      author: "Emma Davis",
      school: "Future Scholars",
      votes: 8,
      accepted: false,
      content:
        "The process takes place in two stages: the light-dependent reactions and the Calvin cycle.",
      time: "20 minutes ago",
    },
  ];

  return (
    <div>
      {/* HERO */}
      <section
        className="text-white py-5"
        style={{
          background:
            "linear-gradient(135deg,#4338ca,#7c3aed)",
        }}
      >
        <div className="container">
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
            <span className="badge bg-light text-dark mb-3">
              Biology
            </span>

            <h1 className="display-5 fw-bold">
              How does photosynthesis work in plants?
            </h1>

            <div className="d-flex flex-wrap gap-4 mt-4">
              <span>
                <FaCommentDots className="me-2" />
                3 Answers
              </span>

              <span>
                <FaEye className="me-2" />
                245 Views
              </span>

              <span>
                <FaClock className="me-2" />
                Asked 2 hours ago
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {/* MAIN CONTENT */}
            <div className="col-lg-8">
              {/* QUESTION */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                className="card border-0 shadow-sm mb-4"
              >
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <small className="text-muted">
                        Asked By
                      </small>

                      <h6 className="mb-0 fw-bold">
                        John Williams
                      </h6>

                      <small className="text-primary">
                        West Academy
                      </small>
                    </div>

                    <div className="text-end">
                      <span className="badge bg-primary">
                        Biology
                      </span>
                    </div>
                  </div>

                  <p className="fs-5 mb-0">
                    I'm studying plant biology and would
                    like a detailed explanation of how
                    photosynthesis works, including the
                    role of chlorophyll and sunlight.
                  </p>
                </div>
              </motion.div>

              {/* ANSWERS HEADER */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold">
                  {answers.length} Answers
                </h3>

                <select className="form-select w-auto">
                  <option>Most Helpful</option>
                  <option>Newest</option>
                  <option>Oldest</option>
                </select>
              </div>

              {/* ANSWERS */}
              {answers.map((answer, index) => (
                <motion.div
                  key={answer.id}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className={`card border-0 shadow-sm mb-4 ${
                    answer.accepted
                      ? "border border-success"
                      : ""
                  }`}
                >
                  <div className="card-body p-4">
                    {answer.accepted && (
                      <div className="mb-3">
                        <span className="badge bg-success">
                          <FaCheckCircle className="me-2" />
                          Best Answer
                        </span>
                      </div>
                    )}

                    <p className="mb-4 fs-6">
                      {answer.content}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="fw-semibold">
                          {answer.author}
                        </div>

                        <small className="text-primary">
                          {answer.school}
                        </small>
                      </div>

                      <div className="d-flex align-items-center gap-3">
                        <button className="btn btn-outline-success btn-sm">
                          <FaThumbsUp />
                        </button>

                        <span className="fw-bold">
                          {answer.votes}
                        </span>

                        <small className="text-muted">
                          {answer.time}
                        </small>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* ANSWER FORM */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{ once: true }}
                className="card border-0 shadow-sm"
              >
                <div className="card-body p-4">
                  <h4 className="fw-bold mb-4">
                    Your Answer
                  </h4>

                  <textarea
                    className="form-control mb-3"
                    rows="6"
                    placeholder="Write your answer here..."
                  />

                  <button className="btn btn-primary">
                    Post Answer
                  </button>
                </div>
              </motion.div>
            </div>

            {/* SIDEBAR */}
            <div className="col-lg-4">
              {/* QUESTION STATS */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                className="card border-0 shadow-sm mb-4"
              >
                <div className="card-body">
                  <h5 className="fw-bold mb-4">
                    Question Stats
                  </h5>

                  <div className="mb-3">
                    <strong>245</strong>
                    <div className="text-muted">
                      Views
                    </div>
                  </div>

                  <div className="mb-3">
                    <strong>3</strong>
                    <div className="text-muted">
                      Answers
                    </div>
                  </div>

                  <div>
                    <strong>18</strong>
                    <div className="text-muted">
                      Total Votes
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RELATED QUESTIONS */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
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
                    Related Questions
                  </h5>

                  {[
                    "What is chlorophyll?",
                    "Explain cellular respiration.",
                    "How do plants absorb sunlight?",
                    "Difference between ATP and glucose?",
                  ].map((question) => (
                    <div
                      key={question}
                      className="mb-3 pb-3 border-bottom"
                    >
                      <div className="d-flex">
                        <FaBook className="text-primary me-2 mt-1" />
                        <span>{question}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* AUTHOR */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                className="card border-0 shadow-sm mt-4"
              >
                <div className="card-body text-center">
                  <FaUserGraduate
                    size={50}
                    className="text-primary mb-3"
                  />

                  <h5 className="fw-bold">
                    John Williams
                  </h5>

                  <p className="text-primary">
                    West Academy
                  </p>

                  <small className="text-muted">
                    1,245 Contribution Points
                  </small>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};