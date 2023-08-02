import style from "./NewsMore.module.scss"
import {Link, useParams} from "react-router-dom";
import data from "./data/data";
import Button from "../../ui/Button/Button";

const NewsMore = () => {
    const {id} = useParams();

    const news = data.find(el => el.id === id);

    return (
        <div className={style.flexColumn}>
            <div className={style.header}>
                <p className={style.title}>{news.title}</p>
                <p className={style.date}>{news.date}</p>

                <Link to={"../news"}>
                    <Button text={"Назад"} type={"primary"}/>
                </Link>
            </div>

            <div className={style.container}>
                <p className={style.description}>{news.description}</p>
            </div>
        </div>
    )
}

export default NewsMore