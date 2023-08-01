import style from "./Menu.module.scss"
import {Fragment, useState} from "react";
import Details from "../../ui/Details/Details";
import {Link} from "react-router-dom";

const menu = [
    {
        text: "Главная",
        link: "news"
    },
    {
        text: "Реестры",
        submenu: [
            {
                text: "Реестры счетов",
                link: "registries"
            },
            {
                text: "Цифровые реестры",
                link: "digitalregistries"
            }
        ]
    },
    {
        text: "Прикрепленное население",
        submenu: [
            {
                text: "Проверка прикрепления",
                link: "checkpeople"
            },
            {
                text: "Списки",
                link: "spiski"
            },
            {
                text: "Списки ДУ",
                link: "spiskidu"
            },
            {
                text: "Журнал заявлений",
                link: "journal"
            }
        ]
    },
    {
        text: "Диспансеризация",
        link: "disp"
    },
    {
        text: "Госпитализация",
        link: "gosp"
    },
    {
        text: "Отчеты",
        link: "reports"
    },
    {
        text: "Телемедицина",
        link: "telemed"
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
    const [selectedNavMenu, setSelectedNavMenu] = useState(null);

    const onToggleNavMenu = (key) => {
        if (selectedNavMenu === key)
            setSelectedNavMenu(null)
        else
            setSelectedNavMenu(key)
    }

    const checkNavMenu = (menu, key) => {
        if (menu.submenu) {
            return (
                <Details heading={menu.text}>
                    <div>
                        {menu.submenu.map((item) => (
                            <Link to={item.link}>
                                <div  className={selectedNavMenu === key ? style.navmenuSelected : style.navmenu}
                                      onClick={() => onToggleNavMenu(key)} key={item.text}
                                >
                                    <p >
                                        {item.text}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                </Details>
            )
        } else {
            return (
                <div
                    className={selectedNavMenu === key ? style.navmenuSelected : style.navmenu}
                    onClick={() => onToggleNavMenu(key)}
                >
                    <Link to={menu.link}>
                        <p key={menu.text}>
                            {menu.text}
                        </p>
                    </Link>
                </div>
            )
        }
    }

    return (
        <div className={style.menu}>
            {data.map((menuItem, index) => (
                <div key={menuItem.text}>{checkNavMenu(menuItem, index)}</div>
            ))}
        </div>
    )
}


export default Menu