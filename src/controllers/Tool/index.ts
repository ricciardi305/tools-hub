import { Request, Response } from "express";
import { createToolService } from "../../services/Tools/createTool.service";
import { deleteToolService } from "../../services/Tools/deleteTool.service";
import { listToolsByTag } from "../../services/Tools/listToolByTag.service";
import { listToolService } from "../../services/Tools/listTools.service";

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

    static async index(req: Request, res: Response) {
        const { tag } = req.query;

        if (tag) {
            const tools = await listToolsByTag(tag);

            return res.status(200).json(tools);
        }

        const tools = await listToolService();

        return res.status(200).json(tools);
    }

    static async delete(req: Request, res: Response) {
        const { id } = req.params;

        await deleteToolService(id);

        return res.status(200).json({ messsage: "Tool deleted sucessfully" });
    }
}
