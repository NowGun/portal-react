import style from "./NavMenu.module.scss"
import Menu from "../../modules/Menu/Menu";
import {Link} from "react-router-dom";
import Button from "../../ui/Button/Button";

const NavMenu = () => {
    return (
        <div className={style.flexColumn}>
            <Menu/>
            <Link to={"/"}>
                <Button text={"Выйти"}/>
            </Link>
        </div>
    )
}

export default NavMenu