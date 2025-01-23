import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MapService} from "../service/map.service";


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit{

  constructor(private mapService: MapService) { }


  ngAfterViewInit(): void {
   this.mapService.initializeMap()
    this.mapService.getCitizens()
  }

}
