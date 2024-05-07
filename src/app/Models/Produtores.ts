import { Propriedade } from "./Propriedade";

export interface Produtores{
    
    produtorId? : number;
    nomeProdutor : string;
    cpfProdutor : string;
    rgProdutor? : string;
    telefoneProdutor : string;
    enderecoProdutor? : string;
    cidadeProdutor : string;
    ufProdutor : string;
    emailProdutor? : string;    
    cepProdutor? : string;
    propriedades?: Propriedade;

}