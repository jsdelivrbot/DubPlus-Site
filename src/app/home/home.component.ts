import { Component, OnInit } from '@angular/core';
import { DownloadService } from '../download/download.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public downloadService: DownloadService) { }

  ngOnInit() {
  }

}
