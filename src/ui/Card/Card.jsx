import style from "./Card.module.scss"
import classNames from "classnames";

const Card = ({children, styleCard, ...props}) => {
    return (
        <div className={classNames(style.card, styleCard)} {...props}>
            {children}
        </div>
    )
}

export default Card