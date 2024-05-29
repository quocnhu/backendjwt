import express from 'express';
// router-v1
// router-v2
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/', (req, res) => {
    return res.send('Welcome to Quoc N') //send: for string // render: for html
    })

    router.get('/abc', (req, res)=>{
        return res.send('2 route')
    })

    return (app.use('/v1', router))
}
export default initWebRoutes;
