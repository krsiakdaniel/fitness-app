import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join(__dirname, '../../', '.env')});

const app: Express = express();
const port = process.env.BACKEND_PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});