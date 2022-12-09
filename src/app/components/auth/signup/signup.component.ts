import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    passeword: '',
    passewordConfirme: '',
  };
  //user: User | undefined;

  // firstName: string | undefined;
  // lastName: string | undefined;
  // email: string | undefined;
  // passeword: string | undefined;
  // passewordConfirme: string | undefined;
  //////////////////////////
  constructor() {}

  ngOnInit(): void {
    // this.firstName = this.user?.firstName;
    // this.lastName = this.user?.lastName;
    // this.email = this.user?.email;
    // this.passeword = this.user?.passeword;
    // this.passewordConfirme = this.user?.passewordConfirme;
  }
  handleSubmit() {
    // this.firstName = this.user?.firstName;
    // this.lastName = this.user?.lastName;
    // this.email = this.user?.email;
    // this.passeword = this.user?.passeword;
    // this.passewordConfirme = this.user?.passewordConfirme;
    // console.log(
    //   this.firstName,
    //   this.lastName,
    //   this.email,
    //   this.passeword,
    //   this.passewordConfirme
    // );
    console.log(this.user);
  }
}
