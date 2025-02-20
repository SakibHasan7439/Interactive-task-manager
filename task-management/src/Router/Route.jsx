import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Welcome from "../Pages/Welcome/Welcome";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h2>404 not found!</h2>,
        children: [
            {
                path: '/',
                element: <Welcome></Welcome>
            },

            {
                path: 'home',
                element: <Home></Home>
            },

            {
                path: 'register',
                element: <Register></Register>
            },

            {
                path: 'login',
                element: <Login></Login>
            }
        ]
    }
])

export default Route;