import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ nullable: false, unique: true, length: 128 })
    email: string;

    @Column({ nullable: false, length: 128 })
    password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }
}
