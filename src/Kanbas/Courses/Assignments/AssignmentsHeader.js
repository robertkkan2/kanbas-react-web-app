import { FaEllipsisV, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { selectAssignment } from "./assignmentsReducer";
import { useDispatch } from "react-redux";

const AssignmentsHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateNewAssignment = () => {
    dispatch(selectAssignment({ title: "New Assignment Title" }));
    navigate(`./AssignmentsEditor`);
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="form-group w-25">
          <input type="text" className="form-control" placeholder="Search for Assignment" />
        </div>
        <div className="d-flex">
          <button type="button" className="btn btn-light btn-outline-secondary text-nowrap m-1">
            <FaPlus />
            Group
          </button>

          <button onClick={handleCreateNewAssignment} type="button" className="btn btn-danger m-1">
            <FaPlus />
            Assignment
          </button>

          <button type="button" className="btn btn-light btn-outline-secondary m-1">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default AssignmentsHeader;
