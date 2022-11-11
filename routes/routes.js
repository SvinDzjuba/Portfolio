module.exports = (app, __dirname) => {
    const router = require('express').Router();
    const path = require('path');

    // ----------
    const mainPageController = require('../controllers/mainPageController');
    
    // Main page
    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/views/layout_en.html'), { content: 'fdsfsd' });
    });
    router.get('/en', (req, res) => {
        res.sendFile(path.join(__dirname + '/views/layout_en.html'), { content: mainPageController.mainPageEn });
    });
    router.get('/et', (req, res) => {
        res.sendFile(path.join(__dirname + '/views/layout_et.html'), { content: mainPageController.mainPageEt });
    });

    app.use('/', router);
};