import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Habitacion } from './habitacion.entity';
import { TipoHabitacion } from '../tipo-habitacion/tipo-habitacion.entity';
import { HabitacionController } from './habitacion.controller';
import { HabitacionService } from './habitacion.service';

@Module({
  imports: [TypeOrmModule.forFeature([Habitacion, TipoHabitacion])],
  controllers: [HabitacionController],
  providers: [HabitacionService],
})
export class HabitacionModule {}
