import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
// import { LikePetComponent } from './like-pet/like-pet.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'pets', component: HomeComponent },
  { path: 'pets/new', component: NewPetComponent },
  { path: 'edit/:id', component: EditPetComponent },
  { path: 'details/:id', component: PetDetailsComponent },
  // { path: 'like/:id', component: LikePetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
