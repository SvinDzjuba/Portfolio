const express = require('express');
const app = express();

require('./routes/routes')(app, __dirname);

// Port listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});