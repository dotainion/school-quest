import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
    FaSchool,
    FaTrophy,
    FaQuestionCircle,
    FaAward,
    FaUsers,
    FaArrowRight,
} from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
        },
    },
};

export const About = () => {
    return (
        <div className="bg-white overflow-hidden">
        {/* HERO */}
        <section
            className="position-relative text-white d-flex align-items-center"
            style={{
            minHeight: "100vh",
            background:
                "linear-gradient(135deg, #4338ca 0%, #6d28d9 50%, #7c3aed 100%)",
            }}
        >
            {/* Floating circles */}
            <motion.div
            animate={{
                y: [0, -25, 0],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
            }}
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
            animate={{
                y: [0, 30, 0],
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
            }}
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
            <motion.div
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="row justify-content-center text-center"
            >
                <div className="col-lg-9">
                <span className="badge bg-light text-dark px-3 py-2 mb-4">
                    Student Powered Learning Platform
                </span>

                <h1
                    className="fw-bold mb-4"
                    style={{
                    fontSize: "clamp(3rem,8vw,5.5rem)",
                    lineHeight: 1.1,
                    }}
                >
                    Learn Together.
                    <br />
                    Compete Together.
                    <br />
                    Grow Together.
                </h1>

                <p className="lead text-light opacity-75 mb-5">
                    Ask questions, share knowledge, earn rewards, and help
                    your school climb the leaderboard.
                </p>

                <div className="d-flex justify-content-center gap-3 flex-wrap">
                    <button className="btn btn-light btn-lg px-4">
                    Join Now
                    </button>

                    <button className="btn btn-outline-light btn-lg px-4">
                    Explore Questions
                    </button>
                </div>
                </div>
            </motion.div>
            </div>
        </section>

        {/* MISSION */}
        <section className="py-5 py-lg-7">
            <div className="container py-5">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
            >
                <h2 className="display-5 fw-bold mb-4">
                Why We Built This
                </h2>

                <p className="lead text-muted col-lg-8 mx-auto">
                Students shouldn't struggle alone. We created a space where
                asking questions is encouraged, helping others is rewarded,
                and schools work together to create stronger learning
                communities.
                </p>
            </motion.div>
            </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-light py-5">
            <div className="container py-5">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center mb-5"
            >
                <h2 className="display-6 fw-bold">
                How It Works
                </h2>
            </motion.div>

            <div className="row g-4">
                {[
                {
                    icon: <FaQuestionCircle />,
                    title: "Ask Questions",
                    text: "Get answers from students who understand your challenges.",
                },
                {
                    icon: <FaUsers />,
                    title: "Help Others",
                    text: "Share your knowledge and support fellow learners.",
                },
                {
                    icon: <FaAward />,
                    title: "Earn Points",
                    text: "Gain recognition, badges, and achievements.",
                },
                {
                    icon: <FaTrophy />,
                    title: "Boost Your School",
                    text: "Every contribution helps your school rise in rankings.",
                },
                ].map((item, index) => (
                <motion.div
                    key={index}
                    className="col-md-6 col-lg-3"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{
                    opacity: 1,
                    y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                    delay: index * 0.15,
                    }}
                >
                    <motion.div
                    whileHover={{
                        y: -10,
                    }}
                    className="card border-0 shadow-sm h-100"
                    >
                    <div className="card-body p-4 text-center">
                        <div
                        className="mx-auto mb-4 d-flex align-items-center justify-content-center"
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: "50%",
                            background: "#eef2ff",
                            color: "#4338ca",
                            fontSize: 28,
                        }}
                        >
                        {item.icon}
                        </div>

                        <h5 className="fw-bold">
                        {item.title}
                        </h5>

                        <p className="text-muted mb-0">
                        {item.text}
                        </p>
                    </div>
                    </motion.div>
                </motion.div>
                ))}
            </div>
            </div>
        </section>

        {/* SCHOOL COMPETITION */}
        <section className="py-5">
            <div className="container py-5">
            <div className="row align-items-center">
                <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                >
                <span className="text-primary fw-bold">
                    SCHOOL CHALLENGES
                </span>

                <h2 className="display-6 fw-bold my-3">
                    Turn Learning Into Friendly Competition
                </h2>

                <p className="text-muted mb-4">
                    Students earn points for their schools by asking
                    thoughtful questions, providing helpful answers, and
                    staying active in the community.
                </p>

                <ul className="list-unstyled">
                    <li className="mb-3">
                    ✓ School Leaderboards
                    </li>
                    <li className="mb-3">
                    ✓ Weekly Challenges
                    </li>
                    <li className="mb-3">
                    ✓ Achievement Systems
                    </li>
                    <li className="mb-3">
                    ✓ Recognition For Top Contributors
                    </li>
                </ul>
                </motion.div>

                <motion.div
                className="col-lg-6"
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                >
                <div className="card border-0 shadow-lg">
                    <div className="card-body p-5">
                    <h5 className="fw-bold mb-4">
                        Current Leaderboard
                    </h5>

                    {[
                        ["West Academy", 1],
                        ["Central High", 2],
                        ["Future Scholars", 3],
                    ].map(([name, rank]) => (
                        <div
                        key={name}
                        className="d-flex justify-content-between align-items-center mb-3"
                        >
                        <div>
                            <span className="fw-bold me-3">
                            #{rank}
                            </span>
                            {name}
                        </div>

                        <FaArrowRight />
                        </div>
                    ))}
                    </div>
                </div>
                </motion.div>
            </div>
            </div>
        </section>

        {/* STATS */}
        <section
            className="text-white py-5"
            style={{
            background:
                "linear-gradient(135deg,#4338ca,#7c3aed)",
            }}
        >
            <div className="container py-4">
            <div className="row text-center">
                {[
                [5000, "Questions"],
                [1200, "Students"],
                [75, "Schools"],
                [25000, "Answers"],
                ].map(([value, label]) => (
                <div className="col-md-3 mb-4" key={label}>
                    <h1 className="fw-bold">
                    <CountUp
                        end={value}
                        duration={3}
                        separator=","
                    />
                    +
                    </h1>

                    <p className="mb-0">{label}</p>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* CTA */}
        <section className="py-5">
            <div className="container py-5 text-center">
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
                <FaSchool
                size={60}
                className="text-primary mb-4"
                />

                <h2 className="display-5 fw-bold mb-3">
                Ready To Represent Your School?
                </h2>

                <p className="lead text-muted mb-4">
                Join thousands of students already learning,
                competing, and helping each other succeed.
                </p>

                <button className="btn btn-primary btn-lg px-5">
                Create Account
                </button>
            </motion.div>
            </div>
        </section>
        </div>
    );
};
