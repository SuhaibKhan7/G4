import React from 'react'
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopSection from './components/TopSection';
import CardData from './components/CardData';
import LearnUseEffect from './components/LearnUseEffect';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Productlist from './components/Productlist';
import Aboutus from './components/Aboutus';

export default function App() {

const router= createBrowserRouter([
  
{
  path:"/",
  element:<>
  <Header />,
  <Home/></>
},
  {
    path: "/product",
    element: <>
    <Header />
    <Productlist />
    </>
  },
  {
    path: "/about",
    element: <>
    <Header />
    <Aboutus />
    </>
  },


])



  return (
      <RouterProvider router={router}/>
  )
}
