import { Controller, Get , Post, Body, Param } from "@nestjs/common";

//Podemos pasarle parámetros a los decoradores para controlar algunas
//reglas de routing de alto nivel
@Controller('mensajes')
//Con 'export', exportaremos esta clase a otros archivos para asi utilizarla.
export class AppController{
    
    //Cuando se haga una peticion Get a nuestra App, se ejecutará este metodo.
    @Get()
    listarMensajes(){

    }

    //Cuando se reciba una peticion a través del decorador Post, extraeremos
    //el cuerpo del mensaje con el decorador Body. 
    @Post()
    crearMensaje(@Body() body : any){
        console.log(body)
    }

    //Si queremos extraer un parametro la request entrante, usaremos el
    //decorador Param. Le pasaremos un string para describir a que parte 
    //de la url queremos acceder.
    @Get('/:id')
    getMensaje(@Param('id') id : string){
        console.log(id)
    }

    
    

}