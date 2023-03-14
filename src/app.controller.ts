import { Controller, Get } from "@nestjs/common";

//Podemos pasarle parámetros a los decoradores para controlar algunas
//reglas de routing de alto nivel
@Controller('/app')
//Con 'export', exportaremos esta clase a otros archivos para asi utilizarla.
export class AppController{
    
    //Cuando se haga una peticion Get a nuestra App, se ejecutará este metodo.
    @Get('/hello')
    sayHello(){
        return '¡Hola buenas!';
    }

    @Get('/bye')
    sayBye(){
        return 'Adiós'
    }

}