import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../providers/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [CounterService],
})
export class HeaderComponent implements OnInit {
  count: number = 0;
  constructor(public counterService: CounterService) {}

  ngOnInit(): void {}

  onBtnClick() {
    this.counterService.setValue();
    this.counterService.btnClickCounter.subscribe((res) => {
      this.count = res;
    });
  }
}
