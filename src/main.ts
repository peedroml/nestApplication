import { NestFactory } from "@nestjs/core";
import { AppModule } from "./mensajes/app.module";
import { ValidationPipe } from "@nestjs/common";


async function boostrap() {
    //Creamos una instancia de nuestra app Nest.
    const app = await NestFactory.create(AppModule);

    //Este Pipe validará todas las solicitudes entrantes a nuestra App.
    app.useGlobalPipes(
        new ValidationPipe()
    );

    //Declaramos que nuestra app empiece a escuchar peticiones por
    //un puerto de nuestra maquina en particular.
    await app.listen(3000);

}

//Despues llamamos a la funcion creada.
//Esta funcion creara una instancia y empezará a escuchar el tráfico entrante.
boostrap();


//npx ts-node-dev src/main.ts <- Ejecutar para iniciar el servidor