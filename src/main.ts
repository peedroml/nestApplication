import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController{
    
    //Cuando se haga una peticion Get a nuestra App, se ejecutará este metodo.
    @Get()
    getRootRoute(){
        return '¡Hola buenas!';
    }

}

//Creamos un modulo y le pasamos el controlador que acabamos de crear.
@Module({
    controllers:[AppController]
})

class AppModule{ }

async function boostrap() {
    //Creamos una instancia de nuestra app Nest.
    const app = await NestFactory.create(AppModule);

    //Declaramos que nuestra app empiece a escuchar peticiones por
    //un puerto de nuestra maquina en particular.
    await app.listen(3000)

}

//Despues llamamos a la funcion creada.
//Esta funcion creara una instancia y empezará a escuchar el tráfico entrante.
boostrap()


//npx ts-node-dev src/main.ts <- Ejec