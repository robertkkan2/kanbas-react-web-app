import { FaBars, FaGlasses } from "react-icons/fa";
import db from "../../Kanbas/Database";
import "./index.css";
import CourseNavigation from "./CourseNavigation.js";
import { Link, Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import CourseHeader from "./CourseHeader";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentsEditor";
import Grades from "./Grades";

function Courses() {
	const { pathname } = useLocation();
	const { courseId } = useParams();
	const course = db.courses.find((course) => course._id === courseId);
	return (
		<div className="container-fluid">
			<div className="courses-content">
				<CourseHeader
					courseId={courseId}
					courseName={course.name}
					activePage={decodeURIComponent(pathname.substring(pathname.lastIndexOf("/") + 1))}
				/>
				<div className="row">
					<div className="col-2 col-lg-2 d-none d-md-block">
						<CourseNavigation />
					</div>
					<div className="col-10">
						<Routes>
							<Route path="/" element={<Navigate to="Home" />} />
							<Route path="Home" element={<Home />} />
							<Route path="Modules" element={<Modules />} />
							<Route path="Assignments" element={<Assignments />} />
							<Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
							<Route path="Grades" element={<Grades />} />
						</Routes>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Courses;
