import homeController from "../../src/controller/homeController";
const {homePage} = require("../controller/homeController")
import express from 'express';

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/',homePage)

    return (app.use('/', router))
}
export default initWebRoutes;



// router-v1
// router-v2