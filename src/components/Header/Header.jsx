import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import logo from "../../assets/logo1.png";
import defaultProfilePic from "../../assets/images/user.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

export default function Header() {
  const headerRef = useRef(null);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      setUser(null);
      navigate("/login"); 
      window.location.reload(); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const stickyHeaderFunc = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    };

    window.addEventListener("scroll", stickyHeaderFunc);
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <div className="container nav_wrapper">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="menu">
          <li>
            <NavLink to="/home" className={({ isActive }) => (isActive ? "active_link" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active_link" : "")}>About</NavLink>
          </li>
          <li>
            <NavLink to="/tours" className={({ isActive }) => (isActive ? "active_link" : "")}>Tours</NavLink>
          </li>
        </ul>

        <div className="nav_btns">
          {user ? (
            <div className="profile_dropdown">
              <img
                src={user.photoURL || defaultProfilePic}
                alt="user"
                className="profile_pic"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {isDropdownOpen && (
                <div className="dropdown_menu">
                  <span>Welcome, {user.displayName || user.email}</span>
                  <button className="btn" onClick={handleLogout}>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <>
              <NavLink to="/login">
                <button className="btn primary__btn_active">Login</button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn primary__btn_active">Register</button>
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
