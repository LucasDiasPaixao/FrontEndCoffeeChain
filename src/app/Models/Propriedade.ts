import { Produtores } from "./Produtores";

export interface Propriedade{
    
    propriedadeId : number;

    produtorId: number;

    nomeFazenda : string;

    cnpjFazenda : string;

    inscEstadual : string;

    telefonePropriedade? : string;

    enderecoPropriedade? : string;

    cidadePropriedade : string;

    ufPropriedade : string;

    emailPropriedade? : string;

    cepPropriedade? : string;

    produtor? : Produtores;

}