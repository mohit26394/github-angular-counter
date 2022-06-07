import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../providers/counter.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  providers: [CounterService],
})
export class ContentComponent implements OnInit {
  constructor(public counterService: CounterService) {}

  ngOnInit(): void {}
}
