import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
  NgForm
} from '@angular/forms';
import { RouterLink ,Router} from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fg: FormBuilder ,private router: Router) {
    
    this.registerForm = this.fg.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        userName: [
          '',
          [Validators.required, Validators.pattern(/^[a-z0-9_-]{3,15}$/)],
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
            ),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return password &&
      confirmPassword &&
      password.value !== confirmPassword.value
      ? { passwordMismatch: true }
      : null;
  };

  get formControls() {
    return this.registerForm.controls;
  }


  handleSubmitForm() {
    if (this.registerForm.valid) {
      // Perform registration logic here (e.g., call an API)
      console.log('Form Submitted', this.registerForm.value);

      // Navigate to the login page
      this.router.navigate(['/login']);
    }
  }
}
