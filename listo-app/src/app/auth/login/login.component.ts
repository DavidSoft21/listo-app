import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  @Output() static updateBackground = new EventEmitter<boolean>();
  userLoginOn: boolean;
  imageObject: Array<object>;
  loginForm: FormGroup;

  ngOnInit() : void{
   
  }

  constructor(private fb: FormBuilder, private router: Router) { 
    this.userLoginOn = false;
    this.imageObject = [
      {
        image: '../../../assets/login/1.png',
        thumbImage: '../../../assets/login/1.png',
        alt: 'alt of image',
        title: 'title of image'
      },
      {
        image: '../../../assets/login/2.png', // Support base64 image
        thumbImage: '../../../assets/login/2.png', // Support base64 image
        title: 'Image title', //Optional: You can use this key if want to show image with title
        alt: 'Image alt', //Optional: You can use this key if want to show image with alt
        order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
      }
    ];
    this.loginForm = this.fb.group({
      
        email: ['', [
          Validators.required,
          Validators.email,
          Validators.minLength(5),
          Validators.maxLength(20),
          Validators.pattern(/^[^\s|&#~]+$/)
        ]],
        password: ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern(/^[^\s]+$/)
        ]]
      
    });
  }

  send() {
    if (this.loginForm.valid) {
      console.log('Call HttpClient Services Login');
      this.router.navigateByUrl('/dashboard');
      this.loginForm.reset();
      
    } else {
      alert('Invalid Form');
      this.loginForm.markAllAsTouched();
      // this.loginForm.reset();
    }
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

}