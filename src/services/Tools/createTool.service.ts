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

    const toolAlreadyExists = await toolsRepository.findOneBy({ link });

    if (toolAlreadyExists) {
        throw new AppError(404, "This tool already exists");
    }

    const newTool = new Tool(title, link, description, tags);

    await toolsRepository.save(newTool);

    return newTool;
};
