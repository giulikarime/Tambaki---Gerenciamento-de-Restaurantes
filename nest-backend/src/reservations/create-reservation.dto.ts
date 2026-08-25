import { IsDateString, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateReservationDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  phone!: string;

  @IsInt()
  @Min(1)
  quantityPeople!: number;

  @IsDateString()
  startsAt!: string;

  @IsDateString()
  endsAt!: string;

  @IsInt()
  @IsNotEmpty()
  tableId!: number;
}