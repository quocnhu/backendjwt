/**ES6 having some */ 
import dotenv from 'dotenv';
import express from 'express';
const app = express()
//External files imported to server backend
import initWebRoutes from './route/web.js'
import configViewEngine from './config/viewEngine.js'
configViewEngine(app);

//Call dotenv after app-express
dotenv.config();
const port = process.env.PORT || 1176
//Root routes
initWebRoutes(app)
app.listen(port, () => {
  console.log(`>>>SERVER BACKEND JWT IS LISTENING PORT: ${port}`)
})


