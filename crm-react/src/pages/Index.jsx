import {useLoaderData} from 'react-router-dom'
/* Loader es una funcion que carga un arreglo de la informacion en este caso 
    la informacion es estatica 
*/
import Cliente from '../components/Cliente';

export function loader(){
    const clientes =  [
        {
            id : 1 ,
            nombre : 'Juan' ,
            teléfono : 1102013313 ,
            email : "juan@emtel.com" ,
            empresa : 'Emtel'
        } ,
        {
            id : 2 ,
            nombre : 'Karen' ,
            teléfono : 1238198313 ,
            email : "karen@sena.com" ,
            empresa : 'SENA'
        } ,
        {
            id : 3 ,
            nombre : 'Josue' ,
            teléfono : 341983913 ,
            email : "josue@sena.com" ,
            empresa : 'SENA'
        } ,
        {
            id : 4 ,
            nombre : 'Miguel' ,
            teléfono : 319381983 ,
            email : "miguel@sena.com" ,
            empresa : 'SENA'
        } ,
        {
            id : 5 ,
            nombre : 'Pedro' ,
            teléfono : 1398198938 ,
            email : "pedro@sena.com" ,
            empresa : 'SENA'
        } ,
    ] ;

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
