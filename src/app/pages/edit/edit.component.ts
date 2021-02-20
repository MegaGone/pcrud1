import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
}