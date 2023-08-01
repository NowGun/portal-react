import style from "./News.module.scss"
import CardNews from "../../modules/CardNews/CardNews";

const News = () => {
    return (
        <div className={style.flexColumn}>
            <div className={style.header}>
                <p>Новости</p>
            </div>

            <div className={style.container}>
                <CardNews styleCard={style.card}/>
            </div>
        </div>
    )
}

export default News