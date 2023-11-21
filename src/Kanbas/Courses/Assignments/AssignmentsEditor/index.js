import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, selectAssignment } from "../assignmentsReducer";
import * as client from "../client.js";

function AssignmentEditor() {
	const { courseId, assignmentId } = useParams();
	const isNewAssignment = assignmentId === "AssignmentsEditor";
	const assignment = useSelector((state) => state.assignmentsReducer.assignment);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleSave = async () => {
		client.createAssignments(courseId, assignment).then((assignment) => {
			dispatch(addAssignment({ ...assignment, course: courseId }));
		});
		navigate(`/Kanbas/Courses/${courseId}/Assignments`);
	};

	const handleUpdate = async () => {
		client.updateAssignment(assignment).then(() => {
			dispatch(updateAssignment(assignment));
		});
		navigate(`/Kanbas/Courses/${courseId}/Assignments`);
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
			<form>
				<div class="mb-3">
					<label for="assignment-name" class="form-label">
						Assignment Name
					</label>
					<input
						id="assignment-name"
						value={assignment.title}
						class="form-control"
						onChange={(e) => dispatch(selectAssignment({ ...assignment, title: e.target.value }))}
					/>
				</div>
				<div class="mb-3">
					<textarea class="form-control" rows="4">
						This assignment describes how to install the developmet environment for creating and
						working with Web applications we will be developing this semester. We will add new
						content every week, pushing the code to a GitHub Source repository, and then deploying
						the content to a remote server hosted on Netlify.
					</textarea>
				</div>

				<div class="form-group row justify-content-center mb-3">
					<label for="assign" class="d-flex col-auto col-form-label justify-content-end w-25">
						Assign
					</label>
					<div class="col-6">
						<div class="border p-4">
							<form>
								<div class="mb-3">
									<label for="due" class="form-label">
										<b>Due</b>
									</label>
									<input
										type="datetime-local"
										class="form-control"
										id="due"
										value="2023-09-18T23:19"
									/>
								</div>
								<div class="row">
									<div class="mb-3 col-6">
										<label for="available-from" class="form-label">
											<b>Available From</b>
										</label>
										<input
											type="datetime-local"
											class="form-control"
											id="available-from"
											value="2023-09-06T23:19"
										/>
									</div>
									<div class="mb-3 col-6">
										<label for="until" class="form-label">
											<b>Until</b>
										</label>
										<input type="datetime-local" class="form-control" id="until" />
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<hr />

				<div className="d-flex flex-row">
					<div className="ms-auto">
						<Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
							Cancel
						</Link>
						<button
							onClick={isNewAssignment ? handleSave : handleUpdate}
							className="btn btn-success m-2"
						>
							Save
						</button>
					</div>
				</div>
				<hr />
			</form>
		</div>
	);
}

export default AssignmentEditor;

