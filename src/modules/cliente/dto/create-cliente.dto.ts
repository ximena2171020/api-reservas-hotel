import { IsEmail, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({ example: 'Ximena Arango', description: 'Nombre completo del cliente' })
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'ximena@example.com', description: 'Correo electrónico del cliente' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '3104567890', description: 'Número de teléfono del cliente' })
  @IsNotEmpty()
  @IsString()
  telefono: string;

  @ApiProperty({ example: '123456789', description: 'Número de documento del cliente' })
  @IsNotEmpty()
  @IsString()
  documento: string;
}
