import { Controller, Get , Post, Body, Param, NotFoundException } from "@nestjs/common";
import { createMensajeDto } from "./dtos/create-mensaje.dto";
import { MensajeService } from "./mensaje.service";

//Podemos pasarle parámetros a los decoradores para controlar algunas
//reglas de routing de alto nivel
@Controller('mensajes')
//Con 'export', exportaremos esta clase a otros archivos para asi utilizarla.
export class AppController{

    constructor(public mensajeService: MensajeService){ }

    //Cuando se haga una peticion Get a nuestra App, se ejecutará este metodo.
    @Get()
    listarMensajes(){ 
        return this.mensajeService.findAll();
    }

    //Cuando se reciba una peticion a través del decorador Post, extraeremos
    //el cuerpo del mensaje con el decorador Body. 
    @Post()
    //El tipo de dato esperado será el dto creado anteriormente.
    crearMensaje(@Body() body : createMensajeDto){
        return this.mensajeService.create(body.content);
    }

    //Si queremos extraer un parametro de la request entrante, usaremos el
    //decorador Param. Le pasaremos un string para describir a que parte 
    //de la url queremos acceder.
    @Get('/:id')
    async getMensaje(@Param('id') id : string){
        const mensaje = await this.mensajeService.findOne(id);

        if(!mensaje){
            throw new NotFoundException('Mensaje no encontrado');
        }

        return mensaje;
    }

    
    

}