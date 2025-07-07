import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reserva } from '../../modules/reserva/reserva.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  telefono: string;

  @Column({ nullable: true })
  documento: string;

  @OneToMany(() => Reserva, reserva => reserva.cliente)
  reservas: Reserva[];
}
