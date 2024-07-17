import { IsEmail, IsNumber } from 'class-validator';

export class SearchDto {
  @IsEmail()
  email: string;

  @IsNumber()
  number?: string;
}
