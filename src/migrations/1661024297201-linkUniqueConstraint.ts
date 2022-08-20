import { MigrationInterface, QueryRunner } from "typeorm";

export class linkUniqueConstraint1661024297201 implements MigrationInterface {
    name = 'linkUniqueConstraint1661024297201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tool" ADD CONSTRAINT "UQ_f00b86a54c34fe83631eed68275" UNIQUE ("link")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tool" DROP CONSTRAINT "UQ_f00b86a54c34fe83631eed68275"`);
    }

}
