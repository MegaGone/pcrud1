import { Component, OnInit } from '@angular/core';
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
  
  Save(){
    console.log(this.hero);
  }

}