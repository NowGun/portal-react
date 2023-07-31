import style from "./NavMenu.module.scss"
import Menu from "../../modules/Menu/Menu";

const NavMenu = () => {
    return (
        <div className={style.flexColumn}>
            <Menu/>
        </div>
    )
}

export default NavMenu