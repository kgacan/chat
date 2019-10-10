import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LoadingService } from './../../services/loading.service';
import { AuthService } from './../../services/auth.service';
import { AlertType } from './../../enums/alert-type.enum';
import { AlertService } from './../../services/alert.service';
import { Alert } from 'src/app/classes/alert';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit, OnDestroy {

  singUpForm: FormGroup;
  private subscriptions: Subscription[] = [];

  constructor(
    private fb: FormBuilder, 
    private alertService: AlertService,
    private auth: AuthService,
    private loadingService: LoadingService,
    private router: Router
    ) { 
    this.createForm();
  }

  createForm(): void {
    this.singUpForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]] 
    })
  }
  ngOnInit() {
  }

  public submit(): void{
    //TODO call the auth service
    if(this.singUpForm.valid){
      const {firstName, lastName, email, password} = this.singUpForm.value;
      this.subscriptions.push(
        this.auth.singup(firstName,lastName,email,password).subscribe(success => {
          if(success){
            this.router.navigate['/chat'];
          }
          this.loadingService.isLoading.next(false);
        })
      )
    }
    else{
      let failedSignedAlert = new Alert('Please enter a valid name, email and password, try again', AlertType.Danger);
      this.alertService.alert.next(failedSignedAlert);
    }
  }
  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
