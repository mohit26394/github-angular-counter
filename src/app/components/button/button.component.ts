import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CounterService } from '../../providers/counter.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() count: number | null = 0;
  @Output() btnClicked = new EventEmitter<any>();

  constructor(public counterService: CounterService) {}

  ngOnInit(): void {}

  countBtnClicked(e: Event) {
    this.btnClicked.emit();
  }
}
