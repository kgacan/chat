import { AlertService } from './services/alert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Alert } from './classes/alert';
import { Subscription } from 'rxjs';
import { LoadingService } from './services/loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public alerts: Array<Alert> = [];
  public loading: boolean = false;


  constructor(private alertService: AlertService, private loadingService: LoadingService) { }

  ngOnInit() {
    this.subscriptions.push(this.alertService.alert.subscribe(alert => {
      this.alerts.push(alert);
    })
    )
    this.subscriptions.push(this.loadingService.isLoading.subscribe(isLoading => {
      this.loading = isLoading;
    }))
  }

  ngOnDestroy(){
    this.subscriptions.forEach(sub=>sub.unsubscribe());
  }

}
