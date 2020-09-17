import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from 'src/app/services/service/auth.service';
import { MustMatch } from 'src/app/services/validator/mustMatch.validator';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  email:  FormControl;
  userName:  FormControl;
  organization:  FormControl;
  password:  FormControl;
  confirmPassword:  FormControl;
  mobileNumber: FormControl;
  loginControl : FormControl;
  showPassword: boolean = true;
  showCpasswd: boolean = true;

  constructor(private formBuilder: FormBuilder, private authService : AuthService, 
    private router: Router,
    private toaster:ToastrService ) { }

  ngOnInit(): void {
    this.email = new FormControl('', Validators.required);
    this.userName = new FormControl('', Validators.required);
    // this.password = new FormControl('', Validators.required, Validators.minLength(8));
     this.password = new FormControl('', Validators.compose([Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')]));

      
    this.organization = new FormControl('', Validators.required);
    this.confirmPassword = new FormControl('', Validators.required);
    this.mobileNumber = new FormControl('', Validators.required);
    this.loginControl = new FormControl('', Validators.required);

    this.signUpForm = this.formBuilder.group({
      email:this.email,
      userName: this.userName,
      organization: this.organization,
      password: this.password,
      confirmPassword: this.confirmPassword,  
      mobileNumber: this.mobileNumber,  
      loginControl : this.loginControl,   
    },  {validator: MustMatch});
  }

  onSignUp(){
    const d = this.authService.signUp();
    const signUpData = this.signUpForm.value;
    signUpData['connection'] = 'Username-Password-Authentication';
    const that = this;
    d.signup(signUpData, function (err) {
      if (err) {
        that.toaster.error('Error :', err.message);
      } else{
        that.toaster.success('Message :', 'Registered Successfully !!');
        that.signUpForm.reset();
      }     
    });   
  }
  /** social media login  */
  googleSignIn(): void {
    this.authService.oAuthGoogleLogin();
  }
  linkedinSignIn(): void {
    this.authService.oAuthLinkedinLogin();
  }
  facebookSignIn(): void {
    this.authService.oAuthFacebookLogin();
  }
}
