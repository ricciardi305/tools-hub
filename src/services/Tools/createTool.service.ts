import { AppDataSource } from "../../data-source";
import { Tool } from "../../entities/Tools";
import { AppError } from "../../errors/AppError";
import { ToolCreation } from "../../interfaces/Tools";

export const createToolService = async ({
    title,
    link,
    description,
    tags,
}: ToolCreation) => {
    const toolsRepository = AppDataSource.getRepository(Tool);

    try {
        const newTool = new Tool(title, link, description, tags);

        await toolsRepository.save(newTool);

        return newTool;
    } catch (err) {
        if (err instanceof AppError) {
            throw new AppError(404, "This tool already exists");
        }
    }
};
