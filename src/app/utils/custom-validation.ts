import { AbstractControl } from '@angular/forms';

export class PasswordValidate {

    static matchPassword(AC: AbstractControl) {
        let password = AC.get('password').value; // to get value in input tag
        let confirmPassword = AC.get('confirmpassword').value; // to get value in input tag
        if (password != confirmPassword) {
            AC.get('confirmpassword').setErrors({ MatchPassword: true })
        } else {
            return null
        }
    }
}