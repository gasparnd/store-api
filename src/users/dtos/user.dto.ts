import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'the email of user' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty({ description: 'the password of the user' })
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'the role of the user' })
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
