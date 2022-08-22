import { Router } from "express";
import { ToolController } from "../../controllers/Tool";
import { validateTokenMiddleware } from "../../middlewares/validateToken.middleware";

const toolRoutes = Router();

toolRoutes.post("", validateTokenMiddleware, ToolController.store);
toolRoutes.get("", ToolController.index);
toolRoutes.delete("/:id", validateTokenMiddleware, ToolController.delete);

export default toolRoutes;
