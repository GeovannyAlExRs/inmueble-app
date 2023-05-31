import { Users } from '@core/models/backend/users.model';

export { Users as UsersResponse } from '@core/models/backend/users.model';

export interface EmailPasswordCredentials {
  email: string;
  password: string;
}

export interface UserRequest extends Users {
  password: string;
}

export type UserCreateRequest = Omit<UserRequest, 'token' | 'id' >
