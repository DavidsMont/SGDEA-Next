import React, { useState } from 'react';

function Registro () {

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
          <form action="auth" method='POST'>
            <label for="user" >username</label>
            <input type='text' name='user' required></input>
            <label for="pass" >password</label>
            <input type='password' name='pass' required></input>

            <div>
              <a href='/' className=''>cancel</a>
              <input type='submit' value="Save"></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
  }

export { Registro };
