import "./Footer.css";
import github from "./github.png";
import linkedin from "./linkedin.png";
function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterFlex">
        <p>Made with ❤️ by Tanisha Rao</p>
        <p>
          {" "}
          <a href="https://github.com/Tanisharao2002">
            <img src={github} className="footerImg" />
          </a>
          {" "}
          <a href="https://www.linkedin.com/in/tanisha911/">
            <img src={linkedin} className="footerImg" />
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
