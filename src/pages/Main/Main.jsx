import style from "./Main.module.scss"
import Header from "../../components/Header/Header";
import NavMenu from "../../components/NavMenu/NavMenu";
import News from "../News/News";
import {Outlet} from "react-router-dom";


const Main = () => {
    return (
        <div className={style.main}>
            <Header />

            <div className={style.flexRow}>
                <NavMenu/>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Main