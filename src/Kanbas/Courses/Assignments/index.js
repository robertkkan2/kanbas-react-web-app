import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import AssignHeader from "./AssignHeader";
import {
  FaBook,
  FaCaretDown,
  FaCheckCircle,
  FaEllipsisV,
  FaGripVertical,
  FaPlus,
} from "react-icons/fa";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const courseAssignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      <AssignHeader />
      <div className="list-group pt-2 modules">
        <HeaderSection />
        {courseAssignments.map((assignment) => (
          <AssignmentItem key={assignment._id} assignment={assignment} courseId={courseId} />
        ))}
      </div>
    </div>
  );
}

const HeaderSection = () => (
  <div className="list-group-item list-group-item-dark py-3 d-flex flex-row align-items-center">
    <FaGripVertical />
    <FaCaretDown />
    ASSIGNMENTS
    <div className="ms-auto">
      <button
        type="button"
        className="btn btn-light btn-outline-secondary rounded-pill"
      >
        <FaPlus /> 40% of Total
      </button>
      <FaCheckCircle className="text-success" />
      <FaCaretDown />
      <FaPlus />
      <FaEllipsisV />
    </div>
  </div>
);

const AssignmentItem = ({ assignment, courseId }) => {
  const { _id, title } = assignment; 
  return (
    <Link to={`/Kanbas/Courses/${courseId}/Assignments/${_id}`} className="list-group-item">
      <div className="row align-items-center">
        <div className="col-auto">
          <span className="pe-3">
            <FaGripVertical />
          </span>
          <FaBook className="text-success" />
        </div>
        <div className="col">
          {title}
          <div>
            <small className="text-secondary">
              <b>Due </b>
              {assignment.dueDate} at {assignment.dueTime} | {assignment.points} pts
            </small>
          </div>
        </div>
        <div className="col-auto">
          <FaCheckCircle className="text-success" />
          <FaEllipsisV />
        </div>
      </div>
    </Link>
  );
}

export default Assignments;

