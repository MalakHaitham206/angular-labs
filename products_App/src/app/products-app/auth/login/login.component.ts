import { Component } from '@angular/core';
import { RouterLink ,Router} from '@angular/router';
import { FormsModule,NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  formValues = {
    password: '',
  };
  constructor(private router: Router) {}

  handleSubmitForm(loginForm: NgForm) {
    if (loginForm.valid) {
      // Perform login logic here (e.g., call an API)
      console.log('Form Submitted', loginForm.value);

      // Navigate to the home page
      this.router.navigate(['/']);
    }
  }
}
