import { Armazem } from "./Armazem";
import { Empresa } from "./Empresa";
import { Produtores } from "./Produtores";
import { Propriedade } from "./Propriedade";

export interface Entrada{

    entradaId : number;

    produtorId : number;

    propriedadeId : number;

    empresaId : number;

    armazemId : number;

    dataEntrada : Date;

    codigoLote : String;

    qtdSacas : number;

    precoLote : number;

    custoEntrada? : number;

    nfeEntrada? : String;

    tipoEntrada? : number;

    safra? : number;

    tipoCafe? : String;

    localArmazenado : String;

    embalagemArmazenado : String;

    armazem? : Armazem;

    empresa? : Empresa;

    produtor? : Produtores;

    propriedade? : Propriedade;
}