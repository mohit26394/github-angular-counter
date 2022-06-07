import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../providers/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [CounterService],
})
export class HeaderComponent implements OnInit {
  constructor(public counterService: CounterService) {}

  ngOnInit(): void {}
}
