import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Services, { servicesLoader } from "../pages/Services";
import Contacts from "../pages/Contacts";
import Profile, { ordersLoader } from "../pages/Profile";
import Auth from "../pages/Auth";
import Admin, { adminLoader } from "../pages/Admin";
import Redact from "../pages/Redact";
import Comments, { commentLoader } from "../pages/Comments";
import AdminComments from "../pages/AdminComments";
import { allCommentsLoader } from "../components/Admin/Comments/CommentsTable";

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
                path: 'comments',
                element: <Comments/>,
                loader: commentLoader
            },
            {
                path: 'contacts',
                element: <Contacts/>
            },
            {
                path: 'profile/:id',
                element: <Profile/>,
                loader: ordersLoader
            },
            {
                path: 'auth',
                element: <Auth/>
            },
            {
                path: 'admin',
                element: <Admin/>,
                loader: adminLoader
            },
            {
                path: 'redact',
                element: <Redact/>
            },
            {
                path: 'admin-comments',
                element: <AdminComments/>,
                loader: allCommentsLoader
            }
        ]
    }
])