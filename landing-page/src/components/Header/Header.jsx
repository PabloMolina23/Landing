import "./Header.css"

import userInfo from '../../data/data';

const Header = ()=>{



    return (
    <div className="Header-container">
        <div className="Header-container-left">
            <h2 className="Header-Container-left-name">{userInfo.firstName} {userInfo.lastName1} {userInfo.character} </h2>
        </div>

        <div className="Header-container-right">
            <h2 className="Header-container-right-words"><a href="">Home</a></h2>
            <h2 className="Header-container-right-words"><a href="">About</a></h2>
            <h2 className="Header-container-right-words"><a href="">Projects</a></h2>
            <h2 className="Header-container-right-words"><a href="">Skills</a></h2>
            <h2 className="Header-container-right-words"><a href="">Contact</a></h2>
        </div>



    </div>
    )
}

export default Header;