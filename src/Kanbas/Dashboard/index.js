import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { FaBook } from "react-icons/fa";

function Dashboard() {
	const courses = db.courses;
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
			</div>
		</div>
	);
}
export default Dashboard;