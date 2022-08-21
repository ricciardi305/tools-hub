import { User } from "../../entities/Users";

export type UserCreation = Omit<User, "id">;
