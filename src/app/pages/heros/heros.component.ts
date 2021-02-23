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
  public loading: boolean;

  constructor(private heroSvc: HerosService) {
    this.loading = true;
  }

  ngOnInit(): void {
    this.getHeros();
  }

  getHeros() {
    this.heroSvc.getHeros().subscribe(res => {
      this.heros = res;
      this.loading = false;
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
        this.heroSvc.deleteHero(hero.id).subscribe( res => {
          this.heros.splice(i, 1);
        });
      }

    })
  };
}