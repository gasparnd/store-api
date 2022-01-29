import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'the date of order' })
  readonly date: Date;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  @ApiProperty({ description: 'the user of the order' })
  readonly user: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ description: 'the products of the order' })
  readonly products: string;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
