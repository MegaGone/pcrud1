import { Component, OnInit } from '@angular/core';
import { HeroModel } from 'src/app/models/heros';
import { HerosService } from 'src/app/services/heros.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html'
})
export class HerosComponent implements OnInit {

  public heros: HeroModel[] = [];

  constructor(private heroSvc: HerosService) {
  }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros() {
    this.heroSvc.getHeros().subscribe(res => {
      this.heros = res;
    });
  }

  deleteHero(hero: HeroModel, i: number) {
    Swal.fire({
      title: '¿Are you sure?',
      icon: 'question',
      text: `¿Do you want delete ${hero.name}?`,
      showConfirmButton: true,
      showCancelButton: true
    }).then(res => {

      if (res.value) {
        this.heros.splice(i, 1);
        this.heroSvc.deleteHero(hero.id);
      }

    })
  };
}