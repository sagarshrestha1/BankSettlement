import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    return <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-start align-items-center pl-5">

            <a href="/dashboard" className="navbar-brand d-flex justify-content-center align-items-center"><img src="/images/logoo0.png" className="image-fluid"></img></a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupport"
                aria-controls="navbarSupport"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon bg-light"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end p-2" id="navbarSupport">
                <ul className="navbar-nav">
                    <li className="nav-item" style={{
                        padding: '20px'
                    }}>
                        <FontAwesomeIcon icon={faBell} size="2x" style={{ color: 'white' }} />
                    </li>
                    <li className="nav-item dropdown" style={{
                        padding: '10px'
                    }}>
                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><FontAwesomeIcon icon={faUserCircle} size="2x" style={{ color: 'white' }}></FontAwesomeIcon></a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Change Password</a></li>
                            <li><a className="dropdown-item" href="#">Log Out</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
}
export default NavBar;