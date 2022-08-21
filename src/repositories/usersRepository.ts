import { AppDataSource } from "../data-source";
import { User } from "../entities/Users";

const userRepository = AppDataSource.getRepository(User);

export default userRepository;
