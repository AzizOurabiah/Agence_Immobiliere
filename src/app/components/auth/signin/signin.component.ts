import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  user: User = {
    email: '',
    passeword: '',
  };
  //Un contenaur qui représente notre formulaire
  signinForm: FormGroup;
  //Déclaration des variables de formulaire (éléments de formulaires)
  email: FormControl;
  passeword: FormControl;

  constructor(private fb: FormBuilder) {
    //Initialisation les variables email et passeword
    this.email = fb.control('', [Validators.email, Validators.required]);
    this.passeword = fb.control('', [
      Validators.minLength(6),
      Validators.required,
    ]);
    //Initialisation de notre formulaire
    this.signinForm = fb.group({
      email: this.email,
      passeword: this.passeword,
    });
  }

  ngOnInit(): void {}
  handleSubmit() {
    console.log(this.signinForm);
    console.log(this.signinForm.value);
  }
}
