import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaCommentDots,
  FaEye,
  FaClock,
  FaFire,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const QuestionsFeed = () => {
  const [search, setSearch] = useState("");

  const questions = [
    {
      id: 1,
      title: "How does photosynthesis work in plants?",
      subject: "Biology",
      answers: 12,
      views: 234,
      author: "Sarah Johnson",
      school: "West Academy",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Solve x² + 5x + 6 = 0",
      subject: "Mathematics",
      answers: 8,
      views: 189,
      author: "Michael Brown",
      school: "Central High",
      time: "4 hours ago",
    },
    {
      id: 3,
      title: "What caused World War I?",
      subject: "History",
      answers: 15,
      views: 312,
      author: "Emma Davis",
      school: "Future Scholars",
      time: "7 hours ago",
    },
    {
      id: 4,
      title: "Difference between velocity and acceleration?",
      subject: "Physics",
      answers: 5,
      views: 143,
      author: "James Wilson",
      school: "Green Valley College",
      time: "1 day ago",
    },
  ];

  const filteredQuestions = questions.filter((question) =>
    question.title.toLowerCase().includes(search.toLowerCase())
  );

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
        <div className="container py-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center">
              <div>
                <h1 className="display-5 fw-bold">
                  Questions Feed
                </h1>

                <p className="lead opacity-75 mb-0">
                  Explore questions from students across all schools.
                </p>
              </div>

              <div className="mt-4 mt-lg-0">
                <Link to={'/ask/a/question'} className="btn btn-light btn-lg">
                  Ask a Question
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="py-4 bg-light border-bottom">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-6">
              <div className="input-group">
                <span className="input-group-text">
                  <FaSearch />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Search questions..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                />
              </div>
            </div>

            <div className="col-lg-3">
              <select className="form-select">
                <option>All Subjects</option>
                <option>Mathematics</option>
                <option>Biology</option>
                <option>Physics</option>
                <option>History</option>
                <option>Chemistry</option>
              </select>
            </div>

            <div className="col-lg-3">
              <select className="form-select">
                <option>Newest</option>
                <option>Most Answers</option>
                <option>Most Viewed</option>
                <option>Trending</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* SUBJECT TAGS */}
      <section className="py-3">
        <div className="container">
          <div className="d-flex gap-2 flex-wrap">
            {[
              "All",
              "Mathematics",
              "Biology",
              "Physics",
              "Chemistry",
              "History",
              "English",
            ].map((subject) => (
              <button
                key={subject}
                className="btn btn-outline-primary rounded-pill"
              >
                {subject}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* QUESTIONS */}
      <section className="pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {filteredQuestions.map(
                (question, index) => (
                  <motion.div
                    key={question.id}
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
                  >
                    <motion.div
                      whileHover={{
                        y: -5,
                      }}
                      className="card border-0 shadow-sm mb-4"
                    >
                      <div className="card-body p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <span className="badge bg-primary">
                            {question.subject}
                          </span>

                          <small className="text-muted">
                            <FaClock className="me-1" />
                            {question.time}
                          </small>
                        </div>

                        <h4 className="fw-bold mb-3">
                          {question.title}
                        </h4>

                        <div className="d-flex flex-wrap gap-4 text-muted">
                          <span>
                            <FaCommentDots className="me-2" />
                            {question.answers} Answers
                          </span>

                          <span>
                            <FaEye className="me-2" />
                            {question.views} Views
                          </span>
                        </div>

                        <hr />

                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <small className="text-muted">
                              Asked by
                            </small>

                            <div className="fw-semibold">
                              {question.author}
                            </div>

                            <small className="text-primary">
                              {question.school}
                            </small>
                          </div>

                          <Link to={'/question/detail'} className="btn btn-primary">
                            View Question
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )
              )}
            </div>

            {/* SIDEBAR */}
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
              >
                {/* Trending */}
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="fw-bold mb-4">
                      <FaFire className="text-danger me-2" />
                      Trending Topics
                    </h5>

                    <div className="d-flex flex-column gap-2">
                      <span className="badge bg-light text-dark p-2 text-start">
                        Algebra
                      </span>

                      <span className="badge bg-light text-dark p-2 text-start">
                        Photosynthesis
                      </span>

                      <span className="badge bg-light text-dark p-2 text-start">
                        World History
                      </span>

                      <span className="badge bg-light text-dark p-2 text-start">
                        Chemistry
                      </span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="card border-0 shadow-sm">
                  <div className="card-body">
                    <h5 className="fw-bold mb-4">
                      Feed Statistics
                    </h5>

                    <div className="mb-3">
                      <strong>5,432</strong>
                      <div className="text-muted">
                        Total Questions
                      </div>
                    </div>

                    <div className="mb-3">
                      <strong>25,782</strong>
                      <div className="text-muted">
                        Answers Posted
                      </div>
                    </div>

                    <div>
                      <strong>1,208</strong>
                      <div className="text-muted">
                        Active Students
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* LOAD MORE */}
          <div className="text-center mt-4">
            <button className="btn btn-outline-primary btn-lg">
              Load More Questions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};