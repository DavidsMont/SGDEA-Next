import React, { useState } from 'react';

function Login() {
  return (
    <section className="container contenedor-login">
      <div className="row mh-100 login">
        <div className="col credenciales">
          <img
            className="container logo-candado"
            src="https://i.imgur.com/DVEh1vC.png"
            alt="logo-usuario"
          />
          <h5>Autenticación</h5>
          <br />
          <h6>Por favor introduzca sus credenciales para ingresar</h6>
          <form action="http://localhost:3001/auth" method='POST'>
          <div className="label">
            <table className="tabla_login">
              <tbody>
                <tr>
                  <td>
                    <label htmlFor="user">Usuario</label>
                  </td>
                  <td>
                    <input
                      className="txt_login"
                      type="text"
                      id="user"
                      name="user"
                      placeholder='usuario'
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="pass">Contraseña</label>
                  </td>
                  <td>
                    <input
                      className="txt_login"
                      type="password"
                      id="pass"
                      name="pass"
                      placeholder='password'
                      required
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="btn_login text-white font-bold py-2 px-4 rounded" type="submit" name="login" value="ENTRAR">
            ENTRAR
          </button>
            <div>
              <button type="button">He olvidado mi Contraseña</button>
            </div>
            <a href="http://localhost:3001/registrar">Registrarse.</a>
          </form>
        </div>
      </div>
    </section>
  );
}

export {Login};
