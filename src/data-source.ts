import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";

const devDataSourceOptions: DataSourceOptions = {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: 5432,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    ssl: false,
    synchronize: false,
    logging: true,
    entities: ["src/entities/*/*.ts"],
    migrations: ["src/migrations/*.ts"],
};

const testDataSourceOptions: DataSourceOptions = {
    type: "sqlite",
    database: "db.sqlite3",
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
