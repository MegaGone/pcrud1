import { HttpClient } from '@angular/common/http';
import { Injectable, IterableDiffers } from '@angular/core';
import { HeroModel } from '../models/heros';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  public url: string = 'https://heros-6b842-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) { }

  createHero(hero: HeroModel) {
    return this.http.post(`${this.url}/heros.json`, hero)
      .pipe(
        map((res: any) => {
        hero.id = res.name;
        return hero;
      }))
  }

  getHeros() {
    return this.http.get(`${this.url}/heros.json`)
      .pipe( map( this.mapHero) );
  }

  deleteHero(id: string) {
    return this.http.delete(`${this.url}/heros/${id}.json`);
  }

  updateHero(hero: HeroModel){

    const heroTemp: any = {
      ...hero
    };

    delete heroTemp.id;

    return this.http.put(`${this.url}/heros/${hero.id}.json`, heroTemp);
  }

  getHero(id: string){
    return this.http.get(`${this.url}/heros/${id}.json`);
  }

  // Mapear Data
  private mapHero(herosObj: any){

    const heros: HeroModel[] = [];

    if(herosObj === null) { return heros;}

    Object.keys( herosObj ).forEach( key => {

      // Pasar el ID al modelo
      const hero: HeroModel = herosObj[key];
      hero.id = key;

      heros.push( hero );
    });

    return heros;
  }
}