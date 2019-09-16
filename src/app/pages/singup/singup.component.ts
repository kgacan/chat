import { AlertType } from './../../enums/alert-type.enum';
import { AlertService } from './../../services/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alert } from 'src/app/classes/alert';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  singUpForm: FormGroup;

  constructor(private fb: FormBuilder, private alertService: AlertService) { 
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
      console.log(`FirstName: ${firstName}, LastName: ${lastName}, Email: ${email}, Password: ${password}`);
    }
    else{
      let failedSignedAlert = new Alert('Please enter a valid name, email and password, try again', AlertType.Danger);
      this.alertService.alert.next(failedSignedAlert);
    }
  }

}
