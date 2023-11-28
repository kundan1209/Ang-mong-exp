import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  city: string = "";
  
  title: string = "";
  temp: number = Math.random()*100;
  climate: string = "Sunny";
  cities: any = {
    'durgapur': `Temperature ${Math.random()}, climate ${this.climate}`,
    'mumbai': `Temperature ${Math.random()}, climate ${"Cold"}`,
  }
  check(){
    
      return this.cities.hasOwnProperty(this.city)
    
  }
}
