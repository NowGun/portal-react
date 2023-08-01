import style from "./Menu.module.scss"
import {Fragment, useState} from "react";
import Details from "../../ui/Details/Details";
import {Link} from "react-router-dom";

const menu = [
    {
        id: 1,
        text: "Главная",
        link: "news"
    },
    {
        id: 2,
        text: "Реестры",
        submenu: [
            {
                id: 3,
                text: "Реестры счетов",
                link: "registries"
            },
            {
                id: 4,
                text: "Цифровые реестры",
                link: "news"
            }
        ]
    },
    {
        id: 5,
        text: "Прикрепленное население",
        submenu: [
            {
                id: 6,
                text: "Проверка прикрепления",
                link: "news"
            },
            {
                id: 7,
                text: "Списки",
                link: "news"
            },
            {
                id: 8,
                text: "Списки ДУ",
                link: "news"
            },
            {
                id: 9,
                text: "Журнал заявлений",
                link: "news"
            }
        ]
    },
    {
        id: 10,
        text: "Диспансеризация",
        link: "news"
    },
    {
        id: 11,
        text: "Госпитализация",
        link: "news"
    },
    {
        id: 12,
        text: "Отчеты",
        link: "news"
    },
    {
        id: 13,
        text: "Телемедицина",
        link: "news"
    }
]

const Menu = () => {
    return (
        <div className={style.flexColumn}>
            <NavMenu data={menu}/>
        </div>
    )
}

const NavMenu = ({data}) => {
    const [selectedNavMenu, setSelectedNavMenu] = useState(null);

    const onToggleNavMenu = (key) => {
        if (selectedNavMenu !== key)
            setSelectedNavMenu(key)
    }

    const checkNavMenu = (menu) => {
        if (menu.submenu) {
            return (
                <Details heading={menu.text}>
                    {menu.submenu.map((menu, key) => (
                        <Link to={menu.link} className={style.container}>
                            <div
                                className={selectedNavMenu === menu.id ? style.navmenuSelected : style.navmenu}
                                onClick={() => onToggleNavMenu(menu.id)}
                                key={menu.id}
                            >

                                <p>
                                    {menu.text}
                                </p>

                            </div>
                        </Link>
                    ))}
                </Details>
            )
        } else {
            return (
                <Link to={menu.link}>
                    <div
                        className={selectedNavMenu === menu.id ? style.navmenuSelected : style.navmenu}
                        onClick={() => onToggleNavMenu(menu.id)}
                        key={menu.id}
                    >

                        <p>
                            {menu.text}
                        </p>

                    </div>
                </Link>
            )
        }
    }

    return (
        <div className={style.menu}>
            {
                data.map((menuItem) => (
                    <div key={menuItem.id}>{checkNavMenu(menuItem)}</div>
                ))
            }
        </div>
    )
}


export default Menu