import express, { Request, Response, NextFunction } from 'express';
import router from './routes';
import bodyParser from 'body-parser';

const app = express();

const port: number = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.info(`${req.method} ${req.originalUrl}`);
  next();
})

app.use('/', router);

app.listen(port, () => console.log(`server started on: ${port}`))