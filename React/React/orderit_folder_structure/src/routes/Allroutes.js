import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import  {HomePage,ProductsList} from '../pages/';
export default function Allroutes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/products",
            element: <ProductsList />,
        },
       
    ]);

    return (
        <RouterProvider router={router} />
    )
}
