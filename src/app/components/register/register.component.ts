import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidate } from '../../utils/custom-validation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup

  constructor(private fb: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(24)])],
      confirmpassword: ['', Validators.required]
    }, {
      validator: PasswordValidate.matchPassword
    })
  }

  signUp(form: FormGroup) {
    console.log(form);
    this._router.navigate(['/login']);
  }

}
