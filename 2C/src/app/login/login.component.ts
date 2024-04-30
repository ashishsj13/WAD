import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router from Angular Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginSuccess: boolean = false; // Add a flag to track login success

  constructor(private formBuilder: FormBuilder, private router: Router) { // Inject Router
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // Set login success flag
        console.log('Successful Login');
        alert('Successful login');
            } else {
        console.log('Invalid login');
        alert('Invalid login');
      }
    }
  }
}
