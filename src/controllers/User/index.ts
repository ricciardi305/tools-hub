import { Request, Response } from "express";
import { createUserService } from "../../services/Users/createUser.service";
import { loginService } from "../../services/Users/login.service";

export class UserController {
    static async store(req: Request, res: Response) {
        const { email, password } = req.body;

        const user = await createUserService({ email, password });

        return res.status(201).json(user);
    }

    static async login(req: Request, res: Response) {
        const { email, password } = req.body;

        const token = await loginService({ email, password });

        return res.status(200).json(token);
    }
}
