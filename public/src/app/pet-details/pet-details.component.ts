import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  petDetails: any;
  err: any;
  enableLike: boolean = true;
  likes: Number;
  constructor(private _httpService: HttpService, private _route: Router, private _router: ActivatedRoute) { }
  
  ngOnInit() {
    console.log("Pet details: ", this.petDetails);
    console.log("Enabled?: ", this.enableLike);
    this._router.params.subscribe(params => {
      console.log(params)
      this._httpService.getOne(params['id']).subscribe(data => {
        console.log(data);
        this.petDetails = data['pets'];
      })
    })
  }

  onSubmit(){
    this._httpService.update(this.petDetails._id, this.petDetails).subscribe(data => {
      if(data['pets']){
        this._route.navigate(['/'])
      } else {
        this.err = data['error']['errors'];
        console.log(data);
      }
    })
  }

  likePet(){
    this.likes = this.petDetails.likes + 1;
    console.log("Like enabled status: ", this.enableLike);
    this._httpService.like(this.petDetails._id, {likes: this.likes}).subscribe(data => {
      console.log("Adding a like", this.petDetails);
      if(data['pets']){
        this.enableLike = false;
        this.ngOnInit();
        // this._route.navigate(['/pets']);
      } else {
        // this.err = data['error']['errors'];
      }
    })
  }

  deletePet(id){
    this._httpService.delete(id).subscribe(data => {
      this.ngOnInit();
      this._route.navigate(['/']);
    })
  }

}
