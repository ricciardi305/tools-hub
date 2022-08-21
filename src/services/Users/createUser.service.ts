import { User } from "../../entities/Users";
import { AppError } from "../../errors";
import { UserCreation } from "../../interfaces/Users/index";
import userRepository from "../../repositories/usersRepository";
import bcrypt from "bcrypt";

export const createUserService = async ({ email, password }: UserCreation) => {
    const emailAlreadyExists = await userRepository.findOneBy({ email });

    if (emailAlreadyExists) {
        throw new AppError(400, "This email already exists");
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    const user = new User(email, (password = hashPassword));

    await userRepository.save(user);

    return user;
};
