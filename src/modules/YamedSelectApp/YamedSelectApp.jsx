import style from "./YamedSelectApp.module.scss"

const YamedSelectApp = () => {
    return (
        <div className={style.container}>
            <p className={style.yamed}>Ямед.</p>
            <p className={style.app}>Портал</p>
        </div>
    )
}

export default YamedSelectApp