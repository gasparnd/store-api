import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/swagger';

export class CreateSkillDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly color: string;
}
export class UpdateSkillDto extends PartialType(CreateSkillDto) {}
