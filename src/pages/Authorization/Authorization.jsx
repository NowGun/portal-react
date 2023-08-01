import style from "./Authorization.module.scss"
import {Link} from "react-router-dom";
import Button from "../../ui/Button/Button";

const Authorization = () => {

    return (
        <div>
            <Link to="/main">
                <Button text="Войти" />
            </Link>
        </div>
    )
}

export default Authorization