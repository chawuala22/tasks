import {
  IsString,
  IsBoolean,
  IsDateString,
  ValidateNested,
  IsArray,
  IsInt,
  Min,
  ArrayNotEmpty,
  IsOptional,
  IsNotEmpty,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

class AssociatedPersonDto {
  @IsString()
  @MinLength(5)
  full_name: string;

  @IsInt()
  @Min(18)
  age: number;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  skills: string[];
}

export class TaskBaseDto {
  @IsString()
  name_task: string;

  @IsString()
  deadline: string;

  @IsBoolean()
  state: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AssociatedPersonDto)
  associated_persons: AssociatedPersonDto[];
}

export class CreateTaskDto extends TaskBaseDto {
  @IsOptional()
  @IsString()
  date_completed?: string;
}

class UpdateAssociatedPersonDto {
  @IsOptional()
  @IsString()
  full_name?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  age?: number;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  skills?: string[];
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  name_task?: string;

  @IsOptional()
  @IsString()
  deadline?: string;

  @IsOptional()
  @IsString()
  date_completed?: string;

  @IsOptional()
  @IsBoolean()
  state?: boolean;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateAssociatedPersonDto)
  associated_persons?: UpdateAssociatedPersonDto[];
}
