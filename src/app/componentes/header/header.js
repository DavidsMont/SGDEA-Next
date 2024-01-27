
import React, { useState } from 'react';
import { ListaRoles } from '../roles/listas-roles';
import './header.css';

import { Login } from '../login';

import { GenerarRol } from '../roles/roles';
import { Radicar } from '../radicacion/radicar';
import { RadicarVisor } from '../radicacion/radicar-visor';
import { Consultas } from '../consultas/consultas';

    

function Header() {
    const [selectedComponent, setSelectedComponent] = useState(<Login onNavigateToGenerarRol={() => setSelectedComponent(<GenerarRol />)} />);
    
    const handleSelect = (selectedValue) => {
        console.log('Selected Value:', selectedValue); // Verifica el valor seleccionado
        switch (selectedValue) {
        //   case '/generar-rol':
        //     setSelectedComponent(<GenerarRol />);
        //     break;
          case '/radicar':
            setSelectedComponent(<Radicar />);
            break;
          case '/radicar-visor':
            setSelectedComponent(<RadicarVisor />);
            break;
          case '/consultas':
            setSelectedComponent(<Consultas />);
            break;
          default:
            setSelectedComponent(<GenerarRol/>);
        }
        console.log('Selected Component:', selectedComponent); // Verifica el estado actualizado
      };

    return (
        <>
            <header className="w-full " id="contenedor-header">
            <div className="grid grid-cols-3 gap-1 ">
                <div className=" flex justify-center h-20">
                    <div className="" id='logo-software'>
                        <img className="img-software" src="https://i.imgur.com/Q6HnB7s.png" alt="logo-software" />
                    </div>
                    <div className=" flex justify-center">
                        <span className="title-software" id="header">DOCMACAM</span>
                    </div>
                </div>
                
                <div className="flex bloque-sede">
                    <div className="sede">
                        Sede Principal
                    </div>
                    <div>
                        <ListaRoles onSelect={handleSelect} />
                    </div>
                </div> 
                
                <div>
                    <div className=" " id="nombre-empresa">
                        <div className="container flex justify-center" id="cliente">
                            <img src="https://i.imgur.com/zcXjwrS.png" id="logo-empresa" alt="logo-empresa" />
                        <span>nombre empresa</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <div>
            {selectedComponent}
        </div>
    </>
    );
}

export {Header};
