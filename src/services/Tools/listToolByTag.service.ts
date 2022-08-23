import { AppError } from "../../errors";
import toolsRepository from "../../repositories/toolsRepository";

export const listToolsByTag = async (tag: any) => {
    const tools = await toolsRepository.find();

    const filteredToolsByTag = tools.filter((value) =>
        value.tags.includes(tag)
    );

    if (filteredToolsByTag.length == 0) {
        throw new AppError(404, "There are no tools with the given tag");
    }

    return filteredToolsByTag;
};
