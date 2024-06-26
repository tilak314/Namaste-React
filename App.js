import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';

import Header from './components/Header';
import Body from './components/Body';
import Home from './components/Home';
import Error from './components/Error';
import Contact from './components/Contact';
import About from './components/About';
import RestaurentMenu from './components/RestaurentMenu';

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
                path: '/restaurent/:resId',
                element: <RestaurentMenu/>
            }
        ],

        errorElement: <Error/>
    },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={Approuter}/>);