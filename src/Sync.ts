import axios, { Axios, AxiosPromise } from "axios";

interface HasId {
  id?: string;
}

export class Sync<T extends HasId> {

  constructor(public rootUrl: string) {}

  getUser(id: string): AxiosPromise {
    let res = axios.get(`${this.rootUrl}/${id}`)
    return res;
  }

  createUser(newUser: T): AxiosPromise {
    let res = axios.post(`${this.rootUrl}`, newUser)
    return res;
  }

  updateUser(updatedUser: T): AxiosPromise {
    const { id } = updatedUser;
    let res = axios.put(`${this.rootUrl}/${id}`, updatedUser)
    return res;
  }
}