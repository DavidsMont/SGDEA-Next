'use client'; // No estoy seguro de qué hace 'use client'; probablemente puedas eliminar esta línea
import React, { useState } from 'react';

function ListaRoles({ onSelect }) {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    onSelect(selectedValue);
  };

  return (
    <div className="seleccionar-rol">
      <select
        id="select_roles"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={handleChange}
      >
        {/* <option className="opcion" value="login">Login</option> */}
        <option value="/generar-rol">Generar Rol</option>
        <option value="/radicar">Radicar</option>
        <option value="/radicar-visor">Radicar Visor</option>
        <option value="/consultas">Consultas</option>
      </select>
    </div>
  );
}
export {ListaRoles};

