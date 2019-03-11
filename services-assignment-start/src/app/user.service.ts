import { Injectable, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {
  public activeUsers = ['Max', 'Anna'];
  public inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counterService.setCountActive(this.activeUsers.length);
    this.counterService.setCountInactive(this.inactiveUsers.length);
  }

  public setToInactive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.setCountActive(this.activeUsers.length);
  }

  public SetToActive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.setCountInactive(this.inactiveUsers.length);
  }
}
