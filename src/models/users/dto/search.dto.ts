import { IsEmail, IsOptional, Matches } from 'class-validator';

export class SearchDto {
  @IsEmail()
  email: string;

  @IsOptional()
  @Matches(/^\d{2}-\d{2}-\d{2}$/, {
    message: 'Number must be in the format XX-XX-XX',
  })
  number?: string;
}
