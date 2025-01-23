import { Injectable } from '@angular/core';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import Map from 'ol/Map';
import {Feature} from "ol";
import {Point} from "ol/geom";
import {Fill, Icon, Stroke, Style} from "ol/style";
import {Citizens} from "../citizens";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import {fromLonLat} from "ol/proj";
import {Vector} from "ol/layer";
import CircleStyle from "ol/style/Circle";
import {OSM} from "ol/source";
import {CitizensService} from "./citizens.service";
import {Zoom} from "ol/control";

@Injectable({
  providedIn: 'root'
})
export class MapService {
  citizen!:Citizens[];
  map!: Map;


  constructor(private citizensService: CitizensService) {}

  initializeMap(): void {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat([-3.70256, 40.4165]),
        zoom: 6,
      }),
      controls: [
        new Zoom()]
      });
  }
  getCitizens(): void {
    this.citizensService.getProducts().subscribe((data: Citizens[]) => {
      this.citizen = data;
      for (let i = 0; i < data.length; i++) {
        const firtsService = this.citizen[i];
        this.addMarker(firtsService.long, firtsService.lat)
      }
    });
  }
  addMarker(long: number, lat: number): void {
      const marker = new Feature({
        geometry: new Point(fromLonLat([long, lat])),
      });
      const markerStyle = new Style({
        image: new Icon({
          src: '../assets/marcador-de-posicion.png',
          width: 50,
        }),
      });
      marker.setStyle(markerStyle);
      const vectorSource = new VectorSource({
        features: [marker],
      });
      const vectorLayer = new VectorLayer({
        source: vectorSource,
      });
      this.map.addLayer(vectorLayer);
  }
  increaseZoomLocation(lat: number, lng: number): void {
    const view = this.map.getView();
    view.setCenter(fromLonLat([lat, lng]));
    view.setZoom(18);
  }
}


