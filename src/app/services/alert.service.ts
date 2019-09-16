import { Alert } from './../classes/alert';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  public alert: Subject<Alert> = new Subject();

  constructor() { }
}
