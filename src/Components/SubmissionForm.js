import React, { useState } from "react";
import "./SubmissionForm.css";

const SubmissionForm = ({ assignmentId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="submission-form">
      {submitted ? (
        <p>Assignment submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="file" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} required />
          <textarea placeholder="Comments" value={comments} onChange={(e) => setComments(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SubmissionForm;