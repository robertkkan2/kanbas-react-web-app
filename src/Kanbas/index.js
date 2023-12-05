import { Navigate, Route, Routes } from "react-router";
import KanbasNavigation from "./KanbasNavigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Account from "../users/account";
import Signin from "../users/signin";
import UserTable from "../users/table";
import Signup from "../users/signup";

function Kanbas() {
	const [courses, setCourses] = useState([]);
	const [course, setCourse] = useState({
		name: "New Course",
		number: "New Number",
		startDate: "2023-09-10",
		endDate: "2023-12-15",
	});
	const API_BASE = process.env.REACT_APP_API_BASE;
	const URL = `${API_BASE}/courses`;
	const addCourse = async () => {
		const response = await axios.post(URL, course);

		setCourses([...courses, response.data]);
		setCourse({ name: "" });
	};
	const findAllCourses = async () => {
		const response = await axios.get(URL);
		setCourses(response.data);
	};
	useEffect(() => {
		findAllCourses();
	}, []);

	const deleteCourse = async (courseId) => {
		const response = await axios.delete(`${URL}/${course._id}`);
		setCourses(courses.filter((course) => course._id !== courseId));
	};
	const updateCourse = async () => {
		const response = await axios.put(`${URL}/${course._id}`, course);
		setCourses(
			courses.map((c) => {
				if (c._id === course._id) {
					return course;
				} else {
					return c;
				}
			})
		);
	};
	return (
		<Provider store={store}>
			<div className="d-flex">
				<KanbasNavigation />
				<Routes>
					<Route path="/" element={<Navigate to="Dashboard" />} />
					<Route path="signin" element={<Signin />} />
					<Route path="signup" element={<Signup />} />
					<Route path="account" element={<Account />} />
					<Route path="/account/:id" element={<Account />} />
					<Route path="/admin/users" element={<UserTable />} />
					<Route
						path="Dashboard"
						element={
							<Dashboard
								courses={courses}
								course={course}
								setCourse={setCourse}
								addNewCourse={addCourse}
								deleteCourse={deleteCourse}
								updateCourse={updateCourse}
							/>
						}
					/>
					<Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
				</Routes>
			</div>
		</Provider>
	);
}
export default Kanbas;