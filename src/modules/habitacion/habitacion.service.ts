import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Habitacion } from './habitacion.entity';
import { CreateHabitacionDto } from './dto/create-habitacion.dto';
import { UpdateHabitacionDto } from './dto/update-habitacion.dto';
import { TipoHabitacion } from '../tipo-habitacion/tipo-habitacion.entity';

@Injectable()
export class HabitacionService {
  constructor(
    @InjectRepository(Habitacion)
    private habitacionRepo: Repository<Habitacion>,

    @InjectRepository(TipoHabitacion)
    private tipoRepo: Repository<TipoHabitacion>,
  ) {}

  async create(dto: CreateHabitacionDto) {
    const tipo = await this.tipoRepo.findOneBy({ id: dto.tipoId });
    if (!tipo) throw new NotFoundException('Tipo no encontrado');

    const nueva = this.habitacionRepo.create({ ...dto, tipo });
    return this.habitacionRepo.save(nueva);
  }

  findAll() {
    return this.habitacionRepo.find({ relations: ['tipo', 'reservas'] });
  }

  async findOne(id: number) {
    const habitacion = await this.habitacionRepo.findOne({
      where: { id },
      relations: ['tipo', 'reservas'],
    });
    if (!habitacion) throw new NotFoundException('Habitación no encontrada');
    return habitacion;
  }

  async update(id: number, dto: UpdateHabitacionDto) {
    const habitacion = await this.findOne(id);
    if (dto.tipoId) {
      const tipo = await this.tipoRepo.findOneBy({ id: dto.tipoId });
      if (!tipo) throw new NotFoundException('Tipo no encontrado');
      habitacion.tipo = tipo;
    }
    Object.assign(habitacion, dto);
    return this.habitacionRepo.save(habitacion);
  }

  remove(id: number) {
    return this.habitacionRepo.delete(id);
  }
}
