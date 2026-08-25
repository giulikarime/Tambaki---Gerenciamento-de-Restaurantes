import { IsEnum, IsInt, IsNotEmpty } from 'class-validator';
import { ServiceType } from '../../generated/prisma/client';

export class CreateOrderDto {
  @IsInt()
  @IsNotEmpty()
  tableId!: number;

  @IsEnum(ServiceType, { message: 'service_type inválido. Use: Mesa ou Balcao.' })
  service_type!: ServiceType;
}