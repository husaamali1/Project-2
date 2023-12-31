import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

//Page components
import App from './App.jsx'
import Home from './component/Home'
import AllProduct from './component/AllProduct'
import SingleProduct from './component/SingleProduct'


// Loader
import { getAllProduct, getSingleProduct } from './utils/loaders/products.js'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <AllProduct />,
        loader: getAllProduct
      },
      {
        path: '/products/:Id',
        element: <SingleProduct />,
        loader: async ({ params }) => getSingleProduct(params.Id)

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
