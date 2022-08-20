import { Express } from "express";
import toolRoutes from "./Tools";

export const useRoutes = (app: Express) => {
    app.use("/tools", toolRoutes);
};
