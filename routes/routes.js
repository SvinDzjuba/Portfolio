module.exports = (app, __dirname) => {
    const router = require('express').Router();
    const mainController = require('../controllers/mainPageController');
    
    // Main page
    router.get('/', (req, res) => {
        const header = require('../partials/en/header').header;
        const footer = require('../partials/en/footer').footer;
        res.render('main-page', {title: 'Portfolio', text: (mainController.mainPageEn).text, header: header, footer: footer});
    });
    router.get('/et', (req, res) => {
        const header = require('../partials/et/header').header;
        const footer = require('../partials/et/footer').footer;
        res.render('main-page', {title: 'Õpimapp', text: (mainController.mainPageEt).text, header: header, footer: footer});
    });

    app.use('/', router);
};
// const url = (req.url).slice(0, 3);