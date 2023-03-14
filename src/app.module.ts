import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

//Creamos un modulo y le pasamos el controlador que hemos creado.
@Module({
    controllers:[AppController]
})

export class AppModule{ }