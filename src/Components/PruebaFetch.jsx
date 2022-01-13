import React, {useEffect, useState} from 'react'

const Prueba = () => {

    const [nombre, setNombre] = useState('....Cargando')
        useEffect(() => {
            fetch('https://www.breakingbadapi.com/api/characters/1')
            .then(res => res.json())
            .then(resJson => setNombre(resJson[0].name))
            .catch(error => console.log(error))      
        }, [])
    
    return (
        <div>
            {nombre}
        </div>
    )

}
export default Prueba
