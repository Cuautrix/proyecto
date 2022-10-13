import{ Pagina } from './pagina';
import{ Menu } from "./menu";

export interface Credential{
    usuarioId: number;
    nombreUsuario: string;
    token: string;
    rolId:number;
    menus:Menu[];
    paginas: Pagina[];
}