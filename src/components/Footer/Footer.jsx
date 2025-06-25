import "./Footer.css";
import logo from "../../assets/logo1.png";
import {
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__wrapper">
        {/* Column 1: Logo and description */}
        <div className="footer__col">
          <img src={logo} alt="Logo" className="footer__logo" />
          <p className="footer__desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.
          </p>
          <div className="footer__socials">
            <FaYoutube />
            <FaTwitter />
            <FaFacebookF />
            <FaInstagram />
          </div>
          <p className="footer__copyright">
            © 2024 <a href="#">Vipin_uidesigns</a>. All Rights Reserved
          </p>
        </div>

        {/* Column 2: Discover */}
        <div className="footer__col">
          <h4>Discover</h4>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Tours</li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li>Gallery</li>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer__col">
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li><FaMapMarkerAlt /> Address: Lorem</li>
            <li><FaEnvelope /> Email: xyz@mail.com</li>
            <li><FaPhoneAlt /> Phone: 00022200222</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
