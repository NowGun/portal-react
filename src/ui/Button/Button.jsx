import style from "./Button.module.scss"

const Button = ({text, ...props}) => {
    return (
        <button className={style.button} {...props}>{text}</button>
    )
}

export default Button