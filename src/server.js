/**ES6 having some */ 
const dotenv = require('dotenv');
const express= require ('express');
const app = express()
//External files imported to server backend
const initWebRoutes= require( './route/web.js')
const configViewEngine= require( './config/viewEngine.js')
configViewEngine(app);

//Call dotenv after app-express
dotenv.config();
const port = process.env.PORT || 1176
//Root routes
initWebRoutes(app)
app.listen(port, () => {
  console.log(`>>>SERVER BACKEND JWT IS LISTENING PORT: ${port}`)
})


