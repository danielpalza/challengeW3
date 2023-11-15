import express, { NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const PORT= process.env.PORT || 4000

dotenv.config();
const app = express();

// Configuración básica de CORS
app.use(cors());

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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})


export default app;

