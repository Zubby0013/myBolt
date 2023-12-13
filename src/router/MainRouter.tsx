import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Common/Layout";
import HomeScreen from "../pages/home/HomeScreen";
import AuthLayout from "../Component/authBlock/AuthLayout";
import RegisterUser from "../pages/auth/RegisterUser";
import SignUp from "../pages/auth/SignUp";


export const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                index: true,
                element: <HomeScreen/>
            },
        ],
    },
    {
        path : "/registerascourier",
        element: <RegisterUser/>
    },
    {
        path : "/nextprocess",
        element: <SignUp/>
    },
]);