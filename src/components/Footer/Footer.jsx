import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <footer className="main-footer">
      <img src={assets.logo_no_frame} alt="footer logo" className="logo" />
      <p>&#169; all rights reserved</p>
    </footer>
  );
}

export default Footer;
