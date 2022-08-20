import { Request, Response } from "express";
import { createToolService } from "../../services/Tools/createTool.service";

export class ToolController {
    static async store(req: Request, res: Response) {
        const { title, link, description, tags } = req.body;

        const tool = await createToolService({
            title,
            link,
            description,
            tags,
        });

        return res.status(200).json(tool);
    }
}
