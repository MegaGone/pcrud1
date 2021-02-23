import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HerosService } from 'src/app/services/heros.service';
import Swal from 'sweetalert2';
import { HeroModel } from '../../models/heros';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})

export class EditComponent implements OnInit {

  public hero: any = new HeroModel();

  constructor(private heroSvc: HerosService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {

    const id: any = this.route.snapshot.paramMap.get('new');

    if (id !== 'new') {

      this.heroSvc.getHero(id).subscribe(res => {
        this.hero = res;
        this.hero.id = id;
      })
    }
  }

  Save(f: NgForm) {

    // Invalid form
    if (f.invalid) {
      return Object.values(f.controls).forEach(control => {
        control.markAsTouched();
      });

      // Valid form

      //If hero id exists put
    } else if (this.hero.id) {

      this.heroSvc.updateHero(this.hero).subscribe(res => {
        const name = this.hero.name;
        Swal.fire({
          title: `${name}`,
          icon: 'success',
          text: `${name} uptade successfully`,
          showConfirmButton: false,
          timer: 1500
        });
      });

    } else {
      this.heroSvc.createHero(this.hero).subscribe(res => {

        const name = this.hero.name;
        f.reset();
        Swal.fire({
          title: `${name}`,
          icon: 'success',
          text: `${name} create successfully`,
          showConfirmButton: true,
          allowOutsideClick: false
        }).then( res => {
          
          if(res.isConfirmed){
            this.router.navigate(['/heros'])
          }
        });
      });
    }
  }
}