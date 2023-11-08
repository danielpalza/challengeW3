import express from 'express';

const app = express();


app.use('/api/country', require('./routes/country.routes'));


app.listen(3000, () => {
    console.log("Server running on port 3000");
})



