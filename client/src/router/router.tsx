import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Services, { servicesLoader } from "../pages/Services";
import Contacts from "../pages/Contacts";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                index:  true,
                element: <Home/>
            },
            {
                path: 'services',
                element: <Services/>,
                loader: servicesLoader
            },
            {
                path: 'contacts',
                element: <Contacts/>
            },
            {
                path: 'profile',
                element: <Profile/>
            }
        ]
    }
])