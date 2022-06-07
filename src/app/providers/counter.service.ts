import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  input = 0;

  btnClickCounter: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {}

  setValue() {
    this.input++;
    this.btnClickCounter.next(this.input);
  }
}
