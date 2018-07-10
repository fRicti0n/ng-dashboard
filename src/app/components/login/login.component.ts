import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private _authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  signIn(form: FormGroup) {
    const payload = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value
    };

    this._authService.signin(payload).subscribe((response) => {
      const res = response.json();
      this._authService.setUser(res.token);
      Swal('Success', 'Logged In', 'success');
      this.router.navigate(['/dashboard']);
    });
  }

}
