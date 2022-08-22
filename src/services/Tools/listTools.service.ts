import toolsRepository from "../../repositories/toolsRepository";

export const listToolService = async () => {
    const tools = await toolsRepository.find();
    return tools;
};
