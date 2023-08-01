import style from "./Header.module.scss"
import Button from "../../ui/Button/Button";
import HoverSupport from "../../modules/HoverSupport/HoverSupport";

const Header = () => {
    return (
        <div className={style.header}>
            <HoverSupport/>
        </div>
    )
}

export default Header