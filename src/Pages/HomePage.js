import React, { useContext } from "react";
import { AssignmentContext } from "../Context/AssignmentContext";
import AssignmentList from "../Components/AssignmentList";
import LoadingSpinner from "../Components/LoadingSpinner";
import ErrorMessage from "../Components/ErrorMessage";

const HomePage = () => {
  const { loading, error } = useContext(AssignmentContext);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return <AssignmentList />;
};

export default HomePage;