import { DataSource } from "typeorm";
import { createToolService } from "../../../src/services/Tools/createTool.service";
import { deleteToolService } from "../../../src/services/Tools/deleteTool.service";
import { dbConnect, dbDestroy } from "../../helpers/dbHandler";

describe("Delete a tool", () => {
    let connection: DataSource;

    beforeAll(async () => {
        const db = await dbConnect();

        if (db) connection = db;
    });

    afterAll(async () => {
        await dbDestroy(connection);
    });

    test("Should delete a tool by id", async () => {
        const dataTool = {
            title: "fastify",
            link: "https://www.fastify.io/",
            description:
                "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
            tags: String([
                "web",
                "framework",
                "node",
                "http2",
                "https",
                "localhost",
            ]),
        };

        const newTool = await createToolService(dataTool)

        const deleteTool = await deleteToolService(newTool.id)

        expect(deleteTool).toBeTruthy()
    });
});