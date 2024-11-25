import userInfo from "../../data/data";
import "../Home/Home.css";
import { useTranslation } from "react-i18next"; 


const Home = () => {
  const { t } = useTranslation("home");
  return (
    <div className="Home-container">
      <div className="Home-container-phrase">
        <p>{t("magicPhrase")}</p>
      </div>

      <div className="Home-container-description1">
        <h1>
          Hey, I'm <span className="UserInfo">{userInfo.firstName} </span> a{" "}
          <span className="userInfo">{userInfo.role}</span>{" "}
        </h1>
      </div>

      <div className="Home-container-description2">

        {t("description")}
      </div>

      <div className="Home-container-routes">
        <a
          href="https://www.linkedin.com/in/pablo-molina-p%C3%A9rez-858141207/"
          className="circle-link"
        >
          <div className="circle">
            <div className="circle-image">
              <img className="circle-image-c" src="/figures/c.png" alt="" />
            </div>
          </div>
        </a>
        <a
          href="https://github.com/PabloMolina23?tab=repositories"
          className="circle-link"
        >
          <div className="circle">
            <div className="circle-image">
              <img className="circle-image-b" src="/figures/b.png" alt="" />
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
              <img className="circle-image-a" src="/figures/a.png" alt="" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
