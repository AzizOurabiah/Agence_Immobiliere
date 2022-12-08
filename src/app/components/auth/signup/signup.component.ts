import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  firstName: string = '';
  names: string[] = [];
  constructor() {}

  ngOnInit(): void {}

  saveName(name: string) {
    this.names.push(name);
    this.firstName = '';
  }
  deletName(index: number) {
    console.log(this.names[index]);
    this.names.splice(index, 1);

    //let el = this.names[index];
    // this.names.forEach(element => {
    //   if(element != el){
    //   }
    //});
  }
}
