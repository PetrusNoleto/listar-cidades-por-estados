import axios from "axios"
import { states } from "../mock/states"
import { returnFunctionType } from "../types/citiesListResponse"




export async function getCitiesByState(state:string):Promise<returnFunctionType>{
    try{
        const api = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/distritos`
        const formatState = state.toUpperCase()
        const findState = states.find((state)=>formatState === state.id)
        if(findState){
            const searchCities = await axios.get(api) 
            const response = await searchCities.data
            return {message:"cities founded",error:null,data:response} 
        }
        return {message:"this state not allowed to search",error:"state not allowed",data:null}
    }catch(error){
        return {message:"error to get cities from this state",error,data:null}
    }
}