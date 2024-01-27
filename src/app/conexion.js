// // 1 Invocamos a express
// const express = require('express');
// const app = express();
// const path = require('path');

// // 2 Seteamos urlencoded para capturar los datos del formulario
// app.use(express.urlencoded({extended:false}));
// app.use(express.json());

// // 3 Invocamos a dotnev
// const dotenv = require('dotenv');
// dotenv.config({path:'../../env/.env'});

// // 4 Seteamos el directorio public
// app.use('/resources', express.static('public'));
// app.use('resources', express.static(__dirname + '/public'));

// // 5 Establecemos el motor de plantillas ejs
// app.set('view engine', 'ejs');

// // 6 Invocamos a bcryptjs
// const bcryptjs = require('bcryptjs');

// // 7 Variables de session
// const session = require('express-session');
// app.use(session({
//     secret:'secret',
//     resave:true,
//     saveUninitialized:true
// }));

// // 8 Invocamos al modulo de conexion de la BD
// const connection = require('../../database/db');
// const { error } = require('console');

// // 9 Estableciendo las rutas
// app.get('/', (req, res)=>{
//   res.sendFile(path.join(__dirname,'./componentes/login/index.js')); 
//   })

//   app.get('/login', (req, res)=>{
//     res.render(path.join(__dirname, 'componentes/login/index2'));
//     })
  
//   app.get('/registro', (req, res)=>{
//     res.render(path.join(__dirname, 'componentes/registro/registro')); 
//     })

// // 10 Registro
// app.post('/registro', async (req, res)=>{
//   const user = req.body.user;
//   const name = req.body.name;
//   const rol = req.body.rol;
//   const pass = req.body.pass;
//   let passwordHassh = await bcryptjs.hash(pass, 8);
//   connection.query('INSERT INTO usuarios SET ?', {user:user, name:name, rol:rol, pass:passwordHassh}, async(error, results)=>{
//     if(error){
//       console.log(error);
//     } else {
//       res.send('ALTA EXITOSA')
//     }
//   });
// })

// // 11 autenticación
// app.post('/auth', async (req, res)=>{
//   const user = req.body.user;
//   const pass = req.body.pass;
//   let passwordHassh = await bcryptjs.hash(pass, 8);
//   if(user && pass){
//     connection.query('SELECT * FROM usuarios WHERE USER = ?', [user], async (error, results)=>{
//       if(results.length == 0 || !(await bcryptjs.compare(pass, results[0].pass))){
//         res.send('USUARIO Y/O PASSWORD INCORRECTAS');
//       } else{
//         res.send('LOGIN CORRECTO');
//       }
//     })
//   }
// })

// app.listen(3001, (req, res)=>{
//   console.log('servidor funcionando');
// })