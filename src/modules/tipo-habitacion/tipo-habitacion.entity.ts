import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Habitacion } from '../../modules/habitacion/habitacion.entity';

@Entity()
export class TipoHabitacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Habitacion, habitacion => habitacion.tipo)
  habitaciones: Habitacion[];
}
