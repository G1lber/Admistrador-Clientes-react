import {useLoaderData} from 'react-router-dom'
/* Loader es una funcion que carga un arreglo de la informacion en este caso 
    la informacion es estatica 
*/
import Cliente from '../components/Cliente';
import { obtenerClientes } from '../data/clientes';

export function loader(){
    
    const clientes = obtenerClientes()

    return clientes
}

const Index = () => {
    // Obtiene los datos cargados por el loader
    const clientes = useLoaderData();
    
  return (
    <>
        <h1 className="font-black text-4xl text-blue-900 ">Clientes</h1>
        <p className="mt-3">Administra tus Clientes</p>
        {clientes.length ? (
            <table className='w-full bg-white shadow mt-5 table-auto'>
                <thead className='bg-blue-800 text-white'>
                    <tr>
                        <th className='p-2'>Cliente</th>
                        <th className='p-2'>Contacto</th>
                        <th className='p-2'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente =>(
                        <Cliente
                            cliente ={cliente}
                            key={cliente.id}
                        />
                    ))}
                </tbody>
            </table>
        ) :(
            <p className='text-center mt-10'>No hay Clientes aún</p>
        )
    }
    </>
  )
}

export default Index
