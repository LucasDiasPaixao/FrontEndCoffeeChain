import { Empresa } from "./Empresa";

export interface Armazem{

    armazemId : number;

    empresaId : number;

    telefoneArmazem? : String;

    enderecoArmazem? : String;

    cidadeArmazem? : String;

    ufArmazem? : String;

    emailArmazem? : String;

    empresa? : Empresa;
}