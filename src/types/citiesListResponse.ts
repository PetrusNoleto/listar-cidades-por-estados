

export declare type returnFunctionType = {
  message:string
  error:any | null
  data:CitiesResponseType[] | null

}





export interface CitiesResponseType {
    id: number;
    nome: string;
    municipio: MunicipioProps;
  }
  
  export interface MunicipioProps {
    id: number;
    nome: string;
    microrregiao: MicroRegiaoProps;
    "regiao-imediata": RegiaoImediataProps;
  }
  

  export interface MicroRegiaoProps {
    id: number;
    nome: string;
    mesorregiao: MesorregiaoRegiao;
  }

  export interface MesorregiaoRegiao {
    id: number;
    nome: string;
    UF: UfProps;
  }
  
  export interface UfProps {
    id: number;
    sigla: string;
    nome: string;
    regiao: RegiaoProps;
  }
  
  export interface RegiaoProps {
    id: number;
    sigla: string;
    nome: string;
  }
  
  export interface RegiaoImediataProps {
    id: number;
    nome: string;
    "regiao-intermediaria": RegiaoIntermediariaProps;
  }
  
  export interface RegiaoIntermediariaProps {
    id: number;
    nome: string;
    UF: UfProps;
  }