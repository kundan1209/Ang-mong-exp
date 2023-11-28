import { Component } from '@angular/core';
import { Emp } from './Emp';
import { WaterService } from './water.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private waterService:WaterService){}
  title = 'newapp';
  emps: Emp[] = [
    {
      eid:2,
      ename:"Kundan"
    },
    {
      eid:1,
      ename:"Tanmay"
    },
    {
      eid:4,
      ename:"Prerna"
    }
  ]
  temp: Emp = {eid:0, ename:""}
  // sort(): void {
  //   for(let i=0;i<this.emps.length;i++){
  //     for(let j=i;j<this.emps.length;j++){
  //       if(this.emps[i].eid>this.emps[j].eid){
  //         this.temp = this.emps[i];
  //         this.emps[i] = this.emps[j];
  //         this.emps[j] = this.temp;
  //       }
  //     }
  //   }
  // }
  getWater(){
    return this.waterService.water;
  }
  sortEmployeesById(): void {
    this.emps.sort((a, b) => a.eid - b.eid);
    console.log(this.emps)
  }
}
