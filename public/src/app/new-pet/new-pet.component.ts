import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {

  constructor(private _httpService: HttpService, private _route: Router) { }
  newPet = {name: "", type: "", description: "", skills: "", skills2: "", skills3: "", likes: Number}
  err: any;

  ngOnInit() {
    this.newPet = {name: "", type: "", description: "", skills: "", skills2: "", skills3: "", likes: Number}
  }

  onSubmit(){
    console.log("OnSubmit a new pet" , this.newPet);
    this._httpService.create(this.newPet).subscribe(data => {
      console.log("Data: " , data);
      if(data["pets"]){
        this._route.navigate(['/'])
      } else {
        this.err = data['error']['errors'];
        console.log(data);
      }
    })
  }

}


// To get it to go back to /pets, make sure to add it on line 25
