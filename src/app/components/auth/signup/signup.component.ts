import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  firstName: string = '';
  names: string[] = [];
  update: boolean = false;
  index: number | undefined;
  constructor() {}

  ngOnInit(): void {}

  saveName(name: string) {
    if (this.firstName) {
      this.names.push(name);
      this.firstName = '';
      //this.update = true;
    }
  }

  handleDelete(index: number) {
    if (index >= 0) {
      this.names.splice(index, 1);
    }
  }
  handleUpdate(index: number) {
    if (index >= 0) {
      let name = this.names[index];
      this.names.splice(index, 1);
      this.firstName = name;
    }
  }
}
