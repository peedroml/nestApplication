import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { MensajeService } from "./mensaje.service";
import { MensajeRepository } from "./mensaje.repository";

//Creamos un modulo y le pasamos el controlador que hemos creado.
@Module({
    controllers:[AppController],
    //Aquí se especificarán los métodos que pueden ser usados como dependencias en 
    //otras clases.
    providers: [MensajeService,MensajeRepository]
})

export class AppModule{ }