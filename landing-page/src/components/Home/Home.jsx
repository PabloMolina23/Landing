import userInfo from "../../data/data";
import "../Home/Home.css";


const Home = () => {
  return (
    <div className="Home-container">
      <div className="Home-container-phrase">
        <p>Let’s make magic happen!</p>
      </div>

      <div className="Home-container-description1">
        <h1>
          Hey, I'm <span className="UserInfo">{userInfo.firstName} </span> a{" "}
          <span className="userInfo">{userInfo.role}</span>{" "}
        </h1>
      </div>

      <div className="Home-container-description2">
        "I’m passionate about technology and aim to become a Full Stack
        Developer. My goal is to start as a Junior Developer, learn, and grow in
        the tech field."
      </div>

      <div className="Home-container-routes">
        <a
          href="https://www.linkedin.com/in/pablo-molina-p%C3%A9rez-858141207/"
          className="circle-link"
        >
          <div className="circle">
            <div className="circle-image">
              <img src="/figures/a.png" alt="" />
            </div>
          </div>
        </a>
        <a
          href="https://github.com/PabloMolina23?tab=repositories"
          className="circle-link"
        >
          <div className="circle">
            <div className="circle-image">
              <img src="/figures/a.png" alt="" />
            </div>
          </div>
        </a>
        <a
          href="/PABLO_MOLINA_CV.pdf"
          className="circle-link"
          download={"PABLO_MOLINA_CV"}
        >
          <div className="circle">
            <div className="circle-image">
              <img src="/figures/b.png" alt="" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
