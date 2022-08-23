import { AppError } from "../../errors";
import { UserCreation } from "../../interfaces/Users";
import userRepository from "../../repositories/usersRepository";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export const loginService = async ({ email, password }: UserCreation) => {
    const foundUser = await userRepository.findOneBy({ email });

    if (!foundUser) {
        throw new AppError(404, "Invalid email or passowrd");
    }

    const verifyPassword = bcrypt.compareSync(password, foundUser.password);

    if (!verifyPassword) {
        throw new AppError(404, "Invalid email or passowrd");
    }

    const token = jwt.sign(
        {
            id: foundUser.id,
        },
        process.env.TOKEN_KEY as string,
        { expiresIn: "24h" }
    );

    return { AccessToken: token };
};
