import axios from "axios";
import { HasId } from "./interfaces/HasId.interface";

export class ApiSync<P extends HasId> {
  constructor(
    public url: string
  ){}

  fetch(id: string){
    return axios.get(`${this.url}/${id}`) // response data
  }

  save(data: P) {
    const {id} = data // {id: ..., name: ..., age: ...}
    if(id) {
      return axios.put(`${this.url}/${id}`, data)
    }
    return axios.post(`${this.url}`, data)
  }
}