import React, { createContext, useState, useEffect } from "react";
import { fetchAssignments } from "../Services/Api";

export const AssignmentContext = createContext();

export const AssignmentProvider = ({ children }) => {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAssignments = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAssignments();
      console.log("data is:" + data);
      setAssignments(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAssignments();
  }, []);

  return (
    <AssignmentContext.Provider value={{ assignments, loading, error, reload: loadAssignments }}>
      {children}
    </AssignmentContext.Provider>
  );
};