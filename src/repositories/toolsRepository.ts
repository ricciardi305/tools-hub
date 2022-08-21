import { AppDataSource } from "../data-source";
import { Tool } from "../entities/Tools";

const toolsRepository = AppDataSource.getRepository(Tool);

export default toolsRepository;
