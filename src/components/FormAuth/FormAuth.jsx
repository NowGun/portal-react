import {yupResolver} from "@hookform/resolvers/yup";
import style from "./FormAuth.module.scss"
import TextBox from "../../ui/TextBox/TextBox";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../ui/Button/Button";
import {useForm} from "react-hook-form";
import validation from "./validation/validation";

const FormAuth = () => {
    const navigate = useNavigate()

    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            resolver: yupResolver(validation)
        }
    )

    const onSubmit = (data) => {
        navigate("/main")
        console.log({data})
    }

    const login = register("login")
    const password = register("password")

    return (
        <div className={style.container}>
            <div className={style.logo}>
                <p>Я</p>
                <p>Мед</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.textboxes}>
                    <div>
                        <TextBox placeholder={"Логин"} inputRef={login.ref}/>
                        <label>{errors.login?.message}</label>
                    </div>

                    <div>
                        <TextBox placeholder={"Пароль"} type={"password"} inputRef={password.ref}/>
                        <label>{errors.password?.message}</label>
                    </div>
                </div>

                <Link to={"/main"}>
                    <Button text="Войти" size={"large"} type={"primary"}/>
                </Link>
            </form>

            <Link to={"/404"} className={style.registr}>
                <p>Зарегистрироваться</p>
            </Link>
        </div>
    )
}

export default FormAuth