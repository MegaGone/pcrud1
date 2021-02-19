import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HerosComponent } from './pages/heros/heros.component';
import { EditComponent } from './pages/edit/edit.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

const routes: Routes = [
  { path: 'heroes', component: HerosComponent },
  { path: 'edit', component: EditComponent },
  { path: 'navbar', component: NavbarComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'heroes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
