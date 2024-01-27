// PDFViewer.js
import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import './PDFVisor.css'

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PDFViewer = () => {
    // La URL del web worker
    const workerUrl = 'https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js';

    // Crear la instancia del plugin de diseño predeterminado
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Worker workerUrl={workerUrl}>
            <div style={{ height: '440px' }}>
                <h1>Visor PDF</h1>
                <Viewer
                    fileUrl="/primerexamengit.pdf" // Reemplaza con la ruta o URL de tu documento PDF
                    plugins={[defaultLayoutPluginInstance]}
                />
            </div>
        </Worker>
    );
};

export { PDFViewer };


// import React, { useState } from "react";
// import "./roles.css";
// import { Radicar } from "../radicacion/radicar"; // Ajusta la importación según la ubicación de tu componente
// import { RadicarVisor } from "../radicacion/radicar-visor"; // Ajusta la importación según la ubicación de tu componente
// import { Consultas } from "../consultas/consultas"; // Ajusta la importación según la ubicación de tu componente

// const imageUrl = "https://i.imgur.com/DVEh1vC.png";

// class Rol {
//   constructor(nombre) {
//     this.nombre = nombre;
//   }
// }

// const roles = [
//   new Rol("RADICADOR"),
//   new Rol("CAJERO"),
//   new Rol("REPARTIDOR"),
//   new Rol("CORRECTOR"),
//   new Rol("ABOGADO"),
//   new Rol("DIGITADOR"),
//   new Rol("CALIDAD"),
//   new Rol("ADMINISTRADOR"),
// ];

// function GenerarRol() {
//   const [selectedRole, setSelectedRole] = useState(null);

//   const handleRoleClick = (rol) => {
//     setSelectedRole(rol);
//   };

//   const renderComponent = () => {
//     switch (selectedRole?.nombre) {
//       case "RADICADOR":
//         return <Radicar />;
//       case "REPARTIDOR":
//         return <RadicarVisor />;
//       case "CONSULTAS":
//         return <Consultas />;
//       // Agrega más casos según tus roles
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="roles-container content-center">
//       <div className="grid grid-cols-4 gap-1 place-items-center">
//         {roles.map((rol) => (
//           <div
//             key={rol.nombre}
//             className={`roles ${selectedRole === rol ? "selected" : ""}`}
//             onClick={() => handleRoleClick(rol)}
//           >
//             <label className="rol" htmlFor={rol.nombre}>
//                 <p>{rol.nombre}</p>
//                 <img src={imageUrl} alt={rol.nombre} />
//             </label>
//           </div>
//         ))}
//       </div>

//       {/* Renderizar el componente seleccionado */}
//       {renderComponent()}
//     </div>
//   );
// }

// export { GenerarRol };