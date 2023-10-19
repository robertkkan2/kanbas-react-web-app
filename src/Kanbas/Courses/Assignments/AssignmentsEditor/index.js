import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function AssignmentEditor() {
	const { assignmentId } = useParams();
	const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);

	const { courseId } = useParams();
	const navigate = useNavigate();
	const handleSave = () => {
		console.log("Actually saving assignment TBD in later assignments");
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
					<input type="text" class="form-control" id="assignment-name" value={assignment.title} />
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
					<label for="points" class="d-flex col-auto col-form-label justify-content-end w-25">
						Points
					</label>
					<div class="col-6">
						<input type="number" class="form-control" id="points" value="100" />
					</div>
				</div>
				<div class="form-group row justify-content-center mb-3">
					<label
						for="assignment-group"
						class="d-flex col-auto col-form-label justify-content-end w-25"
					>
						Assignment Group
					</label>
					<div class="col-6">
						<select class="form-select" id="assignment-group">
							<option value="assignment">Assignment</option>
							<option value="project">Project</option>
							<option value="quiz">Quiz</option>
							<option value="exam">Exam</option>
						</select>
					</div>
				</div>
				<div class="form-group row justify-content-center mb-3">
					<label
						for="display-grade"
						class="d-flex col-auto col-form-label justify-content-end w-25"
					>
						Display Grade as
					</label>
					<div class="col-6">
						<select class="form-select" id="display-grade">
							<option value="percentage">Percentage</option>
						</select>
					</div>
				</div>
				<div class="form-check d-flex justify-content-center mb-3">
					<input class="form-check-input" type="checkbox" id="count-to-final-grade" />
					<label class="form-check-label ps-2" for="count-to-final-grade">
						Do not count this this assignment towards the final grade
					</label>
				</div>
				<div class="form-group row justify-content-center mb-3">
					<label
						for="submission-type"
						class="d-flex col-auto col-form-label justify-content-end w-25"
					>
						Submission Type
					</label>
					<div class="col-6">
						<div class="border p-4">
							<form>
								<select class="form-select" id="display-grade">
									<option value="percentage">Online</option>
								</select>
								<div class="form-group">
									<label for="online-entry-options" class="py-2">
										<b> Online Entry Options </b>
									</label>
									<div>
										<input type="checkbox" id="text-entry" />
										<label class="entry-options p-1" for="text-entry">
											Text Entry
										</label>
									</div>
									<div>
										<input type="checkbox" id="website-url" />
										<label class="entry-options p-1" for="website-url">
											Website URL
										</label>
									</div>
									<div>
										<input type="checkbox" id="media-recordings" />
										<label class="entry-options p-1" for="media-recordings">
											Media Recordings
										</label>
									</div>
									<div>
										<input type="checkbox" id="student-annotation" />
										<label class="entry-options p-1" for="student-annotation">
											Student Annotations
										</label>
									</div>
									<div>
										<input type="checkbox" id="file-uploads" />
										<label class="entry-options p-1" for="file-uploads">
											File Uploads
										</label>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div class="form-group row justify-content-center mb-3">
					<label for="assign" class="d-flex col-auto col-form-label justify-content-end w-25">
						Assign
					</label>
					<div class="col-6">
						<div class="border p-4">
							<form>
								<div class="mb-3">
									<label for="assign-to" class="form-label">
										<b>Assign to</b>
									</label>
									<input type="text" class="form-control" id="assign-to" value="Everyone" />
								</div>
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
						<button onClick={handleSave} className="btn btn-success m-2">
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
