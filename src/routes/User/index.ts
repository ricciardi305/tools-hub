import { Router } from "express";
import { UserController } from "../../controllers/User";

const userRoutes = Router();

userRoutes.post("", UserController.store);
userRoutes.post("/login", UserController.login);

export default userRoutes;
