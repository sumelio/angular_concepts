import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];
  public counter = 0;


  constructor(private userService: UserService, private counterServ: CounterService) {
    this.counterServ.userSetToInactive.subscribe(
      (counter: number) => this.counter = counter
    ) ;
  }

  ngOnInit(): void {
    this.users = this.userService.inactiveUsers;
    this.counter = this.users.length;
  }

  onSetToInactive(id: number) {
    this.userService.setToInactive(id);
  }
}
