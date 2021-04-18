import React from 'react';
import './SideBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faNotesMedical, faHome } from '@fortawesome/free-solid-svg-icons';



const SideBar = () => {
    
    return (
        <div id="wrapper">


            <div class="bg-dark border-right" id="sidebar-wrapper">
                <div class="bg-dark list-group list-group-flush">
                    <a href="/" class="list-group-item list-group-item-action text-white bg-dark"><FontAwesomeIcon icon={faHome} /> <span>Home</span></a>
                    <a href="/dashboard" class="list-group-item list-group-item-action text-white bg-dark"><FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span></a>
                    <a href="/appointment" class="list-group-item list-group-item-action text-white bg-dark"><FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span></a>
                    <a href="/addservice" class="list-group-item list-group-item-action text-white bg-dark"><FontAwesomeIcon icon={faNotesMedical} /> <span>Add Service</span></a>
                    <a href="#" class="list-group-item list-group-item-action text-white bg-dark"><FontAwesomeIcon icon={faCog} /> <span>Setting</span></a>
                    <a href="#" class="list-group-item list-group-item-action text-white bg-dark"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></a>

                </div>
            </div>



            {/* <div id="page-content-wrapper">

                <nav class="navbar navbar-expand-lg navbar-dark border-bottom">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link ms-3 text-primary" href="/"><h5>Home</h5></a>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div> */}
        </div>




















        // <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "auto" }}>
        //     <ul className="list-unstyled">
        //         <li>
        //             <Link to="/doctor/dashboard" className="text-white" style={textStyle}>
        //                 <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="/appointment" className="text-white" style={textStyle}>
        //                 <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="/doctor/patients" className="text-white" style={textStyle}>
        //                 <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="/doctor/prescriptions" className="text-white" style={textStyle}>
        //                 <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="/addService" className="text-white" style={textStyle}>
        //                 <FontAwesomeIcon icon={faNotesMedical} /> <span>Add Service</span>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link to="/doctor/setting" className="text-white" style={textStyle}>
        //                 <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
        //             </Link>
        //         </li>
        //     </ul>
        //     <div>
        //         <Link to="/" className="text-white" style={textStyle}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
        //     </div>
        // </div>
    );
};

export default SideBar;