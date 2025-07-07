import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoHabitacion } from './tipo-habitacion.entity';
import { CreateTipoHabitacionDto } from './dto/create-tipo-habitacion.dto';
import { UpdateTipoHabitacionDto } from './dto/update-tipo-habitacion.dto';

@Injectable()
export class TipoHabitacionService {
  constructor(
    @InjectRepository(TipoHabitacion)
    private tipoRepo: Repository<TipoHabitacion>,
  ) {}

  create(dto: CreateTipoHabitacionDto) {
    const tipo = this.tipoRepo.create(dto);
    return this.tipoRepo.save(tipo);
  }

  findAll() {
    return this.tipoRepo.find({ relations: ['habitaciones'] });
  }

  async findOne(id: number) {
    const tipo = await this.tipoRepo.findOne({
      where: { id },
      relations: ['habitaciones'],
    });
    if (!tipo) throw new NotFoundException('Tipo de habitación no encontrado');
    return tipo;
  }

  async update(id: number, dto: UpdateTipoHabitacionDto) {
    await this.findOne(id);
    await this.tipoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const tipo = await this.findOne(id);
    return this.tipoRepo.remove(tipo);
  }
}
