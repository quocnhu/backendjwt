import {handleCreateNewUser,handleDeleteUser,handleUserPage,getUserUpdatePage,handleUpdateUser} from "../../src/controller/homeController.js";
// import express from 'express';
import express from 'express';
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/',handleUserPage)
    router.post('/create-user',handleCreateNewUser)
    router.post('/delete-user/:id',handleDeleteUser)
    router.get('/updatePage/:id',getUserUpdatePage)
    router.post('/handleUpdateUser',handleUpdateUser)

    return (app.use('/', router))
}
// export default initWebRoutes;
export default initWebRoutes;


// router-v1
// router-v2