import { Component, OnInit } from '@angular/core';
import { Collapse } from 'fuel-ui';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [Collapse(350)]
})
export class HeaderComponent implements OnInit {

  navbarOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
