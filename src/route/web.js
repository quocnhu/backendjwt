const homeController = require("../../src/controller/homeController");
const express = require('express');

const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/',homePage)

    return (app.use('/', router))
}
module.exports= initWebRoutes;



// router-v1
// router-v2