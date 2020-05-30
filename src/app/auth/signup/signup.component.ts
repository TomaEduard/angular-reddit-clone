import { AuthService } from './../shared/auth.service';
import { SignupRequestPayload } from './signup-request.payload';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpRequestPayload: SignupRequestPayload;
  signupForm: FormGroup;

  constructor(private authService: AuthService) {
    this.signUpRequestPayload = {
      username: '',
      email: '',
      password: ''
    };
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  signup() {
    this.signUpRequestPayload.username = this.signupForm.get('username').value;
    this.signUpRequestPayload.password = this.signupForm.get('password').value;
    this.signUpRequestPayload.email = this.signupForm.get('email').value;

    this.authService.signup(this.signUpRequestPayload)
      .subscribe(data => {
        console.log(data);
        
      })
  }

}
