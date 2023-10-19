import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Progress Reports (EAB Navigate)",
    "Settings",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="list-group courses-navigation w-100">
      {links.map((link, index) => {
        const linkPath = `/Kanbas/Courses/${courseId}/${encodeURIComponent(link)}`;
        return (
          <Link
            key={index}
            to={linkPath}
            className={`list-group-item ${pathname === linkPath && "active"}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}

export default CourseNavigation;
