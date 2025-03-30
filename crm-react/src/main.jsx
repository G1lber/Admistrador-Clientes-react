import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction}from './pages/NuevoCliente'
//Importamos y llamamos a la funcion loader para poder traer datos
import Index, { loader as clientesLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditarCliente, {loader as editarCliente, action as editarClienteAction } from './pages/EditarCliente'
import { action as eliminarClienteAction } from './components/Cliente'

//Aqui se asignan las rutas
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children:[
      {
        index:true,
        element: <Index/>,
        loader: clientesLoader,
        //Con esto se logra tener una vista de error mas personalizada
        errorElement : <ErrorPage/>
      },
      {
        path:'/clientes/nuevo',
        element: <NuevoCliente/>,
        action: nuevoClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path:'/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: editarCliente,
        action: editarClienteAction,
        errorElement: <ErrorPage />
      },
      {
        path: '/clientes/:clienteId/eliminar',
        action: eliminarClienteAction
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
