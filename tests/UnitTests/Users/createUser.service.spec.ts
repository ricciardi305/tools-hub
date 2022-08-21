import { DataSource } from "typeorm";
import { createUserService } from "../../../src/services/Users/createUser.service";
import { dbConnect, dbDestroy } from "../../helpers/dbHandler";

describe("Crate an user", () => {
    let connection: DataSource;

    beforeAll(async () => {
        const db = await dbConnect();

        if (db) connection = db;
    });

    afterAll(async () => {
        await dbDestroy(connection);
    });

    test("Should insert the information of the new user in the database", async () => {
        const email = "email@email.com";
        const password = "strongPassword";

        const userData = { email, password };
        const newUser = await createUserService(userData);

        expect(newUser.email).toBe(userData.email);
    });
});
