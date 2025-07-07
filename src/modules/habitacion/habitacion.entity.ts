import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TipoHabitacion } from '../../modules/tipo-habitacion/tipo-habitacion.entity';
import { Reserva } from '../../modules/reserva/reserva.entity';

@Entity()
export class Habitacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: string;

  @Column()
  precioPorNoche: number;

  @Column()
  piso: number;

  @Column()
  estado: string;

  @ManyToOne(() => TipoHabitacion, tipo => tipo.habitaciones, {
    onDelete: 'CASCADE',
  })
  tipo: TipoHabitacion;

  @OneToMany(() => Reserva, reserva => reserva.habitacion, {
    cascade: true,
  })
  reservas: Reserva[];
}
