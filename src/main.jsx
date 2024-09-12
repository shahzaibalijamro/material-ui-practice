import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from '../src/screens/home/Home.jsx'
import Products from './screens/Products/Products.jsx'
import SingleProduct from './screens/singleproduct/SingleProduct.jsx';
import Notfound from './screens/notfound/Notfound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "products",
        element: <Products/>,
      },
      {
        path: 'products/singleproduct/:id',
        element: <SingleProduct/>
      },
      {
        path: '*',
        element: <Notfound/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
