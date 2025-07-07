# 🏨 API RESTful para Sistema de Reservas de Hotel

Este proyecto es una **API RESTful** desarrollada con [NestJS](https://nestjs.com/) y [TypeORM](https://typeorm.io/) que permite gestionar las operaciones de un sistema de reservas de hotel. Implementa buenas prácticas de estructura modular, validaciones, manejo de errores, y relaciones entre entidades usando PostgreSQL como base de datos.

---

## ✅ Funcionalidades Principales

- 📋 Gestión de **Clientes**
- 🛏️ Gestión de **Habitaciones**
- 🏷️ Gestión de **Tipos de habitación**
- 📆 Gestión de **Reservas**
- ✅ Validaciones robustas con `class-validator`
- 🔄 Transformaciones automáticas con `class-transformer`
- ⚠️ Manejo centralizado de errores con `HttpException` y `HttpStatus`
- 📚 Documentación automática con Swagger
- 🔁 Pruebas de endpoints con Postman

---

## 🛠️ Tecnologías

| Herramienta | Descripción |
|-------------|-------------|
| NestJS | Framework Node.js para construir aplicaciones escalables |
| TypeORM | ORM para manejar bases de datos |
| PostgreSQL | Base de datos relacional |
| class-validator | Validación de datos |
| class-transformer | Transformación de datos DTO ↔ Entidades |
| Swagger | Documentación de la API |

---

## ⚙️ Requisitos

- Node.js (v18+ recomendado)
- PostgreSQL
- npm o yarn

---

## 📁 Estructura del Proyecto

```
src/
├── cliente/               # Módulo Cliente (entidad, servicio, controlador, DTOs)
├── habitacion/            # Módulo Habitación
├── reserva/               # Módulo Reserva
├── tipo-habitacion/       # Módulo TipoHabitacion
├── common/                # Filtros globales, interceptores, pipes personalizados
├── app.module.ts          # Módulo principal de la app
└── main.ts                # Punto de entrada
```

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/ximena2171020/api-reservas-hotel.git
cd api-reservas-hotel
```

2. Instala las dependencias:

```bash
npm install
```


---

## 🚀 Ejecutar el servidor

```bash
npm run start:dev
```

Por defecto, el servidor correrá en `http://localhost:3000`.

---

## 🔍 Documentación Swagger

Accede a la documentación interactiva de la API:

```
http://localhost:3000/api
```

Aquí puedes probar los endpoints, ver las validaciones y estructuras de los DTOs, y generar peticiones fácilmente.

---

## 📬 Endpoints principales

- `GET /clientes` - Listar clientes
- `POST /clientes` - Crear cliente
- `GET /habitaciones` - Listar habitaciones
- `POST /habitaciones` - Crear habitación
- `POST /reservas` - Crear reserva
- `GET /reservas` - Listar reservas
- `GET /tipo-habitacion` - Tipos disponibles

*(Y muchos más)*

---

## 🧪 Pruebas con Postman

Se incluye una colección exportada (`postman_collection.json`) con pruebas para:

- Crear clientes, habitaciones, reservas
- Actualizar y eliminar
- Consultar relaciones entre entidades

---

## 📌 Recomendaciones

- Desactivar `synchronize: true` en producción.
- Implementar autenticación (JWT) para rutas protegidas.
- Agregar paginación y filtros a los listados.
- Añadir logs y control de errores globales más robustos.

---

## 🧑‍💻 Autor

**Ximena Arango Benitez**  
Estudiante de Análisis y Desarrollo de Software  

---


## 📝 Notas del Proyecto

- Este sistema fue construido con una estructura limpia, separando responsabilidades por módulos.
- Se aplicaron buenas prácticas de desarrollo backend como el uso de DTOs, decoradores, y servicios desacoplados.
- Se utilizaron relaciones `OneToMany` y `ManyToOne` en TypeORM para reflejar correctamente las asociaciones entre entidades como cliente, reserva y habitación.
- Swagger permite documentar automáticamente los endpoints, lo que facilita mucho las pruebas y la integración.
- Es una base sólida para un proyecto más grande, como un sistema de reservas completo con autenticación, roles y dashboard administrativo.
- Ideal para presentaciones académicas, pruebas técnicas o proyectos en entornos reales de desarrollo backend.

---
