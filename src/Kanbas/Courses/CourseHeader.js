import { FaBars, FaGlasses } from "react-icons/fa";
import { Link } from "react-router-dom";

const CourseHeader = ({ courseId, courseName, activePage }) => (
	<>
		<div className="row courses-heading d-none d-sm-flex">
			<div className="col-1">
				<FaBars className="fs-3 text-danger" />
			</div>
			<div className="col-9">
				<nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
					<ol class="breadcrumb fs-5">
						<li class="breadcrumb-item">
							<Link key={courseId} to="#" className="text-danger">
								{courseName}
							</Link>
						</li>
						<li class="breadcrumb-item active" aria-current="page">
							{activePage}
						</li>
					</ol>
				</nav>
			</div>
			<div class="col-2">
				<button
					type="button"
					class="btn btn-light btn-outline-secondary text-nowrap d-flex align-items-center"
				>
					<FaGlasses />
					Student View
				</button>
			</div>
			<hr />
		</div>
	</>
);

export default CourseHeader;