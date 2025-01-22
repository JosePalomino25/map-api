import { Injectable } from '@angular/core';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import Map from 'ol/Map';
import {transform} from "ol/proj";

@Injectable({
  providedIn: 'root'
})
export class MapService {

  map!: Map;

  constructor() { }

  initMap() {
    const latLon = [40.516038848206, -3.606699980092];
    const mapElement = document.getElementById('map');
    if (mapElement) {
      this.map = new Map({
        target: mapElement,
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
          })
        ],
        view: new View({
          center: latLon,
          zoom: 12
        })
      });
    }
  }
}
