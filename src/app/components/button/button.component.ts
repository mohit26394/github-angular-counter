import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../../providers/counter.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor(public counterService: CounterService) {}

  ngOnInit(): void {}

  countBtnClicked(e: Event) {
    e.stopPropagation;
    this.counterService.setValue();
  }
}
