import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AssignmentContext } from "../Context/AssignmentContext";
import "./AssignmentList.css";

const AssignmentList = () => {
  const { assignments } = useContext(AssignmentContext);
  const [search, setSearch] = useState("");

  const filteredAssignments = assignments.filter(a =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="assignment-list">
      <h2>Assignments</h2>
      <input
        type="text"
        placeholder="Search assignments..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredAssignments.map((assignment) => (
          <li key={assignment.id}>
            <Link to={`/assignment/${assignment.id}`}>{assignment.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignmentList;