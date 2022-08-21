import { AppError } from "../../errors";
import { UserCreation } from "../../interfaces/Users";
import userRepository from "../../repositories/usersRepository";
import bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

export const loginService = async ({ email, password }: UserCreation) => {
    const found = await userRepository.findOneBy({ email });

    if (!found) {
        throw new AppError(404, "Invalid email or passowrd");
    }

    const verifyPassword = bcrypt.compareSync(password, found.password);

    if (!verifyPassword) {
        throw new AppError(404, "Invalid email or passowrd");
    }

    const token = jwt.sign(
        {
            id: found.id,
        },
        process.env.TOKEN_KEY as string,
        { expiresIn: "24h" }
    );

    return { AccessToken: token };
};
