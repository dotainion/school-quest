import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaTrophy,
  FaMedal,
  FaSchool,
  FaArrowUp,
  FaSearch,
} from "react-icons/fa";

const schools = [
  {
    id: 1,
    name: "West Academy",
    points: 15820,
    students: 320,
    wins: 12,
  },
  {
    id: 2,
    name: "Central High",
    points: 14950,
    students: 290,
    wins: 10,
  },
  {
    id: 3,
    name: "Future Scholars",
    points: 13740,
    students: 275,
    wins: 8,
  },
  {
    id: 4,
    name: "Green Valley College",
    points: 12400,
    students: 250,
    wins: 7,
  },
  {
    id: 5,
    name: "Bright Minds Academy",
    points: 11980,
    students: 240,
    wins: 6,
  },
];

const podiumColors = [
  "#FFD700",
  "#C0C0C0",
  "#CD7F32",
];

export const SchoolsLeaderboard = () =>{
  const [search, setSearch] = useState("");

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(search.toLowerCase())
  );

  const topThree = schools.slice(0, 3);

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
        <div className="container text-center py-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FaTrophy
              size={70}
              className="text-warning mb-4"
            />

            <h1 className="display-4 fw-bold">
              Schools Leaderboard
            </h1>

            <p className="lead opacity-75">
              See which schools are leading the competition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TOP 3 PODIUM */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">
              Top Performing Schools
            </h2>
          </div>

          <div className="row justify-content-center align-items-end g-4">
            {[1, 0, 2].map((positionIndex) => {
              const school = topThree[positionIndex];

              const heights = {
                0: 260,
                1: 210,
                2: 180,
              };

              return (
                <div
                  className="col-md-3"
                  key={school.id}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    whileHover={{
                      y: -10,
                    }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="card border-0 shadow-lg text-center"
                      style={{
                        height:
                          heights[positionIndex],
                      }}
                    >
                      <div className="card-body d-flex flex-column justify-content-center">
                        <div
                          className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                          style={{
                            width: 70,
                            height: 70,
                            background:
                              podiumColors[
                                positionIndex
                              ],
                            color: "#fff",
                          }}
                        >
                          <FaMedal />
                        </div>

                        <h5 className="fw-bold">
                          {school.name}
                        </h5>

                        <h3 className="text-primary fw-bold">
                          {school.points.toLocaleString()}
                        </h3>

                        <small className="text-muted">
                          Points
                        </small>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="py-4">
        <div className="container">
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Search schools..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>
        </div>
      </section>

      {/* RANKINGS TABLE */}
      <section className="pb-5">
        <div className="container">
          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
          >
            <div className="card border-0 shadow-sm">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover align-middle mb-0">
                    <thead className="table-light">
                      <tr>
                        <th>Rank</th>
                        <th>School</th>
                        <th>Points</th>
                        <th>Students</th>
                        <th>Challenge Wins</th>
                        <th>Trend</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredSchools.map(
                        (school, index) => (
                          <motion.tr
                            key={school.id}
                            initial={{
                              opacity: 0,
                              x: -20,
                            }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                          >
                            <td>
                              <span className="fw-bold">
                                #{index + 1}
                              </span>
                            </td>

                            <td>
                              <div className="d-flex align-items-center gap-3">
                                <div
                                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center"
                                  style={{
                                    width: 40,
                                    height: 40,
                                  }}
                                >
                                  <FaSchool />
                                </div>

                                <strong>
                                  {school.name}
                                </strong>
                              </div>
                            </td>

                            <td className="fw-bold text-primary">
                              {school.points.toLocaleString()}
                            </td>

                            <td>
                              {school.students}
                            </td>

                            <td>
                              {school.wins}
                            </td>

                            <td>
                              <span className="text-success fw-bold">
                                <FaArrowUp /> +3
                              </span>
                            </td>
                          </motion.tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-5 text-center text-white"
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
            <h2 className="fw-bold mb-3">
              Help Your School Climb Higher
            </h2>

            <p className="lead opacity-75">
              Ask questions, answer others, and earn
              points for your school.
            </p>

            <button className="btn btn-light btn-lg mt-3">
              Start Contributing
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}