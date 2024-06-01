const homePage =(req, res) => {
    return res.render('home.ejs')
}

const welcome =(req, res) => {
    return res.send('Hello world')
}

export {homePage, welcome}