import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaterService {
  water = ["Tap", "Well", "Filter"];
  constructor() { }
}
