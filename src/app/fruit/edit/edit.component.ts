import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private fruitService:FruitService, private router:Router,private route:ActivatedRoute) {}

  formData: Fruit = {
    id:0,
    name:'',
    quantity:0,
    price:0
  }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe((param)=>{
      let id = Number(param.get('id'))
      this.getById(id)
    })
  }
  
  getById(id:any) {
      this.fruitService.edit(id)
      .subscribe((data) => {
          this.formData = data
      })
  }

  update() {
    this.fruitService.update(this.formData)
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
