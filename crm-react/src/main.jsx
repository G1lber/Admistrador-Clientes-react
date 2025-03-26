import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente from './pages/NuevoCliente'
//Importamos y llamamos a la funcion loader para poder traer datos
import Index, { loader as clientesLoader} from './pages/Index'

//Aqui se asignan las rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index:true,
        element: <Index/>,
        loader: clientesLoader
      },
      {
        path:'/clientes/nuevo',
        element: <NuevoCliente/>
      }
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* RouterProvider tiene que resivir un prop que son las rutas antes definidas */}
    <RouterProvider router={router} />
  </StrictMode>,
)
