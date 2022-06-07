import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../providers/counter.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  providers: [CounterService],
})
export class SideNavComponent implements OnInit {
  constructor(public counterService: CounterService) {}

  ngOnInit(): void {}
}
