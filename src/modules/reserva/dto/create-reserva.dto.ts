import { IsDateString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaDto {
  @ApiProperty({
    example: '2025-07-10',
    description: 'Fecha de inicio de la reserva (formato ISO)',
  })
  @IsDateString()
  fechaInicio: Date;

  @ApiProperty({
    example: '2025-07-12',
    description: 'Fecha de finalización de la reserva (formato ISO)',
  })
  @IsDateString()
  fechaFin: Date;

  @ApiProperty({
    example: 1,
    description: 'ID del cliente que realiza la reserva',
  })
  @IsNumber()
  clienteId: number;

  @ApiProperty({
    example: 3,
    description: 'ID de la habitación reservada',
  })
  @IsNumber()
  habitacionId: number;
}
