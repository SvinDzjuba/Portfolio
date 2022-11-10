module.exports = (app, __dirname) => {
    const router = require('express').Router();
    const path = require('path');
    
    // Main page
    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/views/index.html'));
    });

    app.use('/', router);
};