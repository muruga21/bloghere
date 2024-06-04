import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Hero from './components/Hero';
import Blogview from './components/Blogview';
import Login from './components/Login';
import Register from './components/Register';
import Addblog from './components/Addblog';
import EditBlog from './components/EditBlog';
import Error404 from './components/Error404';
import Blogs from './components/Blogs';

const approuter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<Error404/>,
    children:[
      {
        path:'/',
        element:<Hero/>,
        errorElement:<Error404/>
      },
      {
        path:'/delete/:blogid',
        element:<Hero/>,
        errorElement:<Error404/>
      },
      {
        path:'/:blogid',
        element:<Blogview/>,
        errorElement:<Error404/>
      },{
        path:'/addblog',
        element:<Addblog/>,
        errorElement:<Error404/>
      },{
        path:'/edit/:blogid',
        element:<EditBlog/>,
        errorElement:<Error404/>
      }
    ],
  },
  {
    path:'/login',
    element:<Login/>,
    errorElement:<Error404/>
  },
  {
    path:'/register',
    element:<Register/>,
    errorElement:<Error404/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={approuter}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
