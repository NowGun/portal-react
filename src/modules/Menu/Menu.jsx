import style from "./Menu.module.scss"
import {Fragment} from "react";

const menu = [
    {
        text: "Главная"
    },
    {
        text: "Реестры",
        submenu: [
            {
                text: "Реестры счетов"
            },
            {
                text: "Цифровые реестры"
            }
        ]
    },
    {
        text: "Прикрепленное население",
        submenu: [
            {
                text: "Проверка прикрепления"
            },
            {
                text: "Списки"
            },
            {
                text: "Списки ДУ"
            },
            {
                text: "Журнал заявлений"
            }
        ]
    },
    {
        text: "Диспансеризация"
    },
    {
        text: "Госпитализация"
    },
    {
        text: "Отчеты"
    },
    {
        text: "Телемедицина"
    }
]

const Menu = () => {
    return (
        <div className={style.flexColumn}>
            <NavMenu data={menu}/>
        </div>
    )
}

const NavMenu = ({ data }) => {
    const checkNavMenu = (menu) => {
        if (menu.submenu) {
            return (
                <details>
                    <summary>{menu.text}</summary>
                    <div className={style.flexColumn}>
                        {menu.submenu.map((item) => (
                            <p key={item.text}>{item.text}</p>
                        ))}
                    </div>
                </details>
            );
        } else {
            return (
                <div className={style.navmenu}>
                    <p>{menu.text}</p>
                </div>
            );
        }
    };

    return (
        <div>
            {data.map((menuItem) => (
                <Fragment key={menuItem.text}>
                    {checkNavMenu(menuItem)}
                </Fragment>
            ))}
        </div>
    );
};


export default Menu