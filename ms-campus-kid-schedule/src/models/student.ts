import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    public id: number;
    @Column()
    public email: string;
    @Column()
    public name: string;
    @Column()
    public facultyId: string;
}
export default Student;