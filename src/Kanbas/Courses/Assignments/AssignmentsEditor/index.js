import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addAssignment, updateAssignment, selectAssignment } from '../assignmentsReducer';
import { FaCheckCircle, FaEllipsisV } from 'react-icons/fa';

function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const isNewAssignment = assignmentId === 'AssignmentsEditor';
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSave = () => {
    if (isNewAssignment) {
      dispatch(addAssignment({ ...assignment, course: courseId }));
    } else {
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    dispatch(selectAssignment({ ...assignment, [id]: value }));
  };

  return (
    <div>
      <div className="d-flex justify-content-end align-items-center">
        <div className="text-success pe-3 d-flex align-items-center">
          <FaCheckCircle />
          Published
        </div>
        <button type="button" className="btn btn-light btn-outline-secondary">
          <FaEllipsisV />
        </button>
      </div>
      <hr />
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Assignment Name
          </label>
          <input
            id="title"
            value={assignment.title || ''}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            className="form-control"
            rows="4"
            value={assignment.description || ''}
            onChange={handleChange}
          />
        </div>
        {/* ... Other form elements ... */}
        
        <div className="d-flex flex-row">
          <div className="ms-auto">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
              Cancel
            </Link>
            <button
              type="button"
              onClick={handleSave}
              className="btn btn-success m-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AssignmentEditor;
