import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';


import Header from './src/components/Header';
import Body from './src/components/Body';
import Error from './src/components/Error';
import Contact from './src/components/Contact';
import About from './src/components/About';
import RestaurentMenu from './src/components/RestaurentMenu';
import Cart from './src/components/Cart'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';



const App = () => {
    return(
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
    )
}

const Approuter = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/restaurent/:resId',
                element: <RestaurentMenu/>
            }
        ],

        errorElement: <Error/>
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={Approuter}/>);