import { Exclude } from 'class-transformer';

export class UserEntity {
  id: string;
  firstName: string;
  lastName: string;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
