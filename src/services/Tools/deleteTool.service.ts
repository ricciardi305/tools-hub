import { AppError } from "../../errors";
import toolsRepository from "../../repositories/toolsRepository";

export const deleteToolService = async (id: string) => {
    const tool = await toolsRepository.findOneBy({ id });

    if (tool) {
        await toolsRepository.delete(tool.id);

        return true;
    }

    throw new AppError(404, "Tool not found");
};
