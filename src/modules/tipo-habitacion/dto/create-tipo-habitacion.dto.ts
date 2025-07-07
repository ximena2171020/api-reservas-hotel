import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTipoHabitacionDto {
  @ApiProperty({
    example: 'Suite Ejecutiva',
    description: 'Nombre o categoría del tipo de habitación',
  })
  @IsNotEmpty()
  @IsString()
  nombre: string;
}
