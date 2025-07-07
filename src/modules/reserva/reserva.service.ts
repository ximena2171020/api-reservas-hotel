import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from './reserva.entity';
import { Cliente } from '../cliente/cliente.entity';
import { Habitacion } from '../habitacion/habitacion.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepo: Repository<Reserva>,

    @InjectRepository(Cliente)
    private readonly clienteRepo: Repository<Cliente>,

    @InjectRepository(Habitacion)
    private readonly habitacionRepo: Repository<Habitacion>,
  ) {}

  async create(dto: CreateReservaDto) {
    const cliente = await this.clienteRepo.findOneBy({ id: dto.clienteId });
    const habitacion = await this.habitacionRepo.findOneBy({
      id: dto.habitacionId,
    });

    if (!cliente) throw new NotFoundException('Cliente no encontrado');
    if (!habitacion) throw new NotFoundException('Habitación no encontrada');

    const reserva = new Reserva();
    reserva.fechaInicio = new Date(dto.fechaInicio).toISOString().split('T')[0];
    reserva.fechaFin = new Date(dto.fechaFin).toISOString().split('T')[0];
    reserva.cliente = cliente;
    reserva.habitacion = habitacion;

    try {
      return await this.reservaRepo.save(reserva);
    } catch (error) {
      throw new InternalServerErrorException('Error al guardar la reserva');
    }
  }

  async findAll() {
    return this.reservaRepo.find({
      relations: ['cliente', 'habitacion'],
      order: { id: 'ASC' },
    });
  }

  async findOne(id: number) {
    const reserva = await this.reservaRepo.findOne({
      where: { id },
      relations: ['cliente', 'habitacion'],
    });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    return reserva;
  }

  async update(id: number, dto: UpdateReservaDto) {
    const reserva = await this.findOne(id);

    if (dto.fechaInicio)
      reserva.fechaInicio = new Date(dto.fechaInicio).toISOString().split('T')[0];
    if (dto.fechaFin)
      reserva.fechaFin = new Date(dto.fechaFin).toISOString().split('T')[0];

    if (dto.clienteId) {
      const cliente = await this.clienteRepo.findOneBy({ id: dto.clienteId });
      if (!cliente) throw new NotFoundException('Cliente no encontrado');
      reserva.cliente = cliente;
    }

    if (dto.habitacionId) {
      const habitacion = await this.habitacionRepo.findOneBy({
        id: dto.habitacionId,
      });
      if (!habitacion)
        throw new NotFoundException('Habitación no encontrada');
      reserva.habitacion = habitacion;
    }

    try {
      return await this.reservaRepo.save(reserva);
    } catch (error) {
      throw new InternalServerErrorException('Error al actualizar la reserva');
    }
  }

  async remove(id: number) {
    const reserva = await this.findOne(id);
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    return this.reservaRepo.remove(reserva);
  }
}
