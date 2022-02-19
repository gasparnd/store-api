import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  IsArray,
  IsDate,
  IsMongoId,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsDate()
  @IsNotEmpty()
  @ApiProperty({ description: 'the date of order' })
  readonly date: Date;

  @IsNotEmpty()
  @IsMongoId()
  @ApiProperty({ description: 'the customer of the order' })
  readonly customer: string;

  @IsNotEmpty()
  @IsArray()
  @ApiProperty({ description: 'the products of the order' })
  readonly products: string[];
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
