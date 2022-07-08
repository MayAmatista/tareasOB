/*Componente A: Este componente va a tener disponer un Contacto(crea una clase para ello), 
que va a contar con las siguientes características:

Nombre: que será un String.

Apellido: también un String.

Email: de nuevo un String.

Conectado: será un booleano que nos indicará si la persona está conectada o no.*/
import PropTypes from 'prop-types';
import { BotonComponent } from "./componentb";

export class Contact {
    name = '';
    lastName = '';
    email = '';
    connected = false;

    contructor(name, lastName, email, connected) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.connected = connected;
    }
}

export const ContactComponent = (contact) => {

    return (

        <div>

            <h2>

                Nombre: {contact.name}

            </h2>

            <h3>

                Apellido: {contact.lastName}

            </h3>

            <h4>

                Email: {contact.email}

            </h4>

            <div>

                <BotonComponent contact={contact}></BotonComponent>

            </div>

        </div>

    );

};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

Contact.propTypes = {
    name: PropTypes.string,
    lastName: PropTypes.string,
    mail: PropTypes.string,
    connected: PropTypes.bool
}
