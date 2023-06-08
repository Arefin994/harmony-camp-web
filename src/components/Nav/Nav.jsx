import { Outlet } from "react-router";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Nav.css'

const NavBar = () => {
  // Example user role and login status
  const userRole = "admin"; // Possible values: "admin", "instructor", "student", "guest"
  const isLoggedIn = false; // Possible values: true, false

  return (
    <div>
      <Navbar className="custom-navbar" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {isLoggedIn && userRole === "student" && (
              <>
                <Nav.Link as={Link} to="/all-instructors">
                  All Instructors
                </Nav.Link>
                <Nav.Link as={Link} to="/enrolled-courses">
                  Enrolled Courses
                </Nav.Link>
              </>
            )}
            {isLoggedIn && userRole === "instructor" && (
              <>
                <Nav.Link as={Link} to="/my-courses">
                  My Courses
                </Nav.Link>
                <Nav.Link as={Link} to="/add-new-course">
                  Add New Course
                </Nav.Link>
                <Nav.Link as={Link} to="/remove-course">
                  Remove a Course
                </Nav.Link>
              </>
            )}
            {isLoggedIn && userRole === "admin" && (
              <>
                <Nav.Link as={Link} to="/all-instructors">
                  See All Instructors
                </Nav.Link>
                <Nav.Link as={Link} to="/all-students">
                  See All Students
                </Nav.Link>
              </>
            )}
            {!isLoggedIn && (
              <>
              <Nav.Link as={Link} to="/Home">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/explore">
                  Explore
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
              </>
            )}
          </Nav>
          <Navbar.Brand className="mx-auto">
            <Link to="/" style={{ color: "#2d936c" }}>
              <span className="clr-cstm-1">Harmony</span><span className="text-white">Camp</span>
            </Link>
          </Navbar.Brand>
          <Nav className="ml-auto">
            {!isLoggedIn && (
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/login-admin">
                  Admin
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login-instructor">
                  Instructor
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login-student">
                  Student
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {!isLoggedIn && (
              <NavDropdown title="Signup" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/signup-instructor">
                  Instructor
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/signup-student">
                  Student
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {isLoggedIn && (
              <>
                <Nav.Link as={Link} to="/profile">
                  <img src="profile-pic.jpg" alt="Profile" /> User Name
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default NavBar;
