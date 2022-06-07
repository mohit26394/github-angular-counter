import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../providers/counter.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [CounterService],
})
export class ContentComponent implements OnInit {
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
