/**
 * AccessGroup:
 * Manage user access group by enum.
 */
export enum AccessGroupEnum {
  ADMIN = 1,
  MEMBER = 2,
  VIP = 3,
}

/**
 * IUser:
 * Contains main user interface.
 */
export interface IUser {
  firstName: string;
  lastName: string;
  email?: string;
  balance: number;
  accessGroup: AccessGroupEnum;
  token?: string;
}
