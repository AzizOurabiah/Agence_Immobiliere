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

  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  pswd: string | undefined;
  cfPswd: string | undefined;
  //////////////////////////
  constructor() {}

  ngOnInit(): void {
    // this.firstName = this.user?.firstName;
    // this.lastName = this.user?.lastName;
    // this.email = this.user?.email;
    // this.pswd = this.user?.passeword;
    // this.cfPswd = this.user?.confirmPasseword;
  }
}
