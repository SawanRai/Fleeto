import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Partner from './components/Partner/Partner.jsx'
import Book from './components/Book/Book.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/SignUp/Signup.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"book",
        element:<Book/>
      },
      {
        path:"partner",
        element:<Partner/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"signup",
        element:<Signup/>
      }
      
      
    ]
  }
],
{
    basename: "/Fleeto", // 👈 add this line
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
