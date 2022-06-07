import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../providers/counter.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  providers: [CounterService],
})
export class SideNavComponent implements OnInit {
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
