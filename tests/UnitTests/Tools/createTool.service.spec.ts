import { DataSource } from "typeorm";
import { createToolService } from "../../../src/services/Tools/createTool.service";
import { dbConnect, dbDestroy } from "../../helpers/dbHandler";

describe("Create a tool", () => {
    let connection: DataSource;

    beforeAll(async () => {
        const db = await dbConnect();

        if (db) connection = db;
    });

    afterAll(async () => {
        await dbDestroy(connection);
    });

    test("Should insert the information of the new tool in the database", async () => {
        const title = "hotel";
        const link = "https://github.com/typicode/hotel";
        const description =
            "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.";
        const tags = String([
            "node",
            "organizing",
            "webapps",
            "domain",
            "developer",
            "https",
            "proxy",
        ]);

        const toolData = { title, link, description, tags };
        const newTool = await createToolService(toolData);

        expect(newTool.title).toBe(toolData.title);
        expect(newTool.link).toBe(toolData.link);
        expect(newTool.description).toBe(toolData.description);
        expect(newTool.tags).toBe(toolData.tags);
    });
});
