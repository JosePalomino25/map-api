import { Component, OnInit } from '@angular/core';
import {CitizensService} from "../service/citizens.service";
import { Citizens} from "../citizens";
import {MapService} from "../service/map.service";

@Component({
  selector: 'app-citizens',
  templateUrl: './citizens.component.html',
  styleUrls: ['./citizens.component.scss']
})
export class CitizensComponent implements OnInit {
  citizens: Citizens[] = []
  curentsCitizen!:string | null
  constructor( private citizensService:CitizensService,
  private mapService:MapService) { }

  ngOnInit(): void {
    this.getCitizens();
  }

  getCitizens(){
    this.citizensService.getProducts().subscribe((data:Citizens[])=>{
      this.citizens = data;
      this.citizens.forEach(citizen => {
        console.log(citizen.lat, citizen.long);
      })
    })
  }

  eventSelectService(service:Citizens){
    this.curentsCitizen = service.jurisdiction_id
    this.mapService.increaseZoomLocation(service.long, service.lat)
  }

}
