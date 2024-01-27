import React from "react";
import { MenuConsultas } from "./menu-consultas";
import { PDFViewer } from "../PDFVisor/PDFVisor";

function Consultas() {
  return (
    <>
      <MenuConsultas />
      <section className="bg-white dark:bg-gray-900 flex justify-around ">
        <div className="w-2/5 grid-rows-2">
          <section className="bg-white dark:bg-gray-900 border-solid border-4 border-grey-400 mx-10 my-2">
            <div className="px-8 py-1 mx-auto lg:py-1">
              <div className="grid gap-2 mb-4 sm:grid-cols-2 sm:gap-2 sm:mb-1">
                <div className="sm:col-span-1"></div>
              </div>

              <form action="#">
                <div className="grid gap-1 mt-1 sm:grid-cols-2 sm:gap-2 sm:mb-3">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Numero de Radicado
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value=""
                      placeholder="Numero de radicado"
                      required=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="brand"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Fecha de ingreso
                    </label>
                    <input
                      type="date"
                      name="brand"
                      id="brand"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value="Fecha actual"
                      placeholder="Product brand"
                      required=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Remitente
                    </label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      value=""
                      placeholder="Pepito Perez"
                      required=""
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Tramite
                    </label>
                    <select
                      id="category"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option selected="">Constitución</option>
                      <option value="TV">Nombramientos</option>
                      <option value="PC">Cancelación</option>
                      <option value="GA">Renovación</option>
                      <option value="PH">Reformas</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-center space-x-4 mb-1">
                  <button
                    type="submit"
                    className="h-8 text-white bg-green-500 hover:text-black border border-green-500 hover:bg-green-50 focus:ring-4 focus:outline-none focus:bg-green-50 font-small rounded-lg text-sm px-5 py-2.0 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Consultar
                  </button>
                  <button
                    type="button"
                    className="h-8 text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-small rounded-lg text-sm px-5 py-2.5 text-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                  >
                    <svg
                      className="w-5 h-5 mr-1 -ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Limpiar
                  </button>
                </div>
              </form>
            </div>
          </section>

          <section className="border-solid border-4 border-grey-400 mx-10 my-2">
            <div className="relative overflow-y-scroll overscroll-y-contain shadow-md sm:rounded-lg h-32 ">
              <h1 className="m-2">Resultado de la busqueda</h1>
              <table className="w-full text-xs text-center text-gray-500 dark:text-gray-400 table-fixed">
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
                    <th
                      scope="row"
                      className="px-1 py-1 font-medium text-gray-900 whitespace-normal dark:text-white"
                    >
                      0001
                    </th>
                    <td className="px-1 py-1">Pepito Perez</td>
                    <td className="px-1 py-1">Renovación</td>
                    <td className="px-1 py-1">fecha actual</td>
                    <td className="px-1 py-1">Hora actual</td>
                    <td className="px-1 py-1 text-center">01</td>
                    <td className="px-1 py-1">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 whitespace-normalhover:underline"
                      >
                        Eliminar
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-1 py-1 font-medium text-gray-900 whitespace-normal dark:text-white"
                    >
                      0001
                    </th>
                    <td className="px-1 py-1">Pepito Perez</td>
                    <td className="px-1 py-1">Renovación</td>
                    <td className="px-1 py-1">fecha actual</td>
                    <td className="px-1 py-1">Hora actual</td>
                    <td className="px-1 py-1 text-center">01</td>
                    <td className="px-1 py-1">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 whitespace-normalhover:underline"
                      >
                        Eliminar
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
        <div className="w-3/5 mx-8">
          <PDFViewer />
        </div>
      </section>
    </>
  );
}

export { Consultas };
