import { LoadingService } from './../../services/loading.service';
import { AlertService } from './../../services/alert.service';
import { AlertType } from './../../enums/alert-type.enum';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alert } from 'src/app/classes/alert';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private alertService: AlertService, private loadingService: LoadingService) { 
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  ngOnInit() {
  }

  public submit(): void{
    this.loadingService.isLoading.next(true);
    
    if(this.loginForm.valid){
          //TODO call the auth service
      const {email, password} = this.loginForm.value;
      console.log(`Email: ${email} Password: ${password}`);
      this.loadingService.isLoading.next(false);
    }
    else{
      const faliledLoginAlert = new Alert('Your email or password were invalid, please try again.', AlertType.Danger);
      setTimeout(() => {
        this.loadingService.isLoading.next(false);
        this.alertService.alert.next(faliledLoginAlert);
      }, 2000);

    }
  }

}
