import { Express } from "express";
import toolRoutes from "./Tools";
import userRoutes from "./User";

export const useRoutes = (app: Express) => {
    app.use("/tools", toolRoutes);
    app.use("/users", userRoutes);
};
