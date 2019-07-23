import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})
export class EditPetComponent implements OnInit {
  editPet: any;
  err: any;
  constructor(private _httpService: HttpService, private _route: Router, private _router: ActivatedRoute) { }
  
  ngOnInit() {
    this._router.params.subscribe(params => {
      console.log(params)
      this._httpService.getOne(params['id']).subscribe(data => {
        console.log(data);
        this.editPet = data['pets'];
      })
    })
  }

  onSubmit(){
    this._httpService.update(this.editPet._id, this.editPet).subscribe(data => {
      if(data['pets']){
        this._route.navigate(['/'])
      } else {
        this.err = data['error']['errors'];
        console.log(data);
      }
    })
  }

}
