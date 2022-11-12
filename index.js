const express = require('express');
const path = require('path');
const app = express();

const dir = path.join(__dirname, 'public')
app.use(express.static(dir));

// View engine configuration
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Routes
require('./routes/routes')(app, __dirname);

// Port listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// https://www.pinterest.com/pin/210402613823122396/?mt=login