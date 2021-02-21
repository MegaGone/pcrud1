import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { HeroModel } from '../../models/heros';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html'
})

export class EditComponent implements OnInit {

  public hero = new HeroModel();

  constructor() {
  }

  ngOnInit(): void {
  }

  Save(f: NgForm) {

    // Invalid form
    if(f.invalid){
      return Object.values( f.controls ).forEach(control => {
        control.markAsTouched();
      });

    // Valid form
    }else{

      const name = this.hero.name;
      Swal.fire({
        title: 'Success',
        icon: 'success',
        text: `${name} add successfully`,
        showConfirmButton: false,
        timer: 1500
      });

      f.reset();
    }


  }

}