import style from "./Account.module.scss"
import Avatar from "../../ui/Avatar/Avatar";
import Button from "../../ui/Button/Button";
import {Link} from "react-router-dom";

const accData = {
    fio: "Курцев Андрей",
    mo: "ТФОМС"
}

const Account = () => {
    return (
        <div className={style.main}>
            <div className={style.account}>
                <Avatar text={accData.fio}/>
                <div className={style.container}>
                    <p className={style.fio}>{accData.fio}</p>
                    <p className={style.mo}>{accData.mo}</p>
                </div>
            </div>
            <Link to={"/"}>
                <Button text={"Выйти"}/>
            </Link>
        </div>
    )
}

export default Account