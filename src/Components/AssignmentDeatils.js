import React, { useContext } from "react";
import { AssignmentContext } from "../Context/AssignmentContext";
import SubmissionForm from "./SubmissionForm";
import "./AssignmentDetail.css";

const AssignmentDetails = ({ assignmentId }) => {
  const { assignments } = useContext(AssignmentContext);
  const assignment = assignments.find(a => a.id === parseInt(assignmentId));

  if (!assignment) return <p>Assignment not found.</p>;

  return (
    <div className="assignment-detail">
      <h2>{assignment.title}</h2>
      <p><strong>Due Date:</strong> {assignment.dueDate}</p>
      <p>{assignment.description}</p>
      <p><strong>Instructions:</strong> {assignment.instructions}</p>
      <SubmissionForm assignmentId={assignment.id} />
    </div>
  );
};

export default AssignmentDetails;