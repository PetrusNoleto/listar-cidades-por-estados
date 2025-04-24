import * as fs from 'fs';
import * as path from 'path';
import { getCitiesByState } from "./services/getcitiesbystate.service";
import { states } from './mock/states';
import {v7 as uuid} from "uuid"


const pastaListas: string = 'listas';

function createPath(pathName: string): void {
  if (!fs.existsSync(pathName)) {
    fs.mkdirSync(pathName);
    console.log(`Pasta '${pathName}' criada com sucesso.`);
  }
}


const getCities = async()=>{
    const statesList = states
    try{
        for(let i =0; i < statesList.length;i++){
            const cities = await getCitiesByState(statesList[i].id)
            const citiesListData =  cities && await cities.data
            const nomeArquivoCompleto: string = path.join(pastaListas, `cidades - ${statesList[i].id}.json`)
            if(citiesListData){
                const formatedList = citiesListData.map((city)=>{return{
                    id:uuid(),
                    cityName:city.nome,
                    cityState:city.municipio.microrregiao.mesorregiao.UF.sigla
                }})
                console.log(formatedList)
                const jsonData = JSON.stringify(formatedList, null, 4);
                fs.writeFileSync(nomeArquivoCompleto, jsonData, 'utf-8');
            }
        }
    }catch(error){
        console.log(error)
    }
}

createPath(pastaListas)
getCities()