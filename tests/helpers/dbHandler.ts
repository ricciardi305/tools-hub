import { DataSource } from "typeorm";
import { AppDataSource } from "../../src/data-source";

export const dbConnect = async () => {
    try {
        const conection = await AppDataSource.initialize();
        return conection;
    } catch (err) {
        console.error("Database error", err);
    }
};

export const dbDestroy = async (connection: DataSource) => {
    if (connection) {
        await connection.dropDatabase();
        await connection.destroy();
    }
};
