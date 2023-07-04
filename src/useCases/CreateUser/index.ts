import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PosgressUsersRepository } from "../../repositories/implementations/PostgressUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapProvider = new MailtrapMailProvider();
const postgressUsersRepository = new PosgressUsersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgressUsersRepository,
  mailtrapProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
