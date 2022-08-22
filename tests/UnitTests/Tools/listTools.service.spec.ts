import { DataSource } from "typeorm";
import { listToolService } from "../../../src/services/Tools/listTools.service";
import { dbConnect, dbDestroy } from "../../helpers/dbHandler";

describe("Create all tools", () => {
    let connection: DataSource;

    beforeAll(async () => {
        const db = await dbConnect();

        if (db) connection = db;
    });

    afterAll(async () => {
        await dbDestroy(connection);
    });

    test("Should list all registered tools", async () => {
        const tools = await listToolService()

        expect(tools).toHaveProperty("map")
    });
});