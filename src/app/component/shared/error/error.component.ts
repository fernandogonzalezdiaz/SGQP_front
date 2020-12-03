import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit { b
@Input() errores:any;
  constructor() {

   
   }

  ngOnInit(): void {
  }

}
