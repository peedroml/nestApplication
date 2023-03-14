//npm install class-validator class-transformer
import { IsString } from "class-validator";

//En esta clase se definirá la estructura que deberá tener el body de las request.

//dto: Data Transfer Object -> Hace de intermediario entre la request Post y el Route Handler
export class createMensajeDto{

    //Este decorador se asegurará de que cuando se cree una instancia, la propiedad
    //content será un string.
    @IsString()
    content: string;
}