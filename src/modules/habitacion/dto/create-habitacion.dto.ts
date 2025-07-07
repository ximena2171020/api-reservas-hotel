import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHabitacionDto {
  @ApiProperty({ example: '201', description: 'Número de la habitación' })
  @IsNotEmpty()
  @IsString()
  numero: string;

  @ApiProperty({ example: 150000, description: 'Precio por noche en COP' })
  @IsNumber()
  precioPorNoche: number;

  @ApiProperty({ example: 2, description: 'Piso donde se ubica la habitación' })
  @IsNumber()
  piso: number;

  @ApiProperty({ example: 'disponible', description: 'Estado de la habitación (disponible, ocupada, mantenimiento, etc.)' })
  @IsNotEmpty()
  @IsString()
  estado: string;

  @ApiProperty({ example: 1, description: 'ID del tipo de habitación (relación con TipoHabitacion)' })
  @IsNumber()
  tipoId: number;
}
