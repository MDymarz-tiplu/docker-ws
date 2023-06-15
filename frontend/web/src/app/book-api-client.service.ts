import { Injectable } from '@angular/core';
import axios, { AxiosInstance, AxiosResponse } from 'axios';

export interface People {
  id?: number | undefined;
  first?: string;
  last?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleApiService {
  private httpClient: AxiosInstance;
  private httpClientRandom: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({ baseURL: 'http://localhost:5225' });
    this.httpClientRandom = axios.create({ baseURL: 'https://randomuser.me' });
  }

  async getPeoples(): Promise<People[]> {
    const response: AxiosResponse<People[]> = await this.httpClient.get('/People');
    return response.data;
  }

  async getPeopleById(id: number): Promise<People> {
    const response: AxiosResponse<People> = await this.httpClient.get(`/People/${id}`);
    return response.data;
  }

  async addPeople(): Promise<People> {

    const random = (await this.httpClientRandom.get('/api')).data;
    const newPeople: People = { first: random.results[0].name.first, last: random.results[0].name.last };
    const response: AxiosResponse<People> = await this.httpClient.post('/People', newPeople);
    return response.data;
  }

  async deletePeople(id?: number): Promise<void> {
    await this.httpClient.delete(`/People/${id}`);
  }
}
