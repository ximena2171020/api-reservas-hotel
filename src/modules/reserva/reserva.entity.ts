import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { Cliente } from '../../modules/cliente/cliente.entity';
import { Habitacion } from '../../modules/habitacion/habitacion.entity';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fechaInicio: string;

  @Column({ type: 'date' })
  fechaFin: string;

  @ManyToOne(() => Cliente, cliente => cliente.reservas, {
    onDelete: 'CASCADE',
  })
  cliente: Cliente;

  @ManyToOne(() => Habitacion, habitacion => habitacion.reservas, {
    onDelete: 'CASCADE',
  })
  habitacion: Habitacion;
}
