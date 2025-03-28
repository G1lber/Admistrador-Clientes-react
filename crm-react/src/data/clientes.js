export async function obtenerClientes() {
    const respuesta= await fetch(import.meta.env.VITE_API_URL)  // Por defecto utiliza GET
    const resultado = await respuesta.json()

    return resultado
}

export async function obtenerCliente(id) {
    try{
        const respuesta= await fetch(`${import.meta.env.VITE_API_URL}/${id}`)  // Por defecto utiliza GET
        if (!respuesta.ok) {
            if (respuesta.status === 404) {
                throw new Error('El Clientes no fue encontrados');
            }else{
                throw new Error(`Error al obtener el cliente: ${respuesta.status}`);
            }
        }

        const resultado = await respuesta.json();

        return resultado
    }catch(error){
        console.error('Error al obtener al cliente:', error.message);

        throw error;
    }
   

}

export async function agregarCliente(datos) {
    try{
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST', // Se especifica el metodo que se utilizara
            body:JSON.stringify(datos),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    }catch(error){
        console.log(error)
    }
}


