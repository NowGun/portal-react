import style from "./Header.module.scss"
import Button from "../../ui/Button/Button";
import HoverSupport from "../../modules/HoverSupport/HoverSupport";
import YamedSelectApp from "../../modules/YamedSelectApp/YamedSelectApp";

const Header = () => {
    return (
        <div className={style.header}>
            <YamedSelectApp />
            <HoverSupport/>
        </div>
    )
}

export default Header