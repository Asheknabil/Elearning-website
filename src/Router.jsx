import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Hero from "./components/Hero";
import About from "./components/About";
import Categories from "./components/Categories";
import Courses from "./components/Courses";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            { path: "/", element: <Hero /> },
            { path: "/about", element: <About />},
            { path: "/categories", element: <Categories />},
            { path: "/courses", element: <Courses /> },
        ],
    },
]);

export default router;