import "dotenv/config";
import "reflect-metadata";
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import AppDataSource from './DataSource'
import Student from "./models/Student";

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running att https://localhost:${port}`);
});
