import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  email:  FormControl;
  password:  FormControl;
  constructor(private formBuilder: FormBuilder, ) { }

  ngOnInit(): void {
    this.email = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);

    this.signInForm = this.formBuilder.group({
      email:this.email,     
      password: this.password,         
    });
  
  }
  onSignIn(){
    this.signInForm.reset();
  }

}
