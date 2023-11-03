import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { FaBook } from "react-icons/fa";
import { useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse }) {
	return (
		<div className="my-container-fluid">
			<div className="dashboard-content">
				<div className="dashboard-heading col-12">
					<h1 className="display-4">Dashboard</h1>
					<hr />
				</div>
				<div className="published-courses-heading ">
					<h1 className="display-6">Published Courses({Object.keys(courses).length})</h1>
					<hr />
				</div>
				<div className="row">
					<div className="row courses-cards row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4">
						{courses.map((course) => {
							const startDate = new Date(course.startDate);

							const isFallStart = (date) => {
								const startDate = new Date("2023-09-01");
								const endDate = new Date("2023-12-31");
								return date >= startDate && date <= endDate;
							};
							return (
								<div className="col">
									<Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
										<div className="card">
											<div className="card-header bg-info"></div>
											<div className="card-body">
												<h5 className="card-title text-primary text-truncate">{course.name}</h5>
												<p className="card-text text-secondary">
													{course.number}.{course._id}.2023
												</p>
												<p className="card-text">
													<small className="text-muted text-truncate">
														{startDate.getFullYear()} {isFallStart(startDate) ? "Fall" : "Spring"}{" "}
														Semester Full Term
													</small>
												</p>
												<Link key={`link-${course._id}`}>
													<FaBook className="fs-6 text-secondary" />
												</Link>
											</div>
										</div>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
				<div className="my-5">
					<div className="list-group w-50">
						<div className="list-group-item d-flex flex-row align-items-center">
							<form className="flex-fill">
								<input
									value={course.name}
									className="form-control"
									onChange={(e) => setCourse({ ...course, name: e.target.value })}
								/>
								<input
									value={course.number}
									className="form-control"
									onChange={(e) => setCourse({ ...course, number: e.target.value })}
								/>
								<input
									value={course.startDate}
									className="form-control"
									type="date"
									onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
								/>
								<input
									value={course.endDate}
									className="form-control"
									type="date"
									onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
								/>
							</form>
							<div className="ms-auto">
								<button onClick={addNewCourse} className="btn btn-success">
									Add
								</button>
								<button onClick={updateCourse} className="btn btn-primary">
									Update
								</button>
							</div>
						</div>

						{courses.map((course) => (
							<div className="list-group-item">
								<Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
									{course.name}
								</Link>
								<div className="float-end">
									<button
										className="btn btn-warning me-2"
										onClick={(event) => {
											event.preventDefault();
											setCourse(course);
										}}
									>
										Edit
									</button>
									<button
										className="btn btn-danger"
										onClick={(event) => {
											event.preventDefault();
											deleteCourse(course._id);
										}}
									>
										Delete
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
export default Dashboard;