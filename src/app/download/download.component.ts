import { Component, OnInit } from '@angular/core';
import { DownloadService } from './download.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  constructor(public downloadService: DownloadService) { }

  ngOnInit() {
  }

}
