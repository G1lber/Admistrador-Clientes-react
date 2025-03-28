import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction}from './pages/NuevoCliente'
//Importamos y llamamos a la funcion loader para poder traer datos
import Index, { loader as clientesLoader} from './pages/Index'
import ErrorPage from './components/ErrorPage'
import EditarCliente, {loader as editarCliente} from './pages/EditarCliente'

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
        action: nuevoClienteAction
      },
      {
        path:'/clientes/:clienteId/editar',
        element: <EditarCliente/>,
        loader: editarCliente,
        errorElement: <ErrorPage />
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
