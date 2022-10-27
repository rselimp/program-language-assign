import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import Home from "../../Pages/Home/Home";
import Language from "../../Pages/Languag/Language";
import Login from "../../Pages/Login/Login";
import Page404NotFound from "../../Pages/NotFound404/Page404NotFound";
import Register from "../../Pages/Register/Register";
import LanguageCard from "../../Shared/LanguageCard/LanguageCard";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

//8. create route, have main route and some children route

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/languageDetails')
          },
          {
            path:'/category/:id',
            element:<Category></Category>,
            loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            
          },
          {
            path:'/languageDetails/:id',
            element:<PrivateRoute><Language></Language></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/languageDetails/${params.id}`)
          },
          {
            path:'/blog',
            element:<Blog></Blog>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Register></Register>
          },
          {
            path:'/languagecard',
            element:<PrivateRoute><LanguageCard></LanguageCard></PrivateRoute>
          },
          {
            path:'/*',
            element:<Page404NotFound></Page404NotFound>,
          }
        ]

        
    }
])