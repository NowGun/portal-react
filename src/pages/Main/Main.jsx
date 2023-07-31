import style from "./Main.module.scss"
import Header from "../../components/Header/Header";
import NavMenu from "../../components/NavMenu/NavMenu";
import News from "../../components/Layouts/News/News";

const Main = () => {
    return (
        <div className={style.main}>
            <Header />

            <div className={style.flexRow}>
                <NavMenu/>
                <News/>
            </div>
        </div>
    )
}

export default Main