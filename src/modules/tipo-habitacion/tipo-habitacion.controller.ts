import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TipoHabitacionService } from './tipo-habitacion.service';
import { CreateTipoHabitacionDto } from './dto/create-tipo-habitacion.dto';
import { UpdateTipoHabitacionDto } from './dto/update-tipo-habitacion.dto';

@Controller('tipos-habitacion')
export class TipoHabitacionController {
  constructor(private readonly service: TipoHabitacionService) {}

  @Post()
  create(@Body() dto: CreateTipoHabitacionDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTipoHabitacionDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
