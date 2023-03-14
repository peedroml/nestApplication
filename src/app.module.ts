import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

//Creamos un modulo y le pasamos el controlador que acabamos de crear.
@Module({
    controllers:[AppController]
})

export class AppModule{ }