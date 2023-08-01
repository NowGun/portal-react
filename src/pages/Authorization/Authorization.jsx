import style from "./Authorization.module.scss"
import {Link} from "react-router-dom";
import Button from "../../ui/Button/Button";

const Authorization = () => {

    return (
        <Link to="/main">
            <Button text="Войти" size={"large"} type={"primary"}/>
        </Link>
    )
}

export default Authorization