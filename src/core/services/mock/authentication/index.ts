import { faker } from '@faker-js/faker';
import { AccessGroupEnum, IUser } from "@/@types/user.types";

/**
 * makeUser works as an User factory
 * generating an user by its access group
 * @returns IUser
 */
export const makeUser = (accessGroup: AccessGroupEnum): IUser => {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    accessGroup: accessGroup,
    balance: Number(faker.finance.amount()),
    token: faker.datatype.uuid()
  }
}