import React from "react";
import { useParams } from "react-router-dom";
import AssignmentDetails from '../Components/AssignmentDeatils';

const AssignmentPage = () => {
  const { id } = useParams();
  return <AssignmentDetails assignmentId={1} />;
};

export default AssignmentPage;