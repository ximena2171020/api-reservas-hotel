import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './reserva.entity';
import { Cliente } from '../cliente/cliente.entity';
import { Habitacion } from '../habitacion/habitacion.entity';
import { ReservaController } from './reserva.controller';
import { ReservaService } from './reserva.service';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva, Cliente, Habitacion])],
  controllers: [ReservaController],
  providers: [ReservaService],
})
export class ReservaModule {}
