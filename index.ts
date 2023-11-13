import express, { NextFunction } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use('/api/country', require('./routes/country.routes'));

// Catch unauthorised errors
app.use(function (err: Error, req: any, res: any, next: NextFunction) {
    console.error(err? err : 'Unauthorised errors');

    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({ message: err.name + ': ' + err.message });
    } else {
      next(err);
    }
  });
  
  // Catch general errors
  app.use(function (err: Error, req: any, res: any, next: NextFunction) {
    console.error(err? err : 'Unknown error');
    res.status(500).json();
  });

app.listen(3000, () => {
    console.log("Server running on port 3000");
})


export default app;

