import React, { useState } from "react";
import "./roles.css";

const imageUrl = "https://i.imgur.com/DVEh1vC.png";

class Rol {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

const Roles = [
  new Rol("RADICADOR"),
  new Rol("CAJERO"),
  new Rol("REPARTIDOR"),
  new Rol("CORRECTOR"),
  new Rol("ABOGADO"),
  new Rol("DIGITADOR"),
  new Rol("CALIDAD"),
  new Rol("ADMINISTRADOR"),
];

function GenerarRol() {
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleClick = (rol) => {
    setSelectedRole(rol);
    // Puedes realizar cualquier otra acción relacionada con el cambio de rol aquí
  };

  return (
    <div className="roles-container content-center">
      <div className="grid grid-cols-4 gap-1 place-items-center ">
        {Roles.map((rol) => (
            <div key={rol.nombre} className={`roles ${selectedRole === rol ? 'selected' : ''}`}>
            <input
                className='input-rol'
                type="radio"
                name="selector"
                id={rol.nombre}
                onChange={() => handleRoleClick(rol)}
                checked={selectedRole === rol}
            />
            <label className="rol" htmlFor={rol.nombre}>
                <p>{rol.nombre}</p>
                <img src={imageUrl} alt={rol.nombre} />
            </label>
            </div>
        ))}
      </div>
    </div>
  );
}

export { GenerarRol };

