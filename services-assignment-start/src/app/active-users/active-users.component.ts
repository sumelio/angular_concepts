import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];
  public counter = 0;


  constructor(private userService: UserService, private counterServ: CounterService) {
    this.counterServ.userSetToActive.subscribe(
      (counter: number) => this.counter = counter
    ) ;
  }

  ngOnInit(): void {
    this.users = this.userService.activeUsers;
    this.counter = this.users.length;
  }
  onSetToInactive(id: number) {
    this.userService.SetToActive(id);
  }
}
