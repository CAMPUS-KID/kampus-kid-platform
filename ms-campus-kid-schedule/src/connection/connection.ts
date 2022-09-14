import { DataSource } from "typeorm";
import Student from "../models/student";

const DBGrade = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    entities: [
        Student,
    ],
    synchronize: true,
    logging: false
});

DBGrade.initialize();

export default DBGrade;