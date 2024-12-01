import "./Home.css";
// import GitHubCalendar from "react-github-calendar";
function Home() {
  return (
    <div className="HomeContainer">
      <div className="HomeFlex">
        <div className="HomeRow1">
          <p className="text14pxnormal">Let's Build Something Together</p>
          <span className="text50pxbold">
            Hi, I'm <span className="violet">Tanisha Rao</span>
          </span>{" "}
          <p className="text45pxbold">A Full Stack Web Developer</p>
          <p className="text16pxnormal">
            I'm focused on building responsive front-end web applications while
            learning back-end technologies.
          </p>
          <button className="VioletBtn">Hire Me!</button>
        </div>
        <div className="chart1">
          <p className="text22pxnormal fontStyle1">My Programming Garden</p>
          <img
            src="https://ghchart.rshah.org/7c46e1/tanisharao2002"
            alt="GitHub Contributions"
            className="chart-container"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
