import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepo: Repository<Cliente>,
  ) {}

  create(dto: CreateClienteDto) {
    const cliente = this.clienteRepo.create(dto);
    return this.clienteRepo.save(cliente);
  }

  findAll() {
    return this.clienteRepo.find({ relations: ['reservas'] });
  }

  async findOne(id: number) {
    const cliente = await this.clienteRepo.findOne({
      where: { id },
      relations: ['reservas'],
    });
    if (!cliente) throw new NotFoundException('Cliente no encontrado');
    return cliente;
  }

  async update(id: number, dto: UpdateClienteDto) {
    await this.findOne(id);
    await this.clienteRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const cliente = await this.findOne(id);
    return this.clienteRepo.remove(cliente);
  }
}
