import React, { useState } from "react";

const AskQuestion = () => {
  const [question, setQuestion] = useState({
    title: "",
    subject: "",
    grade: "",
    difficulty: "",
    tags: "",
    details: "",
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setQuestion({
      ...question,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(question);

    // Submit API here
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">

          {/* Header */}

          <div className="card border-0 shadow-sm mb-4">
            <div className="card-body p-4">

              <h2 className="fw-bold mb-2">
                Ask an Academic Question
              </h2>

              <p className="text-muted mb-0">
                Need help with homework or preparing for an exam?
                Ask your question and receive answers from teachers
                and fellow students.
              </p>

            </div>
          </div>

          {/* Form */}

          <form onSubmit={handleSubmit}>

            <div className="card shadow-sm border-0">

              <div className="card-body p-4">

                {/* Title */}

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Question Title
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Example: How do I solve quadratic equations?"
                    value={question.title}
                    onChange={handleChange}
                    required
                  />

                  <div className="form-text">
                    Keep your title short and descriptive.
                  </div>
                </div>

                {/* Subject */}

                <div className="row">

                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Subject
                    </label>

                    <select
                      className="form-select"
                      name="subject"
                      value={question.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Choose Subject</option>
                      <option>Mathematics</option>
                      <option>English</option>
                      <option>Physics</option>
                      <option>Chemistry</option>
                      <option>Biology</option>
                      <option>History</option>
                      <option>Geography</option>
                      <option>Information Technology</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-4">
                    <label className="form-label fw-semibold">
                      Grade / Level
                    </label>

                    <select
                      className="form-select"
                      name="grade"
                      value={question.grade}
                      onChange={handleChange}
                    >
                      <option value="">Select Level</option>
                      <option>Primary</option>
                      <option>Secondary</option>
                      <option>College</option>
                      <option>University</option>
                    </select>
                  </div>

                </div>

                {/* Difficulty */}

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Difficulty
                  </label>

                  <select
                    className="form-select"
                    name="difficulty"
                    value={question.difficulty}
                    onChange={handleChange}
                  >
                    <option value="">Select Difficulty</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                  </select>

                </div>

                {/* Tags */}

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Tags
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="tags"
                    placeholder="algebra, calculus, exam, homework"
                    value={question.tags}
                    onChange={handleChange}
                  />

                  <div className="form-text">
                    Separate tags using commas.
                  </div>

                </div>

                {/* Question */}

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Full Question
                  </label>

                  <textarea
                    rows="8"
                    className="form-control"
                    name="details"
                    placeholder="Explain your question clearly. Include formulas, examples or assignment instructions if necessary."
                    value={question.details}
                    onChange={handleChange}
                    required
                  ></textarea>

                </div>

                {/* Anonymous */}

                <div className="form-check mb-4">

                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="anonymous"
                    checked={question.anonymous}
                    onChange={handleChange}
                    id="anonymous"
                  />

                  <label
                    className="form-check-label"
                    htmlFor="anonymous"
                  >
                    Post anonymously
                  </label>

                </div>

              </div>

              <div className="card-footer bg-white border-0 p-4">

                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

                  <div className="text-muted small">
                    Questions are reviewed by the community.
                    Be respectful and provide enough information
                    for others to help.
                  </div>

                  <button
                    className="btn btn-primary px-4"
                    type="submit"
                  >
                    Post Question
                  </button>

                </div>

              </div>

            </div>

          </form>

          {/* Tips */}

          <div className="card border-0 shadow-sm mt-4">

            <div className="card-body">

              <h5 className="fw-bold mb-3">
                Tips for getting better answers
              </h5>

              <ul className="mb-0">
                <li>Write a clear and specific title.</li>
                <li>Include what you've already tried.</li>
                <li>Attach formulas or examples when possible.</li>
                <li>Select the correct subject and grade level.</li>
                <li>Be respectful to teachers and fellow students.</li>
              </ul>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default AskQuestion;