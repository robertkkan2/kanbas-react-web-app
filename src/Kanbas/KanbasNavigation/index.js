import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
	FaUserCircle,
	FaTachometerAlt,
	FaBook,
	FaInbox,
	FaClock,
	FaDesktop,
	FaArrowAltCircleRight,
	FaQuestionCircle,
	FaCalendarAlt,
} from "react-icons/fa";
import logo from "../../Images/northeastern-logo.png";

function KanbasNavigation() {
	const links = [
		{ name: "Account", icon: <FaUserCircle className="fs-1 text-secondary" /> },
		{ name: "Dashboard", icon: <FaTachometerAlt className="fs-3" /> },
		{ name: "Courses", icon: <FaBook className="fs-3" /> },
		{ name: "Calendar", icon: <FaCalendarAlt className="fs-3" /> },
		{ name: "Inbox", icon: <FaInbox className="fs-3" /> },
		{ name: "History", icon: <FaClock className="fs-3" /> },
		{ name: "Studio", icon: <FaDesktop className="fs-3" /> },
		{ name: "Commons", icon: <FaArrowAltCircleRight className="fs-3" /> },
		{ name: "Help", icon: <FaQuestionCircle className="fs-3" /> },
	];

	const { pathname } = useLocation();
	return (
		<div className="kanbas-navigation list-group">
			<img src={logo} class="list-group-item p-0" alt="Northeastern Logo" />
			{links.map((link, index) => (
				<Link
					key={index}
					to={`/Kanbas/${link.name}`}
					className={`list-group-item text-center  ${pathname.includes(link.name) && "active"}`}
				>
					<div className="link-icon">{link.icon}</div>
					<div className="link-name">{link.name}</div>
				</Link>
			))}
		</div>
	);
}
export default KanbasNavigation;