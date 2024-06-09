import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContextMenuService {
  private closeMenuSubject = new Subject<void>();

  public closeMenuObservable = this.closeMenuSubject.asObservable();

  public notifyCloseMenu() {
    this.closeMenuSubject.next();
  }
}