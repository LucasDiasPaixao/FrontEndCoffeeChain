import { Empresa } from "./Empresa";
import { Entrada } from "./Entrada";
import { Produtores } from "./Produtores";
import { Propriedade } from "./Propriedade";

export interface Saida{

    saidaId : number;

    destinoProdutorId : number;

    destinoPropriedadeId : number;

    destinoEmpresaId : number;

    entradaId : number;

    dataSaida? : Date;

    qtdSacas? : number;

    tipoSaida? : number;

    precoSaida? : number;
    
    custoSaida? : number;

    nfeSaida? : String;

    embalagemSaida? : String;

    destinoEmpresa? : Empresa;

    destinoProdutor? : Produtores;

    destinoPropriedade? : Propriedade;

    entrada? : Entrada;
}