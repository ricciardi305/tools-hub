import { DataSource } from "typeorm";
import { createToolService } from "../../../src/services/Tools/createTool.service";
import { listToolsByTag } from "../../../src/services/Tools/listToolByTag.service";
import { dbConnect, dbDestroy } from "../../helpers/dbHandler";

describe("Lists all tools that have the tag", () => {
    let connection: DataSource;

    beforeAll(async () => {
        const db = await dbConnect();

        if (db) connection = db;
    });

    afterAll(async () => {
        await dbDestroy(connection);
    });

    test("Should list all registered tools with given tag", async () => {
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

        await createToolService(dataTool)

        const filteredTool = await listToolsByTag("web");

        expect(filteredTool).toHaveProperty("map");
    });
});
