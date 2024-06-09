import { Directive } from '@angular/core';
import { Observable, Subscription, combineLatest, noop } from 'rxjs';

@Directive({
  selector: '[appDataHandlerDirective]'
})
export class DataHandlerDirective {

  
  public dataReady: boolean = false;
  public subscriptions: Subscription[] = [];
  public observables: Observable<any>[] = [];
  
  constructor() { }

  public setDataReady() {
    this.dataReady = true;
  }

  ngOnInit() {
    if (this.subscriptions.length > 0) {
      this.subscriptions.push(combineLatest([this.subscriptions]).subscribe(noop)
    )}
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
