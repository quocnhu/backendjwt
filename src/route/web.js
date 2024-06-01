import {homePage,welcome} from "../../src/controller/homeController.js";
// import express from 'express';
import express from 'express';
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/',homePage)
    router.get('/wc',welcome)

    return (app.use('/', router))
}
// export default initWebRoutes;
export default initWebRoutes;


// router-v1
// router-v2