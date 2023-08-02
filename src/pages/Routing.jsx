import {
    createBrowserRouter,
    RouterProvider

} from "react-router-dom"
import Authorization from "./Authorization/Authorization";
import Main from "./Main/Main";
import News from "./News/News";
import Registries from "./Registries/Registries";
import NewsMore from "../modules/News/NewsMore";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Authorization />
    },
    {
        path: "/main/",
        element: <Main />,
        children: [
            {
                path: "news/",
                element: <News />
            },
            {
                path: "registries",
                element: <Registries />
            },
            {
                path: "news/:id",
                element: <NewsMore />
            }
        ]
    }
])

const Routing = () => <RouterProvider router={router}/>

export default Routing