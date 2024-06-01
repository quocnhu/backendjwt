/**ES6*/ 
import dotenv from 'dotenv';
import express from 'express';
const app = express()

//External files imported to server backend
import configViewEngine from './config/viewEngine.js'
import initWebRoutes from './route/web.js'
//Initializing config
configViewEngine(app);
//Initializing dotenv
dotenv.config();
//Initializing route
initWebRoutes(app)


const port = process.env.PORT || 1176
app.listen(port, () => {
  console.log(`>>>SERVER BACKEND JWT IS LISTENING PORT: ${port}`)
})


