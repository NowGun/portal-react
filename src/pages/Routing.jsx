import {
    createBrowserRouter,
    RouterProvider

} from "react-router-dom"
import Authorization from "./Authorization/Authorization";
import Main from "./Main/Main";
import News from "./News/News";
import Registries from "./Registries/Registries";

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
                path: "news",
                element: <News />
            },
            {
                path: "registries",
                element: <Registries />
            }
        ]
    }
])

const Routing = () => <RouterProvider router={router}/>

export default Routing