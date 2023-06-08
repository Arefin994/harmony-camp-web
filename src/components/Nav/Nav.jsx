import { Outlet } from "react-router";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import app from "../../firebase/firebase.config";
import "./Nav.css";

const NavBar = () => {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        localStorage.removeItem("loged-in-as"); // Remove 'loged-in-as' from local storage on sign out
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const isLoggedIn = user !== null;
  const loggedInAs = localStorage.getItem("loged-in-as");

  return (
    <div>
      <Navbar className="custom-navbar" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {isLoggedIn && loggedInAs === "student" && (
              <>
                <Nav.Link as={Link} to="/see-all-instructors">
                  See All Instructors
                </Nav.Link>
                <Nav.Link as={Link} to="/see-all-courses">
                  See All Courses
                </Nav.Link>
                <Nav.Link as={Link} to="/enrolled-courses">
                  Enrolled Courses
                </Nav.Link>
              </>
            )}
            {isLoggedIn && loggedInAs === "instructor" && (
              <>
                <Nav.Link as={Link} to="/my-courses">
                  My Courses
                </Nav.Link>
                <Nav.Link as={Link} to="/add-new-course">
                  Add New Course
                </Nav.Link>
              </>
            )}
            {isLoggedIn && loggedInAs === "admin" && (
              <>
                <Nav.Link as={Link} to="/see-all-instructors">
                  See All Instructors
                </Nav.Link>
                <Nav.Link as={Link} to="/see-all-students">
                  See All Students
                </Nav.Link>
              </>
            )}
            {/* Other navigation links */}
          </Nav>
          <Navbar.Brand className="mx-auto">
            <Link to="/" style={{ color: "#2d936c" }}>
              <span className="clr-cstm-1">Harmony</span>
              <span className="text-white">Camp</span>
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
                <Nav.Link onClick={handleSignOut}>Sign Out</Nav.Link>
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
