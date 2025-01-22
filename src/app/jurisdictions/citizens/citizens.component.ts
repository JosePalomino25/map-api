import { Component, OnInit } from '@angular/core';
import {CitizensService} from "../service/citizens.service";
import { Citizens} from "../citizens";

@Component({
  selector: 'app-citizens',
  templateUrl: './citizens.component.html',
  styleUrls: ['./citizens.component.scss']
})
export class CitizensComponent implements OnInit {
  showFiller = false;
  citizens!: Citizens[];
  constructor( private citizensService:CitizensService ) { }

  ngOnInit(): void {
    this.getCitizens();
  }

  getCitizens(){
    this.citizensService.getProducts().subscribe((data:Citizens[])=>{
      this.citizens = data;
    })
  }

  event(){

  }
}
