
import React from 'react';

function Radicar() {
    return (
        <>
        <section className="bg-white dark:bg-gray-900">
            <div className="max-w-2xl px-4 py-8 mx-auto lg:py-3">
                <div className='grid gap-4 mb-4 sm:grid-cols-2 sm:gap-2 sm:mb-2'>
                    <div className='sm:col-span-1'>
                        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white flex justify-center ">Nuevo Radicado</h2>
                    </div>
                    <div className='flex sm:col-span-1'>
                        <img className="simbolo-mas" src="./imagenes/mas.png" alt="simbolo-mas" />
                        <img className="simbolo" src="./imagenes/mas.png" alt="disquet" />
                        <img className="simbolo" src="./imagenes/mas.png" alt="impresora" />
                    </div>
                </div>
                
                <form action="#">
                    <div className="grid gap-4 mb-4 sm:grid-cols-3 sm:gap-2 sm:mb-5">
                        <div className="sm:col-span-1">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero de Radicado</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="" placeholder="Numero de radicado" required=""/>
                        </div>
                        <div className="w-full">
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha de ingreso</label>
                            <input type="date" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="Fecha actual" placeholder="Product brand" required=""/>
                        </div>
                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hora</label>
                            <input type="time" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="Hora actual" placeholder="" required=""/>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Remitente</label>
                            <input type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="" placeholder="Pepito Perez" required=""/>
                        </div>
                        <div className="w-full">
                            <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Identificación</label>
                            <input type="number" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="Numero de id" placeholder="numero identificacón" required=""/>
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Serie Documental</label>
                            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Vendedores de Juegos de suerte y Azar</option>
                                <option value="TV">Entidades Sin Animo de Lucro</option>
                                <option value="PC">Registro de Proponente</option>
                                <option value="GA">Operadores de Libranza</option>
                                <option value="PH">Otro</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tramite</label>
                            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option selected="">Constitución</option>
                                <option value="TV">Nombramientos</option>
                                <option value="PC">Cancelación</option>
                                <option value="GA">Renovación</option>
                                <option value="PH">Reformas</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="item-weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cantidad de folios</label>
                            <input type="number" name="item-weight" id="item-weight" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="" placeholder="Numero de caras validas" required=""/>
                        </div> 
                        <div className="sm:col-span-3">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Detalles opcionales</label>
                            <textarea id="description" rows="2" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Describa aqui cualquier inconsistencia ralacionada con los documentos recibidos"></textarea>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button type="submit" className="text-white bg-green-500 hover:text-black border border-green-500 hover:bg-green-50 focus:ring-4 focus:outline-none focus:bg-green-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Agregar Imagenes
                        </button>
                        <button type="button" className="text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
                            <svg className="w-5 h-5 mr-1 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                            Generar Radicado
                        </button>
                    </div>
                </form>
            </div>
        </section>
        </>
    );
}

export { Radicar };
