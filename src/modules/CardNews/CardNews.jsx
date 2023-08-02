import style from "./CardNews.module.scss"
import Card from "../../ui/Card/Card";
import {Link} from "react-router-dom";
import data from "./data/data";

const CardNews = ({styleCard}) => {

    return (
        <>
            {
                data.map(el => (
                    <Link to={el.id} key={el.id}>
                        <Card styleCard={styleCard}>
                            <div className={style.container}>
                                <h3>{el.title}</h3>
                                <p className={style.date}>{el.date}</p>
                                <p className={style.description}>{el.description}</p>
                            </div>
                        </Card>
                    </Link>
                ))
            }
        </>
    )
}

export default CardNews