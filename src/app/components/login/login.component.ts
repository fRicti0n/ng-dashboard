import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email: string;
  private password: string;
  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('[a-z0-9.@]*')])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onLogin(form: FormGroup) {
    console.log(form);
    this.router.navigate(['/dashboard']);
  }

}
