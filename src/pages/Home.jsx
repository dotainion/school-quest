import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaSchool,
  FaTrophy,
  FaQuestionCircle,
  FaUsers,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const Home = () => {
    return (
        <div>
        {/* HERO */}
        <section
            className="position-relative overflow-hidden text-white"
            style={{
            minHeight: "90vh",
            background:
                "linear-gradient(135deg,#4338ca 0%, #6d28d9 50%, #7c3aed 100%)",
            }}
        >
            <motion.div
            animate={{
                y: [0, -20, 0],
            }}
            transition={{
                repeat: Infinity,
                duration: 5,
            }}
            style={{
                position: "absolute",
                width: 350,
                height: 350,
                borderRadius: "50%",
                background: "rgba(255,255,255,.08)",
                top: "-50px",
                right: "-100px",
            }}
            />

            <div className="container h-100">
            <div
                className="row align-items-center"
                style={{ minHeight: "90vh" }}
            >
                <div className="col-lg-7">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                >
                    <span className="badge bg-light text-dark mb-3">
                    Student Learning Community
                    </span>

                    <h1 className="display-2 fw-bold mb-4">
                    Ask.
                    <br />
                    Learn.
                    <br />
                    Compete.
                    </h1>

                    <p className="lead mb-4 opacity-75">
                    Ask questions, earn points, help your school
                    climb the leaderboard, and become a top student.
                    </p>

                    <div className="d-flex gap-3 flex-wrap">
                    <button className="btn btn-light btn-lg">
                        Get Started
                    </button>

                    <button className="btn btn-outline-light btn-lg">
                        Browse Questions
                    </button>
                    </div>
                </motion.div>
                </div>

                <div className="col-lg-5">
                <motion.div
                    initial={{
                    opacity: 0,
                    x: 50,
                    }}
                    animate={{
                    opacity: 1,
                    x: 0,
                    }}
                    transition={{
                    delay: 0.3,
                    }}
                >
                    <div className="card border-0 shadow-lg">
                    <div className="card-body p-4">
                        <h5 className="fw-bold mb-4">
                        Live Activity
                        </h5>

                        <div className="mb-3">
                        📚 Sarah answered a Math question
                        </div>

                        <div className="mb-3">
                        🏆 Central High gained 250 points
                        </div>

                        <div className="mb-3">
                        ❓ New Physics question posted
                        </div>

                        <div>
                        🎖️ Michael unlocked "Top Helper"
                        </div>
                    </div>
                    </div>
                </motion.div>
                </div>
            </div>
            </div>
        </section>

        {/* STATS */}
        <section className="py-5">
            <div className="container">
            <div className="row text-center">
                {[
                [5000, "Questions"],
                [1200, "Students"],
                [75, "Schools"],
                [25000, "Answers"],
                ].map(([value, label]) => (
                <div className="col-md-3 mb-4" key={label}>
                    <h2 className="fw-bold text-primary">
                    <CountUp
                        end={value}
                        duration={2.5}
                        separator=","
                    />
                    +
                    </h2>

                    <p className="text-muted">{label}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* TOP SCHOOLS */}
        <section className="py-5 bg-light">
            <div className="container">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold">
                    <FaTrophy className="me-2 text-warning" />
                    Top Schools
                </h2>

                <button className="btn btn-outline-primary">
                    View Rankings
                </button>
                </div>

                <div className="row">
                {[
                    "West Academy",
                    "Central High",
                    "Future Scholars",
                ].map((school, i) => (
                    <div className="col-lg-4 mb-4" key={school}>
                    <motion.div
                        whileHover={{
                        y: -8,
                        }}
                        className="card border-0 shadow-sm"
                    >
                        <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h5>{school}</h5>
                            <span className="badge bg-primary">
                            #{i + 1}
                            </span>
                        </div>

                        <p className="text-muted">
                            {12000 - i * 1000} points
                        </p>
                        </div>
                    </motion.div>
                    </div>
                ))}
                </div>
            </motion.div>
            </div>
        </section>

        {/* LATEST QUESTIONS */}
        <section className="py-5">
            <div className="container">
            <h2 className="fw-bold mb-4">
                Latest Questions
            </h2>

            {[
                "How does photosynthesis work?",
                "Solve x² + 5x + 6 = 0",
                "What caused World War I?",
            ].map((question, i) => (
                <motion.div
                key={i}
                whileHover={{
                    scale: 1.01,
                }}
                className="card mb-3 border-0 shadow-sm"
                >
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <div>
                        <h5>{question}</h5>

                        <small className="text-muted">
                        {i + 2} answers
                        </small>
                    </div>

                    <FaArrowRight />
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </section>

        {/* TOP STUDENTS */}
        <section className="py-5 bg-light">
            <div className="container">
            <h2 className="fw-bold mb-4">
                Top Students
            </h2>

            <div className="row">
                {[
                "Sarah Johnson",
                "Michael Brown",
                "Emma Davis",
                ].map((student, i) => (
                <div className="col-lg-4 mb-4" key={student}>
                    <motion.div
                    whileHover={{
                        y: -8,
                    }}
                    className="card border-0 shadow-sm"
                    >
                    <div className="card-body text-center">
                        <div
                        className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3"
                        style={{
                            width: 70,
                            height: 70,
                        }}
                        >
                        <FaUsers />
                        </div>

                        <h5>{student}</h5>

                        <p className="text-muted">
                        {5000 - i * 500} points
                        </p>

                        <FaStar className="text-warning" />
                    </div>
                    </motion.div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-5">
            <div className="container">
            <div className="text-center mb-5">
                <h2 className="fw-bold">
                How It Works
                </h2>
            </div>

            <div className="row">
                {[
                "Ask Questions",
                "Get Answers",
                "Earn Points",
                "Help Your School Win",
                ].map((step, i) => (
                <div className="col-lg-3 text-center" key={step}>
                    <motion.div
                    whileHover={{
                        scale: 1.05,
                    }}
                    >
                    <div
                        className="bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center"
                        style={{
                        width: 80,
                        height: 80,
                        }}
                    >
                        {i + 1}
                    </div>

                    <h5>{step}</h5>
                    </motion.div>
                </div>
                ))}
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
            <FaSchool size={60} className="mb-4" />

            <h2 className="display-5 fw-bold">
                Ready To Start Learning?
            </h2>

            <p className="lead opacity-75 mb-4">
                Join students from schools across the country.
            </p>

            <button className="btn btn-light btn-lg">
                Create Free Account
            </button>
            </div>
        </section>
        </div>
    );
};
