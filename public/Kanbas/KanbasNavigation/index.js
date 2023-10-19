import React from 'react';
import { Link } from 'react-router-dom';

const KanbasNavigation = () => {
    return (
        <div className="container-fluid flex-column">
            <div className="row d-flex align-items-center justify-content-end w-100">
                <Link to="/Kanbas/Home">
                    <i className="fas fa-times w-auto text-secondary"></i>
                </Link>
            </div>

            <div className="row list-group small-kanbas-navigation d-sm-flex">
                <Link to="/Kanbas/Dashboard" className="list-group-item text-start p-2">
                    <i className="fas fa-tachometer-alt mx-auto mb-2"></i>
                    <span className="p-0">Dashboard</span>
                </Link>
                <Link to="/Kanbas/Account" className="list-group-item text-start p-2">
                    <i className="fas fa-user-circle text-secondary mx-auto mb-2"></i>
                    <span>Account</span>
                </Link>
                <Link to="/Kanbas/Courses" className="list-group-item text-start p-2 active">
                    <i className="fas fa-book mx-auto mb-2"></i>
                    <span>Courses</span>
                </Link>
                <Link to="/Kanbas/Calendar" className="list-group-item text-start p-2">
                    <i className="fas fa-calendar-alt mx-auto mb-2"></i>
                    <span>Calendar</span>
                </Link>
                {/* Remaining links can be added similarly */}
            </div>
        </div>
    );
};

export default KanbasNavigation;
