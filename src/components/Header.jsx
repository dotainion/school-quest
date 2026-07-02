import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthProvider";
import { FaUser, FaCog, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const navContainer = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.08
        }
    }
};

const navItem = {
    hidden: {
        opacity: 0,
        y: -15
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4
        }
    }
};

export const Header = () => {
    const { user } = useAuth();

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.6,
                ease: "easeOut"
            }}
            className="navbar navbar-expand-lg sticky-top border-bottom py-3"
            style={{
                background: "rgba(255,255,255,.92)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                boxShadow: "0 8px 30px rgba(0,0,0,.06)"
            }}
        >
            <div className="container">

                <motion.div
                    whileHover={{
                        scale: 1.05,
                        rotate: -3
                    }}
                    whileTap={{
                        scale: 0.97
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300
                    }}
                >
                    <Link
                        className="navbar-brand d-flex align-items-center"
                        to="/"
                    >
                        <svg
                            width="46"
                            height="46"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                            className="me-3"
                        >
                            <defs>
                                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#0d6efd"/>
                                    <stop offset="100%" stopColor="#4f9dff"/>
                                </linearGradient>
                            </defs>

                            <circle cx="32" cy="32" r="30" fill="url(#g)" />

                            <path
                                d="M18 20 L32 15 L46 20 L32 25 Z"
                                fill="white"
                            />

                            <path
                                d="M20 24
                                   V37
                                   C20 42 27 46 32 46
                                   C37 46 44 42 44 37
                                   V24"
                                fill="none"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />

                            <text
                                x="32"
                                y="37"
                                textAnchor="middle"
                                fontSize="14"
                                fill="white"
                                fontWeight="700"
                            >
                                SQ
                            </text>
                        </svg>

                        <div>
                            <div className="fw-bold fs-4 text-primary">
                                School Quest
                            </div>

                            <small className="text-muted">
                                Learn • Compete • Achieve
                            </small>
                        </div>
                    </Link>
                </motion.div>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbar"
                >

                    <motion.ul
                        variants={navContainer}
                        initial="hidden"
                        animate="show"
                        className="navbar-nav mx-auto"
                    >

                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Questions", path: "/question/feed" },
                            { name: "Leaderboard", path: "/school/leader/boarad" },
                        ].map((item) => (

                            <motion.li
                                key={item.name}
                                variants={navItem}
                                whileHover={{
                                    y: -3
                                }}
                                transition={{
                                    duration: .2
                                }}
                                className="nav-item mx-1"
                            >

                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `nav-link px-3 py-2 rounded-pill fw-semibold ${
                                            isActive
                                                ? "bg-primary text-white shadow"
                                                : "text-dark"
                                        }`
                                    }
                                >
                                    {item.name}
                                </NavLink>

                            </motion.li>

                        ))}

                    </motion.ul>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            delay: .5
                        }}
                        className="d-flex"
                    >
                        {user ? (
                            <div className="dropdown">
                                {/* Trigger */}
                                <button
                                    className="btn btn-light d-flex align-items-center gap-2 rounded-pill px-3"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ border: "1px solid #e5e7eb" }}
                                >
                                    <FaUserCircle size={20} />
                                    <span className="fw-semibold">Profile</span>
                                </button>

                                {/* Menu */}
                                <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2">
                                    
                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center gap-2" to="/student/profile">
                                            <FaUser /> My Profile
                                        </Link>
                                    </li>

                                    <li>
                                        <Link className="dropdown-item d-flex align-items-center gap-2" to="/settings">
                                            <FaCog /> Settings
                                        </Link>
                                    </li>

                                    <li><hr className="dropdown-divider" /></li>

                                    <li>
                                        <button
                                            className="dropdown-item text-danger d-flex align-items-center gap-2"
                                            onClick={() => {
                                                // replace with your auth logout logic
                                                console.log("Logging out...");
                                            }}
                                        >
                                            <FaSignOutAlt /> Logout
                                        </button>
                                    </li>

                                </ul>
                            </div>
                        ): (
                            <>
                                <motion.div
                                    className="rounded-pill"
                                    whileHover={{
                                        scale: 1.05,
                                        y: -2,
                                        boxShadow: "0 12px 24px rgba(13,110,253,.15)"
                                    }}
                                    whileTap={{
                                        scale: .96
                                    }}
                                >
                                    <Link
                                        to="/login"
                                        className="btn btn-outline-primary rounded-pill px-4 me-2"
                                    >
                                        Login
                                    </Link>
                                </motion.div>

                                <motion.div
                                    className="rounded-pill"
                                    whileHover={{
                                        scale: 1.05,
                                        y: -2,
                                        boxShadow: "0 15px 30px rgba(13,110,253,.25)"
                                    }}
                                    whileTap={{
                                        scale: .96
                                    }}
                                >
                                    <Link
                                        to="/register"
                                        className="btn btn-primary rounded-pill px-4"
                                    >
                                        Register
                                    </Link>
                                </motion.div>
                            </>
                        )}

                    </motion.div>

                </div>

            </div>
        </motion.nav>
    );
};