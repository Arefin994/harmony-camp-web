import { Outlet } from "react-router";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import app from "../../firebase/firebase.config";
import "./Nav.css";
import Footer from "../Footer/Footer";

const NavBar = () => {
	const auth = getAuth(app);
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);

	const handleUsernameClick = () => {
		setShowDropdown((prevShowDropdown) => !prevShowDropdown);
	};

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

	const handleToggleMode = () => {
		setIsDarkMode((prevMode) => !prevMode);

		// Update the body background color and text color based on the mode
		const body = document.querySelector("body");
		const textElements = document.querySelectorAll(".text-white, .text-dark");

		if (isDarkMode) {
			body.style.backgroundColor = "white";
			textElements.forEach((element) => {
				element.style.color = "black";
			});
		} else {
			body.style.backgroundColor = "black";
			textElements.forEach((element) => {
				element.style.color = "white";
			});
		}
	};

	const isLoggedIn = user !== null;
	const loggedInAs = localStorage.getItem("loged-in-as");

	useEffect(() => {
		if (loggedInAs === "admin") {
			toast.info("Logged in as admin. Login as instructor and students to see other options.", {
				autoClose: 5000,
			});
		}
	}, [loggedInAs]);

	return (
		<div className={isDarkMode ? "dark-mode" : "light-mode"}>
			<ToastContainer />
			{console.log("loggedInAs:", loggedInAs)}
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
						{loggedInAs === "admin" && (
							<>
								<Nav.Link as={Link} to="/see-all-instructors">
									See All Instructors
								</Nav.Link>
								<Nav.Link as={Link} to="/see-all-students">
									See All Students
								</Nav.Link>
							</>
						)}
					</Nav>
					<Navbar.Brand className="mx-auto">
						<Link to="/home" style={{ color: "#2d936c" }}>
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
								<Nav.Link onClick={handleUsernameClick}>
									{user.displayName}
								</Nav.Link>
								{showDropdown && (
									<NavDropdown
										title={user.displayName}
										id="basic-nav-dropdown"
									>
										<NavDropdown.Item onClick={handleSignOut}>
											Sign Out
										</NavDropdown.Item>
									</NavDropdown>
								)}
							</>
						)}
						<Nav.Link onClick={handleToggleMode}>
							{isDarkMode ? "Light Mode" : "Dark Mode"}
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Outlet />
			<Footer></Footer>
		</div>
	);
};

export default NavBar;
