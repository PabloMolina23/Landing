import "./Header.css"
import { useTranslation } from "react-i18next";

import userInfo from '../../data/data';

const Header = ()=>{
    const { t , i18n} = useTranslation(["menu"]);
   
        const changeLanguage = () => {
            if (i18n.language === "es") {
                i18n.changeLanguage("en"); 
            } else {
                i18n.changeLanguage("es"); 
            }
        };
        
    



    return (
    <div className="Header-container">
        <div className="Header-container-left">
            <h2 className="Header-Container-left-name">{userInfo.firstName} {userInfo.lastName1} {userInfo.character} </h2>
        </div>

        <div className="Header-container-right">
            <h2 className="Header-container-right-words"><a href="">{t("home")}</a></h2>
            <h2 className="Header-container-right-words"><a href="">{t("about")}</a></h2>
            <h2 className="Header-container-right-words"><a href="">{t("projects")}</a></h2>
            <h2 className="Header-container-right-words"><a href="">{t("skills")}</a></h2>
            <h2 className="Header-container-right-words"><a href="">{t("contact")}</a></h2>
            <button onClick={changeLanguage}>ES/EN</button>
        </div>



    </div>
    )
}

export default Header;