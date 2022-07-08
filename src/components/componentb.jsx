/*Componente B: Por otro lado, tenemos el componente B que va a recibir por props un contacto 
y va a poder cambiar su estado de conectado a desconectado y viceversa.

Si el contacto está conectado, se debe mostrar: Contacto En Línea

Si el contacto no está conectado, se debe mostrar: Contacto No Disponible

Renderizado de componentes en la solución:

El Componente A debe ser renderizado dentro del componenet App.js del proyecto.

El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente

Recordatorio: Haz uso de Proptypes adecuadamente*/

import React, { useState } from 'react';




export const BotonComponent = ({ contact }) => {


    const [estado, setEstado] = useState(contact.connected);

    function cambiarEstado() {

        estado ? setEstado(false) : setEstado(true)

    }


    return (

        <div>

            <h3>

                Estado: {estado ? 'Contacto en linea' : 'Contacto no disponible'}

            </h3>

            <div>

                <button onClick={cambiarEstado}>

                    Cambiar estado

                </button>

            </div>

        </div>

    );

};




