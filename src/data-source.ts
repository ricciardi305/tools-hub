import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";

const devDataSourceOptions: DataSourceOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    ssl: false,
    synchronize: false,
    logging: true,
    entities: ["src/entities/*/*.ts"],
    migrations: ["src/migrations/*.ts"],
};

const testDataSourceOptions: DataSourceOptions = {
    type: "sqlite",
    database: ":memory",
    entities: ["src/entities/*/*.ts"],
    synchronize: true,
};

let currentDataSourceOptions;

if (process.env.NODE_ENV === "test") {
    currentDataSourceOptions = testDataSourceOptions;
} else {
    currentDataSourceOptions = devDataSourceOptions;
}

export const AppDataSource = new DataSource(currentDataSourceOptions);

if (process.env.NODE_ENV !== "test") {
    AppDataSource.initialize()
        .then(() => {
            console.log("Data souce initialized");
        })
        .catch((err) => {
            console.log("Error during the Data Source initialization", err);
        });
}
