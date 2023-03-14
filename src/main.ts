import { NestFactory } from "@nestjs/core";
import {AppModule} from "./app.module"


async function boostrap() {
    //Creamos una instancia de nuestra app Nest.
    const app = await NestFactory.create(AppModule);

    //Declaramos que nuestra app empiece a escuchar peticiones por
    //un puerto de nuestra maquina en particular.
    await app.listen(3000);

}

//Despues llamamos a la funcion creada.
//Esta funcion creara una instancia y empezará a escuchar el tráfico entrante.
boostrap();


//npx ts-node-dev src/main.ts <- Ejecutar para iniciar el servidor