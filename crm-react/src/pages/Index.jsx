import {useLoaderData} from 'react-router-dom'
/* Loader es una funcion que carga un arreglo de la informacion en este caso 
    la informacion es estatica 
*/
export function loader(){
    const clientes =  [
        {
            identificación : 1 ,
            nombre : 'Juan' ,
            teléfono : 1102013313 ,
            email : "juan@emtel.com" ,
            empresa : 'Emtel'
        } ,
        {
            identificación : 2 ,
            nombre : 'Karen' ,
            teléfono : 1238198313 ,
            email : "karen@sena.com" ,
            empresa : 'SENA'
        } ,
        {
            identificación : 3 ,
            nombre : 'Josue' ,
            teléfono : 341983913 ,
            email : "josue@sena.com" ,
            empresa : 'SENA'
        } ,
        {
            identificación : 4 ,
            nombre : 'Miguel' ,
            teléfono : 319381983 ,
            email : "miguel@sena.com" ,
            empresa : 'SENA'
        } ,
        {
            identificación : 5 ,
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
    </>
  )
}

export default Index
