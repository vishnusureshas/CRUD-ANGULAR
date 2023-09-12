import { Component, OnInit } from '@angular/core';
import { FruitService } from '../fruit.service';
import { Router } from '@angular/router';
import { Fruit } from '../fruit';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

   constructor(private fruitService:FruitService, private router:Router) {}

   ngOnInit(): void {
     
   }

   formData:Fruit = {
    id:0,
    name:'',
    quantity:0,
    price:0
   }

   create() {
    this.fruitService.create(this.formData)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/fruit/home"])
      },
      error: (er) => {
        console.log(er);      
      }
    })
   }
}
