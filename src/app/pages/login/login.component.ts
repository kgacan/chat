import { AuthService } from './../../services/auth.service';
import { Subscription } from 'rxjs';
import { LoadingService } from './../../services/loading.service';
import { AlertService } from './../../services/alert.service';
import { AlertType } from './../../enums/alert-type.enum';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alert } from 'src/app/classes/alert';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  private subscription: Subscription[] = [];
  private returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private alertService: AlertService,
    private loadingService: LoadingService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/chat';
  }

  public submit(): void {
    if (this.loginForm.valid) {

      this.loadingService.isLoading.next(true);
      const { email, password } = this.loginForm.value;

      // this.subscription.push(
      //   this.auth.login(email, password).subscribe(success => {
      //     if (success) {
      //       this.router.navigateByUrl(this.returnUrl);
      //     }
      //     this.loadingService.isLoading.next(false);

      //   })
      // )
      this.router.navigateByUrl('/chat');
      this.loadingService.isLoading.next(false);
    }
    else {
      const faliledLoginAlert = new Alert('Your email or password were invalid, please try again.', AlertType.Danger);
      this.loadingService.isLoading.next(false);
      this.alertService.alert.next(faliledLoginAlert);
    }
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => sub.unsubscribe());
  }

}
