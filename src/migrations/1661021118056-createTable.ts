import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1661021118056 implements MigrationInterface {
    name = 'createTable1661021118056'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tool" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(128) NOT NULL, "link" character varying(256) NOT NULL, "description" text NOT NULL, "tags" character varying array NOT NULL, CONSTRAINT "PK_3bf5b1016a384916073184f99b7" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "tool"`);
    }

}
