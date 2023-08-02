import style from "./Authorization.module.scss"
import FormAuth from "../../components/FormAuth/FormAuth";

const Authorization = () => {

    return (
        <div className={style.container}>
            <FormAuth />
        </div>
    )
}

export default Authorization