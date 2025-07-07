import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

import { ClienteModule } from './modules/cliente/cliente.module';
import { TipoHabitacionModule } from './modules/tipo-habitacion/tipo-habitacion.module';
import { HabitacionModule } from './modules/habitacion/habitacion.module';
import { ReservaModule } from './modules/reserva/reserva.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: true, // ⚠️ Solo para desarrollo
      }),
      inject: [ConfigService],
    }),
    ClienteModule,
    TipoHabitacionModule,
    HabitacionModule,
    ReservaModule,
  ],
})
export class AppModule {}
