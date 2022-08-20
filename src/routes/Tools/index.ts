import { Router } from "express";
import { ToolController } from "../../controllers/Tool";

const toolRoutes = Router();

toolRoutes.post("", ToolController.store);

export default toolRoutes;
