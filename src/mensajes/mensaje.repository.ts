import { Injectable } from "@nestjs/common";
import {readFile, writeFile} from "fs/promises";

@Injectable()
export class MensajeRepository{
    //Funcion para buscar un mensaje en especifico.
    async findOne(id: string){
        //Pimero leeremos el contenido del archivo.
        const contenido = await readFile('mensajes.json','utf8');
        const mensajes = JSON.parse(contenido);

        return mensajes[id];
    }

    //Funcion para ver todos los mensajes.
    async findAll(){
        const contenido = await readFile('mensajes.json','utf8');
        const mensajes = JSON.parse(contenido);

        return mensajes;
    }

    //Funcion para crear un mensaje.cle
    async create(mensaje: string){
        const contenido = await readFile('mensajes.json','utf8');
        const mensajes = JSON.parse(contenido);

        const id = Math.floor(Math.random() * 999);

        mensajes[id] = { id, mensaje };

        await writeFile('mensajes.json',JSON.stringify(mensajes))
    }
}