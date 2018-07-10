import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PasswordValidate } from '../../utils/custom-validation';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private registerForm: FormGroup;

  constructor(private fb: FormBuilder, private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(24)])],
      confirmpassword: ['', Validators.required]
    }, {
      validator: PasswordValidate.matchPassword
    });
  }

  signUp(form: FormGroup) {
    const payload = {
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    };
    // const payload = form;
    this._authService.signup(payload).subscribe((response) => {
      const res = response.json();
      this._authService.setUser(res.token);
      Swal('Success!', 'Registration Complete', 'success');
      this._router.navigate(['/login']);
    });
  }

}
