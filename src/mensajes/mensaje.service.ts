import { Injectable } from "@nestjs/common";
import { MensajeRepository } from "./mensaje.repository";

@Injectable()
export class MensajeService{

    constructor(public mensajeRepo: MensajeRepository){ }

    findOne(id:string){
        return this.mensajeRepo.findOne(id);
    }

    findAll(){
        return this.mensajeRepo.findAll();
    }

    create(mensaje:string){
        return this.mensajeRepo.create(mensaje);
    }

}