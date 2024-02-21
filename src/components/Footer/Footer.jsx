import EmailBox from "../EmailBox/EmailBox";
import "./Footer.css";
import { Link } from "react-scroll";
export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="container">
          <div className="footer-container">
            <h3>سرمایه امروز رو دریافت کن</h3>
            <EmailBox />
            <ul>
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <li>چه کار میکنیم</li>
              </Link>
              <Link to="hiw-wrapper" spy={true} smooth={true} offset={100}>
                <li>چگونه کار میکند</li>
              </Link>
              <Link to="wwi-wrapper" spy={true} smooth={true}>
                <li>روی چه کسی سرمایه گذاری میکنیم</li>
              </Link>
              <Link to="test-wrapper" spy={true} smooth={true} offset={100}>
                <li>رضایت مشتریان</li>
              </Link>
            </ul>
            <div className="copy-right">طراحی شده با ❤ توسط بهنام</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
