import "./About.css";
import resume from "./Resume Aug2024.pdf";
function About() {
  // const resumeUrl = "/Resume Aug2024.pdf";
  return (
    <div className="AboutContainer">
      <div className="AboutFlex">
        <p className="AboutHead1">About Me</p>
        <p className="AboutPara">
          Hello, I'm Tanisha Rao, and I'm deeply passionate about the world of
          computer science. My heart lies in the creative aspects of technology,
          particularly in designing and development, both on the front end and
          back end. I've embarked on an exciting journey of learning JavaScript
          and its various frameworks, with the aim of crafting innovative
          projects and elevating my skill set to new heights. Additionally, I
          find immense joy in competitive programming, as it serves as a
          playground for my analytical thinking abilities. This combination of
          creative design, web development, and the strategic challenges of
          programming fuels my enthusiasm for the ever-evolving field of
          computer science.
        </p>
        <div className="tech-stack">
          <h2 className="about-head">🚀 Tech Stack</h2>
          <ul className="category-list">
            <li className="category">
              <h3 className="category-head">🎨 Frontend</h3>
              <ul className="item-list">
                <li className="list-item">⚡ React JS</li>
                <li className="list-item">🌐 HTML</li>
                <li className="list-item">🎨 CSS</li>
              </ul>
            </li>
            <li className="category">
              <h3 className="category-head">💻 Backend</h3>
              <ul className="item-list">
                <li className="list-item">🔥 Google Firebase</li>
                <li className="list-item">⚙️ Express JS</li>
                <li className="list-item">🛠️ Node JS</li>
              </ul>
            </li>
            <li className="category">
              <h3 className="category-head">📜 Programming</h3>
              <ul className="item-list">
                <li className="list-item">📜 JavaScript</li>
                <li className="list-item">💡 C++</li>
                <li className="list-item">🐍 Python</li>
              </ul>
            </li>
            <li className="category">
              <h3 className="category-head">📂 Databases</h3>
              <ul className="item-list">
                <li className="list-item">🔥 Google Firebase</li>
                <li className="list-item">🗄️ SQL</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="resumeDiv">
          <button
            className="btnResume"
            onClick={() => window.open(resume, "_blank")}
          >
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
