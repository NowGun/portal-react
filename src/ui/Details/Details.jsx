import style from "./Details.module.scss"

const Details = ({heading, children}) => {
    return (
        <details className={style.details}>
            <summary>{heading}</summary>
            <div className={style.content}>
                {children}
            </div>
        </details>
    )
}

export default Details