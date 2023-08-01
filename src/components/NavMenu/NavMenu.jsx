import style from "./NavMenu.module.scss"
import Menu from "../../modules/Menu/Menu";
import {Link} from "react-router-dom";
import Button from "../../ui/Button/Button";
import Account from "../../modules/Account/Account";

const NavMenu = () => {
    return (
        <div className={style.flexColumn}>
            <Menu/>
            <Account />
        </div>
    )
}

export default NavMenu