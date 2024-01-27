'use client';
import React from "react";
import { PDFViewer } from "../PDFVisor/PDFVisor";


function RadicarVisor() {
    const handleClick = (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto
        console.log('Esta funcionando');
      };
      
    return (
        <>
        <section className="bg-white dark:bg-gray-900 flex justify-around max-h-full">
            <div className="w-3/5 mx-8 my-3 h-auto">
                <div className="h-auto">
                    <PDFViewer />
                </div>
            </div>
            <div className="my-1 w-2/5 h-full">
                <div className="max-w-2x1 px-0 py-1 mx-8 lg:py-1">
                    <div className='grid my-4 sm:grid-cols-1 sm:gap-2 sm:mb-5'>
                        <div className='sm:col-span-1'>
                            <div className="relative overflow-y-scroll overscroll-y-contain shadow-md sm:rounded-lg h-38">
                                <table className="border-solid border-4 w-full text-xs text-center text-gray-500 dark:text-gray-400 table-fixed">
                                    <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="px-1 py-2">
                                                Nº Radicado
                                            </th>
                                            <th scope="col" className="px-1 py-2">
                                                Remitente
                                            </th>
                                            <th scope="col" className="px-1 py-2">
                                                Tramite
                                            </th>
                                            <th scope="col" className="px-1 py-2">
                                                Fecha
                                            </th>
                                            <th scope="col" className="px-1 py-2">
                                                Hora
                                            </th>
                                            <th scope="col" className="px-1 py-2">
                                                Nº Imagen
                                            </th>
                                            <th scope="col" className="px-1 py-2">
                                                Acción
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-normal dark:text-white">
                                                0001
                                            </th>
                                            <td className="px-1 py-1">
                                                Pepito Perez
                                            </td>
                                            <td className="px-1 py-1">
                                                Renovación
                                            </td>
                                            <td className="px-1 py-1">
                                                fecha actual
                                            </td>
                                            <td className="px-1 py-1">
                                                Hora actual
                                            </td>
                                            <td className="px-1 py-1 text-center">
                                                01
                                            </td>
                                            <td className="px-1 py-1">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 whitespace-normalhover:underline">Eliminar</a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                                            <th scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-normal dark:text-white">
                                                0001
                                            </th>
                                            <td className="px-1 py-1">
                                                Pepito Perez
                                            </td>
                                            <td className="px-1 py-1">
                                                Renovación
                                            </td>
                                            <td className="px-1 py-1">
                                                fecha actual
                                            </td>
                                            <td className="px-1 py-1">
                                                Hora actual
                                            </td>
                                            <td className="px-1 py-1 text-center">
                                                01
                                            </td>
                                            <td className="px-1 py-1">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 whitespace-normalhover:underline">Eliminar</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div className="border-solid border-4 border-grey-400 my-6">
                        <div className='sm:col-span-1'>
                            <h2 className="m-2 text-sm font-bold text-gray-900 dark:text-white flex justify-center ">Tipos Documentales</h2>
                        </div>
                        <form onSubmit={handleClick}>
                            <div className="grid sm:grid-cols-4 sm:gap-1 sm:mb-1">
                                <div className="sm:col-span-2 grid justify-items-center">
                                    <label htmlFor="name" className="block text-xs font-small text-gray-900 dark:text-white">Desde</label>
                                    <select
                                        id="select_roles"
                                        className="bg-gray-50 border border-gray-300 text-center text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10 p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option className="opcion" value="valor1">
                                        1
                                        </option>
                                        <option className="opcion" value="valor2">
                                        2
                                        </option>
                                        <option className="opcion" value="valor3">
                                        3
                                        </option>
                                    </select>
                                </div>
                                <div className="sm:col-span-2 grid justify-items-center">
                                    <label htmlFor="name" className="block text-xs font-small text-gray-900 dark:text-white">Hasta</label>
                                    <select
                                        id="select_roles"
                                        className="bg-gray-50 border border-gray-300 text-center text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10 p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option className="opcion" value="valor1">
                                        1
                                        </option>
                                        <option className="opcion" value="valor2">
                                        2
                                        </option>
                                        <option className="opcion" value="valor3">
                                        3
                                        </option>
                                    </select>
                                </div>
                                <div className="sm:col-span-4 grid justify-items-center">
                                    <label htmlFor="price" className="block text-sm font-small text-gray-900 dark:text-white">Seleccionar</label>
                                    <select
                                        id="select_roles"
                                        className="bg-gray-50 border border-gray-300 text-center text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-35 p-0.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option className="opcion" value="valor1">
                                        Documento privado
                                        </option>
                                        <option className="opcion" value="valor2">
                                        Formulario
                                        </option>
                                        <option className="opcion" value="valor3">
                                        Formato
                                        </option>
                                    </select>
                                </div>
                                <div className="sm:col-span-4 grid justify-items-center">
                                <button type="submit" className=" h-8 my-2 text-white bg-green-500 hover:text-black border border-green-500 hover:bg-green-50 focus:ring-4 focus:outline-none focus:bg-green-50 font-small rounded-lg text-sm px-5 py-0.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Agregar Imagenes
                                </button>
                            </div> 
                            </div>
                            <div className="flex flex-wrap justify-center my-1">
                                <textarea id="description" rows="2" className="block mx-3 p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Comentarios adicionales ralacionados con los documentos recibidos"></textarea>
                                <button type="submit" className="h-8 my-2 text-white bg-green-500 hover:text-black border border-green-500 hover:bg-green-50 focus:ring-4 focus:outline-none focus:bg-green-50 font-small rounded-lg text-sm px-5 py-0.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={handleClick}>
                                    Guardar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export {RadicarVisor};