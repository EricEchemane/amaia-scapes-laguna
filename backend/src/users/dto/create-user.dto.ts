import { IsNotEmpty } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty({ message: 'Please provide a first name' })
  firstName: string;

  @IsNotEmpty({ message: 'Please provide a last name' })
  lastName: string;

  @IsNotEmpty({ message: 'Please provide an password' })
  password: string;
}
