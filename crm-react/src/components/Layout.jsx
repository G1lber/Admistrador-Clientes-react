import {Outlet, Link, useLocation} from 'react-router-dom'

const Layout = () => {
    const location = useLocation()

  return (
    <div className='md:flex md:min-h-screen'>
    <aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
        <h2 className='text-4xl font-black text-center text-white'>CRM - Clientes</h2>
        <nav className='mt-10 '>
            {/* Link es para que sea mas rapido entonces tambien replaza a la
                etiqueda <a></a> no se utiliza el href se cambia por el to */}
            <Link 
            className={`${location.pathname == '/' ? 'text-blue-300' : 'text-white'}text-2xl block mt-2 hover:text-blue-300 text-white`} 
            to='/'>Clientes</Link>
            <Link 
            className={`${location.pathname == '/clientes/nuevo' ? 'text-blue-300' : 'text-white'}text-2xl block mt-2 hover:text-blue-300 text-white`} 
            to='/clientes/nuevo'>Nuevo Cliente</Link>
        </nav>
    </aside>
        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
        {/* Lo que esta antes del Outlet es lo que no cambia */}
         <Outlet/>
         {/* Lo que esta despues del Outlet es lo que es dinamico */}
        </main> 
    </div>
  )
}

export default Layout
