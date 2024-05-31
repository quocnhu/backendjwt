const express =require( 'express');

const configViewEngine = (app) => {
    //STATIC FILE 
    app.use(express.static('./src/public'))
    //VIEW ENGINE
    app.set('view engine', 'ejs')
    app.set('views', './src/views')
}
module.exports= configViewEngine;