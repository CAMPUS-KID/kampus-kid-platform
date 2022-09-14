import "dotenv/config";
import "reflect-metadata";
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import DBGrade from './connection/connection'

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(process.env.DB_PASS);
  console.log(`⚡️[server]: Server is running att https://localhost:${port}`);
});
