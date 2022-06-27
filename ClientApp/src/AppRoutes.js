import { Counter } from "./components/Counter"
import { FetchData } from "./components/FetchData"
import FetchDataFunc from "./components/FetchDataFunc"
import { Home } from "./components/Home"

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/fetch-data",
    element: <FetchData />,
  },
  {
    path: "/fetch-data-2",
    element: <FetchDataFunc />,
  },
]

export default AppRoutes
