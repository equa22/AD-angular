import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()

export class UsersService {
	activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
/*
  @Output() activeSetToInactive = new EventEmitter<string>();
  @Output() inactiveSetToActive = new EventEmitter<string>();*/

  constructor(private counter: CounterService) {};

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counter.activeToInactive++;
    console.log(this.counter);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counter.inactiveToActive++;
  }
}