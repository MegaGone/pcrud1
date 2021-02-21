import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroModel } from '../models/heros';


@Injectable({
  providedIn: 'root'
})
export class HerosService {

  public url: string = 'https://heros-6b842-default-rtdb.firebaseio.com';
  public hero = HeroModel;

  constructor(private http: HttpClient) { }

  createHero(hero: HeroModel){
    return this.http.post(`${this.url}/heros.json`, hero);
  }
}
