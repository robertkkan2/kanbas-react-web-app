import { FaEllipsisV, FaFileExport, FaFileImport, FaFilter, FaSearch } from "react-icons/fa";
import db from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(assignment => assignment.course === courseId);
  const enrollments = db.enrollments.filter(enrollment => enrollment.course === courseId);

	return (
		<div>
			<div className="d-flex justify-content-end align-items-center">
				<button type="button" className="btn btn-light btn-outline-secondary text-nowrap m-1">
					<FaFileImport />
					Import
				</button>
				<div className="dropdown m-1">
					<button
						className="btn btn-light btn-outline-secondary dropdown-toggle"
						type="button"
						id="export-dropdown"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<FaFileExport />
						Export
					</button>
					<ul className="dropdown-menu" aria-labelledby="export-dropdown">
						<li>Action</li>
						<li>Another action</li>
					</ul>
				</div>
				<button type="button" className="btn btn-light btn-outline-secondary m-1">
					<FaEllipsisV />
				</button>
			</div>

			<div className="row">
				<div className="mb-3 col-6">
					<label for="search-student" className="form-label">
						<b>Student Names</b>
					</label>
					<div className="input-group">
						<span className="input-group-text col-1">
							<FaSearch />
						</span>
						<input
							type="text"
							className="form-control"
							id="search-student"
							placeholder="Search Students"
						/>
					</div>
				</div>

				<div className="mb-3 col-6">
					<label for="search-assignments" className="form-label">
						<b>Assignment Names</b>
					</label>
					<div className="input-group">
						<span className="input-group-text col-1">
							<FaSearch />
						</span>
						<input
							type="text"
							className="form-control"
							id="search-assignments"
							placeholder="Search Assignments"
						/>
					</div>
				</div>
				<div>
					<button type="button" className="btn btn-light btn-outline-secondary text-nowrap mb-3">
						<FaFilter />
						Apply Filters
					</button>
				</div>
			</div>
			<div className="table-responsive">
        <table className="table table-bordered table-striped text-center align-middle">
          <thead>
            <tr>
              <th>Student Name</th>
              {assignments.map((assignment, index) => (
                <th key={index}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {enrollments.map((enrollment, index) => {
              const user = db.users.find(user => user._id === enrollment.user);
              return (
                <tr key={index}>
                  <td>
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      grade => grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    return <td key={assignment._id}>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;