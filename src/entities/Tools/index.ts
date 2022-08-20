import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tool {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column({ nullable: false, length: 128 })
    title: string;

    @Column({ nullable: false, length: 256 })
    link: string;

    @Column({ type: "text", nullable: false })
    description: string;

    @Column({ nullable: false, array: true })
    tags: string;

    constructor(
        title: string,
        link: string,
        description: string,
        tags: string
    ) {
        this.title = title;
        this.link = link;
        this.description = description;
        this.tags = tags;
    }
}
